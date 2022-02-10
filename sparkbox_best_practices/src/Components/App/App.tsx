import React, { useEffect, useState } from "react";
import "./App.scss";

//COMPONENTS
import { AccordianBar } from "../AccordianBar_/AccordianBar_";
import { AccordianMenu } from "../AccordianMenu_/AccordianMenu_";

//MOCK DATA
import { PracticeDetails } from "../../MockData/MockData_";

//TYPES
import { AccordionTypes } from "../../Types/AccordionEnum_";
import {
	AccordianViewModel,
	MockDataDetailsViewModel,
} from "../../Types/MockedData_";

//THIS.COMPONENT
function App() {
	const [mockDataForAccordion, setMockDataForAccordion] = useState(
		[] as MockDataDetailsViewModel
	);

	const accordionHandler = (accordionType: AccordionTypes) => {
		let newState = mockDataForAccordion.map((accordion: AccordianViewModel) => {
			if (accordion.accordionType !== accordionType) return accordion;
			return {
				...accordion,
				isOpen: !accordion.isOpen,
			};
		});
		setMockDataForAccordion(newState);
	};

	const loadInitValuesForAccordion = () => {
		return mockDataForAccordion.map((value, index) => {
			return (
				<div key={`Index-In-mockDataForAccordion${index}`}>
					<AccordianBar
						accordionHandler={accordionHandler}
						accordionButtonName={value.accordianBarName}
						ariaControlType={value.accordionType}
						isExpanded={value.isOpen ? value.isOpen : false}
					/>
					<AccordianMenu
						dropdownMenuDetails={value.linkInformation}
						accordianId={value.accordionType}
						isExpanded={value.isOpen ? value.isOpen : false}
					/>
				</div>
			);
		});
	};

	const initializeMockDataWithAddedValues = (
		practiceDetails: MockDataDetailsViewModel
	) => {
		let updatedData = practiceDetails.map((detail) => {
			return {
				...detail,
				isOpen: false,
			};
		});
		setMockDataForAccordion(updatedData);
	};
	useEffect(() => {
		let isRendered: boolean = true;
		if (isRendered) {
			initializeMockDataWithAddedValues(PracticeDetails);
		}
		return () => {
			isRendered = false;
		};
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<section>
					<h1>Accessible Multi-select FAQ Accordion</h1>
					<dl className="accordion">{loadInitValuesForAccordion()}</dl>
				</section>
			</header>
		</div>
	);
}

export default App;
