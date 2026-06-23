import Counter from "./Counter";

const PostItem = (/* props */) => {
  return (
    <div className="post">
      <Counter />
      {/* <strong>{props.post.body}</strong> */}
    </div>
  );
};

export default PostItem;
