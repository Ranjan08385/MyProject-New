/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';
import { encodeBase64 } from '../../../utils/jsEncrypt';

export const sendMoneyAction = (
  CUSTID,
  login,
  RESCOUNTRYID,
  DISBCURRENCY = 458753,
  userType,
  landingInfoObj,
  promoCode,
  instId
) => {
  const LOGIN = encodeBase64(login);
  const data = {
    CUSTID,
    RESCOUNTRYID,
    LOGIN,
    userActionToken: 'NA',
    product: '',
    DISBCURRENCY,
    userType,
    transactionObject: {
      destCurrency: '',
      beneamount: 0.0,
      convsrvtaxamt: 0.0,
      exchrate: 0.0,
      benecharge: 0.0,
      splRateFlag: '',
      amount: 0.0,
      retCharge: 0.0,
      countryCcyId: 0,
      remtype: 0,
      remitterCountryId: 0,
      currency: 0,
      productId: 0,
      M2ICustId: 0,
      instanceId: 0,
      INRFlag: false,
      commision: 0.0,
      customerType: ''
    },
    landingInfoObj: {
      checkPromo: '',
      exchangeRatePromo: landingInfoObj.exchangeRatePromo,
      commPromo: landingInfoObj.commPromo,
      oldExchangeRate: landingInfoObj.oldExchangeRate,
      promoCode,
      custId: '',
      fname: '',
      lname: '',
      mobileccode: '',
      mobile: '',
      email: '',
      prefRateFlag: '',
      couponComm: 0.0,
      l_fcyAmt: landingInfoObj.l_fcyAmt,
      l_lcyAmt: landingInfoObj.l_lcyAmt,
      l_fcyAmtWtChrgs: landingInfoObj.l_fcyAmtWtChrgs,
      l_lcyAmtWtChrgs: landingInfoObj.l_lcyAmtWtChrgs,
      l_countryID: landingInfoObj.l_countryID,
      l_currCD: landingInfoObj.l_currCD,
      l_transferAmt: landingInfoObj.l_transferAmt,
      l_remitamoutwithoutcommision: landingInfoObj.l_remitamoutwithoutcommision,
      l_country: landingInfoObj.l_country,
      l_countryNew: landingInfoObj.l_countryNew,
      l_ccyID: landingInfoObj.l_ccyID,
      l_countryCcyID: landingInfoObj.l_countryCcyID,
      l_remType: landingInfoObj.l_remType,
      l_prodID: landingInfoObj.l_prodID,
      l_dualFlag: landingInfoObj.l_dualFlag,
      l_serviceTax: landingInfoObj.l_serviceTax,
      l_fccServiceTax: landingInfoObj.l_fccServiceTax,
      l_commissionVal: landingInfoObj.l_commissionVal,
      l_exchangeRt: landingInfoObj.l_exchangeRt,
      couponPaise: landingInfoObj.couponPaise,
      cardID: landingInfoObj.cardID
    },
    instId
  };

  return {
    url: '/signup/sendMoney',
    payload: data,
    type: Types.POST,
    tag: ApiTag.SAVE_DETAILS,
    headers: {}
  };
};
