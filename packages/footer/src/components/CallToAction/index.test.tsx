import * as React from 'react';
import Theme from '@lendi-ui/theme';
import {
  CallToAction,
  CallToActionProps,
  startNewLabel,
  continueLabel,
  refinanceLabel,
  buyNewLabel,
  REFINANCE_LINK,
  BUY_NEW_LINK,
  START_NEW_LINK,
} from '.';
import { ReactWrapper, mount } from 'enzyme';
import { Wrapper, HeadingWrapper, ButtonsWrapper } from './index.style';
import { Button } from '@lendi-ui/button';
import Modal from '@lendi-ui/modal';
import { Body } from '@lendi-ui/typography';

let element: ReactWrapper<CallToActionProps>;

function render(props: CallToActionProps = { isAuth: false }) {
  element = mount(
    <Theme>
      <CallToAction {...props} />
    </Theme>
  );
}

describe('CallToAction footer component', () => {
  describe('rendering', () => {
    it('should render a CTA wrapper', () => {
      render();
      expect(element.find(Wrapper).length).toEqual(1);
    });

    it('should render a HeadingWrapper', () => {
      render();
      expect(element.find(HeadingWrapper).length).toEqual(1);
    });

    it('should render a ButtonsWrapper', () => {
      render();
      expect(element.find(ButtonsWrapper).length).toEqual(1);
    });

    it('should render a Body', () => {
      render();
      expect(element.find(Body).length).toEqual(1);
    });

    describe('when a user is not logged in', () => {
      it('should render two Buttons', () => {
        render();
        expect(element.find(Button).length).toEqual(2);
      });

      it('should show the I want to refinance button', () => {
        render();
        expect(
          element
            .find(Button)
            .at(0)
            .text()
        ).toEqual(refinanceLabel);
      });

      it('should show the I want to buy a home button', () => {
        render();
        expect(
          element
            .find(Button)
            .at(1)
            .text()
        ).toEqual(buyNewLabel);
      });
    });

    describe('when a user is logged in', () => {
      it('should render one Button', () => {
        render({ isAuth: true });

        expect(element.find(Button).length).toEqual(1);
      });

      it('should show the Start new application button if they do not have an application', () => {
        render({ isAuth: true });
        expect(
          element
            .find(Button)
            .at(0)
            .text()
        ).toEqual(startNewLabel);
      });

      it('should show the continue application button if they have an application', () => {
        render({ isAuth: true, continueApplicationUrl: '/', applicationDate: '6 February 2019' });
        expect(
          element
            .find(Button)
            .at(0)
            .text()
        ).toEqual(continueLabel);
      });
    });
  });

  describe('Button behaviour', () => {
    describe('when a user is not logged in', () => {
      describe('the I want to refinance button', () => {
        it('should link to the correct location', () => {
          render();
          expect(
            element
              .find(Button)
              .at(0)
              .props().href
          ).toEqual(REFINANCE_LINK);
        });
      });

      describe('the I want to buy a new home button', () => {
        it('should link to the correct location', () => {
          render();
          expect(
            element
              .find(Button)
              .at(1)
              .props().href
          ).toEqual(BUY_NEW_LINK);
        });
      });
    });

    describe('when a user is logged in', () => {
      describe('the Start new application button', () => {
        it('should link to the correct location', () => {
          render({ isAuth: true });
          expect(
            element
              .find(Button)
              .at(0)
              .props().href
          ).toEqual(START_NEW_LINK);
        });
      });

      describe('the Continue application button', () => {
        it('should open a Modal', () => {
          render({ isAuth: true, continueApplicationUrl: '/', applicationDate: '6 February 2019' });
          expect(element.find(Modal).props().show).toEqual(false);
          element
            .find(Button)
            .at(0)
            .simulate('click');
          expect(element.find(Modal).props().show).toEqual(true);
        });
      });

      describe('the Modal is open', () => {
        const applicationDate = '6 February 2019';
        const continueApplicationUrl = '/';
        beforeEach(() => {
          render({ isAuth: true, continueApplicationUrl, applicationDate });
          element
            .find(Button)
            .at(0)
            .simulate('click');
        });

        it('should include the applicationDate in the text', () => {
          expect(element.find(Modal).text()).toContain(applicationDate);
        });

        describe('the Start new application button', () => {
          it('should link to the correct location', () => {
            expect(
              element
                .find(Button)
                .at(1)
                .props().href
            ).toEqual(START_NEW_LINK);
          });
        });

        describe('the Continue application button', () => {
          it('should link to the continueApplicationUrl', () => {
            expect(
              element
                .find(Button)
                .at(2)
                .props().href
            ).toEqual(continueApplicationUrl);
          });
        });
      });
    });
  });
});
