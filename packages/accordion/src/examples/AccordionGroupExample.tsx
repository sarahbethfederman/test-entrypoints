import * as React from 'react';
import { Body, Heading } from '@lendi-ui/typography';
import { AccordionGroup } from '../components/AccordionGroup';
import { Accordion } from '../components/Accordion';
import { Check, Lock } from '@lendi-ui/icon';
import { Button } from '@lendi-ui/button';
export default class AccordionGroupExample extends React.Component {
  whichClicked: string = '';
  state = {
    openGroup: true,
    first: true,
    second: true,
  };
  onClickHandler(event: React.SyntheticEvent, whichOne: string) {
    this.setState(
      {
        openGroup: false,
      },
      () => {
        switch (whichOne) {
          case 'first':
            this.whichClicked = 'first;';
            this.setState({ first: !this.state.first });
            return;
          case 'second':
            this.whichClicked = 'second';
            this.setState({ second: !this.state.second });
            return;

          default:
            this.setState({ first: !this.state.first });
            return;
        }
      }
    );
  }
  render() {
    return (
      <>
        <Body size="lg">Test AccordianGroup to open and close in one go</Body>
        <Body size="md">
          --- <strong>{this.whichClicked}</strong> - Accordion Clicked.
        </Body>
        <br />
        <br />
        <Heading size="md">
          OpenAllState: {JSON.stringify(this.state.openGroup, undefined, 2)} *** Accordion1:{' '}
          {JSON.stringify(this.state.first, undefined, 2)} *** Accordion2:{' '}
          {JSON.stringify(this.state.second, undefined, 2)}
        </Heading>
        <br />
        <br />
        <Button
          variant="secondary"
          onClick={() =>
            this.setState({ openGroup: !this.state.openGroup }, () => {
              this.setState({ first: this.state.openGroup, second: this.state.openGroup });
            })
          }
        >
          Toggle open all
        </Button>
        <br />
        <br />
        <AccordionGroup isOpen={this.state.openGroup}>
          <Accordion isOpen={this.state.first}>
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'first')}
            >
              About
            </Accordion.Header>
            <Accordion.Content>
              <Body size="xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Body>
            </Accordion.Content>
          </Accordion>
          <Accordion isOpen={this.state.second}>
            <Accordion.Header
              after={<Lock color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'second')}
            >
              Lorem Ipsum is simply dummy text of the printing
            </Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
            <Accordion.Content>Item 2</Accordion.Content>
            <Accordion.Content>Item 3</Accordion.Content>
          </Accordion>
        </AccordionGroup>
        <br />
        <br />
      </>
    );
  }
}
