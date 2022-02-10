import { AccordionTypes } from "./AccordionEnum_"

export type MockDataDetailsViewModel = AccordianViewModel[]

export type AccordianViewModel = {
    accordianBarName: string;
    isOpen?: boolean
    accordionType: AccordionTypes;
    linkInformation: LinkInformationViewModel[]
}

export type LinkInformationViewModel = {
    link: string,
    linkName: string;
}