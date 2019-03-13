import * as React from 'react';
import styled from 'styled-components';
import { RadioGroup } from './RadioGroup/index';
import { container } from '@lendi-ui/container';
import { Direction } from './RadioGroup/index.style';

const ColumnContainer = styled.div`
  ${container()};
`;

interface ExampleStateElement {
  direction?: Direction;
  description: string;
  isBoxed?: boolean;
  isDisabled?: boolean;
  selectedValue: string;
  labels: string[];
  value: string[];
}

interface ExampleState {
  groups: ExampleStateElement[];
}

const INITIAL_STATE: ExampleState = {
  groups: [
    {
      description: 'Column RadioGroup:',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup boxed:',
      isBoxed: true,
      selectedValue: '2',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup disabled:',
      isDisabled: true,
      selectedValue: '3',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup disabled:',
      isDisabled: true,
      isBoxed: true,
      selectedValue: '3',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      direction: 'row',
      description: 'Row RadioGroup:',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
  ],
};

class Example extends React.Component<{}, ExampleState> {
  state: ExampleState = INITIAL_STATE;

  onChange = (e: React.ChangeEvent<HTMLInputElement>, groupIndex: number): void => {
    let currentValue = this.state.groups[groupIndex].selectedValue;

    if (currentValue !== e.target.value.toString()) {
      currentValue = e.target.value.toString();
    }

    this.setState((prevState) => {
      const tmpGroup = {
        groups: prevState.groups.map((group, index) => {
          if (index !== groupIndex) {
            return group;
          }
          return { ...group, selectedValue: currentValue };
        }),
      };

      return tmpGroup;
    });
  };

  render() {
    return this.state.groups.map((group, index) => (
      <ColumnContainer key={`RadioGroup-col-${index}`}>
        <RadioGroup
          legend={group.description}
          key={`RadioGroup-${index}`}
          selectedValue={group.selectedValue}
          onChange={(e) => {
            this.onChange(e, index);
          }}
          direction={group.direction}
          isDisabled={group.isDisabled}
          isBoxed={group.isBoxed}
        >
          {group.labels.map((label, subIndex) => (
            <RadioGroup.Radio key={`RadioGroup-${index}-${subIndex}`} label={label} value={group.value[subIndex]} />
          ))}
        </RadioGroup>
      </ColumnContainer>
    ));
  }
}

export default Example;
