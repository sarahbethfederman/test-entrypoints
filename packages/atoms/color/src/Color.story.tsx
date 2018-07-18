import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { wInfoStyle } from '@lui/story-utils';

import {
  colorBrandPrimary,
  colorBrandPrimaryDark,
  colorBrandPrimaryMedium,
  colorBrandPrimaryLight,
  colorBrandSecondary,
  colorBrandSecondaryDark,
  colorBrandSecondaryMedium,
  colorBrandSecondaryLight,
  colorBrandTertiary,
  colorBrandTertiaryDark,
  colorBrandTertiaryMedium,
  colorBrandTertiaryLight,
  colorBrandQuaternary,
  colorBrandQuaternaryDark,
  colorBrandQuaternaryMedium,
  colorBrandQuaternaryLight,
  colorShadeLight1,
  colorShadeLight2,
  colorShadeLight3,
  colorShadeMedium1,
  colorShadeMedium2,
  colorShadeMedium3,
  colorShadeDark1,
  colorShadeDark2,
  colorShadeDark3,
  colorWarn,
  colorWarnLight,
  colorWarnDark,
  colorInfo,
  colorInfoLight,
  colorInfoDark,
  colorSuccess,
  colorSuccessLight,
  colorSuccessDark,
  colorDanger,
  colorDangerLight,
  colorDangerDark,
} from './Color';

const ColourContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

interface IColorSwab {
  backgroundColor?: string;
  darkFont?: boolean;
}

const ColorSwab = styled.div`
  margin: 10px;
  padding: 20px;
  min-width: 200px;
  height: 150px;
  background-color: ${({ backgroundColor }: IColorSwab) => backgroundColor};
  color: ${({ darkFont }: IColorSwab) => (darkFont ? 'black' : 'white')};
`;

storiesOf('Components/Color', module)
  .add(
    'Branding',
    withInfo({
      styles: wInfoStyle,
      inline: true,
      propTables: false,
      source: false,
      text: `
        ### NOTES 
        These are the branding colours. Do not deviate from what is
        listed here
      `,
    })(() => (
      <React.Fragment>
        <ColourContainer>
          <ColorSwab backgroundColor={colorBrandPrimaryDark}>
            <div>colorBrandPrimaryDark</div> {colorBrandPrimaryDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandPrimary}>
            <div>colorBrandPrimary</div> {colorBrandPrimary}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandPrimaryMedium} darkFont={true}>
            <div>colorBrandPrimaryMedium</div> {colorBrandPrimaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandPrimaryLight} darkFont={true}>
            <div>colorBrandPrimaryLight</div> {colorBrandPrimaryLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorBrandSecondaryDark}>
            <div>colorBrandSecondaryDark</div> {colorBrandSecondaryDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandSecondary}>
            <div>colorBrandSecondary</div> {colorBrandSecondary}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandSecondaryMedium} darkFont={true}>
            <div>colorBrandSecondaryMedium</div> {colorBrandSecondaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandSecondaryLight} darkFont={true}>
            <div>colorBrandSecondaryLight</div> {colorBrandSecondaryLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorBrandTertiaryDark}>
            <div>colorBrandTertiaryDark</div> {colorBrandTertiaryDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandTertiary}>
            <div>colorBrandTertiary</div> {colorBrandTertiary}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandTertiaryMedium} darkFont={true}>
            <div>colorBrandTertiaryMedium</div> {colorBrandTertiaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandTertiaryLight} darkFont={true}>
            <div>colorBrandTertiaryLight</div> {colorBrandTertiaryLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorBrandQuaternaryDark}>
            <div>colorBrandQuaternaryDark</div> {colorBrandQuaternaryDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandQuaternary}>
            <div>colorBrandQuaternary</div> {colorBrandQuaternary}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandQuaternaryMedium} darkFont={true}>
            <div>colorBrandQuaternaryMedium</div> {colorBrandQuaternaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandQuaternaryLight} darkFont={true}>
            <div>colorBrandQuaternaryLight</div> {colorBrandQuaternaryLight}
          </ColorSwab>
        </ColourContainer>
      </React.Fragment>
    ))
  )
  .add(
    'Shades',
    withInfo({
      styles: wInfoStyle,
      inline: true,
      propTables: false,
      source: false,
      text: `
        ### NOTES 
      `,
    })(() => (
      <React.Fragment>
        <ColourContainer>
          <ColorSwab backgroundColor={colorShadeLight1} darkFont={true}>
            <div>colorShadeLight1</div> {colorShadeLight1}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeLight2} darkFont={true}>
            <div>colorShadeLight2</div> {colorShadeLight2}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeLight3} darkFont={true}>
            <div>colorShadeLight3</div> {colorShadeLight3}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium1} darkFont={true}>
            <div>colorShadeMedium1</div> {colorShadeMedium1}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium2} darkFont={true}>
            <div>colorShadeMedium2</div> {colorShadeMedium2}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium3} darkFont={true}>
            <div>colorShadeMedium3</div> {colorShadeMedium3}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeDark1} darkFont={true}>
            <div>colorShadeDark1</div> {colorShadeDark1}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeDark2}>
            <div>colorShadeDark2</div> {colorShadeDark2}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeDark3}>
            <div>colorShadeDark3</div> {colorShadeDark3}
          </ColorSwab>
        </ColourContainer>
      </React.Fragment>
    ))
  )
  .add(
    'Action colours',
    withInfo({
      styles: wInfoStyle,
      inline: true,
      propTables: false,
      source: false,
      text: `
          ### NOTES
        `,
    })(() => (
      <React.Fragment>
        <ColourContainer>
          <ColorSwab backgroundColor={colorWarnDark} darkFont={true}>
            <div>colorWarnDark</div>
            {colorWarnDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorWarn} darkFont={true}>
            <div>colorWarn</div>
            {colorWarn}
          </ColorSwab>
          <ColorSwab backgroundColor={colorWarnLight} darkFont={true}>
            <div>colorWarnLight</div>
            {colorWarnLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorInfoDark} darkFont={true}>
            <div>colorInfoDark</div>
            {colorInfoDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorInfo} darkFont={true}>
            <div>colorInfo</div>
            {colorInfo}
          </ColorSwab>
          <ColorSwab backgroundColor={colorInfoLight} darkFont={true}>
            <div>colorInfoLight</div>
            {colorInfoLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorSuccessDark} darkFont={true}>
            <div>colorSuccessDark</div>
            {colorSuccessDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorSuccess} darkFont={true}>
            <div>colorSuccess</div>
            {colorSuccess}
          </ColorSwab>
          <ColorSwab backgroundColor={colorSuccessLight} darkFont={true}>
            <div>colorSuccessLight</div>
            {colorSuccessLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorDangerDark} darkFont={true}>
            <div>colorDangerDark</div>
            {colorDangerDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorDanger} darkFont={true}>
            <div>colorDanger</div>
            {colorDanger}
          </ColorSwab>
          <ColorSwab backgroundColor={colorDangerLight} darkFont={true}>
            <div>colorDangerLight</div>
            {colorDangerLight}
          </ColorSwab>
        </ColourContainer>
      </React.Fragment>
    ))
  );
