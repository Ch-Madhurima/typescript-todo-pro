import Todo from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: Todo["text"] }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
