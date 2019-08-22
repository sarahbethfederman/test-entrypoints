import * as React from 'react';
import { Select } from '../index';
import { OptionType, FormatOptionLabelContext } from '../types';

const formatOptionLabel = (option: OptionType, { context }: { context: FormatOptionLabelContext }) => {
  if (context === 'menu') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>{option.label}</div>
        {option.description ? (
          <div
            style={{
              fontSize: 8,
              fontStyle: 'italic',
            }}
          >
            {option.description}
          </div>
        ) : null}
      </div>
    );
  }
  return option.label;
};
export default () => (
  <Select
    formatOptionLabel={formatOptionLabel}
    placeholder="Option with description - you can do a lot of stuff in option"
    isFullWidth
    options={[
      {
        label: 'Adelaide',
        value: 'adelaide',
        description: 'A nice place to live',
      },
      {
        label: 'Brisbane',
        value: 'brisbane',
        description: 'A boisterous and energetic city',
      },
      { label: 'Canberra', value: 'canberra', description: 'The capital' },
      { label: 'Darwin', value: 'darwin' },
      { label: 'Hobart', value: 'hobart', description: 'Scenic, and serene' },
      {
        label: 'Melbourne',
        value: 'melbourne',
        description: 'Charming, and cultured',
      },
      { label: 'Perth', value: 'perth', description: 'Lovely city' },
      {
        label: 'Sydney',
        value: 'sydney',
        description: 'Nothing good happens ever happens here',
      },
    ]}
  />
);
