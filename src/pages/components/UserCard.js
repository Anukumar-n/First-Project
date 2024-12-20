import React from "react";

export default function UserCard ({ name, age, email }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );

}

