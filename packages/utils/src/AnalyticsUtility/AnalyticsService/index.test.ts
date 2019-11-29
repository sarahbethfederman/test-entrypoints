import { trackNavigation } from '.';
import * as LAP from '@lendi/lendi-analytics-package';
describe('analytics tracking', () => {
  let trackMock: any;
  console.error = jest.fn();
  beforeEach(() => {
    trackMock = jest.spyOn(LAP, 'track');
    trackMock.mockImplementation(() => {});
  });
  describe('LAP with Lendi theme', () => {
    it('should be able to call tracking function', () => {
      trackNavigation('test', false, LAP.WindowPosition.footer, LAP.Category.home, 'LendiLogo');
      expect(trackMock).toHaveBeenCalled();
    });
    it('should call track with correct parameter', () => {
      trackNavigation('test', false, LAP.WindowPosition.footer, LAP.Category.home, 'LendiLogo');
      expect(trackMock).toHaveBeenCalledWith(undefined, {
        action: 'navigate',
        button_text: 'test',
        category: 'home-page',
        position: 'footer',
        user_type: 'user',
      });
    });
  });

  describe('without Lendi theme', () => {
    it('should NOT call tracking function from LAP', () => {
      trackNavigation('test', false, LAP.WindowPosition.footer, LAP.Category.home, 'NotLendi');
      expect(console.error).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('Not a Lendi Theme');
    });
  });
});
