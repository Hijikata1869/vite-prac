interface TodoListProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  incompleteTodos: string[];
  setIncompleteTodos: React.Dispatch<React.SetStateAction<string[]>>;
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

  const onClickAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    const newTodos = [...incompleteTodos, todo];
    setIncompleteTodos(newTodos);
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
          onClick={(event) => onClickAdd(event)}
          className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
        >
          追加
        </button>
      </form>
    </div>
  );
};
