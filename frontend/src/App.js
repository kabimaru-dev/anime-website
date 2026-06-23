import React, { useState } from "react";
import Counter from "./Components/Counter";
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

  return (
    <div className="App">
      <PostList
        posts={posts}
        title={"Video Video Video Video Video Video Video"}
      />
      <PostList
        posts={posts2}
        title={"Video Video Video Video Video Video Video"}
      />
    </div>
  );
}

export default App;
