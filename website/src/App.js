import React from "react";
import Landing from "./Landing";
import Content from "./Content";

function App() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link>
      <Landing/>
      <Content/>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
