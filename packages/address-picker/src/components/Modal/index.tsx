import * as React from 'react';
import { Input } from '@lendi-ui/text-input';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import Grid from '@lendi-ui/grid';
import { AutoComplete, DataSourceItem } from '@lendi-ui/auto-complete';
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
  city?: string;
  postcode?: string;
  state?: string;
  country?: string;
}

export interface AddressModalState {
  address: AddressObject;
  isCompleted: boolean;
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
      city: '',
      postcode: '',
      state: '',
      country: 'Australia',
    },
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
      address.city &&
      address.postcode &&
      address.state
    ) {
      isCompleted = true;
    }
    this.setState({ isCompleted });
  };

  handleOnSelect = ({ value = '' }: DataSourceItem) => {
    const { address } = this.state;
    address.streetType = value as string;
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
      case 'City':
        address.city = e.target.value;
        break;
      case 'Postcode':
        address.postcode = e.target.value;
        break;
      case 'Country':
        address.country = e.target.value;
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
    const { address, isCompleted } = this.state;
    const {
      unit,
      lotSection,
      level,
      buildingName,
      streetNumber,
      streetName,
      streetType,
      city,
      postcode,
      state,
      country,
    } = this.state.address;

    return (
      <Modal isVisible={!!show} size="lg" onHide={onHide}>
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
              <AutoComplete
                size="sm"
                initialValue={streetType}
                dataSource={STREET_TYPE}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.handleInputOnChange('Street type', e);
                }}
                onSelectItem={this.handleOnSelect}
                isFullWidth={true}
              />
            </UnitWrapper>
            <UnitWrapper size={{ mobile: 1 / 2, tablet: 1 / 4 }}>
              <Label>City</Label>
              <Input
                value={city}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('City', e)}
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
              <Input
                value={country}
                isFullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputOnChange('Country', e)}
                size="sm"
              />
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
