import { useState } from "react";
import "./styles/App.css";
import PostList from "./Components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title1", body: "Description1" },
    { id: 2, title: "Title2", body: "Description2" },
    { id: 3, title: "Title3", body: "Description3" },
  ]);

  return (
    <div className="App">
      <div className="start">
        <PostList
          posts={posts}
          title={"Video Video Video Video Video Video Video"}
        />
        <PostList
          posts={posts}
          title={"Video Video Video Video Video Video Video"}
        />
        <PostList
          posts={posts}
          title={"Video Video Video Video Video Video Video"}
        />
      </div>
    </div>
  );
}

export default App;
