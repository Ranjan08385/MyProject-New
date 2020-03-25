import { Platform } from 'react-native';
import {
  COUNTRY_AUSTRALIA,
  COUNTRY_CANADA,
  COUNTRY_HONGKONG,
  COUNTRY_SINGAPORE,
  COUNTRY_UAE,
  COUNTRY_UK,
  COUNTRY_USA
} from './countryCode';
import {
  DOMAIN_URL_EUROPE,
  DOMAIN_URL_HONGKONG,
  DOMAIN_URL_NON_US,
  DOMAIN_URL_SINGAPORE,
  DOMAIN_URL_US
} from './domainUrl';

export const makeSessionId = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const checkLN = res => {
  let value;
  if (res.LNSTATUS === 'SUCCESS' || res.LNSTATUS === 'LN Success Manual') {
    if (res.EQUIFAXSTATUS === 'Y') {
      value = false;
    } else {
      value = false;
    }
  } else {
    value = true;
  }
  return value;
};

export const getAllUrlParams = url => {
  // get query string from url (optional) or window
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  const obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    const arr = queryString.split('&');

    for (let i = 0; i < arr.length; i++) {
      // separate the keys and the values
      const a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      let paramName = a[0];
      let paramValue = typeof a[1] === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {
        // create key if it doesn't exist
        const key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          const index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
};

export const filterUtmCodes = utmArray => {
  const newUtmArray = [];
  // console.log(' utmarray >>>>>', utmArray);
  if (utmArray === undefined) {
    if (Platform.os !== 'web' || utmArray.length == 0) {
      newUtmArray.utm_source = '';
      newUtmArray.utm_medium = '';
      newUtmArray.utm_term = '';
      newUtmArray.utm_content = '';
      newUtmArray.utm_campaign = '';
    }
  }

  return newUtmArray;
};
export const getDomainURL = countryId => {
  let domainUrl = '';
  switch (countryId) {
    case COUNTRY_USA:
      domainUrl = DOMAIN_URL_US;
      break;
    case COUNTRY_AUSTRALIA:
      domainUrl = DOMAIN_URL_NON_US;
      break;
    case COUNTRY_CANADA:
      domainUrl = DOMAIN_URL_NON_US;
      break;
    case COUNTRY_UAE:
      domainUrl = DOMAIN_URL_NON_US;
      break;
    case COUNTRY_UK:
      domainUrl = DOMAIN_URL_EUROPE;
      break;
    case COUNTRY_SINGAPORE:
      domainUrl = DOMAIN_URL_SINGAPORE;
      break;
    default:
      domainUrl = DOMAIN_URL_US;
  }
  return domainUrl;
};
