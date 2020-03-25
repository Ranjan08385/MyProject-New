/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API doc ref - #154
// -Input
// {}

export const registeredCategory = data => {
  return {
    url: 'manageregisteredentity/myRegisteredEntityCategoryList',
    payload: data,
    type: Types.POST,
    tag: ApiTag.REGISTERED_CATEGORY,
    headers: {},
  };
};
