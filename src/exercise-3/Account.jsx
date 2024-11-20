import { useState } from "react";

export default function Account({username, setUsername, password, setPassword}) {
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);

  const editPassword = () => {
    setPassword(newPassword);
  }

  const editUsername = () => {
    setUsername(newUsername)
  }

  return (
    <div>
      <h1>{username}s Account Settings</h1>
      <p>Change your username:</p>
      <span>
        <input value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <button onClick={editUsername}>Change!</button>
      </span>
      <p>Change your password:</p>
      <span>
        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button onClick={editPassword}>Change!</button>
      </span>
    </div>
  );
}