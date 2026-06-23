import React, { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>{title}</h1>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>{title}</h1>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>{title}</h1>
      <h1 style={{ fontSize: "25px" }}>Comments:</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
