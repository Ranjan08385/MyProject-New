/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #150
// -Input
// {}

export const donationCategory = data => {
  return {
    url: 'managedonations/myDonationCategoryList',
    payload: data,
    type: Types.POST,
    tag: ApiTag.DONATION_CATEGORY,
    headers: {},
  };
};
