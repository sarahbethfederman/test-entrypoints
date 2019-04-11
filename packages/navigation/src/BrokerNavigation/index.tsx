import * as React from 'react';
import { MenuItem } from '../Item/index';
import { Menu } from '../Menu/index';
import { Navigation } from '../Navigation/index';
import StatusBadge from '@lendi-ui/status-badge';
import { ApplicantPanel, ProductProgress, ApplicantState } from './ApplicantPanel/index';

export enum MenuTitle {
  loanProfile = 'Loan Profile',
  loanOptions = 'Loan Options',
  documents = 'Documents',
  loanProgress = 'Loan Progress',
  dealIQ = 'Deal IQ',
}

export enum ItemHeader {
  loanStructure = 'Loan structure',
  applicants = 'Applicants',
  assetsLiabilities = 'Assets & liabilities',
  additionalIncome = 'Additional income & expenses',
  workshopYourDeal = 'Workshop your deal',
  lenderSelection = 'Lender selection',
  documents = 'Documents',
  loanProgress = 'Loan Progress',
  additionalFactFind = 'Additional fact find',
  dealConditions = 'Deal conditions',
  creditHistory = 'Credit history',
  decisionEngine = 'Decision engine',
}

export type ProcessState = {
  loanStructure: boolean;
  applicants: boolean;
  assetsLiabilities: boolean;
  additionalIncome: boolean;
  workshopYourDeal: boolean;
  lenderSelection: boolean;
  documents: boolean;
  loanProgress: boolean;
  additionalFactFind: boolean;
  dealConditions: boolean;
  creditHistory: boolean;
  decisionEngine: boolean;
};

export interface BrokerNavigationProps {
  width?: string;
  processState: ProcessState;
  applicantName: string;
  applicantState: ApplicantState;
  callNextPageWith: (url: string) => void;
  className?: string;
}

export interface MenuState {
  loanProfile: boolean;
  loanOptions: boolean;
  documents: boolean;
  loanProgress: boolean;
  dealIQ: boolean;
}

export interface CurrentProgress {
  loanStructure: boolean;
  applicants: boolean;
  assetsLiabilities: boolean;
  additionalIncome: boolean;
  workshopYourDeal: boolean;
  lenderSelection: boolean;
  documents: boolean;
  loanProgress: boolean;
  additionalFactFind: boolean;
  dealConditions: boolean;
  creditHistory: boolean;
  decisionEngine: boolean;
}

export interface BrokerNavigationState {
  menuState: MenuState;
  currentProgress: CurrentProgress;
  productProgress: ProductProgress;
}

export class BrokerNavigation extends React.Component<BrokerNavigationProps, BrokerNavigationState> {
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

  onClick = (menuTitle: string | MenuTitle) => {
    const menuState = { ...this.state.menuState };
    switch (menuTitle) {
      case MenuTitle.loanProfile:
        menuState.loanProfile = !menuState.loanProfile;
        break;
      case MenuTitle.loanOptions:
        menuState.loanOptions = !menuState.loanOptions;
        break;
      case MenuTitle.documents:
        menuState.documents = !menuState.documents;
        break;
      case MenuTitle.loanProgress:
        menuState.loanProgress = !menuState.loanProgress;
        break;
      case MenuTitle.dealIQ:
        menuState.dealIQ = !menuState.dealIQ;
        break;
      default:
        menuState.loanProfile = !menuState.loanProfile;
        break;
    }
    this.setState({ menuState });
  };

