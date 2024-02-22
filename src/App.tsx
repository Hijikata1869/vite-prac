import React, { useEffect, useState } from "react";

// apis
import {
  fetchTodos,
  toggleTodoCompleted,
  createTodo,
  deleteTodo,
} from "./apis/todos";

// types
import { Todo } from "./types/Todo";

export const App: React.FC = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<Todo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos()
      .then((res) => {
        const result = res.filter((todo) => todo.completed === false);
        setIncompleteTodos(result);
        return res;
      })
      .then((res) => {
        const result = res.filter((todo) => todo.completed === true);
        setCompleteTodos(result);
      });
  }, []);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const onClickAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    createTodo(inputTodo).then((res) => {
      if (res.status === 200) {
        const newIncompleteTodos = [...incompleteTodos, res.data.createdTodo];
        setIncompleteTodos(newIncompleteTodos);
        setInputTodo("");
      }
    });
  };

  const onClickComplete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetIncompleteTodo = incompleteTodos[index];
    toggleTodoCompleted(targetIncompleteTodo.id).then((res) => {
      if (res.status === 200) {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos([...completeTodos, targetIncompleteTodo]);
      }
    });
  };

  const onClickDelete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetIncompleteTodo = incompleteTodos[index];
    deleteTodo(targetIncompleteTodo.id).then((res) => {
      if (res.status === 200) {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        setIncompleteTodos(newIncompleteTodos);
      }
    });
  };

  const onClickBack = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetCompleteTodo = completeTodos[index];
    toggleTodoCompleted(targetCompleteTodo.id).then((res) => {
      if (res.status === 200) {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos([...incompleteTodos, targetCompleteTodo]);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col w-[500px]">
        <div className="flex flex-col justify-center items-center p-4 bg-blue-300">
          <p className="pb-2 text-gray-700">TODOを入力</p>
          <form>
            <input
              type="text"
              className="rounded-md mb-6 w-80 outline-none"
              value={inputTodo}
              onChange={onChangeTodoText}
            />
            <button
              className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
              onClick={(event) => onClickAdd(event)}
            >
              追加
            </button>
          </form>
        </div>
        <div className="flex flex-col p-4 bg-red-300 min-h-[200px]">
          <p className="pb-4 text-gray-700 text-center">未完了のTODOリスト</p>
          <ul className="flex flex-col pl-6">
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo.id} className="list-disc mb-4">
                  <div className="flex">
                    <p>{todo.todo}</p>
                    <button
                      className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                      onClick={(event) => onClickComplete(event, index)}
                    >
                      完了
                    </button>
                    <button
                      className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                      onClick={(event) => onClickDelete(event, index)}
                    >
                      削除
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col p-4 bg-green-300 min-h-[200px]">
          <p className="pb-4 text-gray-700 text-center">完了したTODO</p>
          <ul className="flex flex-col pl-6">
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo.id} className="list-disc mb-4">
                  <div className="flex">
                    <p>{todo.todo}</p>
                    <button
                      className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                      onClick={(event) => onClickBack(event, index)}
                    >
                      戻す
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
