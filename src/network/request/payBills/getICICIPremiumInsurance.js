/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #163
// -Input
// {}

export const getIciciPremiumInsurance = inputParams => {
  return {
    url: '/payBills/getPrudPremAmount',
    payload: inputParams,
    type: Types.POST,
    tag: ApiTag.PREMIUM_INSURANCE,
    headers: {},
  };
};
