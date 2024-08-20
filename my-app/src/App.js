import Todos from "./MyComponets/Todos";
import Header from "./MyComponets/Header";
import Footer from "./MyComponets/Footer";
import AddTodo from "./MyComponets/AddTodo";

import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    // console.log("I am on Delete");

    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done",
    },
  ]);
  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
