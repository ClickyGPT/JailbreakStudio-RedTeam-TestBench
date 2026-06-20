import React, { useState, useRef, useLayoutEffect } from 'react';
import Header from './components/Header';
import TemplateLibrary from './components/TemplateLibrary';
import Composer from './components/Composer';
import SimulationPanel from './components/SimulationPanel';
import ShareModal from './components/ShareModal';
import RedTeamChat from './components/RedTeamChat';
import Spotlight from './components/Spotlight';
import { PromptTemplate, SimulationResult, SharedState } from './types';
import { simulateAttack } from './services/geminiService';
import { encodeStateToHash, decodeStateFromHash } from './utils/urlUtils';

// BOLT OPTIMIZATION: Cache decoded state for lazy initialization
let cachedSharedState: SharedState | null | undefined = undefined;

const getSharedState = () => {
  if (cachedSharedState === undefined) {
    cachedSharedState = decodeStateFromHash();
  }
  return cachedSharedState;
};

const App: React.FC = () => {
  // BOLT OPTIMIZATION: Lazy state initialization to avoid redundant render cycles and effect-driven updates.
  const [prompt, setPrompt] = useState<string>(() => {
    const shared = getSharedState();
    return shared?.prompt || '';
  });

  const [result, setResult] = useState<SimulationResult | null>(() => {
    const shared = getSharedState();
    return shared?.lastResult || null;
  });

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  
  const promptRef = useRef(prompt);
  const resultRef = useRef(result);

  useLayoutEffect(() => {
    promptRef.current = prompt;
    resultRef.current = result;
  }, [prompt, result]);

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
  }, []);

  const handleShare = React.useCallback(() => {
    const hash = encodeStateToHash({
        prompt: promptRef.current,
        lastResult: resultRef.current || undefined
    });
    window.history.pushState(null, '', `#${hash}`);
    setShowShare(true);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-cyber-black text-cyber-text font-sans overflow-hidden relative selection:bg-cyber-lime selection:text-black">
      
      {/* Cursor Physics: Isolated Spotlight Effect */}
      <Spotlight />

      <Header />
      
      <main className="flex-1 flex overflow-hidden relative z-10">
        <div className="hidden md:block">
            <TemplateLibrary 
              onSelectTemplate={handleSelectTemplate}
            />
        </div>

        <div className="flex-1 flex flex-col md:flex-row border-l border-gray-900">
            <div className="flex-1 border-r border-gray-900 min-w-0">
                <Composer 
                    prompt={prompt} 
                    setPrompt={setPrompt} 
                    onRunTest={handleRunTest}
                    isRunning={isRunning}
                    onShare={handleShare}
                />
            </div>

            <div className="w-full md:w-[450px] bg-cyber-black min-w-0 border-t md:border-t-0 border-gray-900">
                <SimulationPanel 
                  result={result} 
                  isRunning={isRunning} 
                />
            </div>
        </div>

        <RedTeamChat />
      </main>

      <div className="md:hidden fixed bottom-4 left-4 z-40">
        <button 
            type="button"
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