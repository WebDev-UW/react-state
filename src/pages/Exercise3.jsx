import { useState } from "react";
import Account from "../exercise-3/Account";
import Profile from "../exercise-3/Profile";

export default function Exercise3() {
  const [username, setUsername] = useState("my user");
  const [password, setPassword] = useState("my password");

  // TODO: use Context and Reducers to make this code less repetitive and do the following functionality
  // 1. should be able to access the username and password in all children
  // 2. should be able to change username and password in all children
  // 3. no props should be passed to child components


  return (
    <div>
      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Profile username={username} setUsername={setUsername} />
      <Account username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
    </div>
  );
}