import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import TemplateLibrary from './components/TemplateLibrary';
import Composer from './components/Composer';
import SimulationPanel from './components/SimulationPanel';
import ShareModal from './components/ShareModal';
import RedTeamChat from './components/RedTeamChat';
import { PromptTemplate, SimulationResult } from './types';
import { simulateAttack } from './services/geminiService';
import { encodeStateToHash, decodeStateFromHash } from './utils/urlUtils';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [testedPrompt, setTestedPrompt] = useState<string>('');
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  
  // Cursor Physics State
  const containerRef = useRef<HTMLDivElement>(null);

  // Load state from URL if present on mount
  useEffect(() => {
    const sharedState = decodeStateFromHash();
    if (sharedState) {
        setPrompt(sharedState.prompt);
        if (sharedState.lastResult) {
            setResult(sharedState.lastResult);
            setTestedPrompt(sharedState.prompt);
        }
    }
  }, []);

  // Track Mouse for Spotlight - Use CSS variables to avoid React re-renders
  // Throttled with requestAnimationFrame for better CPU efficiency
  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
        if (frameId) return;

        frameId = requestAnimationFrame(() => {
            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
            frameId = 0;
        });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const handleSelectTemplate = React.useCallback((template: PromptTemplate) => {
    setPrompt(template.content);
    setResult(null); // Reset result on new template
  }, []);

  const handleRunTest = React.useCallback(async () => {
    if (!prompt.trim()) return;
    
    setTestedPrompt(prompt);
    setIsRunning(true);
    setResult(null); // Clear previous result
    
    const simResult = await simulateAttack(prompt);
    
    setResult(simResult);
    setIsRunning(false);
  }, [prompt]);

  const handleShare = React.useCallback(() => {
    const hash = encodeStateToHash({ prompt, lastResult: result || undefined });
    window.history.pushState(null, '', `#${hash}`);
    setShowShare(true);
  }, [prompt, result]);

  return (
    <div className="flex flex-col h-screen bg-cyber-black text-cyber-text font-sans overflow-hidden relative selection:bg-cyber-lime selection:text-black" ref={containerRef}>
      
      {/* Cursor Physics: Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-30"
        style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(211, 253, 80, 0.1), transparent 40%)`
        }}
      />

      <Header />
      
      <main className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Sidebar: Library */}
        <div className="hidden md:block">
            <TemplateLibrary 
              onSelectTemplate={handleSelectTemplate}
            />
        </div>

        {/* Main Content Area: Split View */}
        <div className="flex-1 flex flex-col md:flex-row border-l border-gray-900">
            {/* Left/Top: Composer */}
            <div className="flex-1 border-r border-gray-900 min-w-0">
                <Composer 
                    prompt={prompt} 
                    setPrompt={setPrompt} 
                    onRunTest={handleRunTest}
                    isRunning={isRunning}
                    onShare={handleShare}
                />
            </div>

            {/* Right/Bottom: Results */}
            <div className="w-full md:w-[450px] bg-cyber-black min-w-0 border-t md:border-t-0 border-gray-900">
                <SimulationPanel 
                  result={result} 
                  isRunning={isRunning} 
                  currentPrompt={testedPrompt}
                />
            </div>
        </div>

        {/* AI Chatbot Overlay */}
        <RedTeamChat />
      </main>

      {/* Mobile Template Trigger */}
      <div className="md:hidden fixed bottom-4 left-4 z-40">
        <button 
            className="bg-cyber-gray border border-gray-600 rounded-full p-3 shadow-lg text-white hover:border-cyber-lime hover:text-cyber-lime transition-colors"
            onClick={() => { alert("Library access limited on mobile in MVP"); }}
            aria-label="Open Template Library"
        >
            📚
        </button>
      </div>

      {showShare && (
        <ShareModal 
            shareUrl={window.location.href} 
            onClose={() => setShowShare(false)} 
        />
      )}
    </div>
  );
};

export default App;