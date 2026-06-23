import { useState } from "react";
import "./styles/App.css";
import PostList from "./Components/PostList";
import Counter from "./Components/Counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title1", body: "Description1" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "Title1", body: "Description1" },
  ]);

  return (
    <div className="App">
      <div className="start">
        <PostList
          posts={posts}
          title={"Video Video Video Video Video Video Video"}
        />
        <PostList
          posts={posts2}
          title={"Video Video Video Video Video Video Video"}
        />
      </div>
    </div>
  );
}

export default App;
