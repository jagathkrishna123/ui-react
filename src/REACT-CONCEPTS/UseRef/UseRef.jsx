import { useRef, useState } from "react";

function UseRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log("Component rendered");

  return (
    <div>
      <h3>State: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase State
      </button>

      <h3>Ref: {countRef.current}</h3>
      <button onClick={() => {
        countRef.current++;
        console.log("Ref:", countRef.current);
      }}>
        Increase Ref
      </button>
    </div>
  );
}

export default UseRef;