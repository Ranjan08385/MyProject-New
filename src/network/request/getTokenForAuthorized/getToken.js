/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref- #21
// Input :
// {
//   "instanceId":1000000001
// }
// Output :
// {
//   "status":"success",
//   "result":[
//      {"COUNTRYID":"751428","COUNTRYCODE":"AF","COUNTRYDESC":"Afghanistan"},
//      {"COUNTRYID":"87","COUNTRYCODE":"AUS","COUNTRYDESC":"Australia"}, ...]
// }
export const getToken = (emailId, instanceId) => {
  return {
    url: '/commons/RegistrationJwtToken',
    payload: { emailId, instanceId },
    type: Types.POST,
    tag: ApiTag.GET_TOKEN,
    headers: {},
    authRequired: false,
  };
};
