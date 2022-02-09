import React, { Fragment, FunctionComponent } from 'react';

type DropdownBarProps = {
  dropdownHandler: () => void;
  dropdownButtonName: string;
}

export const DropdownBar: FunctionComponent<DropdownBarProps> = ({dropdownHandler,  dropdownButtonName}) => {

  return (
    <Fragment>
        <dt>
          <button
            onClick={() => dropdownHandler()}
            className="accordion__button"
            aria-expanded="true"
            aria-controls="accordion-resources" >{dropdownButtonName}</button>
        </dt>
    </Fragment>
  )
}
