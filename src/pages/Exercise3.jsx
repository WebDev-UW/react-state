import { useState } from "react";
import Account from "../exercise-3/Account";
import Profile from "../exercise-3/Profile";

export default function Exercise3() {
  const [username, setUsername] = useState("my user");
  const [password, setPassword] = useState("my password");

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