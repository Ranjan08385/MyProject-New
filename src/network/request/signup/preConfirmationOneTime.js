/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// api ref - #29.a.2

export const preOneTimeConfirmTransaction = data => {
  return {
    url: '/signup/confirmOnetimeTransaction',
    payload: data,
    type: Types.POST,
    tag: ApiTag.CONFIRM_PRE_ONE_TIME_TRANSACTION,
    headers: {}
  };
};
