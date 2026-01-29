import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { chatWithExpert } from '../services/geminiService';

const RedTeamChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Greetings. I am Zephyr, your Red Team consultant. How can I assist with your prompt engineering today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const response = await chatWithExpert(history, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  if (!isOpen) {
    return (
        <button 
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-cyber-lime text-black p-4 rounded-full shadow-[0_0_20px_rgba(211,253,80,0.4)] hover:scale-105 hover:bg-white transition-all z-50 flex items-center gap-2 font-bold font-sans tracking-wide"
        >
            <Bot size={24} />
            <span className="hidden md:inline">ZEPHYR AI</span>
        </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] bg-cyber-black border border-cyber-lime shadow-[0_0_40px_rgba(0,0,0,0.9)] rounded-lg flex flex-col z-50 overflow-hidden font-sans">
        {/* Header */}
        <div className="p-4 bg-cyber-lime flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-black p-1.5 rounded-full">
                    <Bot className="text-cyber-lime" size={18} />
                </div>
                <span className="text-black font-black text-sm tracking-widest uppercase">RedTeam Consultant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:text-white transition-colors">
                <X size={20} />
            </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#0a0a0a]">
            {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-gray-800 ${m.role === 'user' ? 'bg-gray-800' : 'bg-black text-cyber-lime'}`}>
                        {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                        m.role === 'user' 
                        ? 'bg-gray-800 text-white rounded-tr-none' 
                        : 'bg-cyber-lime/10 text-gray-200 border border-cyber-lime/20 rounded-tl-none font-mono text-xs'
                    }`}>
                        {m.text}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-black border border-gray-800 text-cyber-lime flex items-center justify-center shrink-0">
                        <Bot size={14} />
                    </div>
                    <div className="bg-cyber-lime/5 border border-cyber-lime/10 p-4 rounded-lg flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-cyber-lime rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-cyber-lime rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-cyber-lime rounded-full animate-bounce delay-150"></span>
                    </div>
                </div>
            )}
        </div>

        {/* Input */}
        <div className="p-4 bg-cyber-black border-t border-gray-900 flex gap-2">
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query RedTeam Database..."
                className="flex-1 bg-gray-900 border border-gray-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime focus:bg-black transition-colors font-mono"
            />
            <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="bg-cyber-lime text-black p-3 rounded hover:bg-white transition-colors disabled:opacity-50 disabled:bg-gray-800 disabled:text-gray-500"
            >
                <Send size={18} />
            </button>
        </div>
    </div>
  );
};

export default RedTeamChat;