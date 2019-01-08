export type ApplicationStage =
  | 'no_application'
  | 'started_application'
  | 'finished_funnel2'
  | 'finished_funnel3'
  | 'finalised_application'
  | 'loan_selected';

export type ApplicationType = 'Refinance' | 'New Purchase';

export interface Applicant {
  uuid?: string;
  sfid?: string;
  type?: 'primary' | string;
}
export interface Application {
  type?: ApplicationType;
  sfid?: string;
  number?: number;
  stage?: ApplicationStage;
  continueURL?: string;
  applicants?: Applicant[];
}

export interface Broker {
  fullName: string;
  photo: string;
  phone: string;
  title: string;
}
