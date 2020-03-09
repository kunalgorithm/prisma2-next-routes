export default ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>Todo</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr key={todo.id}>{todo.text}</tr>
      ))}
    </tbody>
  </table>
);
