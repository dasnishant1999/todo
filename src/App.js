import React, { useState, useEffect } from "react";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import firebase from "firebase";

import "./App.css";
import Todo from "./components/Todo";
import db from "./services/firebase";

function App() {
  //hooks
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            // console.log(doc.id);
            return {
              id: doc.id,
              todo: doc.data().todo,
              deadline: doc.data().deadline,
            };
          })
        );
      });
    return () => {
      // cleanup function
    };
  }, []);

  //functions
  const changeInput = (event) => {
    setInput(event.target.value);
  };
  const changeDeadline = (event) => {
    setDeadline(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault(); //it will prevent react from refreshing the page on form submit
    db.collection("todos").add({
      todo: input,
      deadline: deadline == "" ? "No Deadline" : deadline,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); //clearing the input
    setDeadline(""); //clearing deadline input field
    // setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h2 style={{ margin: "3rem" }}>Welcome to your Todo List ✅</h2>
      <form>
        {/* <div> */}
        <FormControl style={{ marginRight: "1rem" }}>
          <InputLabel>Add a todo</InputLabel>
          <Input type="text" value={input} onChange={changeInput} />
        </FormControl>
        <FormControl style={{ marginRight: "1rem" }}>
          <InputLabel>Deadline of Todo</InputLabel>
          <Input type="text" value={deadline} onChange={changeDeadline} />
        </FormControl>
        {/* </div> */}
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
      <div className="todos">
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo}></Todo>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
