import ErrorBoundary from "./ErrorBoundary";
import "./styles.css";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    
    <div className="App">
      <div> List </div>
      <ErrorBoundary>
      <ToDoList />
    </ErrorBoundary>
    </div>
  );
}
