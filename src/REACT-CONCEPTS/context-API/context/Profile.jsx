import { useUser } from "../context/UserContext";

function Profile() {
  const { username, age } = useUser();

  return (
    <div>
      <h2>Username: {username}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default Profile;