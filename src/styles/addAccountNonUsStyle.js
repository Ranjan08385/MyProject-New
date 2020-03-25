import { Dimensions, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

const screenSize = Dimensions.get('window').width; // full width
const { height } = Dimensions.get('window'); // full height
console.log(screenSize);
export default StyleSheet.create({
  mainHeading: {
    backgroundColor: '#182340',
    height: responsiveHeight(12),
    width: responsiveWidth(100),
    justifyContent: 'center',
  },

  flexRowCol: {
    flexDirection: screenSize > 768 ? 'row' : 'column',
  },
  textAddAccountDetails: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    width: responsiveWidth(90),
    marginLeft: responsiveWidth(15),
  },
  mainPage: {
    paddingLeft: screenSize > 768 ? responsiveWidth(15) : responsiveWidth(5),
    paddingRight: screenSize > 768 ? null : responsiveWidth(5),
    paddingTop: screenSize > 768 ? responsiveWidth(3) : responsiveWidth(5),
  },
  inFotip: {
    marginTop: screenSize > 768 ? responsiveWidth(2) : responsiveWidth(7),
  },
  ViewcommonInputs:
    screenSize > 768
      ? {
          width: responsiveWidth(24),
          marginRight: responsiveWidth(5),
          marginBottom: responsiveWidth(1),
        }
      : {
          width: responsiveWidth(90),
          marginBottom: responsiveWidth(3),
        },

  continueButtonSocialPay:
    screenSize > 768
      ? {
          width: responsiveWidth(30),
        }
      : {
          width: responsiveWidth(90),
        },
  bankSortInput: {
    width: screenSize > 768 ? 320 : responsiveWidth(100),
    flexDirection: 'row',
  },

  bankSortInnerInput: {
    width: screenSize > 768 ? 290 : responsiveWidth(85),
  },

  menu_option_hovered: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#097dfa',
  },

  menu_option_normal: {
    flexDirection: 'row',
    padding: 10,
  },

  ViewdropDown: {
    marginRight: screenSize > 768 ? responsiveWidth(6.2) : null,
  },
  verifyBankAccountBtn: {
    width: screenSize > 768 ? responsiveWidth(16) : responsiveWidth(90),
  },
  cancelButton: {
    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(90),
    marginTop: responsiveWidth(5),
    marginRight: screenSize > 768 ? responsiveWidth(2) : null,
  },
  confirmButton: {
    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(90),
    marginTop: responsiveWidth(5),
    marginBottom: screenSize > 768 ? responsiveWidth(5) : responsiveWidth(5),
  },

  viewOftxtAlinkwillBe: {
    width: screenSize > 768 ? responsiveWidth(35) : responsiveWidth(90),
    marginTop: responsiveWidth(5),
    marginBottom: screenSize > 768 ? responsiveWidth(5) : responsiveWidth(5),
    marginLeft: responsiveWidth(3),
  },

  txtALinkwillBe: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  setPassCodefullPage: {
    height: screenSize > 768 ? responsiveHeight(80) : responsiveHeight(100),
    width: screenSize > 768 ? responsiveWidth(40) : responsiveWidth(100),
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 19,
    backgroundColor: '#fcfcfc',
  },
  viewcommonInputspassCode: {
    width: screenSize > 768 ? responsiveWidth(24) : responsiveWidth(95),
    marginLeft: responsiveWidth(3),
    marginBottom: responsiveWidth(1),
  },

  viewButtonsPasscodeSet: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: screenSize > 768 ? responsiveHeight(2) : responsiveHeight(3),
    marginLeft: screenSize > 768 ? responsiveWidth(0) : responsiveWidth(3),
    flexDirection: screenSize > 768 ? 'row' : 'column',
    width: screenSize > 768 ? responsiveWidth(40) : responsiveWidth(95),
  },

  cancelButtonPasscode: {
    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(94),
    // marginBottom: screenSize > 768 ? responsiveHeight(0) : responsiveHeight(3),
  },

  viewCancelButtonSetPasscode: {
    marginRight: screenSize > 768 ? responsiveHeight(5) : responsiveHeight(0),
    marginBottom: screenSize > 768 ? responsiveHeight(0) : responsiveHeight(3),
  },
  submitButtonPasscode: {
    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(94),
  },

  txtCreatePasswordSignUpsso: {
    fontSize: screenSize > 768 ? responsiveWidth(3) : responsiveWidth(5),
    color: '#e77817',
    marginBottom: responsiveHeight(3),
  },
});
