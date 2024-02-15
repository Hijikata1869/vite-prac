import { useEffect, useState } from "react";

import { fetchTodos } from "../apis/todos";

import { Todo } from "../types/Todo";

interface TodoListProps {
  incompleteTodos: Todo[];
  completeTodos: Todo[];
  setCompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setIncompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const IncompleteTodos: React.FC<TodoListProps> = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTodos().then((data) => {
        return data;
      });
      setTodo(result.todos);
    };
    fetchData();
  }, []);
  const onClickComplete = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col p-4 bg-red-300 min-h-[200px]">
      <p className="pb-4 text-gray-700 text-center">未完了のTODOリスト</p>
      <ul className="flex flex-col pl-6">
        {todo.map((todo) => {
          return (
            <li key={todo.id} className="list-disc mb-4">
              <div className="flex">
                <p>{todo.todo}</p>
                <button
                  onClick={(event) => onClickComplete(event)}
                  className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                >
                  完了
                </button>
                <button className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400">
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
