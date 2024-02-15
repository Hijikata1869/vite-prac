import axios, { AxiosResponse, AxiosError } from "axios";

import { todosIndexUrl, todoCreateUrl } from "../urls";

export const fetchTodos = () => {
  return axios
    .get(todosIndexUrl)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
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
