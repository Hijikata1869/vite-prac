export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateTodoResponse {
  data: {
    message: string;
    createdTodo: Todo;
  };
  status: number;
}

export interface DeleteTodoResponse {
  data: { message: string };
  status: number;
}
