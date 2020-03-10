import fetch from "isomorphic-unfetch";
export default ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>Todo</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr
          key={todo.id}
          onClick={() => {
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
