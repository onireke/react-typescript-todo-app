import React from "react";

const Todo: React.FC<{ item: string }> = (props) => {
  return <div>{props.item}</div>;
};

export default Todo;
