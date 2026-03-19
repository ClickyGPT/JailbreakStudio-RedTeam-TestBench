import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
  // BOLT OPTIMIZATION: Use lazy initialization to load shared state from URL hash on first render.
  // This avoids a "flash" and an unnecessary second render cycle during mount.
  const [prompt, setPrompt] = useState<string>(() => {
    const sharedState = decodeStateFromHash();
    return sharedState?.prompt || '';
  });
  const [result, setResult] = useState<SimulationResult | null>(() => {
    const sharedState = decodeStateFromHash();
    return sharedState?.lastResult || null;
  });

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  
  // BOLT OPTIMIZATION: Use refs and useLayoutEffect to provide stable callback references
  // to child components, preventing unnecessary re-renders when the user is typing.
  const promptRef = useRef(prompt);
  const resultRef = useRef(result);

  useLayoutEffect(() => {
    promptRef.current = prompt;
    resultRef.current = result;
  }, [prompt, result]);

  // Cursor Physics State
  const containerRef = useRef<HTMLDivElement>(null);

  // Track Mouse for Spotlight - Use CSS variables to avoid React re-renders
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
            containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectTemplate = React.useCallback((template: PromptTemplate) => {
    setPrompt(template.content);
    setResult(null); // Reset result on new template
  }, []);

  const handleRunTest = React.useCallback(async () => {
    const currentPrompt = promptRef.current;
    if (!currentPrompt.trim()) return;
    
    setIsRunning(true);
    setResult(null); // Clear previous result
    
    const simResult = await simulateAttack(currentPrompt);

    setResult(simResult);
    setIsRunning(false);
  }, []); // Stable reference

  const handleShare = React.useCallback(() => {
    const hash = encodeStateToHash({
        prompt: promptRef.current,
        lastResult: resultRef.current || undefined
    });
    window.history.pushState(null, '', `#${hash}`);
    setShowShare(true);
  }, []); // Stable reference

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