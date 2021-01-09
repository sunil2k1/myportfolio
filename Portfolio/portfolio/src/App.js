import React from "react";
import Main from "./components/MainComponent.js";
import "./App.css";
import {HashRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <HashRouter basename='/'>
        <Main />
      </HashRouter>
    </div>
  );
};

export default App;