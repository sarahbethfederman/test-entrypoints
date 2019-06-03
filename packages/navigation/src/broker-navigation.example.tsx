import * as React from 'react';
import { BrokerNavigation } from './BrokerNavigation/index';

export default () => (
  <BrokerNavigation
    callNextPageWith={(url) => alert(`${url} was called`)}
    processState={{
      loanStructure: true,
      applicants: true,
      assetsLiabilities: false,
      additionalIncome: true,
      workshopYourDeal: false,
      lenderSelection: false,
      documents: false,
      loanProgress: true,
      additionalFactFind: false,
      dealConditions: true,
      creditHistory: false,
      decisionEngine: true,
    }}
    applicantName="leo leo"
    applicantState={{
      contactDetails: true,
      personalDetails: true,
      employmentHistory: true,
      eConsent: true,
    }}
    id="brokerNavId"
    aria-label="brokerNav"
  />
);
