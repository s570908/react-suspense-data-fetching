import React from "react";

const Post = ({ post }) => {
  return (
    <div
      style={{ maxWidth: "300px", border: "2px solid gray", padding: "10px" }}
    >
      <h1 style={{ textTransform: "capitalize" }}>{post?.title}</h1>
      <hr />
      <p>{post?.body}</p>
      <p>
        <strong>
          <small>User ID: {post?.userId}</small>
        </strong>
      </p>
    </div>
  );
};

export default Post;
