const MakeSuspender = (promise) => {
  let status = "pending";
  let result;
  let notYet = promise
    .then((success) => {
      status = "done";
      console.log("Our Wait Has Resolved Success::: ", status);
      console.log("Our Wait Has Resolved Success::: success:: ", success);

      result = success;
    })
    .catch((error) => {
      status = "failed";
      console.log("Our Wait Has FAILED!! ::: ", status);

      result = error;
    });

  return () => {
    if (status === "pending") {
      throw notYet;
    } else if (status === "failed") {
      throw result; // Result is an error
    } else if (status === "done") {
      return result; // Result is a fulfilled promise
    }
  };
};

export default MakeSuspender;

/*
//// Ouside component
const suspend = MakeSuspender(simulateLongWait);
const suspend = MakeSuspender(fetch(url).then((res) => res.json()));


//// Inside component
const posts = suspend()
*/
