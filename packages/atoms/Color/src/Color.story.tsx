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
          <ColorSwab backgroundColor={colorBrandPrimaryMedium} darkFont>
            <div>colorBrandPrimaryMedium</div> {colorBrandPrimaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandPrimaryLight} darkFont>
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
          <ColorSwab backgroundColor={colorBrandSecondaryMedium} darkFont>
            <div>colorBrandSecondaryMedium</div> {colorBrandSecondaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandSecondaryLight} darkFont>
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
          <ColorSwab backgroundColor={colorBrandTertiaryMedium} darkFont>
            <div>colorBrandTertiaryMedium</div> {colorBrandTertiaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandTertiaryLight} darkFont>
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
          <ColorSwab backgroundColor={colorBrandQuaternaryMedium} darkFont>
            <div>colorBrandQuaternaryMedium</div> {colorBrandQuaternaryMedium}
          </ColorSwab>
          <ColorSwab backgroundColor={colorBrandQuaternaryLight} darkFont>
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
          <ColorSwab backgroundColor={colorShadeLight1} darkFont>
            <div>colorShadeLight1</div> {colorShadeLight1}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeLight2} darkFont>
            <div>colorShadeLight2</div> {colorShadeLight2}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeLight3} darkFont>
            <div>colorShadeLight3</div> {colorShadeLight3}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium1} darkFont>
            <div>colorShadeMedium1</div> {colorShadeMedium1}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium2} darkFont>
            <div>colorShadeMedium2</div> {colorShadeMedium2}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeMedium3} darkFont>
            <div>colorShadeMedium3</div> {colorShadeMedium3}
          </ColorSwab>
          <ColorSwab backgroundColor={colorShadeDark1} darkFont>
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
          <ColorSwab backgroundColor={colorWarnDark} darkFont>
            <div>colorWarnDark</div>
            {colorWarnDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorWarn} darkFont>
            <div>colorWarn</div>
            {colorWarn}
          </ColorSwab>
          <ColorSwab backgroundColor={colorWarnLight} darkFont>
            <div>colorWarnLight</div>
            {colorWarnLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorInfoDark} darkFont>
            <div>colorInfoDark</div>
            {colorInfoDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorInfo} darkFont>
            <div>colorInfo</div>
            {colorInfo}
          </ColorSwab>
          <ColorSwab backgroundColor={colorInfoLight} darkFont>
            <div>colorInfoLight</div>
            {colorInfoLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorSuccessDark} darkFont>
            <div>colorSuccessDark</div>
            {colorSuccessDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorSuccess} darkFont>
            <div>colorSuccess</div>
            {colorSuccess}
          </ColorSwab>
          <ColorSwab backgroundColor={colorSuccessLight} darkFont>
            <div>colorSuccessLight</div>
            {colorSuccessLight}
          </ColorSwab>
        </ColourContainer>
        <ColourContainer>
          <ColorSwab backgroundColor={colorDangerDark} darkFont>
            <div>colorDangerDark</div>
            {colorDangerDark}
          </ColorSwab>
          <ColorSwab backgroundColor={colorDanger} darkFont>
            <div>colorDanger</div>
            {colorDanger}
          </ColorSwab>
          <ColorSwab backgroundColor={colorDangerLight} darkFont>
            <div>colorDangerLight</div>
            {colorDangerLight}
          </ColorSwab>
        </ColourContainer>
      </React.Fragment>
    ))
  );
