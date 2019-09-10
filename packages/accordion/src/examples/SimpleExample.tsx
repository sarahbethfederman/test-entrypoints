import * as React from 'react';
import { Body, Link } from '@lendi-ui/typography';
import { Check, Lock } from '@lendi-ui/icon';
import { Button } from '@lendi-ui/button';
import { AccordionGroup } from '../components/AccordionGroup';
import { Accordion } from '../components/Accordion';

export default class SimpleAccordionExample extends React.Component {
  whichClicked: string = '';
  state = {
    first: true,
    second: false,
    third: false,
    forth: false,
  };
  onClickHandler(event: React.SyntheticEvent, whichOne: string) {
    switch (whichOne) {
      case 'first':
        this.whichClicked = 'first;';
        this.setState({ first: !this.state.first });
        return;
      case 'second':
        this.whichClicked = 'second';
        this.setState({ second: !this.state.second });
        return;
      case 'third':
        this.whichClicked = 'third';
        this.setState({ third: !this.state.third });
        return;
      case 'forth':
        this.whichClicked = 'forth';
        this.setState({ forth: !this.state.forth });
        return;
      default:
        this.setState({ first: !this.state.first });
        return;
    }
  }
  render() {
    return (
      <>
        <Body size="lg">Consumer will manage the opening and closing of the Accordion</Body>
        <br />
        <Body size="md">
          --- <strong>{this.whichClicked}</strong> - Accordion Clicked.
        </Body>
        <br />
        <AccordionGroup>
          <Accordion isOpen={this.state.first}>
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'first')}
            >
              About
            </Accordion.Header>
            <Accordion.Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{' '}
              <Link href="#">Here's some clickable content within the accordion content</Link>. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Accordion.Content>
          </Accordion>
          <Accordion isOpen={this.state.second} data-id="second">
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
          <Accordion isOpen={this.state.third} data-id="third" isDisabled={true}>
            <Accordion.Header onClick={(event) => this.onClickHandler(event, 'third')}>Calculator</Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
            <Accordion.Content>Item 2</Accordion.Content>
            <Accordion.Content>Item 3</Accordion.Content>
          </Accordion>
          <Accordion isOpen={this.state.forth} data-id="forth">
            <Accordion.Header onClick={(event) => this.onClickHandler(event, 'forth')}>More</Accordion.Header>
            <Accordion.Content>Item 1</Accordion.Content>
            <Accordion.Content>Item 2</Accordion.Content>
            <Accordion.Content>Item 3</Accordion.Content>
            <Accordion.Content>
              <Button variant="primary">Test button</Button>
            </Accordion.Content>
          </Accordion>
        </AccordionGroup>
        <br />
        <br />
      </>
    );
  }
}
