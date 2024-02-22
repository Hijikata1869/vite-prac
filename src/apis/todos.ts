import axios, { AxiosError } from "axios";

// urls
import {
  todosIndexUrl,
  todoCreateUrl,
  todoDeleteUrl,
  todoToggleCompletedUrl,
} from "../urls";

// types
import { Todo, CreateTodoResponse, DeleteTodoResponse } from "../types/Todo";

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

export const createTodo = (todo: string) => {
  return axios
    .post(todoCreateUrl, {
      todo: todo,
    })
    .then((res): CreateTodoResponse => {
      return res;
    })
    .catch((e: AxiosError) => {
      throw e;
    });
};

export const deleteTodo = (todoId: number) => {
  return axios
    .delete(todoDeleteUrl(todoId))
    .then((res): DeleteTodoResponse => {
      return res;
    })
    .catch((e) => {
      throw e;
    });
};

export const toggleTodoCompleted = (todoId: number) => {
  return axios.patch(todoToggleCompletedUrl(todoId)).then((res) => {
    return res;
  });
};
