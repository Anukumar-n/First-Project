import React from "react";
import UserCard from "./UserCard";
import ClickHover from "./ClickHover";
import Counter from "./Counter";
import Authentication from "./Authentication";

const App = () => {
  const user = {
    name: "Jane Doe",
    age: 28,
    email: "jane.doe@example.com",
  };

  return (
   <>
      <h1>Users</h1>
      <UserCard name={user.name} age={user.age} email={user.email} />
      <ClickHover/>
      <Counter/>
      <Authentication />
    </>
    
  );
};

export default App;
