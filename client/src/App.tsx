import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Chat from './Chat'

const App = () => {
  return (
    <div className="App">
        <Login/>
        <Chat/>
    </div>
  );
}

export default App;
