import { AccordionTypes } from "./AccordionEnum_"

export type MockDataDetailsViewModel = AccordionViewModel[]

export type AccordionViewModel = {
    accordianBarName: string;
    isOpen?: boolean
    accordionType: AccordionTypes;
    linkInformation: LinkInformationViewModel[]
}

export type LinkInformationViewModel = {
    link: string,
    linkName: string;
}