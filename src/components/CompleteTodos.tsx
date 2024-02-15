import { Todo } from "../types/Todo";

interface TodoListProps {
  completeTodos: Todo[];
  incompleteTodos: Todo[];
  setIncompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const CompleteTodos: React.FC<TodoListProps> = ({
  completeTodos,
  incompleteTodos,
  setIncompleteTodos,
}) => {
  const onClickBack = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const targetTodo = completeTodos[index];
    completeTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, targetTodo];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="flex flex-col p-4 bg-green-300 min-h-[200px]">
      <p className="pb-4 text-gray-700 text-center">完了したTODO</p>
      <ul className="flex flex-col pl-6">
        {completeTodos.map((todo, index) => {
          return (
            <li key={index} className="list-disc mb-4">
              <div className="flex">
                <p>{todo.todo}</p>
                <button
                  onClick={(event) => onClickBack(event, index)}
                  className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400"
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
