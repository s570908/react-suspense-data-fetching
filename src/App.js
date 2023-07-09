import React from "react";
import Home from "./components/Home";

import MyPosts from "./components/MyPosts";
import Fib from "./components/Fib";
import Transition from "./components/Transition";

function App() {
  switch (window.location.pathname) {
    case "/myposts":
      return <MyPosts />;
    case "/fib":
      return <Fib />;
    case "/transition":
      return <Transition />;
    default:
      return <Home />;
  }
}

export default App;
