// import React, { useCallback, useState } from 'react'

// const UseCallback = () => {
//     const [number, setNumber] = useState(0)

//     const double = useCallback(() => {
//         console.log("double worked");
        
//          console.log("double =>>", number * 2);
//     },[number])

//   return (
//     <div>
//         <p>number:{number}</p>
//         <button onClick={() => setNumber(number + 1)}>increment number</button>
//         <button onClick={double}>double</button>
//     </div>
//   )
// }

// export default UseCallback


// // ```
// // Interview Answer: What is useCallback in React?
// // useCallback is a React Hook that memoizes a function reference and returns the same function
// //  between re-renders as long as its dependencies haven't changed. It helps prevent unnecessary
// //   function reference changes, especially when passing functions to memoized child components.

// //   Remember: useCallback doesn't prevent the function from executing or stop component re-renders. It helps preserve the function reference.
// //   ```



// so in usecallback function works all the time, even if the number stay same , but wont reassign func to variable , but in usememo function wont work if number is same