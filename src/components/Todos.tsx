import React from "react";
import Todo from "./Todo";
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <Todo key={item} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
