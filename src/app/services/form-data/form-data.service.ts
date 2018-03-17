import { Injectable } from '@angular/core';

@Injectable()
export class FormDataService {

  /**
   * Returns Promise with json data
   *
   * @param {string} url
   * @returns {Promise<any>}
   */
  static getRemoteJson(url: string) {
    return fetch(url)
      .then(function (response) {
        return response.json();
      });
  }

  /**
   * Returns parsed json
   *
   * @param {string} json
   * @returns {any}
   */
  static processLocalJson(json: string) {
    return JSON.parse(json);
  }
}

