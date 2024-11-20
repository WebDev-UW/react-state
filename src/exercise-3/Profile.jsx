import { useState } from "react";

export default function Profile ({ username, setUsername }) {
  const [newUsername, setNewUsername] = useState(username);

  const editUsername = () => {
    setUsername(newUsername);
  }

  return (
    <div>
      <h1>{username}s Profile</h1>
      <p>Change your username:</p>
      <span>
        <input value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <button onClick={editUsername}>Change!</button>
      </span>
    </div>
  );
}