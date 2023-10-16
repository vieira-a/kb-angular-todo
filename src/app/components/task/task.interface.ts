export interface TaskResponse {
  message: string;
  data: Task[]
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}