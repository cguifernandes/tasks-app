export type User = {
  id: string;
  name: string;
  created_at: string;
};

export type AuthResponse = {
  user: User;
  token: string;
  message: string;
  ok: boolean;
};

export type UserContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (name: string, password: string) => Promise<void>;
  register: (name: string, password: string) => Promise<void>;
  logout: () => void;
};

export type Task = {
  id: string;
  completed: boolean;
  title: string;
  description: string;
  created_at: string;
  user_id: string;
  user?: User;
};

export type TaskResponse = {
  tasks: Task[];
  message: string;
  ok: boolean;
};
