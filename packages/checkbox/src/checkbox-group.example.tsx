import * as React from 'react';
import styled from 'styled-components';
import { Body } from '@lendi-ui/typography';
import { CheckboxGroup } from './CheckboxGroup/index';
import { container } from '@lendi-ui/container';
import { Direction } from './CheckboxGroup/index.style';

const ColumnContainer = styled.div`
  ${container()};
`;

interface ExampleStateElement {
  direction?: Direction;
  description?: string;
  isBoxed?: boolean;
  isDisabled?: boolean;
  values: string[];
  labels: string[];
  value: string[];
}

interface ExampleState {
  groups: ExampleStateElement[];
}

const INITIAL_STATE: ExampleState = {
  groups: [
    {
      description: 'Column CheckboxGroup:',
      values: ['1'],
      labels: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column CheckboxGroup boxed:',
      isBoxed: true,
      values: ['1'],
      labels: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      description: 'Column CheckboxGroup disabled:',
      isDisabled: true,
      values: ['1'],
      labels: ['LUI CheckboxGroup option 1', 'LUI CheckboxGroup option 2', 'LUI CheckboxGroup option 3'],
      value: ['1', '2', '3'],
    },
    {
      direction: 'row',
      description: 'Row CheckboxGroup:',
      values: ['1'],
      labels: ['Yes', 'No', 'Maybe'],
      value: ['1', '2', '3'],
    },
  ],
};

class Example extends React.Component<{}, ExampleState> {
  state: ExampleState = INITIAL_STATE;

  onChange = (e: React.ChangeEvent<HTMLInputElement>, groupIndex: number): void => {
    const newValues = this.state.groups[groupIndex].values.slice(0);

    if (!newValues) {
      return;
    }

    if (newValues.includes(e.currentTarget.value.toString())) {
      const index = newValues.indexOf(e.currentTarget.value.toString());
      newValues.splice(index, 1);
    } else {
      newValues.push(e.currentTarget.value.toString());
    }

    this.setState((prevState) => {
      const tmpGroup = {
        groups: prevState.groups.map((group, index) => {
          if (index !== groupIndex) {
            return group;
          }

          return { ...group, values: newValues };
        }),
      };

      return tmpGroup;
    });
  };

  render() {
    return this.state.groups.map((group, index) => (
      <ColumnContainer key={`CheckboxGroup-col-${index}`}>
        {!!group.description && <Body>{group.description}</Body>}
        <CheckboxGroup
          key={`CheckboxGroup-${index}`}
          values={group.values}
          onChange={(e) => {
            this.onChange(e, index);
          }}
          direction={group.direction}
          isDisabled={group.isDisabled}
          isBoxed={group.isBoxed}
        >
          {group.labels.map((label, subIndex) => (
            <CheckboxGroup.Checkbox
              key={`CheckboxGroup-${index}-${subIndex}`}
              label={label}
              value={group.value[subIndex]}
            />
          ))}
        </CheckboxGroup>
      </ColumnContainer>
    ));
  }
}

export default Example;
