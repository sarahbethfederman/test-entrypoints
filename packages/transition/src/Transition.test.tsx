import * as React from 'react';
import { mount } from 'enzyme';
import Transition from './Transition';

describe('Transition', () => {
  let rAF: jest.Mock;
  let sT: jest.Mock;

  beforeEach(() => {
    rAF = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    sT = jest.spyOn(window, 'setTimeout').mockImplementation((cb) => cb());
  });

  afterEach(() => {
    rAF.mockReset();
    sT.mockReset();
  });

  const ChildComponent = () => <div>Hello World!</div>;

  it('should call onStateChange with the state in order when entering', () => {
    const onStateChange = jest.fn();
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ active: true, onStateChange });
    expect(onStateChange.mock.calls[0]).toEqual(['enter']);
    expect(onStateChange.mock.calls[1]).toEqual(['entering']);
    expect(onStateChange.mock.calls[2]).toEqual(['entered']);
  });

  it('should call onStateChange with the state in order when exiting', () => {
    const onStateChange = jest.fn();
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ active: false, onStateChange });
    expect(onStateChange.mock.calls[0]).toEqual(['exit']);
    expect(onStateChange.mock.calls[1]).toEqual(['exiting']);
    expect(onStateChange.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition active={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ active: true });
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition active={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ active: false });
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering on mount with appear=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={true} timeout={100} appear={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting on mount with appear=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with an undefined state when entering on mount with appear=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should call the faac with an undefined state when exiting on mount with appear=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should render the child component when the state is undefined', () => {
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component when the state is undefined and mountOnEnter=true', () => {
    const element = mount(
      <Transition active={false} timeout={100} mountOnEnter={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(0);
  });

  it('should render the child component when exit', () => {
    const element = mount(
      <Transition active={true} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ active: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component after exit', () => {
    const element = mount(
      <Transition active={true} timeout={100} unmountOnExit={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ active: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(0);
  });
});

describe('Transition', () => {
  let rAF: jest.Mock;
  let sT: jest.Mock;

  beforeEach(() => {
    rAF = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    sT = jest.spyOn(window, 'setTimeout').mockImplementation((cb) => cb());
  });

  afterEach(() => {
    rAF.mockReset();
    sT.mockReset();
  });

  const ChildComponent = () => <div>Hello World!</div>;

  it('should call onStateChange with the state in order when entering', () => {
    const onStateChange = jest.fn();
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ active: true, onStateChange });
    expect(onStateChange.mock.calls[0]).toEqual(['enter']);
    expect(onStateChange.mock.calls[1]).toEqual(['entering']);
    expect(onStateChange.mock.calls[2]).toEqual(['entered']);
  });

  it('should call onStateChange with the state in order when exiting', () => {
    const onStateChange = jest.fn();
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ active: false, onStateChange });
    expect(onStateChange.mock.calls[0]).toEqual(['exit']);
    expect(onStateChange.mock.calls[1]).toEqual(['exiting']);
    expect(onStateChange.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition active={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ active: true });
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition active={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ active: false });
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering on mount with appear=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={true} timeout={100} appear={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting on mount with appear=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with an undefined state when entering on mount with appear=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should call the faac with an undefined state when exiting on mount with appear=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition active={false} timeout={100} appear={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should render the child component when the state is undefined', () => {
    const element = mount(
      <Transition active={false} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component when the state is undefined and mountOnEnter=true', () => {
    const element = mount(
      <Transition active={false} timeout={100} mountOnEnter={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(0);
  });

  it('should render the child component when exit', () => {
    const element = mount(
      <Transition active={true} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ active: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component after exit', () => {
    const element = mount(
      <Transition active={true} timeout={100} unmountOnExit={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ active: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(0);
  });
});
