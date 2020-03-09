import React, { useEffect, useState } from "react";
import Link from "next/link";
require("es6-promise").polyfill();
import fetch from "isomorphic-unfetch";
import Todos from "../components/Todos";
import { v4 as uuidv4 } from "uuid";

const Page = ({ todos: todosInput, status }) => {
  const [todos, setTodos] = useState(todosInput);
  const [input, setInput] = useState("");
  return status === 200 ? (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const id = uuidv4();
          setTodos([...todos, { text: input, id }]);
          fetch(`http://localhost:3000/api/todo/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: input })
          });
          setInput("");
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)}></input>
        <button type="submit">Create </button>
      </form>

      <Todos todos={todos} />
    </div>
  ) : (
    <p>{todos.message}</p>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/todos`);
  const todos = await response.json();
  return { props: { todos, status: response.status } };
}

export default Page;
