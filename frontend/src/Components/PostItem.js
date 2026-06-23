import Counter from "./Counter";

const PostItem = (props) => {
  return (
    <div className="post">
      <Counter />
      <strong>
        id: {props.post.id} title: {props.post.title} description:{" "}
        {props.post.body}
      </strong>
    </div>
  );
};

export default PostItem;
