import React, { Fragment, FunctionComponent } from 'react';
import { DropdownMenuDetailsViewModel } from '../../Types/DropdownMenuDetailsViewModel';

type DropdownMenuProps = {
  dropdownMenuDetails: DropdownMenuDetailsViewModel[]
  accordianId: string
}

export const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({dropdownMenuDetails, accordianId}) => {

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