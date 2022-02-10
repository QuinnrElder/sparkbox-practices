import React, { useEffect, useState } from "react";
import "./App.scss";

//COMPONENTS
import { Accordion } from "../Accordion_/Accordion_";

//MOCK DATA
import { PracticeDetails } from "../../MockData/MockData_";

//TYPES
import { AccordionTypes } from "../../Types/AccordionEnum_";
import {
	AccordionViewModel,
	MockDataDetailsViewModel,
} from "../../Types/MockedData_";

//THIS.COMPONENT
function App() {
	const [mockDataForAccordion, setMockDataForAccordion] = useState(
		[] as MockDataDetailsViewModel
	);

	const accordionHandler = (accordionType: AccordionTypes) => {
		let newState = mockDataForAccordion.map((accordion: AccordionViewModel) => {
			if (accordion.accordionType !== accordionType) return accordion;
			return {
				...accordion,
				isOpen: !accordion.isOpen,
			};
		});
		setMockDataForAccordion(newState);
	};

	const loadInitValuesForAccordion = () => {
		return mockDataForAccordion.map((value:AccordionViewModel, index) => {
			return (
				<div key={`Index-In-mockDataForAccordion${index}`}>
					<Accordion
						accordionDetails={value}
						accordionHandler={accordionHandler}
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
