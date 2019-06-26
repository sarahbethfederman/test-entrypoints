import * as React from 'react';
import { Button } from '@lendi-ui/button';
import { Wrapper, HeadingWrapper, ButtonsWrapper, ModalContentWrapper, ModalFooterWrapper } from './index.style';
import Modal from '@lendi-ui/modal';
import { ArrowRight } from '@lendi-ui/fancy-icon';
import { Body } from '@lendi-ui/typography';

export const refinanceLabel = 'I want to refinance';
export const buyNewLabel = 'I want to buy a home';
export const startNewLabel = 'Start a new application';
export const continueLabel = 'Continue application';

export const START_NEW_LINK = '/';
export const BUY_NEW_LINK = '/owning-property/purchase-property/';
export const REFINANCE_LINK = '/owning-property/refinance/';

export interface CallToActionProps {
  isAuth: boolean;
  applicationDate?: string;
  continueApplicationUrl?: string;
  params?: string;
}

export interface CallToActionState {
  isModalOpen: boolean;
}

export class CallToAction extends React.Component<CallToActionProps, CallToActionState> {
  constructor(props: CallToActionProps) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  setIsModalOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { isAuth, continueApplicationUrl, params = '', applicationDate = '' } = this.props;

    return (
      <Wrapper>
        <HeadingWrapper size="xl" color="shade.0">
          Search for a home loan
        </HeadingWrapper>
        <ButtonsWrapper>
          {isAuth ? (
            <div>
              {continueApplicationUrl ? (
                <div>
                  <Button variant="primary" onClick={this.setIsModalOpen}>
                    {continueLabel}
                  </Button>
                  <Modal show={this.state.isModalOpen} size="lg" onHide={this.setIsModalOpen}>
                    <Modal.Header title={'Continue Application'} />
                    <Modal.Content>
                      <ModalContentWrapper>
                        <ArrowRight width="5em" height="5em" />
                        <Body>You already started an application on</Body>
                        <Body>{applicationDate}</Body>
                        <Body mt="md">Would you like to continue?</Body>
                      </ModalContentWrapper>
                    </Modal.Content>
                    <Modal.Footer>
                      <ModalFooterWrapper>
                        <Button variant="secondary" href={`${START_NEW_LINK}${params}`}>
                          {startNewLabel}
                        </Button>
                        {continueApplicationUrl && (
                          <Button variant="primary" href={`${continueApplicationUrl}${params}`}>
                            {continueLabel}
                          </Button>
                        )}
                      </ModalFooterWrapper>
                    </Modal.Footer>
                  </Modal>
                </div>
              ) : (
                <Button variant="secondary" href={`${START_NEW_LINK}${params}`}>
                  {startNewLabel}
                </Button>
              )}
            </div>
          ) : (
            <div>
              <Button variant="secondary" href={`${REFINANCE_LINK}${params}`}>
                {refinanceLabel}
              </Button>
              <Button variant="primary" href={`${BUY_NEW_LINK}${params}`}>
                {buyNewLabel}
              </Button>
            </div>
          )}
        </ButtonsWrapper>
        <Body color="shade.0">This will not affect your credit score.</Body>
      </Wrapper>
    );
  }
}
