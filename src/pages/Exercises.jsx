import { Link } from "react-router-dom";
export default function Exercises() {
  return (
    <div className="container">
      <h1>React State Exercises</h1>
      <ul>
        <li><Link to="/exercise1">Exercise 1 (Reducers)</Link></li>
        <li><Link to="/exercise2">Exercise 2 (Reducers)</Link></li>
        <li><Link to="/exercise3">Exercise 3 (Context)</Link></li>
        <li><Link to="/exercise4">Exercise 4 (localStorage)</Link></li>
      </ul>
    </div>
  );
}