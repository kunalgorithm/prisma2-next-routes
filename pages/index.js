import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Logo from "../components/Logo";
import fetch from "isomorphic-unfetch";

const Page = ({ todos, status }) =>
  status === 200 ? (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {todos.map(todo => (
            <td key={todo.id}>{todo.text}</td>
          ))}
        </tr>
      </tbody>
    </table>
  ) : (
    <p>{todos.message}</p>
  );

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/todos`);

  const todos = await response.json();
  return { props: { todos, status: response.status } };
}

export default Page;
// {
//   const [todos , setTodos] = useState(null);

//   useEffect( () => {
//     const res =  fetch('/api/todos')
//     const todos = res.json()

//   }, [])

//   return
//   (
//     <div>
//       <Head title="Home" />
//       <Nav />
//       <Logo />
//     </div>
//   );
// };
