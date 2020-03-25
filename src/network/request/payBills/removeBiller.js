/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const removeBiller = (
  nickName,
  pageMode,
  custRegBeneId,
  custId,
  instId,
) => {
  const paymentDetails = {
    nickName,
    pageMode,
    custRegBeneId,
    custId,
    instId,
  };

  return {
    url: '/makepayment/removeYourBiller',
    payload: paymentDetails,
    type: Types.POST,
    tag: ApiTag.BILLING_STATUS_VIEW_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};
