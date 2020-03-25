/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #154. b
// -Input
// {}

export const addDonationList = data => {
  return {
    url: 'managedonations/actViewRegBeneService',
    payload: data,
    type: Types.POST,
    tag: ApiTag.ADD_BENEFICIARY_LIST,
    headers: {},
  };
};
