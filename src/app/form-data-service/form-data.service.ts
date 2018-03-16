import {Injectable} from '@angular/core';

@Injectable()
export class FormDataService {

  static getRemoteJson(url: string) {
    return fetch(url)
      .then(function (response) {
        return response.json();
      });
  }

  static processLocalJson(json: string) {
    return JSON.parse(json);
  }
}
