# @lendi-ui/feature-panel

A <ComponentName> component.

## Installation

```
yarn add @lendi-ui/feature-panel
```

## Usage

```jsx
import { FeaturePanel } from '@lendi-ui/feature-panel';

<FeaturePanel>
  <FeaturePanel.Item
    icon={<MortgageProtectInsurance color="primary.500" />}
    title="Choose from 35+ lenders"
    subtitle="It pays to shop around. We match you with the right loan for your specific needs and preferences."
  />
  <FeaturePanel.Item
    icon={<MortgageProtectInsurance color="primary.500" />}
    title="We do the heavy lifting"
    subtitle="Sit back and relax. Once you've chosen your loan, we'll submit, package and guide it all the way to settlement."
  />
  <FeaturePanel.Item
    icon={<MortgageProtectInsurance color="primary.500" />}
    title="Ask us anything"
    subtitle="There is no such thing as a stupid question. We're here to share unlimited advice every step of the way."
  />
  <FeaturePanel.Item
    icon={<MortgageProtectInsurance color="primary.500" />}
    title="Easy online tools"
    subtitle="Upload your documents online and get approved faster. You can check your loan's progress 24/7."
  />
</FeaturePanel>;
```

## Properties

- FeaturePanel.Item

```
<PropTable>
  <PropTable.Entry name="icon" type="React.ReactNode" description="LUI icon"/>
  <PropTable.Entry name="subtitle" type="React.ReactNode" description="Feature panel single item subtitle"/>
  <PropTable.Entry name="title" type="React.ReactNode" description="Feature panel single item title"/>
</PropTable>
```

- FeaturePanel

```
<PropTable>
  <PropTable.Entry name="FeaturePanel.Item" type="React.ReactElement<FeatureItemProps> | React.ReactElement<FeatureItemProps>[]" description="Feature panel wrapper"/>
</PropTable>
```

### Notes

<b>Support for native props like Aria attributes, Standard HTML Attributes like title, classname, id, role, itemProp, itemID, itemRef</b>
