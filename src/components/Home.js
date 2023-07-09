import React from "react";

const Content = React.lazy(() => import("./Content"));

const Home = () => {
  return (
    <div>
      <h1>OUR BEAUTIFUL APP</h1>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Content />
      </React.Suspense>
    </div>
  );
};

export default Home;
