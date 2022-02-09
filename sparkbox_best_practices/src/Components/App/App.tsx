import React from 'react';
import './App.scss';
import { AccordianBar } from '../AccordianBar_/AccordianBar_';
import { AccordianMenu } from '../AccordianMenu_/AccordianMenu_';

const practiceDetails = {
  accordianOne: {
    accordianBarName: "What resources did you use to build this?",
    linkInformation: [{
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
  accordianTwo: {
    accordianBarName: "What are the HTML tags and ARIA attributes used?",
    linkInformation: [
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section",
        linkName: "section",
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
        linkName: "button",
      }, 
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",
        linkName: "dl",
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt",
        linkName: "dt",
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd",
        linkName: "dd",
      },
      {
        link: "https://www.w3.org/TR/wai-aria-1.1/#aria-expanded",
        linkName: "aria-expanded",
      },
      {
        link: "https://www.w3.org/TR/wai-aria-1.1/#aria-controls",
        linkName: "aria-controls",
      },
    ],
  },
  accordianThree: {
    accordianBarName: "What is the expected behavior of this component?",
    linkInformation: [{
      link: "",
      linkName: "Users can tab to an accordion button which will show focus that button",
    },
    {
      link: "",
      linkName: "When using a keyboard and the NVDA screen reader users can hit Enter or Space to toggle the content for the focused accordion button",
    }, 
    {
      link: "",
      linkName: "When using the VO screen reader users can navigate to the button with Control + Option + Space",
    },
    {
      link: "",
      linkName: "Then when focused on the button, VO users can toggle the content with Control + Option + Space",
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
                <AccordianBar
                    dropdownHandler={dropdownHandler}
                    dropdownButtonName={practiceDetails.accordianOne.accordianBarName}
                    ariaControlType={"resources"}
                />
                <AccordianMenu 
                  dropdownMenuDetails={practiceDetails.accordianOne.linkInformation}
                  accordianId={"resources"}
                />
                
                <AccordianBar
                    dropdownHandler={dropdownHandler}
                    dropdownButtonName={practiceDetails.accordianTwo.accordianBarName}
                    ariaControlType={"markup"}
                />
                <AccordianMenu 
                  dropdownMenuDetails={practiceDetails.accordianTwo.linkInformation}
                  accordianId={"markup"}
                />
                
                
                <AccordianBar
                    dropdownHandler={dropdownHandler}
                    dropdownButtonName={practiceDetails.accordianThree.accordianBarName}
                    ariaControlType={"behavior"}
                />
                <AccordianMenu 
                  dropdownMenuDetails={practiceDetails.accordianThree.linkInformation}
                  accordianId={"behavior"}
                />
              </dl>
          </section>
      </header>
    </div>
  );
}

export default App;
