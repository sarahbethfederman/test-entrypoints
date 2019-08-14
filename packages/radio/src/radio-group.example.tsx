import * as React from 'react';
import styled from 'styled-components';
import { container } from '@lendi-ui/container';
import { RadioGroup } from './RadioGroup/index';
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
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

interface ExampleState {
  groups: ExampleStateElement[];
}

const INITIAL_STATE: ExampleState = {
  groups: [
    {
      description: 'Column RadioGroup Boxed(xs):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'xs',
      isBoxed: true,
    },
    {
      description: 'Column RadioGroup (xs):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'xs',
      isBoxed: false,
    },
    {
      description: 'Column RadioGroup disabled (xs):',
      isDisabled: true,
      selectedValue: '3',
      size: 'xs',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup Boxed(sm):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'sm',
      isBoxed: true,
    },
    {
      description: 'Column RadioGroup (sm):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'sm',
      isBoxed: false,
    },
    {
      description: 'Column RadioGroup disabled (xs):',
      isDisabled: true,
      selectedValue: '3',
      size: 'sm',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup Boxed(md):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'md',
      isBoxed: true,
    },
    {
      description: 'Column RadioGroup (md):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'md',
      isBoxed: false,
    },
    {
      description: 'Column RadioGroup disabled (md):',
      isDisabled: true,
      selectedValue: '3',
      size: 'md',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column RadioGroup Boxed(lg):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'lg',
      isBoxed: true,
    },
    {
      description: 'Column RadioGroup (lg):',
      selectedValue: '1',
      labels: ['LUI RadioGroup option 1', 'LUI RadioGroup option 2', 'LUI RadioGroup option 3'],
      value: ['1', '2', '3'],
      size: 'lg',
      isBoxed: false,
    },
    {
      description: 'Column RadioGroup disabled (lg):',
      isDisabled: true,
      selectedValue: '3',
      size: 'lg',
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
    {
      direction: 'row',
      description: 'Row RadioGroup Boxed:',
      selectedValue: '1',
      isBoxed: true,
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
    return this.state.groups.map(({ labels, value, ...props }, index) => (
      <ColumnContainer key={`RadioGroup-col-${index}`}>
        <RadioGroup
          key={`RadioGroup-${index}`}
          onChange={(e) => {
            this.onChange(e, index);
          }}
          {...props}
        >
          {labels.map((label, subIndex) => (
            <RadioGroup.Radio key={`RadioGroup-${index}-${subIndex}`} label={label} value={value[subIndex]} />
          ))}
        </RadioGroup>
      </ColumnContainer>
    ));
  }
}

export default Example;
