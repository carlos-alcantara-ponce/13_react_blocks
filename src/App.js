import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="app">
      {/* <p>App</p> */}
      <Header />
      <div className="navmain">
        <Navigation />

        <Main>
          <div className="mainver">
            <div className="mainhor">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;

