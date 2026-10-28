import { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const {username, age} = useContext(UserContext);

  return <h2>Hello, {username} age : {age}
  </h2>;
}

export default Child;