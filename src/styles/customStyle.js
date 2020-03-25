import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight
} from '../components/customResponsiveDimension';

export default StyleSheet.create({
  transparentButton: {
    borderColor: '#182340',
    color: '#182340',
    borderWidth: 1,
    fontWeight: '500',
    borderRadius: 30,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16
  },

  textStyle: {
    color: '#4a4a4a',
    fontSize: 16
  },
  informartionTextStyle: {
    fontWeight: 'normal',
    color: '#9b9b9b',
    fontSize: 14
  },
  grayTextStyle: {
    fontWeight: 'normal',
    color: '#9b9b9b',
    fontSize: 16
  },
  noteTextStyle: {
    fontSize: 12,
    letterSpacing: 0.1,
    color: '#4a4a4a'
  },
  linkTextColor: {
    color: '#e77817',
    fontSize: 16
  },
  h2Style: {
    fontSize: 36,
    fontWeight: '300',
    color: '#4a4a4a'
  },
  h2StyleOrange: {
    color: '#e77817',
    fontWeight: 'bold',
    fontSize: 50
  },
  h2SecHeadStyleOrange: {
    color: '#e77817',
    borderBottomWidth: 1,
    borderBottomColor: '#e77817',
    fontSize: 24,
    fontWeight: 'normal'
  },
  h2SecCaptionStyle: {
    color: '#9b9b9b',
    fontStyle: 'italic',
    fontSize: 12
  },
  h2SubSecStyle: {
    color: '#e77817',
    fontWeight: 'bold',
    fontSize: 24
  },
  purpleButton: {
    backgroundColor: '#182340',
    color: '#ffffff',
    borderRadius: 25,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,

    fontWeight: '400',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  purpleButtonTranparent: {
    borderColor: '#182340',
    color: '#182340',
    borderWidth: 1,
    fontWeight: '500',
    borderRadius: 25,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,

    textAlign: 'center'
  },
  orangeButton: {
    backgroundColor: '#e77817',
    borderColor: '#e77817',
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,

    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4
  },
  orangeButtonTransparent: {
    borderColor: '#e77817',
    color: '#e77817',
    borderWidth: 1,
    fontWeight: '500',
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,

    textAlign: 'center',
    borderRadius: 4
  },
  grayButtonStyle: {
    borderRadius: 25,
    color: '#4a4a4a',
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,

    textAlign: 'center',
    backgroundColor: '#e4e6e8'
  },
  acceptButtonStyle: {
    borderRadius: 5,
    letterSpacing: 0.1,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: responsiveHeight(0.5),
    fontSize: 12,

    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    color: '#417505',
    backgroundColor: '#e6e2d1'
  },
  successButtonStyle: {
    // temporary : may need to remove
    borderRadius: 5,
    letterSpacing: 0.1,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: responsiveHeight(0.5),
    fontSize: 16,
    height: responsiveHeight(8),

    paddingTop: responsiveHeight(2.3),
    paddingBottom: responsiveHeight(2.3),
    paddingLeft: responsiveWidth(0.2),
    paddingRight: responsiveWidth(0.2),
    color: '#417505'
  },
  rejectButtonStyle: {
    color: '#d0021b',
    backgroundColor: '#f8e3e5',
    borderRadius: 5,
    letterSpacing: 0.1,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: responsiveHeight(0.5),
    fontSize: 12,

    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5)
  },
  globeImage: {
    height: responsiveHeight(80)
  },
  shadowImage: {
    height: responsiveHeight(15)
  },
  outerDiv: {
    display: 'flex',
    flexDirection: 'row',
    width: responsiveWidth(100),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5)
  },
  innerLeftDiv: {
    display: 'flex',
    width: responsiveWidth(50),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5)
  },
  h4Style: {
    fontWeight: 'bold',
    fontSize: 14,

    color: '#4a4a4a'
  },
  h3Style: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Arial',
    color: '#4a4a4a'
  },
  popUph2SubSecStyle: {
    color: '#e77817',
    fontWeight: 'bold',
    fontSize: 20
  },
  popUph3SubSecStyle: {
    color: '#e77817',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Arial'
  },
  popUpinformartionTextStyle: {
    fontWeight: 'normal',
    color: '#9b9b9b',
    fontSize: 12
  },
  profileImage: {
    height: responsiveHeight(20),
    width: responsiveWidth(100)
  },
  rateImage: {
    height: 15
  },
  arrow_key_down: {
    width: 10,
    flexBasis: 10,
    height: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }]
  },
  arrow_key_up: {
    flexBasis: 10,
    width: 10,
    height: 10,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }]
  }
});
