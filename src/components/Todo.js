import React from "react";

//external dependencies
import { ListItem, Button } from "@material-ui/core";
import { List, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

//project files
import db from "../services/firebase";
import "./Todo.css";

function Todo(props) {
  const { id, todo, deadline } = props.todo;
  return (
    <div className="todo_list">
      <List>
        <ListItem>
          <ListItemText primary={todo} secondary={deadline}></ListItemText>
          <Button
            color="secondary"
            variant="contained"
            onClick={(event) => {
              db.collection("todos").doc(id).delete();
            }}
          >
            Delete <DeleteIcon></DeleteIcon>
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
