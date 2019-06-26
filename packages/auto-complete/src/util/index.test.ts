import { extractData } from '.';
import { TEST_DATA_SOURCE } from '../AutoComplete/index.test';

describe('test filtered data', () => {
  describe('when data is retrieved externally(Async flow)', () => {
    describe('matching results', () => {
      it('should return non-zero result set', async (done) => {
        const filteredDataSource = await extractData('bank', () => Promise.resolve(TEST_DATA_SOURCE));
        expect(filteredDataSource.length).toEqual(8);
        done();
      });
    });
    describe('no matching results', () => {
      it('should return zero result set', async (done) => {
        const filteredDataSource = await extractData('xyz', () => Promise.resolve([]));
        expect(filteredDataSource.length).toEqual(0);
        done();
      });
    });
    describe('when text input is empty', () => {
      it('should return zero result set', async (done) => {
        const filteredDataSource = await extractData('', () => Promise.resolve([]));
        expect(filteredDataSource.length).toEqual(0);
        done();
      });
    });
  });
  describe('when data is internal', () => {
    describe('matching results', () => {
      it('should return non-zero result set', async (done) => {
        const filteredDataSource = await extractData('bank', TEST_DATA_SOURCE);
        expect(filteredDataSource.length).toEqual(4);
        done();
      });
    });
    describe('no matching results', () => {
      it('should return zero result set', async (done) => {
        const filteredDataSource = await extractData('xyz', []);
        expect(filteredDataSource.length).toEqual(0);
        done();
      });
    });
    describe('when text input is empty', () => {
      it('should return zero result set', async (done) => {
        const filteredDataSource = await extractData('', []);
        expect(filteredDataSource.length).toEqual(0);
        done();
      });
    });
    describe('test to make input text bold', () => {
      it('in matching results, input should be wrapped with bold tag in ', async () => {
        const filteredDataSource = await extractData('Adelaide', TEST_DATA_SOURCE);
        filteredDataSource.forEach((f) => {
          const first = f.label.indexOf('<b>');
          const last = f.label.indexOf('</b>');
          const substr = f.label.substr(first + 3, last - 3);
          expect(substr).toEqual('Adelaide');
        });
      });
    });
  });
});
