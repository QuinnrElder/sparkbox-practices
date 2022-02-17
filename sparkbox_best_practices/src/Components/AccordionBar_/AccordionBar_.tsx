import React, { Fragment, FunctionComponent } from "react";
import "./AccordionBar_.scss";

//TYPES
import { AccordionTypes } from "../../Types/AccordionEnum_";

//THIS.TYPE
type AccordionBarProps = {
	accordionHandler: (accordionType: AccordionTypes) => void;
	accordionButtonName: string;
	ariaControlType: AccordionTypes;
	isExpanded: boolean;
};

//THIS.COMPONENT
export const AccordionBar: FunctionComponent<AccordionBarProps> = ({
	accordionHandler,
	accordionButtonName,
	ariaControlType,
	isExpanded,
}) => {
	return (
		<Fragment>
			<dt>
				<button
					onClick={() => accordionHandler(ariaControlType)}
					className="accordion__button"
					aria-expanded={isExpanded}
					aria-controls={`accordion-${ariaControlType}`}
				>
					{accordionButtonName}
				</button>
			</dt>
		</Fragment>
	);
};
