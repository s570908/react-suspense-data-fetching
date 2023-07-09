import React from "react";
import Post from "./Post";

import usePromise from "../libs/usePromise";

const Posts = () => {
  // Start fetching posts even before rendering begins
  // const userId = JSON.parse(localStorage.getItem("authenticatedUser"))?.id;
  // No need for loading states

  let userId = "10";

  const posts = usePromise(fetchPosts, userId);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {posts?.map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
};

// Fetch external data
function fetchPosts(userId) {
  //let url = `https://jsonplaceholder.typicode.com/posts${userId ? "?userId=" + userId : ""}`;
  let url = `https://dummyjson.com/posts/user/${userId}`;
  let fetching = fetch(url)
    .then((res) => res.json())
    .then((res) => res.posts);
  // Fetch request has gone well
  return fetching;
}

export default Posts;
