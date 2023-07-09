import React from "react";

import usePromise from "../libs/usePromise";

// React Component to render
const Content = () => {
  // No need for loading states
  const data = usePromise(simulateLongWait, null);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Content</h1>
      <h4>{data?.msg}</h4>
    </div>
  );
};

// Simulate A Long `Fetch external Data` that returns a promise
function simulateLongWait() {
  return new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      resolve({
        id,
        msg: "SetTimeout DONE! We should be having Data we have fetched!",
      });
    }, 10000);
  });
}

export default Content;
