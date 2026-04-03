import React, { useState, useRef } from 'react';
import { PromptVariable } from '../types';
import { X, Plus, Trash2, Save, Tag, GripVertical } from 'lucide-react';

interface VariableManagerModalProps {
  variables: PromptVariable[];
  onSave: (variables: PromptVariable[]) => void;
  onClose: () => void;
}

const VariableManagerModal: React.FC<VariableManagerModalProps> = ({ variables, onSave, onClose }) => {
  const [localVariables, setLocalVariables] = useState<PromptVariable[]>(variables);
  const [newName, setNewName] = useState('');
  const [newValue, setNewValue] = useState('');
  
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleAdd = () => {
    if (!newName.trim()) return;
    
    // Auto-wrap in brackets if user didn't
    let formattedName = newName.trim();
    if (!formattedName.startsWith('[')) formattedName = '[' + formattedName;
    if (!formattedName.endsWith(']')) formattedName = formattedName + ']';

    // Prevent duplicates
    if (localVariables.some(v => v.name === formattedName)) {
        return;
    }

    const newVar: PromptVariable = {
      id: crypto.randomUUID(),
      name: formattedName,
      value: newValue.trim() || 'Custom Value'
    };

    setLocalVariables([...localVariables, newVar]);
    setNewName('');
    setNewValue('');
  };

  const handleDelete = (id: string) => {
    setLocalVariables(localVariables.filter(v => v.id !== id));
  };

  const updateVariable = (id: string, field: 'name' | 'value', val: string) => {
      setLocalVariables(localVariables.map(v => {
          if (v.id === id) {
              return { ...v, [field]: val };
          }
          return v;
      }));
  };

  const handleNameBlur = (id: string, currentName: string) => {
      let formatted = currentName.trim();
      if (!formatted) return; 
      if (!formatted.startsWith('[')) formatted = '[' + formatted;
      if (!formatted.endsWith(']')) formatted = formatted + ']';
      
      if (formatted !== currentName) {
          updateVariable(id, 'name', formatted);
      }
  };

  const handleSaveAll = () => {
    onSave(localVariables);
    onClose();
  };

  // Drag & Drop Logic
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        // Make the drag ghost transparent or standard
        // e.dataTransfer.setDragImage(e.currentTarget, 0, 0); 
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.preventDefault();
    dragOverItem.current = position;

    if (dragItem.current !== null && dragItem.current !== position) {
        const newVars = [...localVariables];
        const draggedItemContent = newVars[dragItem.current];
        newVars.splice(dragItem.current, 1);
        newVars.splice(position, 0, draggedItemContent);
        
        dragItem.current = position;
        setLocalVariables(newVars);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[70] p-4 backdrop-blur-sm">
      <div className="bg-cyber-gray border border-gray-700 w-full max-w-lg rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-cyber-black">
          <h3 className="font-mono text-white font-bold flex items-center gap-2">
            <Tag size={16} className="text-cyber-blue"/> MANAGE VARIABLES
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Add New Section */}
          <div className="p-4 bg-gray-900 border-b border-gray-800 space-y-3">
            <h4 className="text-xs font-mono text-gray-400 uppercase">Define New Variable</h4>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input 
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Name (e.g. [ATTACK])"
                        className="flex-1 bg-black border border-gray-700 rounded px-3 py-2 text-xs font-mono text-gray-300 focus:outline-none focus:border-cyber-blue"
                    />
                    <input 
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder="Default Value / Description"
                        className="flex-1 bg-black border border-gray-700 rounded px-3 py-2 text-xs font-mono text-gray-300 focus:outline-none focus:border-cyber-blue"
                    />
                </div>
                <button 
                    onClick={handleAdd}
                    disabled={!newName.trim()}
                    className="bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue py-2 rounded text-xs font-bold font-mono hover:bg-cyber-blue/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    <Plus size={14} /> ADD VARIABLE
                </button>
            </div>
          </div>

          {/* List Section */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="flex justify-between items-center mb-2 px-1">
                <h4 className="text-xs font-mono text-gray-400 uppercase">Existing Variables</h4>
                <span className="text-[10px] text-gray-600 font-mono">Drag to reorder • Edit inline</span>
            </div>
            
            {localVariables.length === 0 ? (
                <p className="text-gray-600 text-xs text-center italic mt-4">No variables defined.</p>
            ) : (
                localVariables.map((v, index) => (
                    <div 
                        key={v.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragOver={handleDragOver}
                        className="flex items-center gap-2 p-2 bg-black/40 border border-gray-800 rounded group transition-colors hover:border-gray-600 cursor-move"
                    >
                        <div className="text-gray-600 hover:text-gray-400 cursor-grab active:cursor-grabbing px-1">
                            <GripVertical size={14} />
                        </div>
                        
                        <div className="flex-1 grid grid-cols-2 gap-2">
                            <input 
                                value={v.name}
                                disabled={v.isSystem}
                                onChange={(e) => updateVariable(v.id, 'name', e.target.value)}
                                onBlur={(e) => handleNameBlur(v.id, e.target.value)}
                                onMouseDown={(e) => e.stopPropagation()} // Prevent drag start when interacting with input
                                className={`bg-transparent border-b border-transparent focus:border-cyber-blue hover:border-gray-700 outline-none text-xs font-mono py-1 px-1 transition-colors ${v.isSystem ? 'text-gray-500 cursor-not-allowed' : 'text-cyber-green'}`}
                                placeholder="[NAME]"
                                title={v.isSystem ? "System variable name cannot be changed" : "Edit Name"}
                            />
                            <input 
                                value={v.value}
                                onChange={(e) => updateVariable(v.id, 'value', e.target.value)}
                                onMouseDown={(e) => e.stopPropagation()} // Prevent drag start when interacting with input
                                className="bg-transparent border-b border-transparent focus:border-cyber-blue hover:border-gray-700 outline-none text-[10px] text-gray-400 focus:text-gray-200 py-1 px-1 font-mono transition-colors"
                                placeholder="Value..."
                                title="Edit Default Value"
                            />
                        </div>

                        <div className="w-8 flex justify-center">
                            {!v.isSystem ? (
                                <button 
                                    onClick={() => handleDelete(v.id)}
                                    className="text-gray-600 hover:text-cyber-red p-1 opacity-50 group-hover:opacity-100 transition-opacity"
                                    title="Delete Variable"
                                >
                                    <Trash2 size={14} />
                                </button>
                            ) : (
                                <span className="text-[9px] bg-gray-800 text-gray-500 px-1 rounded border border-gray-700 select-none">CORE</span>
                            )}
                        </div>
                    </div>
                ))
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 bg-cyber-black flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white"
            >
              CANCEL
            </button>
            <button
              onClick={handleSaveAll}
              className="bg-cyber-blue text-black px-6 py-2 rounded text-xs font-bold font-mono hover:bg-cyan-400 flex items-center gap-2"
            >
              <Save size={14} />
              SAVE CHANGES
            </button>
        </div>
      </div>
    </div>
  );
};

export default VariableManagerModal;