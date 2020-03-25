/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #150
// -Input
// {}

export const donationLocation = data => {
  return {
    url: 'managedonations/myDonationLocationList',
    payload: data,
    type: Types.POST,
    tag: ApiTag.DONATION_LOCATION,
    headers: {},
  };
};
