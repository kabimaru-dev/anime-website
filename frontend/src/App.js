import { useState } from "react";
import "./styles/App.css";
import PostList from "./Components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title1", body: "Description1" },
    { id: 2, title: "Title2", body: "Description2" },
    { id: 3, title: "Title3", body: "Description3" },
  ]);
  const [posts2, setPost2] = useState([
    { id: 1, title: "Python1", body: "Description1" },
    { id: 2, title: "Python2", body: "Description2" },
    { id: 3, title: "Python3", body: "Description3" },
  ]);

  const fps = [30, 60, 90].map((multiplier) => {
    return multiplier * 2;
  });

  const bbb = (item) => {
    return console.log(item);
  };

  return (
    <div className="App">
      <div className="start">
        {fps.map((item) => {
          return console.log(item);
        })}
      </div>
    </div>
  );
}

export default App;
