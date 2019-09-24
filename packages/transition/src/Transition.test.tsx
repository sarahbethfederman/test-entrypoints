import * as React from 'react';
import { mount } from 'enzyme';
import Transition from './Transition';

describe.skip('Transition', () => {
  let rAF: jest.Mock;
  let sT: jest.Mock;

  beforeEach(() => {
    rAF = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => cb());
    sT = jest.spyOn(window, 'setTimeout').mockImplementation((cb: any) => cb());
  });

  afterEach(() => {
    rAF.mockReset();
    sT.mockReset();
  });

  const ChildComponent = () => <div>Hello World!</div>;

  it('should call onChangeState with the state in order when entering', () => {
    const onChangeState = jest.fn();
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ isActive: true, onChangeState });
    expect(onChangeState.mock.calls[0]).toEqual(['enter']);
    expect(onChangeState.mock.calls[1]).toEqual(['entering']);
    expect(onChangeState.mock.calls[2]).toEqual(['entered']);
  });

  it('should call onChangeState with the state in order when exiting', () => {
    const onChangeState = jest.fn();
    const element = mount(
      <Transition isActive={true} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ isActive: false, onChangeState });
    expect(onChangeState.mock.calls[0]).toEqual(['exit']);
    expect(onChangeState.mock.calls[1]).toEqual(['exiting']);
    expect(onChangeState.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ isActive: true });
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ isActive: false });
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering on mount with isVisible=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={true} timeout={100} isVisible={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting on mount with isVisible=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with an undefined state when entering on mount with isVisible=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should call the faac with an undefined state when exiting on mount with isVisible=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should render the child component when the state is undefined', () => {
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component when the state is undefined and shouldMountOnEnter=true', () => {
    const element = mount(
      <Transition isActive={false} timeout={100} shouldMountOnEnter={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(0);
  });

  it('should render the child component when exit', () => {
    const element = mount(
      <Transition isActive={true} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ isActive: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component after exit', () => {
    const element = mount(
      <Transition isActive={true} timeout={100} shouldUnmountOnExit={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ isActive: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(0);
  });
});

describe.skip('Transition', () => {
  let rAF: jest.Mock;
  let sT: jest.Mock;

  beforeEach(() => {
    rAF = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => cb());
    sT = jest.spyOn(window, 'setTimeout').mockImplementation((cb: any) => cb());
  });

  afterEach(() => {
    rAF.mockReset();
    sT.mockReset();
  });

  const ChildComponent = () => <div>Hello World!</div>;

  it('should call onChangeState with the state in order when entering', () => {
    const onChangeState = jest.fn();
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ isActive: true, onChangeState });
    expect(onChangeState.mock.calls[0]).toEqual(['enter']);
    expect(onChangeState.mock.calls[1]).toEqual(['entering']);
    expect(onChangeState.mock.calls[2]).toEqual(['entered']);
  });

  it('should call onChangeState with the state in order when exiting', () => {
    const onChangeState = jest.fn();
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {() => null}
      </Transition>
    );
    element.setProps({ isActive: false, onChangeState });
    expect(onChangeState.mock.calls[0]).toEqual(['exit']);
    expect(onChangeState.mock.calls[1]).toEqual(['exiting']);
    expect(onChangeState.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ isActive: true });
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting', () => {
    const faac = jest.fn().mockReturnValue(null);
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {faac}
      </Transition>
    );
    faac.mockClear();
    element.setProps({ isActive: false });
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with the state in order when entering on mount with isVisible=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={true} timeout={100} isVisible={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['enter']);
    expect(faac.mock.calls[1]).toEqual(['entering']);
    expect(faac.mock.calls[2]).toEqual(['entered']);
  });

  it('should call the faac with the state in order when exiting on mount with isVisible=true', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={true}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual(['exit']);
    expect(faac.mock.calls[1]).toEqual(['exiting']);
    expect(faac.mock.calls[2]).toEqual(['exited']);
  });

  it('should call the faac with an undefined state when entering on mount with isVisible=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should call the faac with an undefined state when exiting on mount with isVisible=false', () => {
    const faac = jest.fn().mockReturnValue(null);
    mount(
      <Transition isActive={false} timeout={100} isVisible={false}>
        {faac}
      </Transition>
    );
    expect(faac.mock.calls[0]).toEqual([undefined]);
  });

  it('should render the child component when the state is undefined', () => {
    const element = mount(
      <Transition isActive={false} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component when the state is undefined and shouldMountOnEnter=true', () => {
    const element = mount(
      <Transition isActive={false} timeout={100} shouldMountOnEnter={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    expect(element.find(ChildComponent)).toHaveLength(0);
  });

  it('should render the child component when exit', () => {
    const element = mount(
      <Transition isActive={true} timeout={100}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ isActive: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(1);
  });

  it('should not render the child component after exit', () => {
    const element = mount(
      <Transition isActive={true} timeout={100} shouldUnmountOnExit={true}>
        {() => <ChildComponent />}
      </Transition>
    );
    element.setProps({ isActive: false });
    element.update();
    expect(element.find(ChildComponent)).toHaveLength(0);
  });
});