  handleClick = (itemHeader: string | ItemHeader) => {
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
      case ItemHeader.loanStructure:
        currentProgress.loanStructure = true;
        this.props.callNextPageWith('/loan-structure');
        break;
      case ItemHeader.applicants:
        currentProgress.applicants = true;
        productProgress = ProductProgress.contactdetails;
        this.props.callNextPageWith('/applicants');
        break;
      case ItemHeader.assetsLiabilities:
        currentProgress.assetsLiabilities = true;
        this.props.callNextPageWith('/assets_and_liabilities');
        break;
      case ItemHeader.additionalIncome:
        currentProgress.additionalIncome = true;
        this.props.callNextPageWith('/income_and_expense');
        break;
      case ItemHeader.workshopYourDeal:
        currentProgress.workshopYourDeal = true;
        this.props.callNextPageWith('/workshop');
        break;
      case ItemHeader.lenderSelection:
        currentProgress.lenderSelection = true;
        this.props.callNextPageWith('/lender-selection');
        break;
      case ItemHeader.documents:
        currentProgress.documents = true;
        this.props.callNextPageWith('/documents');
        break;
      case ItemHeader.loanProgress:
        currentProgress.loanProgress = true;
        this.props.callNextPageWith('/progress');
        break;
      case ItemHeader.additionalFactFind:
        currentProgress.additionalFactFind = true;
        this.props.callNextPageWith('/additional-fact');
        break;
      case ItemHeader.dealConditions:
        currentProgress.dealConditions = true;
        this.props.callNextPageWith('/deal-conditions');
        break;
      case ItemHeader.creditHistory:
        currentProgress.creditHistory = true;
        this.props.callNextPageWith('/credit-history');
        break;
      case ItemHeader.decisionEngine:
        currentProgress.decisionEngine = true;
        this.props.callNextPageWith('/decision-engine');
        break;
      default:
        currentProgress.loanStructure = true;
        this.props.callNextPageWith('/loan-structure');
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
    const { width = '376px', processState, applicantName, applicantState, className } = this.props;
    return (
      <Navigation width={width} className={className}>
        <Menu menuTitle={MenuTitle.loanProfile} isOpen={menuState.loanProfile} onClick={this.onClick}>
          <MenuItem
            itemHeader={ItemHeader.loanStructure}
            isSelected={currentProgress.loanStructure}
            handleClick={this.handleClick}
            badge={
              processState.loanStructure ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.applicants}
            isSelected={currentProgress.applicants}
            handleClick={this.handleClick}
            badge={
              processState.applicants ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          >
            <ApplicantPanel
              applicantName={applicantName}
              applicantState={applicantState}
              productProgress={productProgress}
              clickLink={this.clickLink}
            />
          </MenuItem>
          <MenuItem
            itemHeader={ItemHeader.assetsLiabilities}
            isSelected={currentProgress.assetsLiabilities}
            handleClick={this.handleClick}
            badge={
              processState.assetsLiabilities ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.additionalIncome}
            isSelected={currentProgress.additionalIncome}
            handleClick={this.handleClick}
            badge={
              processState.additionalIncome ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
        </Menu>
        <Menu menuTitle={MenuTitle.loanOptions} isOpen={menuState.loanOptions} onClick={this.onClick}>
          <MenuItem
            itemHeader={ItemHeader.workshopYourDeal}
            isSelected={currentProgress.workshopYourDeal}
            handleClick={this.handleClick}
            badge={
              processState.workshopYourDeal ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.lenderSelection}
            isSelected={currentProgress.lenderSelection}
            handleClick={this.handleClick}
            badge={
              processState.lenderSelection ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
        </Menu>
        <Menu menuTitle={MenuTitle.documents} isOpen={menuState.documents} onClick={this.onClick}>
          <MenuItem
            itemHeader={ItemHeader.documents}
            isSelected={currentProgress.documents}
            handleClick={this.handleClick}
            badge={
              processState.documents ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
        </Menu>
        <Menu menuTitle={MenuTitle.loanProgress} isOpen={menuState.loanProgress} onClick={this.onClick}>
          <MenuItem
            itemHeader={ItemHeader.loanProgress}
            isSelected={currentProgress.loanProgress}
            handleClick={this.handleClick}
            badge={
              processState.loanProgress ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
        </Menu>
        <Menu menuTitle={MenuTitle.dealIQ} isOpen={menuState.dealIQ} onClick={this.onClick}>
          <MenuItem
            itemHeader={ItemHeader.additionalFactFind}
            isSelected={currentProgress.additionalFactFind}
            handleClick={this.handleClick}
            badge={
              processState.additionalFactFind ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.dealConditions}
            isSelected={currentProgress.dealConditions}
            handleClick={this.handleClick}
            badge={
              processState.dealConditions ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.creditHistory}
            isSelected={currentProgress.creditHistory}
            handleClick={this.handleClick}
            badge={
              processState.creditHistory ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
          <MenuItem
            itemHeader={ItemHeader.decisionEngine}
            isSelected={currentProgress.decisionEngine}
            handleClick={this.handleClick}
            badge={
              processState.decisionEngine ? (
                <StatusBadge variant="success" hasIcon={false} size="sm" statusText="COMPLETED" />
              ) : (
                <StatusBadge variant="warn" hasIcon={false} size="sm" statusText="INCOMPLETED" />
              )
            }
          />
        </Menu>
      </Navigation>
    );
  }
}
