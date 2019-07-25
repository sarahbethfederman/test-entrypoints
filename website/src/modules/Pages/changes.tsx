import * as React from 'react';
import styled from 'styled-components';
import { color } from '@lendi-ui/color';
import { Heading } from '@lendi-ui/typography';
import { LENDI_PACKAGES, getValidEntries, sortEntries, formatEntries } from '../../utils/changelogs';

const Changelog = styled.div`
  font-family: 'Open-sans', sans-serif;

  h1 {
    font-family: 'Cabin', sans-serif;
    color: ${color('secondary.500')};
    font-weight: 1000;
  }

  h2 {
    font-family: 'Open-sans', sans-serif;
  }

  h3 {
    font-family: 'Open-sans', sans-serif;
  }

  li {
    font-family: 'Open-sans', sans-serif;
  }

  a {
    color: ${color('primary.500')};
    font-family: 'Cabin', sans-serif;
    font-weight: bold;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;

    :hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
  }
`;

const Page = () => {
  let entries: any = [];

  LENDI_PACKAGES.forEach((packageName: string) => {
    const changelog = require(`@lendi-ui/${packageName}/CHANGELOG.md`);

    const validEntries = getValidEntries(changelog, packageName);
    validEntries.forEach((e: any) => entries.push(e));
  });

  const sortedEntries = sortEntries(entries);
  const content = formatEntries(sortedEntries);

  return (
    <div>
      <Heading size="lg">Changelog</Heading>
      <Changelog dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Page;
