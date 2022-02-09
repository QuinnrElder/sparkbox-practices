import React, { Fragment, FunctionComponent } from 'react';
import "./AccordianBar_.scss";

//TYPES
import { AccordionTypes } from '../../Types/AccordionEnum_';

type AccordianBarProps = {
  accordionHandler: (accordionType:AccordionTypes) => void;
  dropdownButtonName: string;
  ariaControlType: AccordionTypes;
  isExpanded: boolean;
}

export const AccordianBar: FunctionComponent<AccordianBarProps> = ({accordionHandler,  dropdownButtonName,  ariaControlType,  isExpanded}) => {

  return (
    <Fragment>
        <dt>
          <button
            onClick={() => accordionHandler(ariaControlType)}
            className="accordion__button"
            aria-expanded={isExpanded}
            aria-controls={`accordion-${ariaControlType}`} >{dropdownButtonName}</button>
        </dt>
    </Fragment>
  )
}
