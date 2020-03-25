import { Dimensions, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

const screenSize = Dimensions.get('window').width; // full width
const { height } = Dimensions.get('window'); // full height

export default StyleSheet.create({
  YouSend: {
    width: screenSize > 768 ? responsiveWidth(20) : responsiveWidth(50),
    marginBottom: screenSize > 768 ? responsiveHeight(1) : null,
    // backgroundColor: 'red',
  },

  indicativeExchangeRateRs: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: screenSize > 768 ? responsiveWidth(12) : responsiveWidth(40),
    // backgroundColor: 'red',
  },
  viewMainPageContents: {
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    paddingTop: responsiveHeight(2),
  },
  viewFullLineYousend: {
    paddingTop: screenSize > 768 ? responsiveHeight(1) : responsiveHeight(0.5),
    paddingBottom: screenSize > 768 ? responsiveHeight(1) : responsiveHeight(2),
    width: responsiveWidth(100),
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  thousand_Aud: {
    alignItems: 'flex-end',
    // justifyContent: 'flex-end',

    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(40),
    // backgroundColor: 'yellow',
  },
  nonBoldTexts: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  BoldText18Px: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  orangeBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E77817',
  },

  viewTotalAmountBillfullLine: {
    marginTop: responsiveHeight(2),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveWidth(1),
    width: screenSize > 768 ? responsiveWidth(34) : responsiveWidth(100), //34
    borderColor: 'transparent',
    borderTopColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 2,
    // backgroundColor: 'green',
    flexDirection: 'row',
  },

  viewIndicativefullLine: {
    padding: responsiveWidth(1),
    width: screenSize > 768 ? responsiveWidth(34) : responsiveWidth(95),
    // backgroundColor: 'green',
    flexDirection: 'row',
    backgroundColor: '#f9e9df',
    opacity: 8,
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(7),
  },
  closeButton: {
    width: screenSize > 768 ? responsiveWidth(13) : responsiveWidth(95),
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenSize > 768 ? responsiveWidth(35) : responsiveWidth(95),
    height: screenSize > 768 ? responsiveWidth(10) : responsiveHeight(20),
  },
  containerHeaderOne: {
    flex: 1,
    padding: responsiveWidth(1),
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  styleHeaderFirstDetail: {
    flexDirection: 'column',
    borderBottomColor: '#DCDCDC',
  },
  textHeaderFirst: {
    fontSize: 20,
    color: '#4a4a4a',
    fontWeight: 'bold',
  },
  styleHeaderFirst: {
    flexDirection: 'column',
    marginLeft: responsiveWidth(28),
    color: '#4a4a4a',

    borderBottomColor: '#DCDCDC',
  },
  cancelButton: {
    padding: 15,
    width: responsiveWidth(15),

    overflow: 'hidden',
    backgroundColor: 'white',

    borderColor: 'orange',
    borderWidth: 1,
  },
  cancelButton_MDPI: {
    width: responsiveWidth(35),
  },
  confirmButton: {
    padding: 15,
    width: responsiveWidth(15),
    marginLeft: responsiveWidth(2),
    overflow: 'hidden',
    backgroundColor: 'orange',
  },
  confirmButton_MDPI: {
    width: responsiveWidth(35),
  },
  outerContainer: {
    marginTop: 0,
    flex: 1,
    marginHorizontal: responsiveWidth(10),
    borderRadius: 6,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 12,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  outerContainer_MDPI: {
    marginHorizontal: responsiveWidth(5),
  },

  otpTextInputStyle: {
    width: 18,
    marginRight: responsiveWidth(1),
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 80,
    borderRadius: 4,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullPage: {
    height: '99%',
    width: screenSize > 768 ? responsiveWidth(41) : responsiveWidth(100),
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 19,
    backgroundColor: '#fcfcfc',
  },
  //   fullPage_LDPI: {
  //     width: '100%',
  //     alignSelf: 'center',
  //   },
  //   fullPage_MDPI: {
  //     width: '100%',
  //     alignSelf: 'center',
  //   },
  //   fullPage_HDPI: {
  //     width: '100%',
  //     alignSelf: 'center',
  //   },
  //   fullPage_XHDPI: {
  //     width: '100%',
  //     alignSelf: 'center',
  //   },
  //   fullPage_XXHDPI: {
  //     alignSelf: 'center',
  //     width: '95%',
  //   },
  //   fullPage_XXXHDPI: {
  //     alignSelf: 'center',
  //     marginRight: '4%',
  //     marginLeft: '4%',
  //   },
  //   fullPage_LAPTOP: {
  //     alignSelf: 'center',
  //     marginRight: '4%',
  //     marginLeft: '4%',
  //   },

  mainPage: {
    padding: '1%',
  },
  mainPage_LDPI: {
    padding: '0%',
  },

  header: {
    paddingBottom: 10,
    paddingTop: 10,
    // marginBottom: '3%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    // paddingTop: '3%',
  },
  viewText: {
    paddingTop: '2%',
    paddingBottom: '2%',
    marginLeft: '6%',
    flex: 1,
  },
  cross: {
    flex: 1,
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    // paddingBottom:'2%',

    // marginRight:'4%',

    // width: '5%',
    justifyContent: 'center',
    // backgroundColor: 'transparent',
    // paddingLeft: '76%',
    // marginBottom: '1%',
    // marginTop:'0%'
    // padding: 5,
    // padding: responsiveHeight(10),
  },
  headtext: {
    // marginBottom: '25%',
    // marginTop: '25%',
    fontWeight: 'bold',
  },
  viewText_LDPI: {
    marginLeft: '5%',
  },

  cross_LDPI: {
    // marginBottom:'2%',
    // marginTop:'4%',
    // marginTop:'0%',
    //  marginRight:'10%',
    // marginRight: '5%',
    // paddingTop: '5%',
    // padding: 5,
  },
  cross_MDPI: {
    marginTop: '0%',
    padding: 5,
  },

  contentPage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '10%',
  },
  Page1: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },

  Page2: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
  },
});
