import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input
        type="text"
        name=""
        id="text"
        placeholder="enter your text here"
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
