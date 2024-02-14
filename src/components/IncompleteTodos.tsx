interface TodoListProps {
  incompleteTodos: string[];
  completeTodos: string[];
  setCompleteTodos: React.Dispatch<React.SetStateAction<string[]>>;
  setIncompleteTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const IncompleteTodos: React.FC<TodoListProps> = ({
  incompleteTodos,
  completeTodos,
  setCompleteTodos,
  setIncompleteTodos,
}) => {
  const onClickComplete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetTodo = incompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, targetTodo.toString()];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    incompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="flex flex-col p-4 bg-red-300 min-h-[200px]">
      <p className="pb-4 text-gray-700 text-center">未完了のTODOリスト</p>
      <ul className="flex flex-col pl-6">
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={index} className="list-disc mb-4">
              <div className="flex">
                <p>{todo}</p>
                <button
                  onClick={(event) => onClickComplete(event, index)}
                  className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                >
                  完了
                </button>
                <button
                  onClick={(event) => onClickDelete(event, index)}
                  className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                >
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
