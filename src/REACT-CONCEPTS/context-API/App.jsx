import UserContext from "./UserContext";
import Child from "./Child";

function Appcomp() {
  const username = "Jagath";
  const age = 25

  return (
    <UserContext.Provider value={{username, age}}>
      <div>
        <h1>Context API Example</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default Appcomp;