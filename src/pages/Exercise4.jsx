import { useEffect, useState } from "react";

export default function Exercise4() {
  // TODO: add code to get username from localStorage
  const [user, setUser] = useState(null)
  const [text, setText] = useState("")

  // TODO: add code to update localStorage using useEffect

  return (
    <>
      <h1>Exercise 4 - localStorage</h1>

      { user ? <h2>You are {user}!</h2> : <h2>I don't know who you are!</h2> }

      <input
        placeholder="Username"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setUser(text);
      }}>Set username</button>
    </>
  );
}
