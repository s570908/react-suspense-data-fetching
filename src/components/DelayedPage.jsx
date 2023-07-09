// import { useEffect } from 'react';

// const cache = new Map();

// const DelayedPage = ({ id, delay, children }) => {
//   let state = cache.get(id);
//   if (!state) {
//     state = new Promise((resolve) =>
//       setTimeout(() => {
//         cache.set(id, true);
//         resolve(true);
//       }, delay)
//     );
//     cache.set(id, state);
//   }
//   if (state !== true) throw state;

//   useEffect(
//     () => () => {
//       cache.delete(id);
//     },
//     [id]
//   );

//   return <>{children}</>;
// };

// export default DelayedPage;

import usePromise from "../libs/usePromise";

const DelayedPage = ({ delay, children }) => {
  const result = usePromise(delayPage, delay);
  console.log("result: ", result);
  return <>{children}</>;
};

// delay page
function delayPage(delay) {
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, delay)
  );
  return promise;
}

export default DelayedPage;
