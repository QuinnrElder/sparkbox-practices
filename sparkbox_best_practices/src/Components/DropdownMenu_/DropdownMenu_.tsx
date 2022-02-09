import React, { Fragment, FunctionComponent } from 'react';
import { DropdownMenuDetailsViewModel } from '../../Types/DropdownMenuDetailsViewModel';

type DropdownMenuProps = {
  dropdownMenuDetails: DropdownMenuDetailsViewModel[]
}

export const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({dropdownMenuDetails}) => {

  const renderLinks = () => {
    return dropdownMenuDetails.map((detail) => {
      return (
        <li><a href={detail.link}>{detail.linkName}</a></li>
      )
    }) 
  }

  return (
    <Fragment>
        <dd className="accordion__content" id="accordion-resources" aria-hidden="false">
          <ul>
            {renderLinks()}
          </ul>
			</dd>
    </Fragment>
  )
}