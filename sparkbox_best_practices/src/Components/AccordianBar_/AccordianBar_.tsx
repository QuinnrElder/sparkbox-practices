import React, { Fragment, FunctionComponent } from 'react';
import "./AccordianBar_.scss";

type AccordianBarProps = {
  dropdownHandler: () => void;
  dropdownButtonName: string;
  ariaControlType: string
}

export const AccordianBar: FunctionComponent<AccordianBarProps> = ({dropdownHandler,  dropdownButtonName,  ariaControlType}) => {

  return (
    <Fragment>
        <dt>
          <button
            onClick={() => dropdownHandler()}
            className="accordion__button"
            aria-expanded="true"
            aria-controls={`accordion-${ariaControlType}`} >{dropdownButtonName}</button>
        </dt>
    </Fragment>
  )
}
