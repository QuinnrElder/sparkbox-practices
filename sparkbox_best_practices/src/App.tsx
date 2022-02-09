import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DropdownBar } from './Components/DropdownBar_/DropdownBar_';

function App() {
const dropdownHandler = () => {

}

  return (
    <div className="App">
      <header className="App-header">
          <section>	
          <h1>Accessible Multi-select FAQ Accordion</h1>
              <dl className="accordion">
                {/* {<DropdownBar
                    dropdownHandler={dropdownHandler}
                    dropdownButtonName={"What resources did you use to build this?"}
                />} */}
              </dl>
          </section>
      </header>
    </div>
  );
}

export default App;
