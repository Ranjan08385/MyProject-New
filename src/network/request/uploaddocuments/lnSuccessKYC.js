/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #13.b

export const lnSuccessKYC = payload => {
  return {
    url: '/signup/lnSuccessKYC',
    payload,
    type: Types.POST,
    tag: ApiTag.UPLOAD_DOCUMENTS,
    headers: {},
  };
};
