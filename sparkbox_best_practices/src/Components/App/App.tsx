import React, { useState } from "react";
import "./App.scss";
import { AccordianBar } from "../AccordianBar_/AccordianBar_";
import { AccordianMenu } from "../AccordianMenu_/AccordianMenu_";

//MOCK DATA
import { PracticeDetails } from "../../MockData/MockData_";

//TYPES
import { AccordionBarsStateViewModel } from "../../Types/AccordionBarsStateViewModel";
import { AccordionTypes } from "../../Types/AccordionEnum_";

function App() {
  const [accordionBarsState, setAccordionBarsState] = useState({
    resources: false,
    markup: false,
    behavior: false,
  } as AccordionBarsStateViewModel);

  const accordionHandler = (accordionType: AccordionTypes) => {
    switch (accordionType) {
      case AccordionTypes.resources:
        setAccordionBarsState((prevState) => ({
          ...prevState,
          resources: !prevState.resources,
        }));
        break;
      case AccordionTypes.markup:
        setAccordionBarsState((prevState) => ({
          ...prevState,
          markup: !prevState.markup,
        }));
        break;
      case AccordionTypes.behavior:
        setAccordionBarsState((prevState) => ({
          ...prevState,
          behavior: !prevState.behavior,
        }));
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Accessible Multi-select FAQ Accordion</h1>
          <dl className="accordion">
            <AccordianBar
              accordionHandler={accordionHandler}
              dropdownButtonName={PracticeDetails.resources.accordianBarName}
              ariaControlType={AccordionTypes.resources}
              isExpanded={accordionBarsState.resources}
            />
            <AccordianMenu
              dropdownMenuDetails={PracticeDetails.resources.linkInformation}
              accordianId={AccordionTypes.resources}
              isExpanded={accordionBarsState.resources}
            />

            <AccordianBar
              accordionHandler={accordionHandler}
              dropdownButtonName={PracticeDetails.markup.accordianBarName}
              ariaControlType={AccordionTypes.markup}
              isExpanded={accordionBarsState.markup}
            />
            <AccordianMenu
              dropdownMenuDetails={PracticeDetails.markup.linkInformation}
              accordianId={AccordionTypes.markup}
              isExpanded={accordionBarsState.markup}
            />

            <AccordianBar
              accordionHandler={accordionHandler}
              dropdownButtonName={
                PracticeDetails.behavior.accordianBarName
              }
              ariaControlType={AccordionTypes.behavior}
              isExpanded={accordionBarsState.behavior}
            />
            <AccordianMenu
              dropdownMenuDetails={
                PracticeDetails.behavior.linkInformation
              }
              accordianId={AccordionTypes.behavior}
              isExpanded={accordionBarsState.behavior}
            />
          </dl>
        </section>
      </header>
    </div>
  );
}

export default App;
