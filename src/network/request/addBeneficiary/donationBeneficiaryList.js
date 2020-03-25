/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #150
// -Input
// {}

export const donationBeneficiaryList = data => {
  return {
    url: 'managedonations/myDonationBeneficiaryList',
    payload: data,
    type: Types.POST,
    tag: ApiTag.DONATION_BENEFICIARY_LIST,
    headers: {},
  };
};
