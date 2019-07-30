import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { AccordionGroup } from '../components/AccordionGroup';
import { Accordion } from '../components/Accordion';
import { Check, Lock } from '@lendi-ui/icon';
import styled from 'styled-components';
import { pl } from '@lendi-ui/spacing';

export default class SizeAndAlignment extends React.Component {
  state = {
    first: true,
    second: false,
    third: false,
  };
  onClickHandler(event: React.SyntheticEvent, whichOne: string) {
    switch (whichOne) {
      case 'first':
        this.setState({ first: !this.state.first });
        return;
      case 'second':
        this.setState({ second: !this.state.second });
        return;
      case 'third':
        this.setState({ third: !this.state.third });
        return;

      default:
        this.setState({ first: !this.state.first });
        return;
    }
  }
  render() {
    return (
      <>
        <Body size="lg">Size and Alignment</Body>
        <br />
        <AccordionGroup>
          <Accordion isOpen={this.state.first}>
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'first')}
              id="accordion-header"
              aria-label="label-accordion-header"
            >
              'SM' header
            </Accordion.Header>
            <Accordion.Content>
              <Body size="xs">Body 'xs' size</Body>
            </Accordion.Content>
          </Accordion>
          <Accordion isOpen={this.state.second}>
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'second')}
            >
              'MD' header
            </Accordion.Header>
            <Accordion.Content>
              <Body size="md">Body 'MD' size</Body>
            </Accordion.Content>
          </Accordion>
          <Accordion isOpen={this.state.third}>
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'third')}
            >
              'LG' header
            </Accordion.Header>
            <Accordion.Content>
              <Body size="lg">Body 'LG' size</Body>
            </Accordion.Content>
          </Accordion>
        </AccordionGroup>
        <br />
        <br />
      </>
    );
  }
}
