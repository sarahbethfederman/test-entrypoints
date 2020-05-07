import * as React from 'react';
import { LUIGlobalProps } from '@lendi-ui/utils';

import {
  AdelaideBank,
  Amp,
  Anz,
  AustralianFirstMortgage,
  Auswide,
  BankAustralia,
  BankOfMelbourne,
  BankSa,
  BankWest,
  BetterChoice,
  BetterMortgageManagement,
  BlueStone,
  BluebayHomeLoans,
  Citibank,
  ClickLoans,
  CommonwealthBank,
  Connective,
  Firstmac,
  GatewayBank,
  Heritage,
  Hsbc,
  Ing,
  LaTrobe,
  Loanave,
  Macquarie,
  MeBank,
  MkmCapital,
  MyStateBank,
  Nab,
  NewcastlePermanent,
  Paramount,
  Pepper,
  PnBank,
  Resimac,
  StGeorge,
  SuncorpMetway,
  TeachersMutualBank,
  VirginMoney,
  Westpac,
} from './lender-logos-compiled/LenderLogo';

export type LenderIDType =
  | 'adelaide_bank'
  | 'amp'
  | 'anz_bank'
  | 'australian_first_mortgage'
  | 'auswide_bank'
  | 'bank_australia'
  | 'bank_of_melbourne'
  | 'bank_sa'
  | 'bank_west'
  | 'better_choice'
  | 'better_mortgage_mgmt'
  | 'blue_stone'
  | 'bluebay_home_loans'
  | 'citi_bank'
  | 'click_loans'
  | 'commonwealth_bank'
  | 'connective_home_loans'
  | 'first_mac'
  | 'gateway_bank'
  | 'heritage'
  | 'hsbc'
  | 'ing'
  | 'la_trobe'
  | 'loanave'
  | 'macquarie'
  | 'me_bank'
  | 'mkm_capital'
  | 'my_state_bank'
  | 'nab'
  | 'newcastle_permanent_building_society'
  | 'paramount'
  | 'pepper'
  | 'pn_bank'
  | 'resimac'
  | 'st_george'
  | 'suncorp'
  | 'teachers_mutual'
  | 'virgin_money'
  | 'westpac_bank';

export interface LenderLogosProps extends LUIGlobalProps {
  lenderId: LenderIDType;
  width?: string;
  height?: string;
  className?: string;
}

const LenderLogos = ({ lenderId, width = '91px', height = '32px', className = '' }: LenderLogosProps) => {
  switch (lenderId) {
    case 'adelaide_bank':
      return <AdelaideBank width={width} height={height} className={className} data-testd="adelaide_bank" />;
    case 'amp':
      return <Amp width={width} height={height} className={className} data-testd="amp" />;
    case 'anz_bank':
      return <Anz width={width} height={height} className={className} data-testd="anz_bank" />;
    case 'australian_first_mortgage':
      return (
        <AustralianFirstMortgage
          width={width}
          height={height}
          className={className}
          data-testd="australian_first_mortgage"
        />
      );
    case 'auswide_bank':
      return <Auswide width={width} height={height} className={className} data-testd="auswide_bank" />;
    case 'bank_australia':
      return <BankAustralia width={width} height={height} className={className} data-testd="bank_australia" />;
    case 'bank_of_melbourne':
      return <BankOfMelbourne width={width} height={height} className={className} data-testd="bank_of_melbourne" />;
    case 'bank_sa':
      return <BankSa width={width} height={height} className={className} data-testd="bank_sa" />;
    case 'bank_west':
      return <BankWest width={width} height={height} className={className} data-testd="bank_west" />;
    case 'better_choice':
      return <BetterChoice width={width} height={height} className={className} data-testd="better_choice" />;
    case 'better_mortgage_mgmt':
      return (
        <BetterMortgageManagement
          width={width}
          height={height}
          className={className}
          data-testd="better_mortgage_mgmt"
        />
      );
    case 'blue_stone':
      return <BlueStone width={width} height={height} className={className} data-testd="blue_stone" />;
    case 'bluebay_home_loans':
      return <BluebayHomeLoans width={width} height={height} className={className} data-testd="bluebay_home_loans" />;
    case 'citi_bank':
      return <Citibank width={width} height={height} className={className} data-testd="citi_bank" />;
    case 'click_loans':
      return <ClickLoans width={width} height={height} className={className} data-testd="click_loans" />;
    case 'commonwealth_bank':
      return <CommonwealthBank width={width} height={height} className={className} data-testd="commonwealth_bank" />;
    case 'connective_home_loans':
      return <Connective width={width} height={height} className={className} data-testd="connective_home_loans" />;
    case 'first_mac':
      return <Firstmac width={width} height={height} className={className} data-testd="first_mac" />;
    case 'gateway_bank':
      return <GatewayBank width={width} height={height} className={className} data-testd="gateway_bank" />;
    case 'heritage':
      return <Heritage width={width} height={height} className={className} data-testd="heritage" />;
    case 'hsbc':
      return <Hsbc width={width} height={height} className={className} data-testd="hsbc" />;
    case 'ing':
      return <Ing width={width} height={height} className={className} data-testd="ing" />;
    case 'la_trobe':
      return <LaTrobe width={width} height={height} className={className} data-testd="la_trobe" />;
    case 'loanave':
      return <Loanave width={width} height={height} className={className} data-testd="loanave" />;
    case 'macquarie':
      return <Macquarie width={width} height={height} className={className} data-testd="macquarie" />;
    case 'me_bank':
      return <MeBank width={width} height={height} className={className} data-testd="me_bank" />;
    case 'mkm_capital':
      return <MkmCapital width={width} height={height} className={className} data-testd="mkm_capital" />;
    case 'my_state_bank':
      return <MyStateBank width={width} height={height} className={className} data-testd="my_state_bank" />;
    case 'nab':
      return <Nab width={width} height={height} className={className} data-testd="nab" />;
    case 'newcastle_permanent_building_society':
      return (
        <NewcastlePermanent
          width={width}
          height={height}
          className={className}
          data-testd="newcastle_permanent_building_society"
        />
      );
    case 'paramount':
      return <Paramount width={width} height={height} className={className} data-testd="paramount" />;
    case 'pepper':
      return <Pepper width={width} height={height} className={className} data-testd="pepper" />;
    case 'pn_bank':
      return <PnBank width={width} height={height} className={className} data-testd="pn_bank" />;
    case 'resimac':
      return <Resimac width={width} height={height} className={className} data-testd="resimac" />;
    case 'st_george':
      return <StGeorge width={width} height={height} className={className} data-testd="st_george" />;
    case 'suncorp':
      return <SuncorpMetway width={width} height={height} className={className} data-testd="suncorp" />;
    case 'teachers_mutual':
      return <TeachersMutualBank width={width} height={height} className={className} data-testd="teachers_mutual" />;
    case 'virgin_money':
      return <VirginMoney width={width} height={height} className={className} data-testd="virgin_money" />;
    case 'westpac_bank':
      return <Westpac width={width} height={height} className={className} data-testd="westpac_bank" />;
    default:
      return undefined;
  }
};

export default LenderLogos;
