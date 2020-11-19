import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login/Login";

const App = () => {
  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
