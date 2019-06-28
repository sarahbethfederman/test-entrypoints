import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Input } from '@lendi-ui/text-input';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import Grid from '@lendi-ui/grid';
import { AutoCompleteStateless } from '@lendi-ui/auto-complete';
import { UnitWrapper, Label, StyledDropdown } from './index.style';
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
    const modaleHeader = element.find(Modal.Header);
    expect(modaleHeader.props().title).toEqual('Enter address');
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

      describe('the first UnitWrapper', () => {
        const firstUnit = grid.find(UnitWrapper).at(0);
        it('should render 1 Label component in the first UnitWrapper', () => {
          expect(firstUnit.find(Label)).toHaveLength(1);
          const firstLabel = firstUnit.find(Label);
          expect(firstLabel.text()).toEqual('Unit No.');
        });

        it('should render 1 Input component in the first UnitWrapper', () => {
          expect(firstUnit.find(Input)).toHaveLength(1);
          const firstInput = firstUnit.find(Input);
          expect(firstInput.props().isFullWidth).toEqual(true);
          expect(firstInput.props().size).toEqual('sm');
        });
      });

      describe('the second UnitWrapper', () => {
        const secondUnit = grid.find(UnitWrapper).at(1);
        it('should render 1 Label component in the second UnitWrapper', () => {
          expect(secondUnit.find(Label)).toHaveLength(1);
          const secondLabel = secondUnit.find(Label);
          expect(secondLabel.text()).toEqual('Lot No.');
        });

        it('should render 1 Input component in the second UnitWrapper', () => {
          expect(secondUnit.find(Input)).toHaveLength(1);
          const secondInput = secondUnit.find(Input);
          expect(secondInput.props().isFullWidth).toEqual(true);
          expect(secondInput.props().size).toEqual('sm');
        });
      });

      describe('the third UnitWrapper', () => {
        const thirdUnit = grid.find(UnitWrapper).at(2);
        it('should render 1 Label component in the third UnitWrapper', () => {
          expect(thirdUnit.find(Label)).toHaveLength(1);
          const thirdLabel = thirdUnit.find(Label);
          expect(thirdLabel.text()).toEqual('Level');
        });

        it('should render 1 Input component in the third UnitWrapper', () => {
          expect(thirdUnit.find(Input)).toHaveLength(1);
          const thirdInput = thirdUnit.find(Input);
          expect(thirdInput.props().isFullWidth).toEqual(true);
          expect(thirdInput.props().size).toEqual('sm');
        });
      });

      describe('the fourth UnitWrapper', () => {
        const fourthUnit = grid.find(UnitWrapper).at(3);
        it('should render 1 Label component in the fourth UnitWrapper', () => {
          expect(fourthUnit.find(Label)).toHaveLength(1);
          const fourthLabel = fourthUnit.find(Label);
          expect(fourthLabel.text()).toEqual('Building name');
        });

        it('should render 1 Input component in the fourth UnitWrapper', () => {
          expect(fourthUnit.find(Input)).toHaveLength(1);
          const fourthInput = fourthUnit.find(Input);
          expect(fourthInput.props().isFullWidth).toEqual(true);
          expect(fourthInput.props().size).toEqual('sm');
        });
      });

      describe('the fifth UnitWrapper', () => {
        const fifthUnit = grid.find(UnitWrapper).at(4);
        it('should render 1 Label component in the fifth UnitWrapper', () => {
          expect(fifthUnit.find(Label)).toHaveLength(1);
          const fifthLabel = fifthUnit.find(Label);
          expect(fifthLabel.text()).toEqual('Street No.');
        });

        it('should render 1 Input component in the fifth UnitWrapper', () => {
          expect(fifthUnit.find(Input)).toHaveLength(1);
          const fifthInput = fifthUnit.find(Input);
          expect(fifthInput.props().isFullWidth).toEqual(true);
          expect(fifthInput.props().size).toEqual('sm');
        });
      });

      describe('the sixth UnitWrapper', () => {
        const sixthUnit = grid.find(UnitWrapper).at(5);
        it('should render 1 Label component in the sixth UnitWrapper', () => {
          expect(sixthUnit.find(Label)).toHaveLength(1);
          const sixthLabel = sixthUnit.find(Label);
          expect(sixthLabel.text()).toEqual('Street name');
        });

        it('should render 1 Input component in the sixth UnitWrapper', () => {
          expect(sixthUnit.find(Input)).toHaveLength(1);
          const sixthInput = sixthUnit.find(Input);
          expect(sixthInput.props().isFullWidth).toEqual(true);
          expect(sixthInput.props().size).toEqual('sm');
        });
      });

      describe('the seventh UnitWrapper', () => {
        const seventhUnit = grid.find(UnitWrapper).at(6);
        it('should render 1 Label component in the seventh UnitWrapper', () => {
          expect(seventhUnit.find(Label)).toHaveLength(1);
          const seventhLabel = seventhUnit.find(Label);
          expect(seventhLabel.text()).toEqual('Street type');
        });

        it('should render 1 AutoCompleteStateless component in the seventh UnitWrapper', () => {
          expect(seventhUnit.find(AutoCompleteStateless)).toHaveLength(1);
          const seventhAutoComplete = seventhUnit.find(Input);
          expect(seventhAutoComplete.props().isFullWidth).toEqual(true);
          expect(seventhAutoComplete.props().size).toEqual('sm');
        });
      });

      describe('the eighth UnitWrapper', () => {
        const eighthUnit = grid.find(UnitWrapper).at(7);
        it('should render 1 Label component in the eighth UnitWrapper', () => {
          expect(eighthUnit.find(Label)).toHaveLength(1);
          const eighthLabel = eighthUnit.find(Label);
          expect(eighthLabel.text()).toEqual('Suburb');
        });

        it('should render 1 Input component in the eighth UnitWrapper', () => {
          expect(eighthUnit.find(Input)).toHaveLength(1);
          const eighthInput = eighthUnit.find(Input);
          expect(eighthInput.props().isFullWidth).toEqual(true);
          expect(eighthInput.props().size).toEqual('sm');
        });
      });

      describe('the ninth UnitWrapper', () => {
        const ninthUnit = grid.find(UnitWrapper).at(8);
        it('should render 1 Label component in the ninth UnitWrapper', () => {
          expect(ninthUnit.find(Label)).toHaveLength(1);
          const ninthLabel = ninthUnit.find(Label);
          expect(ninthLabel.text()).toEqual('Postcode');
        });

        it('should render 1 Input component in the ninth UnitWrapper', () => {
          expect(ninthUnit.find(Input)).toHaveLength(1);
          const ninthInput = ninthUnit.find(Input);
          expect(ninthInput.props().isFullWidth).toEqual(true);
          expect(ninthInput.props().size).toEqual('sm');
        });
      });

      describe('the tenth UnitWrapper', () => {
        const tenthUnit = grid.find(UnitWrapper).at(9);
        it('should render 1 Label component in the tenth UnitWrapper', () => {
          expect(tenthUnit.find(Label)).toHaveLength(1);
          const tenthLabel = tenthUnit.find(Label);
          expect(tenthLabel.text()).toEqual('State');
        });

        it('should render 1 StyledDropdown component in the tenth UnitWrapper', () => {
          expect(tenthUnit.find(StyledDropdown)).toHaveLength(1);
          const tenthDropdown = tenthUnit.find(StyledDropdown);
          expect(tenthDropdown.props().isFullWidth).toEqual(true);
        });
      });

      describe('the eleventh UnitWrapper', () => {
        const eleventhUnit = grid.find(UnitWrapper).at(10);
        it('should render 1 Label component in the eleventh UnitWrapper', () => {
          expect(eleventhUnit.find(Label)).toHaveLength(1);
          const eleventhLabel = eleventhUnit.find(Label);
          expect(eleventhLabel.text()).toEqual('Country');
        });

        it('should render 1 Input component in the eleventh UnitWrapper', () => {
          expect(eleventhUnit.find(Input)).toHaveLength(1);
          const eleventhInput = eleventhUnit.find(Input);
          expect(eleventhInput.props().isFullWidth).toEqual(true);
          expect(eleventhInput.props().isDisabled).toEqual(true);
          expect(eleventhInput.props().size).toEqual('sm');
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
      element
        .find('input')
        .at(6)
        .simulate('keyDown', { key: 'ArrowDown' });

      element
        .find('input')
        .at(6)
        .simulate('keyDown', {
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
          suburb: 'Rock',
          postcode: '2000',
          state: 'NSW',
        });

        done();
      });
    });
  });
});
