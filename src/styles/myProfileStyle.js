import { Dimensions, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

const screenSize = Dimensions.get('window').width; // full width
const { height } = Dimensions.get('window'); // full height

export default StyleSheet.create({
  mainPageContent: {
    paddingLeft: screenSize > 768 ? responsiveWidth(15) : responsiveWidth(3),
    // backgroundColor: 'red',
    // shadowColor: 'grey',
    // shadowOpacity: 0.7,
    // shadowRadius: 19,
    // width: screenSize > 768 ? responsiveWidth(45) : responsiveWidth(90),
  },

  fullPagePersonalProfile: {
    // height: '99%',
    // width: '67%',
    marginTop: responsiveWidth(3),
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 19,
    paddingBottom: screenSize > 768 ? responsiveHeight(5) : responsiveHeight(3),
    width: screenSize > 768 ? responsiveWidth(45) : responsiveWidth(95),
    // padding: screenSize > 768 ? responsiveWidth(10) : responsiveWidth(1),
  },

  header: {
    flexDirection: 'row',
    paddingLeft: screenSize > 768 ? responsiveWidth(3) : responsiveWidth(0),
    borderColor: 'transparent',
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: screenSize > 768 ? null : responsiveHeight(3),
    width: screenSize > 768 ? responsiveWidth(45) : responsiveWidth(100),
    height: screenSize > 768 ? responsiveHeight(14) : responsiveHeight(8),
  },
  ViewCommonEditText: {
    justifyContent: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    width: screenSize > 768 ? responsiveWidth(5) : responsiveWidth(10),
  },
  viewCommonHeaderName: {
    alignItems: 'center',
    flexDirection: 'row',

    paddingLeft: screenSize > 768 ? responsiveWidth(0) : responsiveWidth(2),
    width: screenSize > 768 ? responsiveWidth(33) : responsiveWidth(80),
  },

  txtPersonalInfo: {
    color: '#182340',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: responsiveWidth(1),
  },

  txtEdit: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
  },

  content: {
    paddingLeft: screenSize > 768 ? responsiveWidth(3) : responsiveWidth(2),
    // width: screenSize > 768 ? responsiveWidth(33) : responsiveWidth(80),
  },

  viewFlexRowsCol: {
    marginTop: screenSize > 768 ? responsiveWidth(3) : responsiveWidth(2),
    flexDirection: screenSize > 768 ? 'row' : 'column',
  },

  ViewcommonFirstCol: {
    width: screenSize > 768 ? responsiveWidth(20) : responsiveWidth(80),
    marginBottom: screenSize > 768 ? responsiveWidth(1) : responsiveHeight(6),
  },

  ViewcommonSecondCol: {
    // width: screenSize > 768 ? responsiveWidth(20) : responsiveWidth(100),
    paddingBottom: screenSize > 768 ? responsiveWidth(1) : responsiveHeight(6),
  },
  txtcommonFirstRowFirstCol: {
    fontSize: 12,
    color: '#4A4A4A',
    paddingBottom: screenSize > 768 ? responsiveWidth(1) : responsiveWidth(1),
  },

  txtcommonSecRowFirstCol: {
    fontSize: 16,
    color: '#4A4A4A',
    paddingBottom: screenSize > 768 ? null : responsiveHeight(1),
  },

  txtcommonFirstRowSecCol: {
    fontSize: 12,
    color: '#4A4A4A',
    paddingBottom: screenSize > 768 ? responsiveWidth(1) : responsiveHeight(1),
  },

  txtcommonSecRowSecCol: {
    fontSize: 16,
    color: '#4A4A4A',
    paddingBottom: screenSize > 768 ? responsiveWidth(1) : responsiveHeight(3),
  },
  buttonReferFriend: {
    width: screenSize > 768 ? responsiveWidth(20) : responsiveWidth(95),
    textAlign: 'center',
    // height:'100%',
    borderRadius: 5,
  },

  contactUs_RightSec_Mob: {
    width: '55%',
    marginBottom: '8%',
    flexDirection: 'row',
    marginTop: screenSize > 768 ? responsiveHeight(5) : responsiveHeight(5),
    // borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    height: '100%',
  },

  flexRowCols: {
    flexDirection: screenSize > 768 ? 'row' : 'column',
  },
  viewFooter: {
    marginTop: screenSize > 768 ? responsiveHeight(5) : responsiveHeight(3),
  },
});
