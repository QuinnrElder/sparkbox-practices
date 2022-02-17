import React, { Fragment, FunctionComponent } from "react";
import "./AccordionMenu_.scss";

//TYPES
import { AccordionMenuDetailsViewModel } from "../../Types/AccordionMenuDetailsViewModel";
import { AccordionTypes } from "../../Types/AccordionEnum_";

//THIS.TYPE
type AccordionMenuProps = {
	dropdownMenuDetails: AccordionMenuDetailsViewModel[];
	accordionId: AccordionTypes;
	isExpanded: boolean;
};

//THIS.COMPONENT
export const AccordionMenu: FunctionComponent<AccordionMenuProps> = ({
	dropdownMenuDetails,
	accordionId,
	isExpanded,
}) => {
	const renderLinks = () => {
		return dropdownMenuDetails.map((detail) => {
			if (detail.link === "") {
				return <li key={detail.linkName}>{detail.linkName}</li>;
			} else {
				return (
					<li key={detail.linkName}>
						<a href={detail.link}>{detail.linkName}</a>
					</li>
				);
			}
		});
	};

	return (
		<Fragment>
			<dd
				className="accordion__content"
				id={`accordion-${accordionId}`}
				// The reason for the BANG oporator is we want the value to be opposite
				// of the  state of the accordion... QRE - Feb 10th, 2022
				aria-hidden={!isExpanded}
			>
				<ul>{renderLinks()}</ul>
			</dd>
		</Fragment>
	);
};
