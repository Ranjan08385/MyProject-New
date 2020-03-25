/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #156
// -Input
// {}

export const registeredEntityList = data => {
  return {
    url: 'manageregisteredentity/myRegisteredEntityList',
    payload: data,
    type: Types.POST,
    tag: ApiTag.REGISTERED_ENTITY_LIST,
    headers: {},
  };
};
