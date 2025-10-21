import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Express Connection Demo</h1>
      <UserList />
    </div>
  );
}

export default App;
