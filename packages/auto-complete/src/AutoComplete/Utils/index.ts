import { DataSourceItem } from '..';

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

const makeInputKeyBold = (str: DataSourceItem, find: string): DataSourceItem => {
  var regex = new RegExp(find, 'gi');
  const matchings: RegExpMatchArray | null = str.label.match(regex);
  if (matchings) {
    return {
      label: str.label.replace(new RegExp(matchings[0], 'g'), '<b>' + matchings[0] + '</b>'),
      value: str.value,
    };
  } else {
    return str;
  }
};
