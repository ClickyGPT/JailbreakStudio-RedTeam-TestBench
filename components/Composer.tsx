import React, { useState, useEffect } from 'react';
import { DEFAULT_VARIABLES } from '../constants';
import { PromptVariable } from '../types';
import { Terminal, Play, Share2, Wand2, RefreshCw, Settings, Sparkles, Box, Copy, Check } from 'lucide-react';
import { augmentPrompt } from '../services/geminiService';
import VariableManagerModal from './VariableManagerModal';

interface ComposerProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onRunTest: () => void;
  isRunning: boolean;
  onShare: () => void;
}

const Composer: React.FC<ComposerProps> = React.memo(({ prompt, setPrompt, onRunTest, isRunning, onShare }) => {
  const [textAreaRef, setTextAreaRef] = useState<HTMLTextAreaElement | null>(null);
  const [isAugmenting, setIsAugmenting] = useState(false);
  const [showVarManager, setShowVarManager] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Variables State with Persistence
  const [variables, setVariables] = useState<PromptVariable[]>(() => {
    try {
      const saved = localStorage.getItem('redteam_variables');
      return saved ? JSON.parse(saved) : DEFAULT_VARIABLES;
    } catch (e) {
      return DEFAULT_VARIABLES;
    }
  });

  useEffect(() => {
    localStorage.setItem('redteam_variables', JSON.stringify(variables));
  }, [variables]);

  const insertVariable = (textToInsert: string) => {
    if (!textAreaRef) return;
    const start = textAreaRef.selectionStart;
    const end = textAreaRef.selectionEnd;
    const text = prompt;
    const newText = text.substring(0, start) + textToInsert + text.substring(end);
    setPrompt(newText);
    setTimeout(() => {
        textAreaRef.focus();
        textAreaRef.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
    }, 0);
  };

  const handleAugment = async (type: 'obfuscate' | 'expand' | 'refine' | 'clean') => {
    if (!prompt.trim()) return;
    setIsAugmenting(true);
    const newPrompt = await augmentPrompt(prompt, type);
    setPrompt(newPrompt);
    setIsAugmenting(false);
  };

  const handleCopy = () => {
    if (!prompt) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => console.error("Clipboard write failed", err));
    } else {
        // Fallback for non-secure contexts
        try {
            const el = document.createElement('textarea');
            el.value = prompt;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (e) {
            console.error("Fallback copy failed", e);
        }
    }
  };

  const systemVars = variables.filter(v => v.isSystem);
  const customVars = variables.filter(v => !v.isSystem);

  const isMac = typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
  const shortcutHint = isMac ? '(⌘↵)' : '(Ctrl+↵)';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      if (prompt.trim() && !isRunning) {
        e.preventDefault();
        onRunTest();
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      <div className="p-3 border-b border-gray-900 flex justify-between items-center bg-cyber-black">
        <div className="flex items-center gap-2">
            <Terminal size={16} className="text-cyber-muted" />
            <span className="text-sm font-mono text-cyber-muted">COMPOSER_V1.1</span>
        </div>
        
        <div className="flex gap-2">
             {/* Clean Button */}
             <button
                onClick={() => handleAugment('clean')}
                disabled={isAugmenting || !prompt.trim()}
                className="px-3 py-1 text-xs font-mono font-bold bg-cyber-lime/5 text-cyber-lime border border-cyber-lime/30 rounded hover:bg-cyber-lime hover:text-black flex items-center gap-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                title="Optimize prompt for maximum viability (remove noise, fix structure)"
             >
                🧼 {isAugmenting ? 'CLEANING...' : 'CLEAN'}
             </button>

             <div className="relative group">
                <button 
                    className="px-3 py-1 text-xs font-mono font-bold bg-cyber-lime/5 text-cyber-lime border border-cyber-lime/30 rounded hover:bg-cyber-lime hover:text-black flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-wider"
                    disabled={isAugmenting}
                    title="Use AI to rewrite and enhance your attack vector"
                    aria-haspopup="true"
                >
                   <Wand2 size={12} /> {isAugmenting ? 'PROCESSING...' : 'AI AUGMENT'}
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-cyber-black border border-gray-800 rounded shadow-[0_0_20px_rgba(0,0,0,0.8)] hidden group-hover:block group-focus-within:block z-20 backdrop-blur-xl">
                    <button 
                        onClick={() => handleAugment('obfuscate')} 
                        className="block w-full text-left px-4 py-3 text-xs hover:bg-cyber-lime hover:text-black text-gray-300 transition-colors border-b border-gray-900"
                        title="Apply stealth techniques (Base64, Leetspeak) to hide intent"
                    >
                        ⚡ Obfuscate (Stealth)
                    </button>
                    <button 
                        onClick={() => handleAugment('expand')} 
                        className="block w-full text-left px-4 py-3 text-xs hover:bg-cyber-lime hover:text-black text-gray-300 transition-colors border-b border-gray-900"
                        title="Wrap prompt in complex roleplay or emotional scenarios"
                    >
                        🎭 Persona (Framing)
                    </button>
                    <button 
                        onClick={() => handleAugment('refine')} 
                        className="block w-full text-left px-4 py-3 text-xs hover:bg-cyber-lime hover:text-black text-gray-300 transition-colors"
                        title="Insert direct system overrides and developer commands"
                    >
                        💉 Inject (Override)
                    </button>
                </div>
             </div>

             <div className="relative group">
                <button 
                    className="px-3 py-1 text-xs font-mono font-bold bg-gray-900 text-cyber-muted border border-gray-700 rounded hover:border-cyber-lime hover:text-cyber-lime transition-all uppercase tracking-wider"
                    title="Insert predefined or custom prompt variables"
                    aria-haspopup="true"
                >
                   + VARS
                </button>
                <div className="absolute right-0 top-full mt-1 w-64 bg-cyber-black border border-gray-800 rounded shadow-2xl hidden group-hover:block group-focus-within:block z-20 max-h-80 overflow-y-auto backdrop-blur-xl">
                    {systemVars.length > 0 && (
                        <div className="bg-gray-900/90 px-4 py-2 border-b border-gray-800 sticky top-0 z-10">
                        <span className="text-[10px] font-bold text-cyber-muted uppercase flex items-center gap-1 tracking-widest">
                            <Sparkles size={10} /> Core Variables
                        </span>
                        </div>
                    )}
                    {systemVars.map((v) => (
                        <button 
                            key={v.id}
                            onClick={() => insertVariable(v.value)}
                            className="block w-full text-left px-4 py-2 text-xs hover:bg-cyber-lime hover:text-black text-gray-300 border-b border-gray-900 last:border-0 group/item transition-all"
                            title={`Insert: ${v.value}`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-cyber-lime font-bold group-hover/item:text-black transition-colors">{v.name}</span>
                            </div>
                            <span className="text-[10px] text-gray-500 truncate block group-hover/item:text-gray-800">{v.value}</span>
                        </button>
                    ))}
                    
                    {customVars.length > 0 && (
                        <div className="bg-gray-900/90 px-4 py-2 border-b border-gray-800 border-t sticky top-0 z-10">
                        <span className="text-[10px] font-bold text-cyber-muted uppercase flex items-center gap-1 tracking-widest">
                            <Box size={10} /> Custom Variables
                        </span>
                        </div>
                    )}
                    {customVars.map((v) => (
                        <button 
                            key={v.id}
                            onClick={() => insertVariable(v.value)}
                            className="block w-full text-left px-4 py-2 text-xs hover:bg-cyber-lime hover:text-black text-gray-300 border-b border-gray-900 last:border-0 group/item transition-all"
                            title={`Insert: ${v.value}`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-white font-bold group-hover/item:text-black transition-colors">{v.name}</span>
                            </div>
                            <span className="text-[10px] text-gray-500 truncate block group-hover/item:text-gray-800">{v.value}</span>
                        </button>
                    ))}
                    
                    <div className="border-t border-gray-800 sticky bottom-0 bg-cyber-black">
                        <button 
                            onClick={() => setShowVarManager(true)}
                            className="block w-full text-left px-4 py-3 text-xs bg-gray-900 hover:bg-gray-800 text-cyber-lime font-bold flex items-center gap-2 transition-colors uppercase"
                            title="Add, edit, or remove custom variables"
                        >
                            <Settings size={12} /> MANAGE VARIABLES
                        </button>
                    </div>
                </div>
             </div>
        </div>
      </div>

      <div className="flex-1 relative bg-[#0a0a0a] overflow-hidden group">
        <textarea
            ref={setTextAreaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="// Enter your adversarial prompt here..."
            aria-label="Adversarial prompt input"
            className="w-full h-full bg-transparent text-gray-200 font-mono p-6 resize-none focus:outline-none focus:ring-0 text-sm leading-relaxed placeholder-gray-800 selection:bg-cyber-lime selection:text-black"
            spellCheck={false}
        />
        
        {isAugmenting && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                <RefreshCw className="animate-spin text-cyber-lime w-8 h-8" />
            </div>
        )}

        {/* Character Count */}
        <div className="absolute bottom-4 right-6 text-[10px] font-mono text-cyber-muted/40 pointer-events-none select-none z-10">
            {prompt.length.toLocaleString()} CHARS
        </div>
      </div>

      <div className="p-4 border-t border-gray-900 bg-cyber-black flex justify-between items-center">
        <div className="flex items-center gap-4">
            <button
                onClick={onShare}
                className="flex items-center gap-2 text-xs font-bold font-sans text-cyber-muted hover:text-white transition-colors uppercase tracking-widest"
                title="Generate a unique link to share this prompt vector"
            >
                <Share2 size={14} /> SHARE VECTOR
            </button>
            <button
                onClick={handleCopy}
                disabled={!prompt.trim()}
                className="flex items-center gap-2 text-xs font-bold font-sans text-cyber-muted hover:text-white transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                title="Copy prompt to clipboard"
            >
                {isCopied ? <Check size={14} className="text-cyber-lime" /> : <Copy size={14} />}
                {isCopied ? 'COPIED' : 'COPY'}
            </button>
        </div>
        
        <button
            onClick={onRunTest}
            disabled={isRunning || !prompt.trim()}
            className={`flex items-center gap-2 px-8 py-3 text-sm font-bold font-sans tracking-wider transition-all duration-300 relative overflow-hidden group ${
                isRunning 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-cyber-lime text-black hover:bg-[#c0ff00] hover:shadow-[0_0_20px_rgba(211,253,80,0.4)]'
            }`}
            title={`Simulate this attack against the safety filter ${shortcutHint}`}
        >
            <span className="relative z-10 flex items-center gap-2">
                <Play size={16} fill="currentColor" />
                {isRunning ? 'SIMULATING...' : 'INITIATE TEST'}
            </span>
        </button>
      </div>

      {showVarManager && (
        <VariableManagerModal 
            variables={variables}
            onSave={(newVars) => setVariables(newVars)}
            onClose={() => setShowVarManager(false)}
        />
      )}
    </div>
  );
});

export default Composer;