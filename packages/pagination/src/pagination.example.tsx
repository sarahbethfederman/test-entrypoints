import * as React from 'react';
import styled from 'styled-components';
import Pagination from './index';
import { mx, my, pl, pt } from '@lendi-ui/spacing';

const ExampleWrapper = styled.div`
  ${mx('auto')} display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  ${mx('auto')} ${my('sm')} ${pl('lg')} ${pt('lg')}
    border: 2px solid #00c0a5;
  border-radius: 6px;
  width: 30rem;
  height: 30rem;
`;

export interface ExampleState {
  currentPage: number;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    currentPage: 1,
  };

  handleChange = (nextPage: number) => {
    this.setState({ currentPage: nextPage });
  };

  render() {
    const MyComponent = () => {
      switch (this.state.currentPage) {
        case 1:
          return <Card>#1</Card>;
        case 2:
          return <Card>#2</Card>;
        case 3:
          return <Card>#3</Card>;
        case 4:
          return <Card>#4</Card>;
        case 5:
          return <Card>#5</Card>;
        case 6:
          return <Card>#6</Card>;
        case 7:
          return <Card>#7</Card>;
        case 8:
          return <Card>#8</Card>;
        case 9:
          return <Card>#9</Card>;
        case 10:
          return <Card>#10</Card>;
        default:
          return <Card>#1</Card>;
      }
    };
    return (
      <ExampleWrapper>
        <MyComponent />
        <Pagination
          id="testId"
          className="textClass"
          currentPage={this.state.currentPage}
          onChangePage={this.handleChange}
          totalPages={10}
          visiblePages={7}
        />
      </ExampleWrapper>
    );
  }
}

export default Example;
