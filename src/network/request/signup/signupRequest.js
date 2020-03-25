/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const signup = (
  fName,
  lName,
  termVal,
  userType,
  mobile,
  email,
  siteCode,
  sessionId,
  utmArray,
  instanceId,
  resCountryId
) => {
  const data = {
    goStep: 'amtSignUp',
    termVal: 'no',
    instanceId,
    siteCode,
    channelId: 'null',
    nriAccNum: 'null',
    custIdNew: null,
    utmSource: utmArray.utm_source,
    utmMedium: utmArray.utm_medium,
    utmTerm: utmArray.utm_term,
    utmContent: utmArray.utm_content,
    utmCampaign: utmArray.utm_campaign,
    utmAdGroup: '',
    mktFlag: termVal,
    checkBox: 'on',
    countryRes: resCountryId,
    mobile,
    email,
    fname: fName,
    lname: lName,
    mobileccode: '1',
    custId: '',
    sessionId,
    mname: '',
    gender: '',
    mm: '',
    dd: '',
    yyyy: '',
    phonecCode: '',
    phoneCityCode: '',
    phoneNo: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    zipCode: '',
    marktMailflg: '',
    userType,
    initialLeadEntryFlag: 'insertValue'
  };
  return {
    url: '/moneytransfer/saveContactDetails',
    payload: data,
    type: Types.POST,
    tag: ApiTag.SIGNUP,
    headers: {}
    // authRequired: false,
  };
};
