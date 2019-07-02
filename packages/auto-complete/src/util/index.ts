import { DataSourceItem } from '../types';

export async function extractData(
  userInput: string,
  dataSource: DataSourceItem[] | ((input: string) => Promise<DataSourceItem[]>)
) {
  let filteredDataSource: DataSourceItem[] = [];
  if (userInput !== '') {
    if (!Array.isArray(dataSource)) {
      filteredDataSource = await dataSource(userInput);
    } else {
      filteredDataSource = dataSource.filter((data) => data.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
    }
    filteredDataSource = filteredDataSource.map((d) => makeInputKeyBold(d, userInput.toLowerCase()));
  } else {
    filteredDataSource = [];
  }
  return filteredDataSource;
}

export const makeInputKeyBold = (str: DataSourceItem, find: string): DataSourceItem => {
  var regex = new RegExp(escapeSpecialCharacters(find), 'gi');
  const matchings: RegExpMatchArray | null = str.label.match(regex);
  if (matchings) {
    return {
      label: str.label.replace(new RegExp(escapeSpecialCharacters(matchings[0]), 'g'), '<b>' + matchings[0] + '</b>'),
      value: str.value,
    };
  } else {
    return str;
  }
};

function escapeSpecialCharacters(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, '\\$&');
}

export const getOffsetScrollTop = (menuContainer: any) => {
  // The idea is to calculate the new scrollTop for menuContainer as you scroll up/down. Just a simple mathematics to scroll the
  // container by selected item height. If the additon of selectedItem's offsetTop and offsetHeight cannot be accomodated inside menucontainer,
  // which means if their addition is bigger than menuContainer's offsetHeight then we will make its difference to menuContainer's scrollTop
  // and the addiiton of 7, is just to have extra padding to accodomate the padding we are giving at menuContainer's level - ${py('xxs')};
  // for example - if we change the padding ${py('xxs')} to ${py('xs')}, then we need to change this factor of 7 to 12.
  let newScrollTop = 0;
  if (menuContainer.current) {
    menuContainer.current.scrollTop = 0; // just a reset and calculate again.
    newScrollTop =
      menuContainer.current.querySelector('.selectedItem').offsetTop +
      menuContainer.current.querySelector('.selectedItem').offsetHeight -
      menuContainer.current.offsetHeight +
      7;
  }
  return newScrollTop;
};
// makeInputKeyBold makes you item label to contain html <b> tag to make your selection
// bold, this function remove that, before we send the item to consumer.
export function transformedItem(item: DataSourceItem) {
  return {
    label: item.label.replace(/<\/?[^>]+(>|$)/g, ''), // remove html tag like <b>
    value: item.value,
  };
}
