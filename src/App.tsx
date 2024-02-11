import { useState } from "react";

import { TodoInput } from "./components/TodoInput";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

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
