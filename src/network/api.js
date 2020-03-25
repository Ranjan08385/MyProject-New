/* eslint-disable func-names */
/* eslint-disable no-undef */
import axios from 'axios';
// import { isConnectedToInternet } from '../utils';
import {
  getPrefData,
  PREF_AUTH_TOKEN,
  CSRF_TOKEN,
  RESCOUNTRYID
} from '../storage/preferenceStorage';
import { SOMETHING_WRONG, Types } from './request';
import { getDomainURL } from '../utils/helperUtils';

// const instance = axios.create({
//   baseURL: 'https://m2istagingweb.icicibank.com/newm2iNetUS_NIVEUS_DEV/m2ipwa'
//   // baseURL: 'https://m2istagingweb.icicibank.com/newm2iNetUS_NIVEUS_UAT/m2ipwa',
//   // baseURL: 'http://35.239.61.42:7001/newm2iNetUS_NIVEUS/m2ipwa/',
//   // baseURL: 'https://m2istagingweb.icicibank.com/newm2iNetUS_NIVEUS_DEV/m2ipwa',
// });

const TAG = 'APIREQUEST';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhZDc0ZGFlMS0zNmUyLTQ5YjktOTFkNS1iMWE4ZDM0Yjk0ZjEiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJkZWVwYWsxQGdtYWlsLmNvbSIsImlhdCI6MTU3ODY2MjcwMCwiZXhwIjoxNTc4NjY0NTAwLCJyZWZyZXNoQ291bnQiOjAsInJlZnJlc2hMaW1pdCI6MX0.7IPYCiko3JrW7RE1GKi1KJ07SDvlWpsrU-jK6J29wIU';

const makeAPICall = async request => {
  let apiUrl = '';
  const token = await getPrefData(PREF_AUTH_TOKEN);
  const csrfToken = await getPrefData(CSRF_TOKEN);
  const resCountryId = await getPrefData(RESCOUNTRYID);

  apiUrl = getDomainURL(resCountryId);

  // const instance = axios.create({ baseURL: apiUrl });
  const instance = axios.create({
    baseURL: `${apiUrl}`
    // baseURL: 'https://m2istagingweb.icicibank.com/newm2iNetUS_NIVEUS_UAT/m2ipwa',
    // baseURL: 'http://35.239.61.42:7001/newm2iNetUS_NIVEUS/m2ipwa/',
    // baseURL: 'https://m2istagingweb.icicibank.com/newm2iNetUS_NIVEUS_DEV/m2ipwa',
  });

  instance.defaults.timeout = 45000;
  instance.defaults.headers.post['Content-Type'] = 'application/json';

  let authRequired;
  if (
    request.authRequired === 'undefined' ||
    request.authRequired === undefined
  ) {
    authRequired = true;
  } else {
    authRequired = request.authRequired;
  }
  if (authRequired) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else if (request.userId) {
    instance.defaults.headers.common['X-Csrf-Token'] = csrfToken;
    instance.defaults.headers.common['User-Id'] = request.userId;

    // console.log('token 23', request.csrfToken);
  } else if (request.csrfToken) {
    instance.defaults.headers.common['X-Csrf-Token'] = csrfToken;
    // console.log('token 23', request.csrfToken);
  } else {
    delete instance.defaults.headers.common.Authorization;
    delete instance.defaults.headers.common['X-Csrf-Token'];
    // console.log('token 24', request.authRequired, authRequired);
  }

  // console.log('token', request.authRequired, instance.defaults.headers);

  // const connectionAvailable = await isConnectedToInternet();
  // if (!connectionAvailable) {
  //   const err = {
  //     code: INTERNET_NOT_CONNECTED
  //   };
  //   throw err;
  // }
  let axiosRequest;
  const { type, url, payload, tag } = request;

  // console.log(TAG, `type: ${type}`);
  // console.log(TAG, `url: ${url}`);
  // console.log(TAG, `payload: ${payload}`);
  if (type === Types.GET) {
    axiosRequest = instance.get(url);
  } else if (type === Types.POST) {
    axiosRequest = instance.post(url, payload);
  }

  return axiosRequest
    .then(response => {
      return { tag, data: response.data };
    })
    .catch(function(error) {
      // console.log(TAG, `inside catch of api call....${error}`);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(TAG, `status: ${error.response}`);
        const err = {
          code: error.response.status,
          message: error.response.statusText
        };
        throw err;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(TAG, 'some unwanted error of api call....');
        const err = {
          code: SOMETHING_WRONG
        };
        throw err;
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log(TAG, 'some unwanted error2 api call....');
        const err = {
          code: SOMETHING_WRONG
        };
        throw err;
      }
    });
};

export default makeAPICall;
