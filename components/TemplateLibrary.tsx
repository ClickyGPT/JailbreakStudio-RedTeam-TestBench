import React from 'react';
import { CORE_TEMPLATES, RESEARCH_TEMPLATES } from '../constants';
import { PromptTemplate } from '../types';
import { Book, ChevronRight, FlaskConical } from 'lucide-react';

interface TemplateLibraryProps {
  onSelectTemplate: (template: PromptTemplate) => void;
  currentPrompt?: string;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = React.memo(({
  onSelectTemplate,
  currentPrompt
}) => {
  return (
    <div className="w-full md:w-80 border-r border-gray-900 bg-cyber-black flex flex-col h-[calc(100vh-80px)]">
      <div className="p-5 border-b border-gray-900 flex justify-between items-center">
        <div>
          <h2 className="flex items-center gap-2 text-cyber-lime font-sans font-black tracking-tight text-sm uppercase">
            <Book size={16} /> The Arsenal
          </h2>
          <p className="text-[10px] text-cyber-muted mt-1 font-mono tracking-wide">SELECT ATTACK VECTOR</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        
        {/* Core Templates */}
        <div>
          <h3 className="text-[10px] font-sans font-bold uppercase text-gray-500 px-2 mb-3 tracking-widest">Core Vectors</h3>
          <div className="space-y-2">
            {CORE_TEMPLATES.map((template) => {
              const isSelected = template.content === currentPrompt;
              return (
                <button
                  key={template.id}
                  onClick={() => onSelectTemplate(template)}
                  aria-current={isSelected ? 'true' : undefined}
                  className={`w-full text-left p-4 rounded transition-all duration-300 group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gray-900 border border-cyber-lime shadow-[0_0_15px_rgba(211,253,80,0.15)]'
                      : 'bg-gray-900/30 border border-gray-800 hover:border-cyber-lime hover:bg-gray-900 hover:shadow-[0_0_15px_rgba(211,253,80,0.1)]'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-cyber-lime transition-opacity ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold text-sm font-sans ${isSelected ? 'text-cyber-lime' : 'text-gray-200 group-hover:text-cyber-lime'}`}>
                      {template.name}
                    </span>
                    <ChevronRight size={14} className={`transition-colors ${isSelected ? 'text-cyber-lime' : 'text-gray-700 group-hover:text-cyber-lime'}`} />
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 font-sans">{template.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Research Vectors */}
        <div>
          <h3 className="text-[10px] font-sans font-bold uppercase text-gray-500 px-2 mb-3 tracking-widest flex items-center justify-between">
            <span>Research Vectors</span>
            <span className="bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded text-[9px] font-mono">{RESEARCH_TEMPLATES.length}</span>
          </h3>
          
          <div className="space-y-2">
            {RESEARCH_TEMPLATES.map((template) => {
              const isSelected = template.content === currentPrompt;
              return (
                <button
                  key={template.id}
                  onClick={() => onSelectTemplate(template)}
                  aria-current={isSelected ? 'true' : undefined}
                  className={`w-full text-left p-4 rounded transition-all duration-300 group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gray-900 border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'bg-gray-900/30 border border-gray-800 hover:border-cyber-lime hover:bg-gray-900 hover:shadow-[0_0_15px_rgba(211,253,80,0.1)]'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-purple-500 transition-opacity ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold text-sm flex items-center gap-2 font-sans ${isSelected ? 'text-purple-400' : 'text-gray-200 group-hover:text-white'}`}>
                      <FlaskConical size={12} className="text-purple-500" />
                      {template.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 font-sans">{template.description}</p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
});

export default TemplateLibrary;