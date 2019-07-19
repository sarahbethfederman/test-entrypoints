export enum ApplicationStage {
  started_application = 'started_application',
  finished_funnel2 = 'finished_funnel2',
  finished_funnel3 = 'finished_funnel3',
  finalised_application = 'finalised_application',
  loan_selected = 'loan_selected',
}

export type ApplicationType = 'Refinance' | 'New Purchase';

export interface Applicant {
  uuid?: string;
  sfid?: string;
  type?: 'primary' | string;
  firstName?: string;
}
export interface Application {
  type?: ApplicationType;
  sfid?: string;
  number?: number;
  stage?: ApplicationStage;
  createdDate?: string;
  continueURL?: string;
  applicants?: Applicant[];
  isAuth?: boolean;
}
export interface Broker {
  fullName: string;
  photo: string;
  phone: string;
  title: string;
}

export interface ApplicationInSF {
  activeApplicationNumber?: number;
  activeApplicationSfid?: string;
  applicants?: ApplicantInSF[];
  applicationStage?: string;
  applicationCreatedDate?: string;
  continueApplicationLink?: string;
  transactionType?: string;
  isAuth?: boolean;
}

export interface ApplicantInSF {
  applicant_type?: string;
  first_name?: string;
  married_to_uuid?: any;
  sfid?: string;
  uuid?: string;
}
