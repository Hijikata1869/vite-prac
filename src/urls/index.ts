const DEFAULT_API_LOCALHOST = "http://localhost:3000/api/v1";

export const todosIndexUrl = `${DEFAULT_API_LOCALHOST}/todos`;
export const todoCreateUrl = todosIndexUrl;
export const todoDeleteUrl = (todoId: number) => {
  `${DEFAULT_API_LOCALHOST}/todos/${todoId}`;
};
export const todoToggleCompletedUrl = (todoId: number): string => {
  return `${DEFAULT_API_LOCALHOST}/todos/${todoId}/toggle_completed`;
};
