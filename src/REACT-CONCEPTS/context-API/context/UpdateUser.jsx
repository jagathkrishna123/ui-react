import { useUser } from "../context/UserContext";

function UpdateUser() {
  const {
    updateUsername,
    increaseAge,
    resetUser,
  } = useUser();

  return (
    <div>
      <button onClick={() => updateUsername("Arun")}>
        Change Username
      </button>

      <button onClick={increaseAge}>
        Increase Age
      </button>

      <button onClick={resetUser}>
        Reset User
      </button>
    </div>
  );
}

export default UpdateUser;