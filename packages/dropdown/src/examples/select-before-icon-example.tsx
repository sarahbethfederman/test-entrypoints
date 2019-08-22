import * as React from 'react';
import { Select } from '../index';
import {
  Lock,
  Assessment,
  AssignmentReturned,
  Backspace,
  Backup,
  BorderAll,
  AddCircleOutline,
  AddLocation,
  AddCircle,
  AssignmentLate,
  AssignmentReturn,
} from '@lendi-ui/icon';
import { FormatOptionLabelContext, OptionType } from '../types';

const GROUP_OPTIONS = [
  {
    label: 'Group I',
    options: [
      { icon: <Lock color="primary.500" />, label: 'Afghanistan', value: 'AF' },
      { icon: <Assessment color="primary.500" />, label: 'Albania', value: 'AL' },
      { icon: <AddCircleOutline color="primary.500" />, label: 'Algeria', value: 'DZ' },
      { icon: <AddLocation color="primary.500" />, label: 'American Samoa', value: 'AS' },
    ],
  },
  {
    label: 'Group II',
    options: [
      { icon: <AddCircle color="primary.500" />, label: 'Angola', value: 'AO' },
      { icon: <AssignmentLate color="primary.500" />, label: 'Anguilla', value: 'AI' },
      { icon: <AssignmentReturn color="primary.500" />, label: 'Antarctica', value: 'AQ' },
      { icon: <AssignmentReturned color="primary.500" />, label: 'Antigua and Barbuda', value: 'AG' },
      { icon: <Backspace color="primary.500" />, label: 'Argentina', value: 'AR' },
      { icon: <Backup color="primary.500" />, label: 'Armenia', value: 'AM' },
      { icon: <BorderAll color="primary.500" />, label: 'Aruba', value: 'AW' },
    ],
  },
];

export default ({ size, isMultiple }: any) => (
  <Select
    size={size}
    isClearable={true}
    options={GROUP_OPTIONS}
    placeholder={`Before Icon - ${size}`}
    isClearableByBackspace={true}
    hideSelectedOptions={false}
    isMultiple={isMultiple}
    formatOptionLabel={formatOptionLabel}
    isFullWidth
  />
);

const formatOptionLabel = (option: OptionType, { context }: { context: FormatOptionLabelContext }) => {
  if (context === 'menu') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '5px',
        }}
      >
        {option.icon}
        <span
          style={{
            paddingLeft: 8,
            paddingBottom: 0,
          }}
        >
          {option.label}
        </span>
      </div>
    );
  }
  if (context === 'value') {
    return <>{controlLabel(option)}</>;
  }
  return option.label;
};

const controlLabel = (opt: any) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}
  >
    {opt.icon}
    <span
      style={{
        paddingLeft: 8,
        paddingBottom: 0,
      }}
    >
      {opt.label.toUpperCase()}
    </span>
  </div>
);
