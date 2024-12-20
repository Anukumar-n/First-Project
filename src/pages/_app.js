import React from "react";
import UserCard from "./components/UserCard";
import ClickHover from "./components/ClickHover";
import Counter from "./components/Counter";
import Authentication from "./components/Authentication";

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
