import * as React from 'react';
import { IconButton } from '@lendi-ui/button';
import { Lock, Menu, AirlineSeatReclineExtra, SentimentVerySatisfied, SentimentVeryDissatisfied } from '@lendi-ui/icon';
import { Body } from '@lendi-ui/typography';

export default () => (
  <>
    <Body size="xs" color="shade.500">
      Extra-smol
    </Body>
    <IconButton onClick={() => alert('Have a nice day!')} size="xs" aria-label="Lock" icon={Lock} />
    <br />
    <Body size="sm" color="shade.500">
      Small
    </Body>
    <IconButton onClick={() => alert('Have a really nice day! 😊')} size="sm" aria-label="Menu" icon={Menu} />
    <br />
    <Body size="md" color="shade.500">
      Medium
    </Body>
    <IconButton
      onClick={() => alert('Have an extra nice day! 😉')}
      size="md"
      aria-label="AirlineSeatReclineExtra"
      icon={AirlineSeatReclineExtra}
    />
    <br />
    <Body size="lg" color="shade.500">
      Large
    </Body>
    <IconButton
      onClick={() => alert('Have a really really really nice day! 😁')}
      size="lg"
      aria-label="SentimentVerySatisfied"
      icon={SentimentVerySatisfied}
    />
    <br />
    <Body size="lg" color="shade.500">
      Info.500
    </Body>
    <IconButton
      color="info.500"
      onClick={() => alert("I'm blue 💙")}
      size="lg"
      aria-label="SentimentVerySatisfied"
      icon={SentimentVerySatisfied}
    />
    <br />
    <Body size="lg" color="shade.500">
      Loading
    </Body>
    <IconButton
      color="primary.500"
      onClick={() => alert('Nope')}
      size="lg"
      aria-label="SentimentVerySatisfied"
      icon={SentimentVerySatisfied}
      isLoading
    />
    <br />
    <Body size="lg" color="shade.500">
      Disabled
    </Body>
    <IconButton
      onClick={() => alert("This shouldn't be working here 😮")}
      size="lg"
      aria-label="SentimentVeryDissatisfied"
      icon={SentimentVeryDissatisfied}
      isDisabled
    />
  </>
);
