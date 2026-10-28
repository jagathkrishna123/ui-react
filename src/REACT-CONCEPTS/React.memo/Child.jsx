import { memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child component rendered");

  return <h2>Hello, {name}</h2>;
});

export default Child;

//? React.memo → helps skip unnecessary component re-renders.
//! React.memo is a higher-order component that helps prevent unnecessary 




//  and if the props haven't changed, React can skip re-rendering the component.





//Without React.memo: The child normally re-renders when its parent re-renders.
//With React.memo: The child can skip re-rendering if its props remain unchanged.




// ! ALERT: Critical issue or high-priority warning
// ? QUERY: Question or something that needs clarification
// * HIGHLIGHT: Important info or key takeaway
// todo: Task or feature that needs to be implemented
// NOTE: Custom cyan note highlight with dark background
// // DEPRECATED: Commented-out or unused code block