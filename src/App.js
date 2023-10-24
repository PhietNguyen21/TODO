import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import Home from "./page/Home/Home";
import Todo from "./page/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
