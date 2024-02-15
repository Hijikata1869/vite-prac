import { useState } from "react";

import { TodoInput } from "./components/TodoInput";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import { Todo } from "./types/Todo";

export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [incompleteTodos, setIncompleteTodos] = useState<Todo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  return (
    <>
      <div className="flex flex-col w-[500px]">
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          incompleteTodos={incompleteTodos}
          setIncompleteTodos={setIncompleteTodos}
        />
        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          setCompleteTodos={setCompleteTodos}
          completeTodos={completeTodos}
          setIncompleteTodos={setIncompleteTodos}
        />
        <CompleteTodos
          completeTodos={completeTodos}
          incompleteTodos={incompleteTodos}
          setIncompleteTodos={setIncompleteTodos}
        />
      </div>
    </>
  );
};
