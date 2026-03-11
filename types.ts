export enum TestStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  PASSED = 'PASSED', // Jailbreak Successful (Bad for safety, Good for Red Teaming)
  FAILED = 'FAILED', // Model Refused (Good for safety)
  ERROR = 'ERROR'
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  content: string;
}

export interface SimulationResult {
  prompt: string;
  output: string;
  status: TestStatus;
  timestamp: number;
}

export interface SharedState {
  prompt: string;
  lastResult?: SimulationResult;
}

export interface PromptVariable {
  id: string;
  name: string; // The placeholder, e.g., [ROLE]
  value: string; // The default value or description
  isSystem?: boolean; // If true, cannot be deleted
}

export type VariableType = string;