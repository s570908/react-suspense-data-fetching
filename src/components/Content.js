import React from "react";

// React Component to render
const Content = () => {
  // No need for loading states
  const data = dataGetter();
  console.log(data);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Content</h1>
      <h4>{data?.msg}</h4>
    </div>
  );
};

// Get our asynchronous data
let status = "pending";
let result;
function dataGetter() {
  let notYet = simulateLongWait()
    .then((success) => {
      status = "done";
      console.log("Our Wait Has Resolved Success::: ", status);

      result = success;
    })
    .catch((error) => {
      status = "failed";
      console.log("Our Wait Has FAILED!! ::: ", status);

      result = error;
    });

  if (status === "pending") {
    throw notYet;
  } else if (status === "failed") {
    throw result; // Result is an error
  } else if (status === "done") {
    return result; // Result is a fulfilled promise
  }
}

// Simulate A Long `Fetch external Data` that returns a promise
function simulateLongWait() {
  return new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      resolve({
        id,
        msg: "SetTimeout DONE! We should be having Data we have fetched!",
      });
    }, 3000);
  });
}

export default Content;