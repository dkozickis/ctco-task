import { FormDataService } from './form-data.service';

describe('FormDataService', () => {

  it('getRemoteJson should return Promise', function () {
    expect(FormDataService.getRemoteJson('http://google.com')).toEqual(jasmine.any(Promise));
  });

  it('processLocalJson should return object', function () {
    expect(FormDataService.processLocalJson('{"test" : "yes"}')).toEqual(jasmine.any(Object));
  });
});
