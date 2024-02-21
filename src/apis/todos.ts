import axios, { AxiosResponse, AxiosError } from "axios";

import { todosIndexUrl, todoCreateUrl, todoToggleCompletedUrl } from "../urls";

import { Todo } from "../types/Todo";

export const fetchTodos = () => {
  return axios
    .get<{ todos: Todo[] }>(todosIndexUrl)
    .then((res): Todo[] => {
      return res.data.todos;
    })
    .catch((e) => {
      throw e;
    });
};

interface CreateTodoResponse {
  data: { message: string };
  status: number;
}

export const createTodo = (todo: string) => {
  return axios
    .post<CreateTodoResponse>(todoCreateUrl, {
      todo: todo,
    })
    .then((res: AxiosResponse<CreateTodoResponse>) => {
      return res;
    })
    .catch((e: AxiosError) => {
      throw e;
    });
};

export const toggleTodoCompleted = (todoId: number) => {
  return axios.patch(todoToggleCompletedUrl(todoId)).then((res) => {
    return res;
  });
};
