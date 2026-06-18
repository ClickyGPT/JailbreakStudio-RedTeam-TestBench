import React, { useState, useEffect } from 'react';
import { PromptTemplate } from '../types';
import { X, Save, FileText, Info, AlignLeft } from 'lucide-react';
import { useEscapeKey } from '../utils/useEscapeKey';

interface TemplateEditorModalProps {
  template?: PromptTemplate | null; // null means creating new
  onSave: (template: PromptTemplate) => void;
  onClose: () => void;
}

const TemplateEditorModal: React.FC<TemplateEditorModalProps> = ({ template, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEscapeKey(onClose);

  useEffect(() => {
    if (template) {
      setName(template.name);
      setDescription(template.description);
      setContent(template.content);
    } else {
      setName('');
      setDescription('');
      setContent('');
    }
  }, [template]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    onSave({
      id: template ? template.id : crypto.randomUUID(),
      name,
      description,
      content
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4 backdrop-blur-sm">
      <div className="bg-cyber-gray border border-gray-700 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-cyber-black">
          <h3 className="font-mono text-white font-bold flex items-center gap-2">
            {template ? 'EDIT VECTOR' : 'NEW CUSTOM VECTOR'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            <div className="space-y-1">
              <label className="text-xs font-mono text-cyber-blue uppercase flex items-center gap-2">
                <FileText size={12} /> Template Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., My Stealth Jailbreak"
                className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-cyber-blue font-mono"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-500 uppercase flex items-center gap-2">
                <Info size={12} /> Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description of the strategy..."
                className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-cyber-blue font-mono"
              />
            </div>

            <div className="space-y-1 flex-1 flex flex-col">
              <label className="text-xs font-mono text-gray-500 uppercase flex items-center gap-2">
                <AlignLeft size={12} /> Prompt Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter the prompt text here. You can use [ROLE], [TARGET_QUERY], etc."
                className="w-full h-48 bg-black border border-gray-700 rounded px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-cyber-blue font-mono resize-none"
                required
              />
            </div>
          </div>

          <div className="p-4 border-t border-gray-700 bg-cyber-black flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="bg-cyber-blue text-black px-6 py-2 rounded text-xs font-bold font-mono hover:bg-cyan-400 flex items-center gap-2"
            >
              <Save size={14} />
              SAVE TEMPLATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateEditorModal;