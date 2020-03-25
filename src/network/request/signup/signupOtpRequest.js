/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

export const signupOtp = (
  sessionId,
  mobileNo,
  custname,
  email,
  country,
  userId,
  instanceId,
  regFlag
) => {
  return {
    url: '/signup/OtpSendWithEncryptToOthers',
    payload: {
      sessionId,
      mobileNo,
      custname,
      email,
      country,
      userId,
      instanceId,
      regFlag,
    },
    type: Types.POST,
    tag: ApiTag.SIGNUP_OTP,
    headers: {},
    authRequired: false,
    csrfToken: true,
    userId: email,
  };
};
