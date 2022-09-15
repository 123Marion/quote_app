import React, { useState } from "react";
import UserCSS from "./User.module.css";
function User({ setUser }) {
  const [input, setInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    console.log(input.length);
    console.log(e.target.user.value);
    //not send whitespace to db
    if (input != null && input.trim() !== "") {
      // setUser(input)
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input,
        }),
      })
        .then((r) => r.json())
        .then((response) => {
          setUser(response);
        });
    }
  };

  return (
    <>
      <div className={UserCSS.container}>
        <form onSubmit={handleOnSubmit} className={UserCSS.form}>
          <div className={UserCSS.inputs}>
            <input
              id="user"
              type="text"
              name="user"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <span className={UserCSS.highlight}></span>
            <span className={UserCSS.bar}></span>
            <label htmlFor="user">Username</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default User;
