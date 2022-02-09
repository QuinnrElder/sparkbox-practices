import React, { Fragment, FunctionComponent } from 'react';
import "./AccordianMenu_.scss"

//TYPES
import { DropdownMenuDetailsViewModel } from '../../Types/DropdownMenuDetailsViewModel';

type AccordianMenuProps = {
  dropdownMenuDetails: DropdownMenuDetailsViewModel[]
  accordianId: string
}

export const AccordianMenu: FunctionComponent<AccordianMenuProps> = ({dropdownMenuDetails, accordianId}) => {

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
        <dd className="accordion__content" id={`accordion-${accordianId}`} aria-hidden="false">
          <ul>
            {renderLinks()}
          </ul>
			</dd>
    </Fragment>
  )
}