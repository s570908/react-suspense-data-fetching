import React from "react";
import Home from "./components/Home";

import MyPosts from "./components/MyPosts";

function App() {
  switch (window.location.pathname) {
    case "/myposts":
      return <MyPosts />;

    default:
      return <Home />;
  }
}

export default App;
