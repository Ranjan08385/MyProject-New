import { StyleSheet } from 'react-native';
import { responsiveWidth } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  mainPage: {
    borderColor: 'black',
    borderRadius: 1,
    marginLeft: '5%',
    backgroundColor: '#fcfcfc',
  },
  senderHeader: {
    fontSize: 20,
    color: '#e77817',
    marginBottom: '2%',
  },
  senderHeader_LDPI: {
    fontSize: 20,
    color: '#e77817',
  },
  mainPage_LDPI: {
    marginLeft: '5%',
  },
  contentPage: {
    flexDirection: 'column',
  },
  page1: {
    flex: 1,
    marginRight: '4%',
  },
  page2: {
    flex: 1,
  },
  contentPage_LDPI: {
    flexDirection: 'column',
  },
  contentPage_MDPI: {
    flexDirection: 'column',
  },
  contentPage_HDPI: {
    flexDirection: 'row',
  },
  contentPage_XHDPI: {
    flexDirection: 'row',
  },
  contentPage_XXHDPI: {
    flexDirection: 'row',
  },
  contentPage_XXXHDPI: {
    flexDirection: 'row',
  },
  contentPage_LAPTOP: {
    flexDirection: 'row',
  },
  Amount: {
    flex: 1,
    flexDirection: 'row',
  },
  tAmount: {
    flex: 1,
    alignItems: 'flex-start',
  },
  tamount: {
    flex: 1,
    alignItems: 'flex-end',
  },
  Amount_LDPI: {
    flexDirection: 'row',
  },
  tAmount_LDPI: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  tamount_LDPI: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  Fees: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    // justifyContent: 'flex-end',
  },
  tFees: {
    flex: 1,
    alignItems: 'flex-start',
  },
  tFeesValue: {
    flex: 1,
    alignItems: 'flex-end',
  },
  Payable: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
  Payable_LDPI: {
    marginTop: '2%',
    marginBottom: '8%',
  },
  Payable_MDPI: {
    marginBottom: '8%',
  },
  Payable_HDPI: {
    marginBottom: '8%',
  },
  Payable_XHDPI: {
    marginBottom: '8%',
  },
  Payable_XXHDPI: {
    marginBottom: '8%',
  },
  Payable_XXXHDPI: {
    marginBottom: '8%',
  },
  Payable_LAPTOP: {
    marginBottom: '8%',
  },
  aPayable: {
    flex: 1,
    alignItems: 'flex-start',
  },
  aPayableValue: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cAmount: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '4%',
  },
  convertAmount: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cAmountValue: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tRecipient: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    marginTop: '4%',
  },
  ttRecipient: {
    flex: 1,
    alignItems: 'flex-start',
  },
  ttRecipientValue: {
    flex: 1,
    alignItems: 'flex-end',
  },
  ttRecipientValue_MDPI: {
    marginTop: '0%',
  },
  custname: {
    fontSize: 16,
    marginBottom: '1%',
    fontWeight: 'bold',
  },
  address1: {
    fontSize: 16,
    marginBottom: '1%',
    fontWeight: 'normal',
  },
  address2: { fontSize: 16, marginBottom: '1%', fontWeight: 'normal' },
  city: {
    fontSize: 16,
    marginBottom: '1%',
    fontWeight: 'normal',
  },
  pinCode: {
    fontSize: 16,
    marginBottom: '1%',
    fontWeight: 'normal',
  },
  phone: {
    fontSize: 16,
    marginBottom: '5%',
    fontWeight: 'normal',
  },
  bankname: {
    fontSize: 16,
    marginBottom: '1%',
    fontWeight: 'bold',
  },
  accountno: {
    fontSize: 16,
    marginBottom: '5%',
    fontWeight: 'bold',
  },
  transferAmount: {
    fontSize: 16,
    marginBottom: '3%',
    fontWeight: 'normal',
  },
  transferAmountValue: {
    fontSize: 16,
    marginBottom: '3%',
    fontWeight: 'bold',
    paddingLeft: '50%',
  },
  transferAmountValue_LDPI: {
    // paddingVertical: responsiveHeight(3),
    // paddingLeft: '44%',
    paddingLeft: responsiveWidth(18),
    // paddingHorizontal: responsiveWidth(0),
  },
  transferAmountValue_MDPI: {
    //  paddingLeft: '50%'
    //  marginTop: responsiveHeight(0),
    // marginBottom : responsiveHeight(0),
    // marginLeft: responsiveWidth(3)
    // marginRight: responsiveWidth(3)
    paddingLeft: responsiveWidth(18),
  },
  transferAmountValue_HDPI: {
    paddingLeft: '38%',
  },
  transferAmountValue_XHDPI: {
    // paddingLeft: '38%',
    paddingLeft: responsiveWidth(9.5),
    // paddingHorizontal: responsiveWidth(100),
    // paddingLeft: responsiveWidth(200)
  },
  transferAmountValue_XXHDPI: {
    paddingLeft: '50%',
  },
  transferAmountValue_XXXHDPI: {
    // paddingLeft: '200%',
    paddingLeft: responsiveWidth(1),
  },
  transferFeesValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '3%',
    paddingLeft: '50%',
  },
  transferFeesValue_LDPI: {
    // paddingHorizontal: responsiveWidth(-120),
    // paddingLeft: '45%',
    paddingLeft: responsiveWidth(19),
  },
  transferFeesValue_MDPI: {
    // paddingLeft: '50%',
    paddingLeft: responsiveWidth(20),
  },
  transferFeesValue_HDPI: {
    paddingLeft: '40%',
  },
  transferFeesValue_XHDPI: {
    // paddingLeft: '40%',
    paddingLeft: responsiveWidth(10),
  },
  transferFees: {
    fontSize: 16,
    marginBottom: '4.5%',
    fontWeight: 'normal',
  },
  amountPayable: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountPayableValue: {
    fontSize: 16,
    color: '#e77817',
    paddingLeft: '30%',
  },
  amountPayableValue_LDPI: {
    // paddingLeft: '23%',
    paddingLeft: responsiveWidth(7),
  },
  amountPayableValue_MDPI: {
    // paddingLeft: '30%',
    paddingLeft: responsiveWidth(10),
  },
  amountPayableValue_HDPI: {
    paddingLeft: '10%',
  },
  amountPayableValue_XHDPI: {
    // paddingLeft: '10%',
    paddingLeft: responsiveWidth(5),
  },
  totalToRecipientValue: {
    fontSize: 16,
    color: '#e77817',
    fontWeight: 'bold',
    paddingLeft: '30%',
  },
  totalToRecipientValue_LDPI: {
    // paddingLeft: '20%',
    paddingLeft: responsiveWidth(5),
    height: 45,
  },
  totalToRecipientValue_MDPI: {
    paddingLeft: '24%',
    height: 50,
  },
  totalToRecipientValue_HDPI: {
    paddingLeft: '10%',
  },
  totalToRecipientValue_XHDPI: {
    // paddingLeft: '10%',
    paddingLeft: responsiveWidth(4),
  },
  reciever: {
    fontSize: 18,
  },
  customerName: {
    fontSize: 18,
    marginBottom: '1%',
  },
  address3: {
    fontSize: 18,
    marginBottom: '1%',
  },
  address4: {
    fontSize: 18,
    marginBottom: '1%',
  },
  cityName: {
    fontSize: 18,
    marginBottom: '1%',
  },
  pin: {
    fontSize: 18,
    marginBottom: '1%',
  },
  phoneNo: {
    fontSize: 18,
    marginBottom: '5%',
  },
  bankname1: {
    fontSize: 16,
    marginBottom: '1%',
  },
  accountno1: {
    fontSize: 16,
    marginBottom: '5%',
  },
  convertedAmount: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  convertedAmountValue: {
    fontSize: 16,
    fontWeight: 'bold',
    // paddingLeft: '30%',
  },
  convertedAmountValue_LDPI: {
    // paddingLeft: '30%',
    paddingLeft: responsiveWidth(9),
  },
  convertedAmountValue_MDPI: {
    paddingLeft: '30%',
  },
  convertedAmountValue_HDPI: {
    paddingLeft: '20%',
  },
  convertedAmountValue_XHDPI: {
    // paddingLeft: '0%',
    paddingLeft: responsiveWidth(6),
  },

  totalToRecipient: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  totalToRecipient_LDPI: {
    height: 40,
  },
});
