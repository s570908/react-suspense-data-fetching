import React from "react";
import Spinner from "react-loading-indicators";

const Posts = React.lazy(() => import("./Posts"));

// React Component to render
const MyPosts = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>My Posts</h1>
      <React.Suspense fallback={<Spinner style={{ fontSize: "5px" }} />}>
        <Posts />
      </React.Suspense>
    </div>
  );
};

export default MyPosts;
