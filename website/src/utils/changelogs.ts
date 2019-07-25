import metadata from 'workspace-metadata';
const dayjs = require('dayjs');

export const formatDate = (date: string) => {
  const parts = date.split('-');
  if (parts[1].length === 1) {
    parts[1] = '0' + parts[1];
  }
  if (parts[2].length === 1) {
    parts[2] = '0' + parts[2];
  }

  return parts.join('-');
};

export const getValidEntries = (changelog: string, packageName: string) => {
  const entries = changelog.match(/(<h2[\s\S]*?<\/ul>)/gm);

  let validEntries: any[] = [];
  const fourWeeksAgo = dayjs().subtract(4, 'weeks');
  entries &&
    entries.forEach((entry) => {
      const dates = entry.match(/\d{4}-\d{1,}-\d{1,}/);
      if (Array.isArray(dates) && dates.length > 0) {
        const date = formatDate(dates[0]);
        const isLessThanFourWeeksOld = dayjs(date).isAfter(fourWeeksAgo);
        if (isLessThanFourWeeksOld) {
          validEntries.push({ entry, packageName, date });
        }
      }
    });

  return validEntries;
};

export const sortEntries = (entries: any[]) => {
  return entries.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });
};

const capitalise = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

const getRegexValue = (content: string, regex: RegExp) => {
  const match = regex.exec(content);
  if (Array.isArray(match)) {
    return match[0];
  }

  return '';
};

export const formatEntries = (entries: any[]) => {
  let currentDate = '';

  return entries.reduce((acc, { packageName, entry, date }) => {
    if (date !== currentDate) {
      acc += `<h1>${date}</h1>`;
      currentDate = date;
    }
    const versionNumber = getRegexValue(entry, /\[\d\.\d\.\d\]/);
    const ticketNumber = getRegexValue(entry, /hub-\d{1,3}/).toUpperCase();

    acc += `<h2>${capitalise(
      packageName
    )} - ${versionNumber} - <a href="https://creditandfinance.atlassian.net/browse/${ticketNumber}">${ticketNumber}</a></h2>`;
    acc += getRegexValue(entry, /<h3[\s\S]*/);

    return acc;
  }, '');
};

const BLACKLISTED_PACKAGES = ['doc-utils'];
export const LENDI_PACKAGES = metadata.workspaces
  .map((ws) => ws.name.substr(10))
  .filter((packageName) => !BLACKLISTED_PACKAGES.includes(packageName));
