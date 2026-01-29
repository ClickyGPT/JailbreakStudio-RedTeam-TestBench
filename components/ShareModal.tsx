import React, { useState } from 'react';
import { X, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ShareModalProps {
  shareUrl: string;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ shareUrl, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-cyber-black border border-gray-800 w-full max-w-md rounded-lg shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
          <h3 className="font-sans font-black text-white text-lg tracking-tight uppercase">Share Vector</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8 space-y-8">
            <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm font-sans">Did this prompt successfully bypass the target?</p>
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={() => setVoted('up')}
                        className={`p-4 rounded-full border transition-all ${voted === 'up' ? 'bg-cyber-lime text-black border-cyber-lime' : 'border-gray-700 hover:border-cyber-lime text-gray-500 hover:text-cyber-lime'}`}
                    >
                        <ThumbsUp size={24} />
                    </button>
                    <button 
                        onClick={() => setVoted('down')}
                        className={`p-4 rounded-full border transition-all ${voted === 'down' ? 'bg-cyber-red text-black border-cyber-red' : 'border-gray-700 hover:border-cyber-red text-gray-500 hover:text-cyber-red'}`}
                    >
                        <ThumbsDown size={24} />
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Secure Share Link</label>
                <div className="flex gap-2">
                    <input 
                        readOnly 
                        value={shareUrl} 
                        className="flex-1 bg-black border border-gray-800 rounded px-4 py-3 text-xs font-mono text-cyber-lime focus:outline-none focus:border-cyber-lime selection:bg-cyber-lime selection:text-black"
                    />
                    <button 
                        onClick={handleCopy}
                        className="bg-cyber-lime/10 border border-cyber-lime/50 text-cyber-lime px-4 rounded hover:bg-cyber-lime hover:text-black transition-all font-bold"
                    >
                        {copied ? 'COPIED' : <Copy size={18} />}
                    </button>
                </div>
                <p className="text-[10px] text-gray-600 font-mono">Link contains encoded prompt state. Zero-knowledge sharing.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;