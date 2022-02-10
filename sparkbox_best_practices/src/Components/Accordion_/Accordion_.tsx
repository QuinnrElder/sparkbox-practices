import React, { Fragment, FunctionComponent } from "react";

//TYPES
import { AccordionTypes } from "../../Types/AccordionEnum_";
import { AccordionViewModel } from "../../Types/MockedData_";

//COMPONENTS
import { AccordionBar } from "../AccordionBar_/AccordionBar_";
import { AccordionMenu } from "../AccordionMenu_/AccordionMenu_";

//THIS.TYPE
type AccordionProps = {
	accordionHandler: (accordionType: AccordionTypes) => void;
	accordionDetails: AccordionViewModel;
};

//THIS.COMPONENT
export const Accordion: FunctionComponent<AccordionProps> = ({
	accordionHandler,
	accordionDetails,
}) => {
	return (
		<Fragment>
			<AccordionBar
				accordionHandler={accordionHandler}
				accordionButtonName={accordionDetails.accordianBarName}
				ariaControlType={accordionDetails.accordionType}
				isExpanded={accordionDetails.isOpen ? accordionDetails.isOpen : false}
			/>
			<AccordionMenu
				dropdownMenuDetails={accordionDetails.linkInformation}
				accordionId={accordionDetails.accordionType}
				isExpanded={accordionDetails.isOpen ? accordionDetails.isOpen : false}
			/>
		</Fragment>
	);
};
