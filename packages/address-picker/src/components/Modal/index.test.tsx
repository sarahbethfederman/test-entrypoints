import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Input } from '@lendi-ui/text-input';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import Grid from '@lendi-ui/grid';
import { UnitWrapper, Label } from './index.style';
import AddressModal, { AddressModalProps } from './index';

const onSave = jest.fn();
const onHide = jest.fn();
let element: ReactWrapper<AddressModalProps> = mount(
  <Theme>
    <AddressModal show={true} onSave={onSave} onHide={onHide} />
  </Theme>
);

describe('AddressModal', () => {
  it('should render the whole AddressModal component', () => {
    expect(element.find(AddressModal)).toHaveLength(1);
  });

  it('should render 1 Modal component', () => {
    expect(element.find(Modal)).toHaveLength(1);
  });

  it("should render 1 Modal.Header component with text 'Enter address'", () => {
    expect(element.find(Modal.Header)).toHaveLength(1);
    const modalHeader = element.find(Modal.Header);
    expect(modalHeader.props().title).toEqual('Enter address');
  });

  it('should render 1 Modal.Content component', () => {
    expect(element.find(Modal.Content)).toHaveLength(1);
  });

  describe('Modal.Content', () => {
    const content = element.find(Modal.Content);
    it('should render 1 Grid component in Modal.Content', () => {
      expect(content.find(Grid)).toHaveLength(1);
    });

    describe('Grid', () => {
      const grid = content.find(Grid);
      it('should render 11 UnitWrapper component in Grid', () => {
        expect(grid.find(UnitWrapper)).toHaveLength(11);
      });

      describe('form', () => {
        const unitWrapperList = grid.find(UnitWrapper);
        const expectedUnitWrapperLabels = [
          'Unit No.',
          'Lot No.',
          'Level',
          'Building name',
          'Street No.',
          'Street name',
          'Street type',
          'City',
          'Postcode',
          'State',
          'Country',
        ];

        describe('labels', () => {
          unitWrapperList.forEach((currentUnitWrapper, i) => {
            it(`should display label ${expectedUnitWrapperLabels[i]}`, () => {
              expect(currentUnitWrapper.find(Label).text()).toEqual(expectedUnitWrapperLabels[i]);
            });
          });
        });

        describe('inputs', () => {
          const inputList = grid.find(Input);
          it('should contain 10 inputs', () => {
            expect(inputList).toHaveLength(10);
          });

          inputList.forEach((currentInput) => {
            it(`should be a full size input with the correct size for ${currentInput.parent().text()}`, () => {
              expect(currentInput.props().isFullWidth).toEqual(true);
              expect(currentInput.props().size).toEqual('sm');
            });
          });
        });
      });
    });
  });

  it('should render 1 Modal.Footer component ', () => {
    expect(element.find(Modal.Footer)).toHaveLength(1);
  });

  describe('button', () => {
    const modalFooter = element.find(Modal.Footer);
    const button = modalFooter.find(Button);
    it('should render 1 button in Modal.Footer', () => {
      expect(modalFooter.find(Button)).toHaveLength(1);
    });

    it('should render button with full width style', () => {
      expect(button.text()).toEqual('Save');
      expect(button.props().isFullWidth).toEqual(true);
    });

    it('should render a disabled button by default', () => {
      expect(button.props().isDisabled).toEqual(true);
    });

    // @TODO - rehydrate from props
    it.skip('should render a clickable button by complete required fields', (done) => {
      element
        .find('input')
        .at(6)
        .simulate('change', { target: { value: 'St' } }); // this not working
      element.find('input').at(6).simulate('keyDown', { key: 'ArrowDown' });

      element.find('input').at(6).simulate('keyDown', {
        key: 'Enter',
        keyCode: 13,
        which: 13,
      });

      element
        .find('input')
        .at(4)
        .simulate('change', { target: { value: '10' } });
      element
        .find('input')
        .at(5)
        .simulate('change', { target: { value: 'King' } });

      element
        .find('input')
        .at(7)
        .simulate('change', { target: { value: 'Rock' } });
      element
        .find('input')
        .at(8)
        .simulate('change', { target: { value: '2000' } });
      element.find('select').simulate('change', { target: { value: 'NSW' } });
      element.update();
      element.update();

      button.simulate('click');
      setTimeout(() => {
        expect(button.props().isDisabled).toEqual(false);
        expect(onSave).toBeCalledWith({
          streetNumber: '10',
          streetName: 'King',
          streetType: 'Street',
          city: 'Rock',
          postcode: '2000',
          state: 'NSW',
        });

        done();
      });
    });
  });
});
