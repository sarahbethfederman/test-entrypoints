import * as React from 'react';
import { Select } from '../index';
import Grid from '@lendi-ui/grid';
import styled from 'styled-components';
import { p } from '@lendi-ui/spacing';
import { MOCK_DATA_SOURCE } from './data-source.mock';
import StateControlled from './select-controlled-example';
import BeforeIconExample from './select-before-icon-example';
import OptionWithDescription from './select-with-description-example';
import SelectModalExample from './select-modal-example';
import { Heading } from '@lendi-ui/typography';
import Field from '@lendi-ui/field';

export const MyUnits = styled(Grid.Unit)`
  display: flex;
  flex-direction: column;
  ${p('sm')};
`;

export default () => (
  <Grid>
    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Size Variants with `multiple` selection</Heading>
      <Select
        size="xs"
        options={MOCK_DATA_SOURCE}
        placeholder="Size XS"
        isFullWidth
        isMultiple
        hideSelectedOptions={false}
        isAutoFocus
        onChangeItem={(value: any) => console.log(value)}
      />
      <br />
      <Select
        size="sm"
        options={MOCK_DATA_SOURCE}
        placeholder="Size SM"
        isMultiple
        isFullWidth
        hideSelectedOptions={false}
      />
      <br />
      <Select
        size="md"
        options={MOCK_DATA_SOURCE}
        placeholder="Size MD"
        onChangeItem={(value: any) => console.log(value)}
        hideSelectedOptions={false}
        isFullWidth={true}
        isMultiple
      />
      <br />
      <Select
        size="lg"
        options={MOCK_DATA_SOURCE}
        placeholder="Size LG"
        isMultiple
        isFullWidth
        hideSelectedOptions={false}
      />
    </MyUnits>
    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Size Variants with `single` selection</Heading>
      <Select
        size="xs"
        options={MOCK_DATA_SOURCE}
        placeholder="Size XS"
        isFullWidth
        hideSelectedOptions={false}
        isAutoFocus
        onChangeItem={(value: any) => console.log(value)}
      />
      <br />
      <Select size="sm" options={MOCK_DATA_SOURCE} placeholder="Size SM" isFullWidth hideSelectedOptions={false} />
      <br />
      <Select
        size="md"
        options={MOCK_DATA_SOURCE}
        placeholder="Size MD"
        onChangeItem={(value: any) => console.log(value)}
        hideSelectedOptions={false}
        isFullWidth={true}
      />
      <br />
      <Select size="lg" options={MOCK_DATA_SOURCE} placeholder="Size LG" isFullWidth hideSelectedOptions={false} />
    </MyUnits>

    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Before Icon</Heading>
      <BeforeIconExample size="md" />
      <br />
      <BeforeIconExample size="lg" isMultiple={true} />
    </MyUnits>

    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Before Icon with custom description</Heading>
      <OptionWithDescription />
    </MyUnits>

    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Clearable by backspace</Heading>
      <Select
        size="sm"
        options={MOCK_DATA_SOURCE}
        placeholder="Clearable by backspace"
        isFullWidth
        hideSelectedOptions={false}
        isClearable
        isClearableByBackspace={true}
      />
      <br />
      <Select
        size="sm"
        options={MOCK_DATA_SOURCE}
        isMultiple
        placeholder="Clearable by backspace"
        isFullWidth
        hideSelectedOptions={false}
        isClearableByBackspace={true}
      />
      <br />
      <Heading size="xs">NOT Searchable</Heading>
      <Select size="sm" options={MOCK_DATA_SOURCE} placeholder="Clearable by backspace" isSearchable={false} />
    </MyUnits>

    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }} style={{ backgroundColor: 'grey' }}>
      <Heading size="xs">isInverse</Heading>
      <Select
        size="sm"
        options={MOCK_DATA_SOURCE}
        isMultiple
        placeholder="😎 Inverse"
        isInverse={true}
        isFullWidth={true}
      />
    </MyUnits>
    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Field
        id="fieldId"
        size={{ mobile: 'sm', tablet: 'sm', desktop: 'lg' }}
        label="Field Select"
        error="error message"
        htmlFor="test"
        touched={true}
      >
        <Select size="sm" options={MOCK_DATA_SOURCE} placeholder="Errored...." isError={true} />
      </Field>
    </MyUnits>
    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <SelectModalExample />
    </MyUnits>
    <MyUnits size={{ mobile: 1, desktop: 1 / 2 }}>
      <Heading size="xs">Disabled</Heading>
      <Select size="sm" isDisabled={true} options={MOCK_DATA_SOURCE} placeholder="Disabled...." />
    </MyUnits>
    <MyUnits size={{ desktop: 1 }} style={{ border: '1px solid grey' }}>
      <StateControlled />
    </MyUnits>
  </Grid>
);
