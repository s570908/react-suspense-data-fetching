import React from "react";
import Post from "./Post";

// Variables we will use to replay fetch() promise state to React
let status = "pending";
let result;

// Start fetching posts even before rendering begins
const userId = JSON.parse(localStorage.getItem("authenticatedUser"))?.id;
const postsData = fetchPosts(userId);

// Posts component
const Posts = () => {
  // No need for loading states
  const posts = postsData();
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
  let url = `https://jsonplaceholder.typicode.com/posts${
    userId ? "?userId=" + userId : ""
  }`;
  let fetching = fetch(url)
    .then((res) => res.json())
    // Fetch request has gone well
    .then((success) => {
      status = "done";

      result = success;
    })
    // Fetch request has failed
    .catch((error) => {
      status = "failed";

      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching; // Suspend(A way to tell React data is still fetching)
    } else if (status === "failed") {
      throw result; // Result is an error
    } else if (status === "done") {
      return result; // Result is a fulfilled promise
    }
  };
}

export default Posts;
