/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const postLoginCalculation = (
  custId,
  loginId,
  resCountryCode,
  l_countryID
) => {
  return {
    url: '/signup/postLoginCalculation',
    payload: {
      landingBean: null,
      l_goToStep: null,
      naviGate: null,
      resCountryCode,
      l_countryID,
      userActionToken: null,
      prefRateDuplicate: null,
      PrefRateCust: null,
      loginId,
      custId: custId == null ? null : custId,
    },
    type: Types.POST,
    tag: ApiTag.POST_CALCULATION,
    headers: {},
    authRequired: true,
  };
};
