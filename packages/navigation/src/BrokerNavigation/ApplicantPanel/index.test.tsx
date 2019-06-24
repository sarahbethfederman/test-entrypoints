import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { ApplicantPanel, ApplicantState } from './index';
import { PanelWrapper, ApplicantOverline, LinkWrapper, ApplicantLink } from './index.style';

let element: any;
const clickLink = jest.fn();
const productProgresses = ['contactdetails', 'personaldetails', 'employmentHistory', 'E-consent'];
const applicantState: ApplicantState = {
  contactDetails: true,
  personalDetails: true,
  employmentHistory: true,
  eConsent: true,
};

const render = (props: any) => {
  element = mount(
    <Theme>
      <ApplicantPanel
        applicantName="Leo Lyu"
        applicantState={applicantState}
        productProgress={productProgresses[0]}
        clickLink={clickLink}
        {...props}
      />
    </Theme>
  );
};

describe('ApplicantPanel', () => {
  it('should mount the whole ApplicantPanel component', () => {
    render({});
    expect(element.find(ApplicantPanel)).toHaveLength(1);
    expect(element.find(PanelWrapper)).toHaveLength(1);
  });

  it('should mount the ApplicantOverline component', () => {
    render({});
    expect(element.find(ApplicantOverline)).toHaveLength(1);
  });

  it('should mount the ApplicantLink component', () => {
    render({});
    expect(element.find(LinkWrapper)).toHaveLength(4);
    expect(element.find(ApplicantLink)).toHaveLength(4);
  });

  it('should mount the ApplicantLink component', () => {
    productProgresses.forEach((productProgress) => {
      render({ productProgress });
      element.find(ApplicantLink).forEach((ele: any) => {
        ele.simulate('click');
        expect(clickLink).toBeCalled();
        expect(clickLink).toHaveBeenCalledWith(productProgress);
      });
    });
  });
});
