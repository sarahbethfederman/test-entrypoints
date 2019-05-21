import { ThemeMap } from '@lendi-ui/theme';
import axios, { AxiosResponse } from 'axios';
import { ApplicationInSF, Application, ApplicantInSF, Applicant, ApplicationStage, Broker } from '../types';
import { WindowPosition, Category } from '@lendi/lendi-analytics-package';
import { trackNavigation } from '@lendi-ui/utils';

export const fetchApplication = (baseURL: string, token: string, sfid: string): Promise<Application | undefined> => {
  return axios
    .post(
      `${baseURL}/api/v1/application-stages`,
      { sfid },
      {
        headers: {
          Authorization: `bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => transformApplication(res));
};

export const fetchBroker = (baseURL: string, token: string): Promise<Broker | undefined> => {
  return axios
    .get(`${baseURL}/api/v1/application-stages/broker`, {
      headers: {
        Authorization: `bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => transformBroker(res));
};

export const mapApplicant = (applicants?: ApplicantInSF[]): Applicant[] | undefined => {
  if (applicants && applicants.length) {
    return applicants.map((app) => {
      return {
        sfid: app.sfid,
        uuid: app.uuid,
        type: app.applicant_type,
        firstName: app.first_name,
      };
    });
  }
  return undefined;
};

export const checkApplicationStage = (stage?: string): ApplicationStage | undefined => {
  if (stage && stage in ApplicationStage) {
    return stage as ApplicationStage;
  }
  return undefined;
};

export const mapApplication = (application?: ApplicationInSF): Application | undefined => {
  if (application && checkApplicationStage(application.applicationStage)) {
    return {
      type: application.transactionType === 'Refinance' ? 'Refinance' : 'New Purchase',
      sfid: application.activeApplicationSfid,
      number: application.activeApplicationNumber,
      createdDate: application.applicationCreatedDate,
      stage: checkApplicationStage(application.applicationStage),
      continueURL: application.continueApplicationLink,
      applicants: mapApplicant(application.applicants),
      isAuth: application.isAuth,
    };
  }
  return undefined;
};

export const transformApplication = (applicationResponse: AxiosResponse<any>): Application | undefined => {
  const {
    activeApplicationNumber,
    activeApplicationSfid,
    applicants,
    applicationStage,
    applicationCreatedDate,
    continueApplicationLink = '/',
    transactionType,
    isAuth,
  } = applicationResponse.data.data;

  return mapApplication({
    activeApplicationNumber,
    activeApplicationSfid,
    applicants,
    applicationStage,
    applicationCreatedDate,
    continueApplicationLink,
    transactionType,
    isAuth,
  });
};

export const transformBroker = (brokerResponse: AxiosResponse<any>): Broker | undefined => {
  const { broker } = brokerResponse.data.data;
  if (broker) {
    return {
      fullName: broker.fullName,
      photo: broker.photo,
      phone: broker.phone,
      title: broker.title,
    };
  }

  return undefined;
};

export const analysticHelper = (text: string, isBroker: boolean, position: WindowPosition, theme?: ThemeMap) => {
  // this trackNavigation is specific for navbar so, we can hardcoded it to the Category.navigation.
  trackNavigation(text, isBroker, position, Category.navigation, theme!.logo.logoName);
};
