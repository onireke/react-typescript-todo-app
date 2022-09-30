import React from "react";

function NewTodo() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" name="" id="text" placeholder="enter your text here" />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
