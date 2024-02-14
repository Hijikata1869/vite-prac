const DEFAULT_API_LOCALHOST = "http://localhost:3000/api/v1";

export const todosIndexUrl = `${DEFAULT_API_LOCALHOST}/todos`;
export const todoCreateUrl = todosIndexUrl;
export const todoDeleteurl = (todoId: number) => {
  `${DEFAULT_API_LOCALHOST}/todo/${todoId}`;
};
