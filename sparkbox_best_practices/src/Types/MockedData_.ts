export type MockDataDetailsViewModel = {
  resources: AccordianViewModel;
  markup: AccordianViewModel;
  behavior: AccordianViewModel
}

export type AccordianViewModel = {
    accordianBarName: string;
    linkInformation: LinkInformationViewModel[]
}

export type LinkInformationViewModel = {
    link: string,
    linkName: string;
}