import fetch from "isomorphic-unfetch";
import { useState } from "react";
export default ({ todos, setTodos }) => {
  return (
    <table>
      <tbody>
        {todos.map(todo => (
          <tr
            key={todo.id}
            onClick={() => {
              setTodos(
                todos.map(t =>
                  t.id !== todo.id
                    ? t
                    : { id: todo.id, done: !todo.done, text: todo.text }
                )
              );
              fetch(`http://localhost:3000/api/todo/${todo.id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ done: !todo.done })
              });
            }}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
