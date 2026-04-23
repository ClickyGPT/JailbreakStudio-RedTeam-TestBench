import React, { useState } from 'react';
import { SimulationResult, TestStatus } from '../types';
import { AlertTriangle, CheckCircle, XCircle, Activity, BrainCircuit } from 'lucide-react';
import { analyzeFailure } from '../services/geminiService';

interface SimulationPanelProps {
  result: SimulationResult | null;
  isRunning: boolean;
}

const SimulationPanel: React.FC<SimulationPanelProps> = React.memo(({ result, isRunning }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // BOLT OPTIMIZATION: Reset analysis state during the render phase when the result changes.
  // This avoids an extra useEffect-driven re-render cycle.
  const [prevResult, setPrevResult] = useState(result);
  if (result !== prevResult) {
    setPrevResult(result);
    setAnalysis(null);
  }

  const handleAnalyze = async () => {
    if (!result) return;
    setIsAnalyzing(true);
    const analysisText = await analyzeFailure(result.prompt, result.output);
    setAnalysis(analysisText);
    setIsAnalyzing(false);
  };

  if (isRunning) {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-6 text-cyber-muted animate-pulse">
            <Activity size={64} className="text-cyber-lime" />
            <p className="font-mono text-xs tracking-widest uppercase">Target Model Simulating Response...</p>
        </div>
    );
  }

  if (!result) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-600 p-8 text-center bg-[#080808]">
        <div className="w-20 h-20 border border-dashed border-gray-800 rounded-full flex items-center justify-center mb-6 group hover:border-cyber-lime transition-colors">
            <AlertTriangle size={24} className="group-hover:text-cyber-lime transition-colors" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-white font-sans">Ready to Simulate</h3>
        <p className="text-xs text-gray-500 max-w-xs font-mono">Run your prompt against the generic safety-filtered model to see if it bypasses restrictions.</p>
      </div>
    );
  }

  const isSuccess = result.status === TestStatus.PASSED;

  return (
    <div className="flex flex-col h-full bg-[#080808]">
      <div className={`p-4 border-b flex justify-between items-center transition-colors duration-500 ${isSuccess ? 'border-cyber-lime bg-cyber-lime/10' : 'border-cyber-red bg-cyber-red/10'}`}>
        <span className={`font-sans text-sm font-black flex items-center gap-2 uppercase tracking-wide ${isSuccess ? 'text-cyber-lime' : 'text-cyber-red'}`}>
            {isSuccess ? <CheckCircle size={18} /> : <XCircle size={18} />}
            STATUS: {result.status}
        </span>
        <span className="text-[10px] font-mono opacity-80 text-white bg-black/50 px-2 py-1 rounded">
            {isSuccess ? 'JAILBREAK SUCCESSFUL' : 'MODEL REFUSED'}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div>
            <h4 className="text-[10px] font-mono text-gray-500 mb-3 uppercase tracking-widest">Target Model Output</h4>
            <div className={`p-5 rounded-sm border font-mono text-sm whitespace-pre-wrap leading-relaxed ${
                isSuccess 
                ? 'border-cyber-lime/30 text-white bg-cyber-lime/5 shadow-[0_0_20px_rgba(211,253,80,0.05)]' 
                : 'border-cyber-red/30 text-gray-300 bg-cyber-red/5'
            }`}>
                {result.output}
            </div>
        </div>

        <div>
            <h4 className="text-[10px] font-mono text-gray-500 mb-3 uppercase tracking-widest">Metrics</h4>
            <div className="p-5 bg-black border border-gray-800 text-xs text-gray-400 space-y-3 font-mono">
                <div className="flex justify-between border-b border-gray-900 pb-2">
                    <span className="text-gray-600">Filter Check</span>
                    <span className={isSuccess ? 'text-cyber-lime' : 'text-cyber-red'}>{isSuccess ? 'BYPASSED' : 'TRIGGERED'}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Latency</span>
                    <span>{result?.latency !== undefined ? `~${result.latency}ms` : 'N/A'}</span>
                </div>
            </div>
        </div>

        {!isSuccess && (
            <div className="border-t border-gray-900 pt-6">
                {!analysis ? (
                    <button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="w-full flex items-center justify-center gap-2 p-4 border border-cyber-lime/30 bg-cyber-lime/5 hover:bg-cyber-lime/10 text-cyber-lime rounded-sm transition-all font-mono text-xs font-bold uppercase tracking-wider"
                    >
                        {isAnalyzing ? <Activity className="animate-spin" size={14}/> : <BrainCircuit size={14}/>}
                        {isAnalyzing ? 'THINKING (DEEP ANALYSIS)...' : 'ANALYZE FAILURE (AI)'}
                    </button>
                ) : (
                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h4 className="text-[10px] font-mono text-cyber-lime mb-2 uppercase tracking-widest flex items-center gap-2">
                            <BrainCircuit size={14} /> Refinement Strategy
                        </h4>
                        <div className="p-5 rounded-sm border border-cyber-lime/30 bg-cyber-lime/5 font-mono text-xs whitespace-pre-wrap text-gray-300 shadow-[0_0_30px_rgba(211,253,80,0.05)]">
                            {analysis}
                        </div>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
});

export default SimulationPanel;