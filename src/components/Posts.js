import React from "react";
import Post from "./Post";
import MakeSuspender from "../libs/suspender";

const suspend = fetchPosts("10");

const Posts = () => {
  // Start fetching posts even before rendering begins
  // const userId = JSON.parse(localStorage.getItem("authenticatedUser"))?.id;
  // No need for loading states

  const posts = suspend();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {posts.map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
};

// Fetch external data
function fetchPosts(userId) {
  //let url = `https://jsonplaceholder.typicode.com/posts${userId ? "?userId=" + userId : ""}`;
  let url = "https://jsonplaceholder.typicode.com/posts?userId=10";
  let fetching = fetch(url).then((res) => res.json());
  // Fetch request has gone well
  return MakeSuspender(fetching);
}

export default Posts;
