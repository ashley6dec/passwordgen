import PasswordGenerator from "./components/passwordGenerator";
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Create Password</h1>
      <PasswordGenerator/>
    </div>
  );
}

export default App;