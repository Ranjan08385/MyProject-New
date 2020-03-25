/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #110

const YodleeTransfer = data => {
  return {
    url: '/moneytransfer/YodleePostService',
    payload: data,
    type: Types.POST,
    tag: ApiTag.VERIFY_TXN,
    headers: {},
  };
};

export default YodleeTransfer;
