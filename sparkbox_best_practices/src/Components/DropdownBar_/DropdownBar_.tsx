import React, { Fragment, FunctionComponent } from 'react';

type DropdownBarProps = {
  dropdownHandler: () => void;
  dropdownButtonName: string;
  ariaControlType: string
}

export const DropdownBar: FunctionComponent<DropdownBarProps> = ({dropdownHandler,  dropdownButtonName,  ariaControlType}) => {

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
