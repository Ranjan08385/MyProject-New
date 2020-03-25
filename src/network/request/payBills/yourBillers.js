/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const yourPhoneBillers = (chkFlag, custId, regBeneSubCatgCode) => {
  const paymentDetails = {
    chkFlag,
    custId,
    regBeneSubCatgCode,
  };

  return {
    url: '/payBills/getPayforCatgcode',
    payload: paymentDetails,
    type: Types.POST,
    tag: ApiTag.BILLING_STATUS_VIEW_DETAILS,
    headers: { 'Content-Type': 'application/json' },
  };
};
