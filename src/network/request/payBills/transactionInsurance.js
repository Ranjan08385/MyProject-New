/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #205
// -Input
// {}

export const transactionInsurance = inputParams => {
  return {
    url: '/managetransactions/transInsurance',
    payload: inputParams,
    type: Types.POST,
    tag: ApiTag.PREMIUM_INSURANCE,
    headers: {},
  };
};
