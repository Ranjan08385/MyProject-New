import { Dimensions, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

const screenSize = Dimensions.get('window').width; // full width
const { height } = Dimensions.get('window'); // full height

export default StyleSheet.create({
  viewUnlockIdButton: {
    marginRight: screenSize > 768 ? responsiveHeight(5) : responsiveHeight(0),
    marginBottom: screenSize > 768 ? responsiveHeight(0) : responsiveHeight(3),
  },
  fullPageEnterMpin: {
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    width: '100%',
    height: '100%',
  },

  viewLogoImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(94),
    height: responsiveHeight(20),
  },

  viewTabEnterMpin: {
    flexDirection: 'row',
    width: responsiveWidth(94),
  },
  txtPasswordPressed: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },

  txtPassword: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },
  txtMPIN: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: '#e77817',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },
  txtOTPPressed: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: '#e77817',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },
  txtOTP: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },
  txtMPINPressed: {
    textAlign: 'center',
    borderColor: 'red',
    borderBottomColor: '#e77817',
    borderBottomWidth: 1,
    width: responsiveWidth(31),
    height: responsiveHeight(4),
  },
});
