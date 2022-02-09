import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DropdownBar } from './Components/DropdownBar_/DropdownBar_';
import { DropdownMenu } from './Components/DropdownMenu_/DropdownMenu_';

const practiceDetails = {
  dropDownOne: {
    dropdownBarName: "What resources did you use to build this?",
    listOne: [{
      link: "https://www.w3.org/TR/wai-aria-practices/#disclosure",
      linkName: "Disclosure (FAQ) Design Pattern",
    },
    {
      link: "https://www.w3.org/TR/wai-aria-practices/#accordion",
      linkName: "Accordion Design Pattern",
    }, 
    {
      link: "https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html",
      linkName: "Accordion Example",
    },
    {
      link: "https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-faq.html",
      linkName: "Disclosure (FAQ) Example",
    }],
  },
}


function App() {
const dropdownHandler = () => {

}

  return (
    <div className="App">
      <header className="App-header">
          <section>	
          <h1>Accessible Multi-select FAQ Accordion</h1>
              <dl className="accordion">
                {<DropdownBar
                    dropdownHandler={dropdownHandler}
                    dropdownButtonName={practiceDetails.dropDownOne.dropdownBarName}
                    ariaControlType={"resources"}
                />}
                <DropdownMenu 
                  dropdownMenuDetails={practiceDetails.dropDownOne.listOne}
                />
              </dl>
          </section>
      </header>
    </div>
  );
}

export default App;
