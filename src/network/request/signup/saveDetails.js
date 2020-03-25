/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';
// API doc ref - #12
// -Input
// {}

export const saveDetails = data => {
  return {
    url: '/signup/registerAboutDetails',
    payload: data,
    type: Types.POST,
    tag: ApiTag.SAVE_DETAILS,
    headers: {},
  };
};
