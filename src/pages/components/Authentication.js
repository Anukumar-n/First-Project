import React, { useState } from "react";


export default function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Welcome to My App</h1>

      {isLoggedIn ? (
        <div>
          <h2>Hello, Anukumar N</h2>
          <button onClick={handleLogout} style={{ margin: "5px" }}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please log in to continue.</h2>
          <button onClick={handleLogin} style={{ margin: "5px" }}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};


