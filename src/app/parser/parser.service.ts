import { Injectable } from '@angular/core';

@Injectable()
export class ParserService {

  constructor() { }

  flatten(source, result = null, currKey = null) {
    if (!result) result = {};
    for (let key in source) {
      if (!source.hasOwnProperty(key) || source[key] instanceof Function) continue;
      let resultKey = currKey ? currKey + '.' + key : key;
      if (source[key] instanceof Object) {
        this.flatten(source[key], result, resultKey);
      } else {
        result[resultKey] = source[key];
      }
    }
    return result;
  }

  unfold(source) {
    let result = {};
    for (let key in source) {
      if (!source.hasOwnProperty(key) || source[key] instanceof Function) continue;
      let chain = key.split('.');
      if (chain.length > 1) {
        chain.reduce(
            (acc, curr, index) => {
              let next = chain[++index];
              if (!next) {
                acc[curr] = source[key];
              } else {
                if (!acc[curr]) acc[curr] = Number.isInteger(+next) ? [] : {};
              }
              return acc[curr];
            }, result
        );
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }

}
