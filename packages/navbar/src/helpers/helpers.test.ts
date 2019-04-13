import { mapApplicant, mapApplication, checkApplicationStage, fetchApplication, fetchBroker } from './helpers';

import * as moxios from 'moxios';

const BASE_URL = 'http://example.com';
const TOKEN = 'abc-123';
const SFID = '321-cba';

const applicationRes = {
  activeApplicationNumber: 16,
  activeApplicationSfid: '4bb40e',
  applicants: [],
  applicationCreatedDate: '24 October 2018',
  applicationStage: 'started_application',
  continueApplicationLink: '/dashboard/application',
  isAuth: true,
  transactionType: 'New Purchase',
};

const brokerData = {
  fullName: 'Jack Chen',
  phone: '02 9048 5786',
  photo: 'https://s3-ap-southeast-2.amazonaws.com/acf-profile-photo/Jack+Chen.jpg',
  title: 'Home Loan Specialist',
};

function applicationLoaded() {
  moxios.stubRequest(/\/api\/v1\/application-stages$/, {
    status: 200,
    response: {
      data: applicationRes,
    },
  });
}

function brokerLoaded() {
  moxios.stubRequest(/\/api\/v1\/application-stages\/broker$/, {
    status: 200,
    response: {
      data: {
        broker: brokerData,
      },
    },
  });
}

function applicationErrored() {
  moxios.stubRequest(/\/api\/v1\/application-stages$/, {
    status: 500,
    response: {},
  });
}

function brokerErrored() {
  moxios.stubRequest(/\/api\/v1\/application-stages\/broker$/, {
    status: 500,
    response: {},
  });
}

describe('fetchApplication', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return application data with a valid server response', async (done) => {
    applicationLoaded();
    const result = await fetchApplication(BASE_URL, TOKEN, SFID);

    moxios.wait(() => {
      expect(result).toEqual(mapApplication(applicationRes));
      done();
    });
  });

  it('should return any errors thrown when fetching data', async (done) => {
    applicationErrored();
    let error: Error;
    try {
      await fetchApplication(BASE_URL, TOKEN, SFID);
    } catch (e) {
      error = e;
    }

    moxios.wait(() => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });
});

describe('fetchBroker', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return application data with a valid server response', async (done) => {
    brokerLoaded();
    const result = await fetchBroker(BASE_URL, TOKEN);

    moxios.wait(() => {
      expect(result).toEqual(brokerData);
      done();
    });
  });

  it('should return any errors thrown when fetching data', async (done) => {
    brokerErrored();
    let error: Error;
    try {
      await fetchBroker(BASE_URL, TOKEN);
    } catch (e) {
      error = e;
    }

    moxios.wait(() => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });
});

describe('Navbar helpers', () => {
  describe('mapApplicant', () => {
    it('should return undefined if no parameter is passed in', () => {
      const applicant = mapApplicant();
      expect(applicant).toBe(undefined);
    });

    it('should return undefined if empty array is passed in as params', () => {
      const applicant = mapApplicant();
      expect(applicant).toBe(undefined);
    });

    it('should map applicant correctly', () => {
      const applicantInSF = {
        sfid: 'aaa',
        uuid: '111-aaa',
        applicant_type: 'primary',
        first_name: 'Jill',
      };

      const applicantInClient = {
        sfid: applicantInSF.sfid,
        uuid: applicantInSF.uuid,
        type: applicantInSF.applicant_type,
        firstName: applicantInSF.first_name,
      };
      expect(mapApplicant([applicantInSF])).toEqual([applicantInClient]);
    });
  });

  describe('mapApplication', () => {
    it('should return undefined if no params is passed in', () => {
      const application = mapApplication();
      expect(application).toBe(undefined);
    });
    it('should return undefined if transactionType is undefined', () => {
      const application = mapApplication({ transactionType: undefined });
      expect(application).toBe(undefined);
    });
    it('should map application correctly', () => {
      const applicationFromSF = {
        activeApplicationNumber: 1,
        activeApplicationSfid: '1233123',
        applicants: [],
        applicationStage: 'started_application',
        applicationCreatedDate: '12 Dec 2019',
        continueApplicationLink: '/testing111',
        transactionType: 'Refinance',
        isAuth: true,
      };

      const expectedApplication = {
        number: applicationFromSF.activeApplicationNumber,
        sfid: applicationFromSF.activeApplicationSfid,
        applicants: mapApplicant(applicationFromSF.applicants),
        stage: applicationFromSF.applicationStage,
        continueURL: applicationFromSF.continueApplicationLink,
        type: applicationFromSF.transactionType,
        isAuth: true,
      };
      expect(mapApplication(applicationFromSF)).toEqual(expectedApplication);
    });
  });

  describe('checkApplicationStage', () => {
    const APPLICATION_STAGES = [
      'started_application',
      'finished_funnel2',
      'finished_funnel3',
      'finalised_application',
      'loan_selected',
    ];

    it('should return undefined if no param found', () => {
      const stage = checkApplicationStage();
      expect(stage).toEqual(undefined);
    });

    it('should return the param value if param is started_application ', () => {
      const stage = checkApplicationStage(APPLICATION_STAGES[0]);
      expect(stage).toEqual(APPLICATION_STAGES[0]);
    });

    it('should return the param value if param is finished_funnel2 ', () => {
      const stage = checkApplicationStage(APPLICATION_STAGES[1]);
      expect(stage).toEqual(APPLICATION_STAGES[1]);
    });

    it('should return the param value if param is finished_funnel3 ', () => {
      const stage = checkApplicationStage(APPLICATION_STAGES[2]);
      expect(stage).toEqual(APPLICATION_STAGES[2]);
    });

    it('should return undefined if the application stage are not withint the APPLICATION_STAGES array', () => {
      const stage = checkApplicationStage('aaaaa');
      expect(stage).toEqual(undefined);
    });
  });
});
