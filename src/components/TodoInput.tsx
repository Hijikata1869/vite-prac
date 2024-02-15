import { Todo } from "../types/Todo";

import { createTodo, fetchTodos } from "../apis/todos";

interface TodoListProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  incompleteTodos: Todo[];
  setIncompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoInput: React.FC<TodoListProps> = ({
  todo,
  setTodo,
  incompleteTodos,
  setIncompleteTodos,
}) => {
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onClickAdd = () => {
    createTodo(todo).then((res) => {
      if (res.status === 200) {
        fetchTodos().then((res) => {
          const newCreatedTodo = res.todos.slice(-1)[0];
          const newIncompleteTodos = [...incompleteTodos, newCreatedTodo];
          setIncompleteTodos(newIncompleteTodos);
        });
      }
    });

    setTodo("");
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-blue-300">
      <p className="pb-2 text-gray-700">TODOを入力</p>
      <form>
        <input
          value={todo}
          onChange={(event) => onChangeTodoText(event)}
          type="text"
          className="rounded-md mb-6 w-80 outline-none"
        />
        <button
          onClick={onClickAdd}
          className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
        >
          追加
        </button>
      </form>
    </div>
  );
};
