import "./App.css";
import AddTodo from "./components/AddTodo";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
