import { DataSourceItem } from './typings';

export const MOCK_DATA_SOURCE: DataSourceItem[] = [
  {
    label: 'AMP Bank',
    value: 'AMP',
  },
  {
    label: 'ANZ',
    value: 'anz',
  },
  {
    label: 'Adelaide Bank',
    value: 'ADE',
  },
  {
    label: 'Adelaide Bank (Commercial)',
    value: 'ADEC',
  },
  {
    label: 'Australian First Mortgage',
    value: 'AFM',
  },
  {
    label: 'Auswide Bank',
    value: 'auswide',
  },
  {
    label: 'B&E',
    value: 'bande',
  },
  {
    label: 'BCU',
    value: 'bcu',
  },
  {
    label: 'BMM',
    value: 'BMM',
  },
  {
    label: 'BMM (Commercial)',
    value: 'BMMC',
  },
  {
    label: 'Bank SA',
    value: 'BSA',
  },
  {
    label: 'Bank of Melbourne',
    value: 'bom',
  },
  {
    label: 'Bank of Queensland',
    value: 'boq',
  },
  {
    label: 'Bank of Sydney',
    value: 'banksyd',
  },
  {
    label: 'BankMeCU',
    value: 'bankmecu',
  },
  {
    label: 'BankSA',
    value: 'banksa',
  },
  {
    label: 'BankVic',
    value: 'bankvic',
  },
  {
    label: 'Bankwest',
    value: 'bankwest',
  },
  {
    label: 'Bendigo Bank',
    value: 'bendigo',
  },
  {
    label: 'Beyond Bank',
    value: 'beyondbank',
  },
  {
    label: 'Big Sky Building Society',
    value: 'bigsky',
  },
  {
    label: 'Bluebay Home Loans',
    value: 'BLB',
  },
  {
    label: 'Bluestone',
    value: 'BST',
  },
  {
    label: 'CUA',
    value: 'cua',
  },
  {
    label: 'Citibank',
    value: 'citibank',
  },
  {
    label: 'Click Loans',
    value: 'Click_loans',
  },
  {
    label: 'Commonwealth Bank',
    value: 'CBA',
  },
  {
    label: 'Community First Credit Union',
    value: 'communityfirst',
  },
  {
    label: 'Connective HL Essentials by Advantedge',
    value: 'CHLA',
  },
  {
    label: 'Defence Bank',
    value: 'defencebank',
  },
  {
    label: 'Firefighters Mutual Bank',
    value: 'FMB',
  },
  {
    label: 'Firstmac',
    value: 'FMC',
  },
  {
    label: 'Gateway Credit Union',
    value: 'GCU',
  },
  {
    label: 'HSBC',
    value: 'hsbc',
  },
  {
    label: 'Heritage',
    value: 'heritage',
  },
  {
    label: 'Homeloans',
    value: 'HLL',
  },
  {
    label: 'Homeloans (Commercial)',
    value: 'HLLC',
  },
  {
    label: 'IMB',
    value: 'imb',
  },
  {
    label: 'IMB Building Society (Commercial)',
    value: 'IMBSC',
  },
  {
    label: 'ING',
    value: 'ing',
  },
  {
    label: 'ING Direct (Commercial)',
    value: 'INGC',
  },
  {
    label: 'Iden Group',
    value: 'IDE',
  },
  {
    label: 'Illawarra Credit Union',
    value: 'illawarra',
  },
  {
    label: 'La Trobe Financial',
    value: 'La_Trobe',
  },
  {
    label: 'Loan Ave',
    value: 'LOA',
  },
  {
    label: 'ME Bank',
    value: 'mebank',
  },
  {
    label: 'MKM Capital',
    value: 'MKM',
  },
  {
    label: 'Macquarie',
    value: 'macquarie',
  },
  {
    label: 'Macquarie Credit Union',
    value: 'macquariecu',
  },
  {
    label: 'My Credit Union',
    value: 'mycredit',
  },
  {
    label: 'My State',
    value: 'mystate',
  },
  {
    label: 'NAB',
    value: 'NAB',
  },
  {
    label: 'NAB Broker',
    value: 'NABBr',
  },
  {
    label: 'Newcastle Permanent',
    value: 'newcastle',
  },
  {
    label: 'P&N Bank',
    value: 'pnbank',
  },
  {
    label: 'Paramount Mortgage Services',
    value: 'PAM',
  },
  {
    label: "People's Choice Credit Union",
    value: 'peopleschoicecu',
  },
  {
    label: 'Pepper',
    value: 'pepper',
  },
  {
    label: 'Police Bank',
    value: 'policebank',
  },
  {
    label: 'Police Credit Union',
    value: 'policecu',
  },
  {
    label: 'Qantas Credit Union',
    value: 'qantas',
  },
  {
    label: 'RAMS',
    value: 'rams',
  },
  {
    label: 'St.George',
    value: 'stgeorge',
  },
  {
    label: 'Suncorp (Commercial)',
    value: 'SCMC',
  },
  {
    label: 'Suncorp Bank',
    value: 'suncorp',
  },
  {
    label: 'Teachers Mutual Bank',
    value: 'TMB',
  },
  {
    label: 'The Rock',
    value: 'RBS',
  },
  {
    label: 'Victoria Teachers Mutual Bank',
    value: 'victeach',
  },
  {
    label: 'Westpac',
    value: 'Westpac',
  },
  {
    label: 'Westpac (Commercial)',
    value: 'WPCC',
  },
  {
    label: 'Others',
    value: 'other',
  },
];

export function getAsyncData(userInput: string): Promise<DataSourceItem[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const filteredDataSource = MOCK_DATA_SOURCE.filter(
        (data) => data.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      return res(filteredDataSource);
    }, 400);
  });
}

export function getFailedAsyncData(userInput: string): Promise<DataSourceItem[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return rej('Sorry - Async failed');
    }, 400);
  });
}

export function getStaticData(value: string) {
  const filteredDataSource = MOCK_DATA_SOURCE.filter(
    (data) => data.label.toLowerCase().indexOf(value.toLowerCase()) > -1
  );
  return filteredDataSource;
}
