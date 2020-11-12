import React from "react";
import Todo from "./Todo";
import { List} from "@material-ui/core";

function TodoList({ todos, toggleComlete, removeTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComlete={toggleComlete}
          removeTodo={removeTodo  }
        />
      ))}
    </List>
  )
}

export default TodoList;
