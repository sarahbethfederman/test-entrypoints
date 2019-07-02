import * as React from 'react';
import { Input } from '@lendi-ui/text-input';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import Grid from '@lendi-ui/grid';
import { AutoCompleteStateless, DataSourceItem } from '@lendi-ui/auto-complete';
import { UnitWrapper, Label, StyledDropdown } from './index.style';
import { AUSTRALIA_STATES, STREET_TYPE } from './constants';

export interface AddressModalProps {
  show?: boolean;
  onSave: (address: AddressObject) => void;
  onHide?: () => void;
}

export interface AddressObject {
  unit?: string;
  lotSection?: string;
  level?: string;
  buildingName?: string;
  streetNumber?: string;
  streetName?: string;
  streetType?: string;
  suburb?: string;
  postcode?: string;
  state?: string;
}

export interface AddressModalState {
  address: AddressObject;
  isCompleted: boolean;
  streets: DataSourceItem[];
}

export default class AddressModal extends React.Component<AddressModalProps, AddressModalState> {
  state: AddressModalState = {
    address: {
      unit: '',
      lotSection: '',
      level: '',
      buildingName: '',
      streetNumber: '',
      streetName: '',
      streetType: '',
      suburb: '',
      postcode: '',
      state: '',
    },
    streets: STREET_TYPE,
    isCompleted: false,
  };

  checkFormIsCompleted = () => {
    let { address } = this.state;
    let lotOrStreetNumber = false;
    let isCompleted = false;
    if (address.lotSection || address.streetNumber) {
      lotOrStreetNumber = true;
    }
    if (
      lotOrStreetNumber &&
      address.streetName &&
      address.streetType &&
      address.suburb &&
      address.postcode &&
      address.state
    ) {
      isCompleted = true;
    }
    this.setState({ isCompleted });
  };

  handleOnSelect = (selectedItem: DataSourceItem) => {
    const { address } = this.state;
    address.streetType = String(selectedItem.value);
    this.setState({ address }, this.checkFormIsCompleted);
  };

  handleInputOnChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { address } = this.state;
    switch (id) {
      case 'Unit No.':
        address.unit = e.target.value;
        break;
      case 'Lot No.':
        address.lotSection = e.target.value;
        break;
      case 'Level':
        address.level = e.target.value;
        break;
      case 'Building name':
        address.buildingName = e.target.value;
        break;
      case 'Street No.':
        address.streetNumber = e.target.value;
        break;
      case 'Street name':
        address.streetName = e.target.value;
        break;
      case 'Suburb':
        address.suburb = e.target.value;
        break;
      case 'Postcode':
        address.postcode = e.target.value;
        break;
      default:
        undefined;
    }
    this.setState({ address }, this.checkFormIsCompleted);
  };

  handleSelectOnChange = (value: string) => {
    const { address } = this.state;
    address.state = value;
    this.setState({ address }, this.checkFormIsCompleted);
  };

  getStreetData = (input: string) => {
    const filteredDataSource = STREET_TYPE.filter((data) => data.label.toLowerCase().indexOf(input.toLowerCase()) > -1);
    return filteredDataSource;
  };

  render() {
    const { show, onHide = () => {}, onSave } = this.props;
    const { address, isCompleted, streets } = this.state;
    const {
      unit,
      lotSection,
      level,
      buildingName,
      streetNumber,
      streetName,
      streetType,
      suburb,
      postcode,
      state,
    } = this.state.address;
    return (
      <Modal show={!!show} size="lg" onHide={onHide}>
        <Modal.Header title="Enter address" />
        <Modal.Content>
          <Grid>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Unit No.</Label>
              <Input
                value={unit}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Unit No.', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Lot No.</Label>
              <Input
                value={lotSection}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Lot No.', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Level</Label>
              <Input
                value={level}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Level', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Building name</Label>
              <Input
                value={buildingName}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Building name', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Street No.</Label>
              <Input
                value={streetNumber}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Street No.', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={1 / 2}>
              <Label>Street name</Label>
              <Input
                value={streetName}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Street name', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Street type</Label>
              <AutoCompleteStateless
                size="sm"
                dataSource={streets}
                value={streetType}
                onChange={(e) => {
                  this.setState({
                    address: { streetType: e.target.value },
                    streets: this.getStreetData(e.target.value),
                  });
                }}
                onSelect={(value: DataSourceItem) => this.handleOnSelect(value)}
                isFullWidth={true}
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Suburb</Label>
              <Input
                value={suburb}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Suburb', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>Postcode</Label>
              <Input
                value={postcode}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Postcode', e)}
                size="sm"
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>State</Label>
              <StyledDropdown
                items={AUSTRALIA_STATES}
                isFullWidth={true}
                value={state}
                onChange={this.handleSelectOnChange}
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1, tablet: 1 / 4 }}>
              <Label>Country</Label>
              <Input value="Australia" isDisabled isFullWidth onChange={() => {}} size="sm" />
            </UnitWrapper>
          </Grid>
        </Modal.Content>
        <Modal.Footer>
          <Button variant="primary" isFullWidth isDisabled={!isCompleted} onClick={() => onSave(address)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
