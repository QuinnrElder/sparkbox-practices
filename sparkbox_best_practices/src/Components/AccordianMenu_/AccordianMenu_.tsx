import React, { Fragment, FunctionComponent } from 'react';
import "./AccordianMenu_.scss"

//TYPES
import { AccordionMenuDetailsViewModel } from '../../Types/AccordionMenuDetailsViewModel';
import { AccordionTypes } from '../../Types/AccordionEnum_';

type AccordianMenuProps = {
  dropdownMenuDetails: AccordionMenuDetailsViewModel[];
  accordianId: AccordionTypes;
  isExpanded: boolean;
}

export const AccordianMenu: FunctionComponent<AccordianMenuProps> = ({dropdownMenuDetails, accordianId, isExpanded}) => {

  const renderLinks = () => {
    return dropdownMenuDetails.map((detail) => {
      if(detail.link === "") {
        return <li>{detail.linkName}</li>
      } else {
      return (
        <li><a href={detail.link}>{detail.linkName}</a></li>
      )
    }}) 
  }

  return (
    <Fragment>
        <dd className="accordion__content" id={`accordion-${accordianId}`} aria-hidden={!isExpanded}>
          <ul>
            {renderLinks()}
          </ul>
			</dd>
    </Fragment>
  )
}