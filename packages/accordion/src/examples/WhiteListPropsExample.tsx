import * as React from 'react';
import { Body } from '@lendi-ui/typography';
import { AccordionGroup } from '../components/AccordionGroup';
import { Accordion } from '../components/Accordion';
import { Check, Lock } from '@lendi-ui/icon';
export default class WhiteListProps extends React.Component {
  whichClicked: string = '';
  state = {
    first: true,
  };
  onClickHandler(event: React.SyntheticEvent, whichOne: string) {
    switch (whichOne) {
      case 'first':
        this.whichClicked = 'first;';
        this.setState({ first: !this.state.first });
        return;

      default:
        this.setState({ first: !this.state.first });
        return;
    }
  }
  render() {
    return (
      <>
        <Body size="lg">LUI Whitelist prop testing</Body>
        <br />
        <AccordionGroup
          id="accordion-group"
          aria-label="label-accordion-group"
          data-data="accordion-group-data-attribute"
        >
          <Accordion isOpen={this.state.first} id="accordion" aria-label="label-accordion">
            <Accordion.Header
              after={<Check color="primary.500" />}
              onClick={(event) => this.onClickHandler(event, 'first')}
              id="accordion-header"
              aria-label="label-accordion-header"
            >
              Aria attributes
            </Accordion.Header>
            <Accordion.Content id="accordion-content" aria-label="label-accordion-content">
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
        </AccordionGroup>
        <br />
        <br />
      </>
    );
  }
}
