import { Link } from "react-router-dom";
export default function Exercises() {
  return (
    <div className="container">
      <h1>React State Exercises</h1>
      <ul>
        <li><Link to="/exercise1">Exercise 1 (Simple state)</Link></li>
        <li><Link to="/exercise2">Exercise 2 (Reducers)</Link></li>
        <li><Link to="/exercise3">Exercise 3 (Context)</Link></li>
        <li><Link to="/exercise4">Exercise 4 (Context + Reducer)</Link></li>
      </ul>
    </div>
  );
}