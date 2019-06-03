import * as React from 'react';
import { MenuItem } from '../../navigation/src/Item/index';
import { Menu } from '../../navigation/src/Menu/index';
import { Navigation } from '../../navigation/src/Navigation/index';
import { ApplicantPanel, ProductProgress } from './BrokerNavigation/ApplicantPanel/index';
import StatusBadge from '@lendi-ui/status-badge';

export interface ExampleState {
  menuState: object;
  currentProgress: object;
  productProgress: ProductProgress;
}

class Example extends React.Component<{}, ExampleState> {
  productProgress: ProductProgress = ProductProgress.empty;
  state = {
    menuState: {
      loanProfile: true,
      loanOptions: false,
      documents: false,
      loanProgress: false,
      dealIQ: false,
    },
    currentProgress: {
      loanStructure: true,
      applicants: false,
      assetsLiabilities: false,
      additionalIncome: false,
      workshopYourDeal: false,
      lenderSelection: false,
      documents: false,
      loanProgress: false,
      additionalFactFind: false,
      dealConditions: false,
      creditHistory: false,
      decisionEngine: false,
    },
    productProgress: this.productProgress,
  };

  onClick = (menuTitle: string) => {
    const menuState = { ...this.state.menuState };
    switch (menuTitle) {
      case 'Loan Profile':
        menuState.loanProfile = !menuState.loanProfile;
        break;
      case 'Loan Options':
        menuState.loanOptions = !menuState.loanOptions;
        break;
      case 'Documents':
        menuState.documents = !menuState.documents;
        break;
      case 'Loan Progress':
        menuState.loanProgress = !menuState.loanProgress;
        break;
      case 'Deal IQ':
        menuState.dealIQ = !menuState.dealIQ;
        break;
      default:
        menuState.loanProfile = !menuState.loanProfile;
        break;
    }
    this.setState({ menuState });
  };

  handleClick = (itemHeader: string) => {
    const defaultProgress = {
      loanStructure: true,
      applicants: false,
      assetsLiabilities: false,
      additionalIncome: false,
      workshopYourDeal: false,
      lenderSelection: false,
      documents: false,
      loanProgress: false,
      additionalFactFind: false,
      dealConditions: false,
      creditHistory: false,
      decisionEngine: false,
    };
    const currentProgress = defaultProgress;
    currentProgress.loanStructure = false;
    let productProgress: ProductProgress = ProductProgress.empty;
    switch (itemHeader) {
      case 'Loan structure':
        currentProgress.loanStructure = true;
        break;
      case 'Applicants':
        currentProgress.applicants = true;
        productProgress = ProductProgress.contactdetails;
        break;
      case 'Assets & liabilities':
        currentProgress.assetsLiabilities = true;
        break;
      case 'Additional income & expenses':
        currentProgress.additionalIncome = true;
        break;
      case 'Workshop your deal':
        currentProgress.workshopYourDeal = true;
        break;
      case 'Lender selection':
        currentProgress.lenderSelection = true;
        break;
      case 'Documents':
        currentProgress.documents = true;
        break;
      case 'Loan Progress':
        currentProgress.loanProgress = true;
        break;
      case 'Additional fact find':
        currentProgress.additionalFactFind = true;
        break;
      case 'Deal conditions':
        currentProgress.dealConditions = true;
        break;
      case 'Credit history':
        currentProgress.creditHistory = true;
        break;
      case 'Decision engine':
        currentProgress.decisionEngine = true;
        break;
      default:
        currentProgress.loanStructure = true;
    }
    this.setState({ currentProgress, productProgress });
  };

  clickLink = (productProgress: ProductProgress) => {
    let nextProgress: ProductProgress = ProductProgress.empty;
    let currentProgress = this.state.currentProgress;
    if (currentProgress.applicants) {
      nextProgress = productProgress;
    } else {
      currentProgress = {
        loanStructure: false,
        applicants: true,
        assetsLiabilities: false,
        additionalIncome: false,
        workshopYourDeal: false,
        lenderSelection: false,
        documents: false,
        loanProgress: false,
        additionalFactFind: false,
        dealConditions: false,
        creditHistory: false,
        decisionEngine: false,
      };
      nextProgress = productProgress;
    }
    this.setState({ productProgress: nextProgress, currentProgress });
  };

  render() {
    const { menuState, currentProgress, productProgress } = this.state;
    return (
      <Navigation width="376px" id="navigationId" aria-label="navigationLabel" data-text="nav-text">
        <Menu menuTitle="Loan Profile" isOpen={menuState.loanProfile} onClick={this.onClick}>
          <MenuItem
            itemHeader="Loan structure"
            isSelected={currentProgress.loanStructure}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
          <MenuItem
            itemHeader="Applicants"
            isSelected={currentProgress.applicants}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
          >
            <ApplicantPanel
              applicantName="Leo Lyu"
              applicantState={{
                contactDetails: true,
                personalDetails: true,
                employmentHistory: true,
                eConsent: true,
              }}
              productProgress={productProgress}
              clickLink={this.clickLink}
            />
          </MenuItem>
          <MenuItem
            itemHeader="Assets & liabilities"
            isSelected={currentProgress.assetsLiabilities}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
          <MenuItem
            itemHeader="Additional income & expenses"
            isSelected={currentProgress.additionalIncome}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
          />
        </Menu>
        <Menu menuTitle="Loan Options" isOpen={menuState.loanOptions} onClick={this.onClick}>
          <MenuItem
            itemHeader="Workshop your deal"
            isSelected={currentProgress.workshopYourDeal}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
          <MenuItem
            itemHeader="Lender selection"
            isSelected={currentProgress.lenderSelection}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
          />
        </Menu>
        <Menu menuTitle="Documents" isOpen={menuState.documents} onClick={this.onClick}>
          <MenuItem
            itemHeader="Documents"
            isSelected={currentProgress.documents}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
        </Menu>
        <Menu menuTitle="Loan Progress" isOpen={menuState.loanProgress} onClick={this.onClick}>
          <MenuItem
            itemHeader="Loan Progress"
            isSelected={currentProgress.loanProgress}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
        </Menu>
        <Menu menuTitle="Deal IQ" isOpen={menuState.dealIQ} onClick={this.onClick}>
          <MenuItem
            itemHeader="Additional fact find"
            isSelected={currentProgress.additionalFactFind}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
          <MenuItem
            itemHeader="Deal conditions"
            isSelected={currentProgress.dealConditions}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />}
          />
          <MenuItem
            itemHeader="Credit history"
            isSelected={currentProgress.creditHistory}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
          />
          <MenuItem
            itemHeader="Decision engine"
            isSelected={currentProgress.decisionEngine}
            handleClick={this.handleClick}
            badge={<StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />}
          />
        </Menu>
      </Navigation>
    );
  }
}

export default Example;
