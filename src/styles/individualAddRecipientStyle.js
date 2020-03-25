import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight
} from '../components/customResponsiveDimension';

const { width } = Dimensions.get('window'); // full width
const { height } = Dimensions.get('window'); // full height

export default StyleSheet.create({
  recipientPage: {
    backgroundColor: '#fcfcfc'
  },

  form: {
    // height: '100%',
  },
  mainHead: {
    // flex: 1,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#182340'
  },
  mainHead_LDPI: {
    flexDirection: 'column'
  },
  mainHead_MDPI: {
    // // backgroundColor: 'yellow'
  },
  mainHead_HDPI: {
    // // backgroundColor: 'blue'
  },
  mainHead_XHDPI: {
    // // backgroundColor: 'pink'
  },
  mainHead_XXHDPI: {
    // // backgroundColor: '#e77817'
  },
  mainHead_XXXHDPI: {
    // // backgroundColor: 'purple'
  },
  mainHead_LAPTOP: {
    width: '100%',
    height: 70
  },
  commontxtsubheading_LDPI: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: 'flex-end',
    display: 'none'
  },
  commontxtsubheading_MDPI: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: 'flex-end',
    display: 'none'
  },
  commontxtsubheading_HDPI: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: 'flex-end',
    display: 'none'

    // backgroundColor: 'blue'
  },
  commontxtsubheading_XHDPI: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: 'flex-end'
    // backgroundColor : 'red',
  },
  commontxtsubheading_XXHDPI: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: 'flex-end'
  },

  commontxtsubheadingRight: {
    textAlign: 'right',
    paddingTop: '1%',

    color: 'grey',

    fontStyle: 'italic'
    // display : 'none',
  },
  commontxtsubheading_LAPTOP: {
    flex: 1,

    alignItems: 'flex-end',

    color: 'grey',

    fontStyle: 'italic'
  },

  // commontxtsubheading_TV :
  // {
  //   flex : 1,

  //  alignItems : 'flex-end',

  //    marginRight : 30,
  //    color : 'grey',
  //    fontFamily : 'arial',
  //    fontStyle: 'italic'
  // },

  ViewFullComponentAddRecipient: {
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },

  ViewFullComponentAddRecipient_LDPI: {
    // marginLeft : 20,
    // marginRight : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  ViewFullComponentAddRecipient_MDPI: {
    // // backgroundColor: 'yellow'
    // marginLeft : 20,
    // marginRight : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'

    // backgroundColor : 'red',
  },
  ViewFullComponentAddRecipient_HDPI: {
    // // backgroundColor: 'blue'
    // marginLeft : 20,
    // marginRight : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  ViewFullComponentAddRecipient_XHDPI: {
    // // backgroundColor: 'pink'

    backgroundColor: '#FCFCFC'
  },
  ViewFullComponentAddRecipient_XXHDPI: {
    // // backgroundColor: '#e77817'
    // marginLeft : 20,
    // marginRight : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  ViewFullComponentAddRecipient_XXXHDPI: {
    // // backgroundColor: 'purple'
    backgroundColor: '#FCFCFC',
    // marginLeft : 20,
    // marginRight : 20,
    paddingRight: '3%',
    paddingLeft: '3%'
  },
  ViewFullComponentAddRecipient_LAPTOP: {
    marginLeft: 150,
    marginTop: 30,
    width: '85%',
    backgroundColor: '#FCFCFC'
  },
  //   ViewFullComponentAddRecipient_TV: {
  //     marginLeft : 150,
  //     marginTop : 30,
  // },

  sendMoneyFlex: {
    flexDirection: 'column'
  },
  sendMoneyFlex_LDPI: {
    flexDirection: 'column'
    // backgroundColor : 'white',
    // // backgroundColor: 'green'
  },
  sendMoneyFlex_MDPI: {
    flexDirection: 'column'
    // backgroundColor : 'white',
  },
  sendMoneyFlex_HDPI: {
    flexDirection: 'column'
    // backgroundColor : 'white',
  },
  sendMoneyFlex_XHDPI: {
    flexDirection: 'row'
  },
  sendMoneyFlex_XXHDPI: {
    flexDirection: 'row'
  },
  sendMoneyFlex_XXXHDPI: {
    flexDirection: 'row'
  },
  sendMoneyFlex_LAPTOP: {
    flexDirection: 'row'
  },

  webmodeTxtToShow: {
    textAlign: 'right'
  },
  // css below for View Radio butttons to select bank name // icici , non icic, draft radio view below

  // viewRadioButtonsToSelectBanks: {
  //     // flex: 1,
  //     width : '100%',
  //     height : '900',

  //     // backgroundColor: 'red',
  //   },
  //   viewStyle_LDPI: {
  //     flexDirection: 'column',
  //      // backgroundColor: 'green'
  //   },
  //   viewStyle_MDPI: {
  //     flexDirection : 'row'
  //   },
  //   viewStyle_HDPI: {
  //     flexDirection : 'row',
  //     // backgroundColor: 'blue'
  //   },
  //   viewStyle_XHDPI: {
  //     flexDirection : 'row',

  //      // backgroundColor: 'pink'
  //   },
  //   viewStyle_XXHDPI: {
  //     flexDirection: 'row',
  //     // // backgroundColor: '#e77817'
  //   },
  //   viewStyle_XXXHDPI: {
  //     flexDirection: 'row',
  //   },
  //   viewStyle_LAPTOP: {
  //     flexDirection: 'row',
  //   },

  radioButtonsToSelectBanks: {
    // flex: 1,    paddingRight: "3%",

    width: '100%',

    flexDirection: 'row'
    // backgroundColor: 'white'
  },
  viewStyle_LDPI: {
    width: '100%',
    height: 200,
    flexDirection: 'column'
    // // backgroundColor: 'green'
  },
  viewStyle_MDPI: {
    width: '100%',
    height: height / 6,

    flexDirection: 'column'
  },
  viewStyle_HDPI: {
    flexDirection: 'row'
  },
  viewStyle_XHDPI: {
    flexDirection: 'row'
  },
  viewStyle_XXHDPI: {
    flexDirection: 'row'
  },
  viewStyle_XXXHDPI: {
    paddingRight: '3%'

    // backgroundColor : 'white',
  },

  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',

    height
  },

  containers_LDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_MDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_HDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_XHDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_XXHDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_XXXHDPI: {
    backgroundColor: '#FCFCFC'
  },
  containers_LAPTOP: {
    backgroundColor: '#FCFCFC'
  },

  ViewContainertxtWhoAreYouSendingMoney: {
    // backgroundColor : '#182340',
    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
      },
      android: {
        flexDirection: 'row'
      },
      web: {
        height: height / 10,
        width: width / 1,
        borderWidth: 1,
        // borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center'
      }
    })
  },

  txtAddRecipeint: {
    marginLeft: 20,
    color: '#fcfcfc',
    height: 35,
    fontSize: 25,
    width: '100%'
  },

  txtRecipentBankDetailsTxt: {
    color: '#e77817',
    fontSize: 25
    // backgroundColor : 'red',
  },
  txtHeadingWithLine: {
    color: '#e77817',
    fontSize: 25
  },

  txtHeadingWithLine_LDPI: {
    color: '#e77817',
    fontSize: 14
  },
  txtHeadingWithLine_MDPI: {
    color: '#e77817',
    fontSize: 15
  },
  txtHeadingWithLine_HDPI: {
    color: '#e77817',
    fontSize: 17
  },
  txtHeadingWithLine_XHDPI: {
    color: '#e77817',
    fontSize: 19
  },
  txtHeadingWithLine_XXHDPI: {
    color: '#e77817',
    fontSize: 23
  },
  txtHeadingWithLine_XXXHDPI: {
    color: '#e77817',
    fontSize: 23
  },
  txtHeadingWithLine_LAPTOP: {
    color: '#e77817',
    fontSize: 25
  },
  termsTxt: {
    fontSize: 12,
    marginLeft: responsiveHeight(1)
  },

  termsText_LDPI: {
    fontSize: 10,
    marginLeft: responsiveHeight(1)
  },
  termsText_MDPI: {
    fontSize: 10,
    marginLeft: responsiveHeight(1)
  },
  termsText_HDPI: {
    fontSize: 10,
    marginLeft: responsiveHeight(1)
  },
  termsText_XHDPI: {
    fontSize: 12,
    marginLeft: responsiveHeight(1)
  },
  termsText_XXHDPI: {
    fontSize: 12,
    marginLeft: responsiveHeight(1)
  },
  termsText_XXXHDPI: {
    fontSize: 12,
    marginLeft: responsiveHeight(1)
  },
  termsText_LAPTOP: {
    fontSize: 12,
    marginLeft: responsiveHeight(1)
  },

  horizontalView: {
    flexDirection: 'row',
    marginBottom: 30,
    width: responsiveWidth(50)
  },

  horizontalViewForMobile: {
    flexDirection: 'row',
    marginBottom: 30,
    width: responsiveWidth(90)
  },
  ViewCommonForhHeading: {
    borderBottomColor: '#e77817',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    marginTop: 25,
    //   borderBottomColor: '#e77817',
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',

    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 10,
    width: '85%'
  },

  // ViewtxtWhoAreYouSendingMoney:
  // {

  //   ...Platform.select({
  //     ios: {
  //       // backgroundColor: 'red',
  //     },
  //     android: {
  //       width: '50%',
  //     },
  //     web: {
  //       width: '60%',
  //     }
  //   }),
  // },

  // txtSendingMoney:
  // {

  //   ...Platform.select({
  //     ios: {
  //       // backgroundColor: 'red',
  //     },
  //     android: {
  //       fontSize: 15,
  //     },
  //     web: {

  //       fontSize: 30,

  //     }
  //   }),
  // },

  ImagePlus: {
    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
      },
      android: {
        width: 30,
        height: 30
        // backgroundColor: 'red',
      },
      web: {
        marginTop: 40,
        width: 50,
        height: 50
        // backgroundColor: 'blue',
      }
    })
  },

  ViewBtnCommon: {
    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
      },
      android: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: height / 7,
        width: '100%'
      },
      web: {
        flexDirection: 'row'
      }
    })
  },

  viewSendMoneyComponent: {
    // marginLeft: 40,
    paddingLeft: responsiveWidth(3),
    backgroundColor: '#FCFCFC'
  },
  // viewSendMoneyComponent_LDPI: {
  //   // marginLeft: 40,
  //   paddingLeft: '4%',
  //   backgroundColor: '#FCFCFC',
  // },
  // viewSendMoneyComponent_MDPI: {
  //   // marginLeft: 40,
  //   paddingLeft: '4%',
  //   backgroundColor: '#FCFCFC',
  // },
  // viewSendMoneyComponent_HDPI: {
  //   marginLeft: 30,
  //   backgroundColor: '#FCFCFC',
  // },
  // viewSendMoneyComponent_XHDPI: {
  //   // marginLeft: 40,
  //   paddingLeft: '4%',
  //   backgroundColor: '#FCFCFC',
  // },
  // viewSendMoneyComponent_XXHDPI: {
  //   backgroundColor: '#FCFCFC',

  //   // marginLeft: 40,
  //   paddingLeft: '4%',
  // },
  // viewSendMoneyComponent_XXXHDPI: {
  //   // marginLeft: 40,
  //   paddingLeft: '4%',
  //   backgroundColor: '#FCFCFC',
  // },
  // viewSendMoneyComponent_LAPTOP: {
  //   // marginLeft: 40,
  // },

  txtWhereshouldtherecipientreceivethemoney: {
    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
      },
      android: {
        marginTop: 10,
        height: height / 28,
        width: '100%'
        // backgroundColor: 'white',
      },
      web: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
        marginTop: 10
      }
    })
  },

  Viewradio: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  },
  radios: {
    marginTop: 30,
    marginLeft: 0,
    marginBottom: 5,
    flexDirection: 'row'
  },

  radios2: {
    ...Platform.select({
      ios: {
        // backgroundColor: 'red',
      },
      android: {
        flexDirection: 'column'
      },
      web: {
        marginTop: 10,

        marginBottom: 10,
        flexDirection: 'row'
      }
    })
  },

  commonInputs: {
    // borderTopColor : 'white',
    // borderTopColor : 'white',

    // borderRightColor : 'white',
    // backgroundColor : 'white',
    //   borderBottomColor: '#9b9b9b',
    borderWidth: 1,

    height: 47,
    width: '100%',
    flexDirection: 'column',
    marginBottom: 5,

    marginRight: 30
  },

  commonInputs_LDPI: {
    borderWidth: 1,
    flexDirection: 'column',
    width: '100%',
    height: 47

    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
  },
  commonInputs_MDPI: {
    borderWidth: 1,
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
    width: '100%',
    height: 47
  },
  commonInputs_HDPI: {
    height: 47,
    borderWidth: 1,
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
    width: '100%'
  },

  commonInputs_XHDPI: {
    width: '100%',
    height: 47,
    borderWidth: 1
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
  },

  commonInputs_XXHDPI: {
    width: 300,
    height: 47
    // // backgroundColor: '#e77817'
  },

  commonInputs_XXXHDPI: {
    width: 300,
    height: 47
    // // backgroundColor: 'purple'
  },
  commonInputs_LAPTOP: {
    marginRight: 30,
    width: 300,
    height: 47
  },

  addressLineCmn: {
    borderWidth: 1,
    width: '100%',
    height: 47
  },

  commonAddress_LDPI: {
    flexDirection: 'column',
    width: '100%',
    height: 47
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
  },
  commonAddress_MDPI: {
    borderWidth: 1,
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
    width: '100%',
    height: 47
  },
  commonAddress_HDPI: {
    height: 47,
    borderWidth: 1,
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
    width: '100%'
  },

  commonAddress_XHDPI: {
    width: '100%',
    height: 47,
    borderWidth: 1
    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',
    //   borderBottomColor: '#9b9b9b',
  },

  commonAddress_XXHDPI: {
    // // backgroundColor: '#e77817'
    width: 630
  },

  commonAddress_XXXHDPI: {
    // // backgroundColor: 'purple'
    width: 645
  },
  commonAddress_LAPTOP: {
    marginRight: 30,
    width: 645
  },

  menu_option_hovered: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#097dfa'
  },

  menu_option_hovered_gray: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#d3d3d3'
  },

  menu_option_normal: {
    flexDirection: 'row',
    padding: 10
  },
  viewFlexRowWise: {
    flexDirection: 'column',
    backgroundColor: '#FCFCFC',
    zIndex: -1
  },
  viewFlexRowWise_LDPI: {
    backgroundColor: '#FCFCFC',
    flexDirection: 'column'
    // flexDirection : 'row',
    // // backgroundColor: 'green'
  },
  viewFlexRowWise_MDPI: {
    flexDirection: 'column',
    backgroundColor: '#FCFCFC'
  },
  viewFlexRowWise_HDPI: {
    backgroundColor: '#FCFCFC',
    flexDirection: 'column'
  },
  viewFlexRowWise_XHDPI: {
    backgroundColor: '#FCFCFC',

    flexDirection: 'column'
  },
  viewFlexRowWise_XXHDPI: {
    // backgroundColor: '#FCFCFC',
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row'
  },
  viewFlexRowWise_XXXHDPI: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FCFCFC'
  },
  viewFlexRowWise_LAPTOP: {
    backgroundColor: '#FCFCFC',
    marginTop: 10,

    flexDirection: 'row'
  },

  drpdown: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#FCFCFC',
    borderRightWidth: 0,

    // // borderTopColor : 'white',
    // // borderTopColor : 'white',

    // // borderRightColor : 'white',
    //  borderBottomWidth : 1,
    //   borderBottomColor : 'red',
    // borderColor : 'white',
    //   borderBottomColor : 'grey',

    marginTop: 10,
    marginRight: 30,
    width: 300,
    height: 47
    // backgroundColor : 'white',
  },
  drpdown_LDPI: {},
  // drpdown_LDPI: {},
  // drpdown_LDPI: {},
  d_MDPI: {
    borderWidth: 1,
    // borderTopColor : 'white',
    // borderTopColor : 'white',

    // borderRightColor : 'white',
    //   borderBottomColor : 'grey',

    marginTop: 10,
    marginRight: 20,
    width: 320,
    height: 47
    // backgroundColor : 'red',
  },
  d_HDPI: {
    width: '100%'
    // backgroundColor : 'green'
  },
  drpdown_XHDPI: {
    // backgroundColor : 'green'
  },
  drpdown_XXHDPI: {
    // backgroundColor : 'green'
  },
  drpdown_XXXHDPI: {
    // backgroundColor : 'green'
  },
  d_LAPTOP: {
    // backgroundColor : 'red',
    marginTop: 10,
    marginRight: 20,
    width: 300,
    height: 47
    // backgroundColor : 'red',
  },

  businessSendMoneyComponentFullPage: {
    // shjf
  },

  businessSendMoneyComponentFullPage_LDPI: {
    marginTop: 20,
    marginLeft: 30
  },
  businessSendMoneyComponentFullPage_MDPI: {
    marginTop: 20,
    marginLeft: 20
  },
  businessSendMoneyComponentFullPage_HDPI: {
    marginTop: 20,
    marginLeft: 40
  },
  businessSendMoneyComponentFullPage_XHDPI: {
    marginTop: 20,
    marginLeft: 80
  },
  businessSendMoneyComponentFullPage_XXHDPI: {
    marginTop: 20,
    marginLeft: 120
  },
  businessSendMoneyComponentFullPage_XXXHDPI: {
    marginTop: 20,
    marginLeft: 150
  },
  businessSendMoneyComponentFullPage_LAPTOP: {
    marginTop: 20,
    marginLeft: 150
  },
  notifyModelHeader: {
    width: 418,
    height: 60
  },

  notifyModel: {
    height: 418,
    width: 483
  },
  addRecipientBtn: {
    padding: 15,
    marginTop: 9,
    textAlign: 'center',
    // backgroundColor :'transparent',
    color: '#182340',
    width: 170,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor : '#182340',
    borderWidth: 1,
    marginLeft: 30
  },
  addAccountBtn: {
    padding: 15,
    marginTop: 9,
    marginLeft: 30,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',

    // backgroundColor :'transparent',
    color: '#182340',
    width: 170,
    height: 50,
    borderRadius: 25,

    // borderColor : '#182340',
    borderWidth: 1
  },

  commonShortDropDownCodeNo: {
    marginLeft: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,

    borderRightWidth: 0,

    // borderTopColor : 'white',
    // borderTopColor : 'white',
    // borderRightColor : 'white',

    borderBottomColor: '#d4d4d4',

    marginTop: 19,
    marginRight: 20,
    width: 80,
    height: 47,
    backgroundColor: 'transparent'
  },

  flexRowDirectionsRowWise: {
    flexDirection: 'row'
  },

  headerText: {
    // backgroundColor : 'yellow',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  menuContent: {
    color: '#000',
    fontWeight: 'bold',
    padding: 2,
    fontSize: 20
    // backgroundColor : 'green'
  },

  nextbutton: {
    marginLeft: 20,
    padding: 12,
    height: 45,
    // backgroundColor: '#e77817',

    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 20,
    width: 150,
    color: 'white'
    // marginTop: 10,
  },

  cancelbutton: {
    padding: 12,
    height: 45,
    // backgroundColor: '#fff',
    color: 'orange',

    // borderColor  : 'orange',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 15,
    width: 140,
    marginLeft: 20,

    marginTop: 10
  },
  confirmBtn: {
    padding: 12,
    height: 45,
    // backgroundColor: '#e77817',

    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 20,
    width: 140,
    color: 'white',
    marginTop: 10
  },

  form_LDPI: {
    marginTop: 20,
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC',

    flexDirection: 'column'
    // backgroundColor: 'green'
  },
  form_MDPI: {
    marginTop: 20,
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: 'red'

    // // backgroundColor: 'yellow'
  },
  form_HDPI: {
    marginTop: 20,
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'

    // // backgroundColor: 'blue'
  },
  form_XHDPI: {
    backgroundColor: '#FCFCFC',
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%'
    // // backgroundColor: 'pink'
  },
  form_XXHDPI: {
    backgroundColor: '#FCFCFC',
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%'
    // // backgroundColor: '#e77817'
  },
  form_XXXHDPI: {
    backgroundColor: '#FCFCFC',
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    marginTop: 15

    // // backgroundColor: 'purple'
  },
  form_LAPTOP: {
    backgroundColor: '#FCFCFC',
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    marginTop: 10
  },

  commondraftPopUp: {
    alignItems: 'center'
  },

  draftPopUp_LDPI: {
    width: '90%',
    height: '90%',

    backgroundColor: '#FCFCFC'
  },
  draftPopUp_MDPI: {
    width: '90%',
    height: '90%',
    backgroundColor: '#FCFCFC'

    // // backgroundColor: 'yellow'
  },
  draftPopUp_HDPI: {
    width: '90%',
    height: '90%',
    backgroundColor: '#FCFCFC'
  },
  draftPopUp_XHDPI: {
    width: '40%',
    height: 400,
    backgroundColor: '#FCFCFC'
  },
  draftPopUp_XXHDPI: {
    width: '40%',
    height: 400,
    backgroundColor: '#FCFCFC'
  },
  draftPopUp_XXXHDPI: {
    width: '40%',
    height: 400,
    backgroundColor: '#FCFCFC'

    // // backgroundColor: 'purple'
  },
  draftPopUp_LAPTOP: {
    width: '40%',
    height: 400,
    backgroundColor: '#FCFCFC'
  },

  formICICBANK: {
    backgroundColor: '#FCFCFC',
    // marginRight : 20,
    // marginLeft : 20,
    paddingRight: '3%',
    paddingLeft: '3%',
    marginTop: 15
  },
  formNonICIC: {
    backgroundColor: '#FCFCFC',

    marginTop: 15
  },
  formDraft: {
    // marginRight : 20,
    // marginLeft : 20,
    //  paddingRight: "3%",
    //  paddingLeft: "3%",
    //  backgroundColor: "#FCFCFC"
  },

  formDraft_MDPI: {
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  formDraft_HDPI: {
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  formDraft_XHDPI: {
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  formDraft_XXHDPI: {
    paddingRight: '3%',
    paddingLeft: '3%',
    backgroundColor: '#FCFCFC'
  },
  // formDraft_XXXHDPI: {
  //   paddingRight: "2%",
  //    paddingLeft: "2%",
  //    backgroundColor: "#FCFCFC"
  // },
  formDraft_LAPTOP: {
    paddingRight: '0%',
    paddingLeft: '0%',
    backgroundColor: '#FCFCFC'
  },

  ViewkindlyNote: {
    backgroundColor: '#F4F4F4',
    width: '40%'
    // backgroundColor : 'red'
  },

  viewKindlyNote_LDPI: {
    width: '90%',
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10
  },

  viewKindlyNote_MDPI: {
    width: '90%',
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10
  },
  viewKindlyNote_HDPI: {
    width: '90%',
    // backgroundColor : 'red'
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10
  },
  viewKindlyNote_XHDPI: {
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10,
    width: '90%'
  },
  viewKindlyNote_XXHDPI: {
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10,
    width: '40%'
  },
  viewKindlyNote_XXXHDPI: {
    width: '40%',
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10
  },
  viewKindlyNote_LAPTOP: {
    width: '40%',
    backgroundColor: '#F4F4F4',
    padding: responsiveWidth(1),
    borderRadius: 10
  },

  notifyDetailText: {
    color: '#4A4A4A'
  },
  notifyTextDetail_LDPI: {
    fontSize: 11
  },
  notifyTextDetail_MDPI: {
    fontSize: 12
  },
  notifyTextDetail_HDPI: {
    fontSize: 13
  },
  notifyTextDetail_XHDPI: {
    fontSize: 14
  },
  notifyTextDetail_XXHDPI: {
    fontSize: 15
  },
  notifyTextDetail_XXXHDPI: {
    fontSize: 15
  },
  notifyTextDetail_LAPTOP: {
    fontSize: 16
  },

  notifyTimeText: {
    color: '#9B9B9B'
  },
  notifyTextsTime_LDPI: {
    fontSize: 8
  },
  notifyTextsTime_MDPI: {
    fontSize: 8
  },
  notifyTextsTime_HDPI: {
    fontSize: 9
  },
  notifyTextsTime_XHDPI: {
    fontSize: 10
  },
  notifyTextsTime_XXHDPI: {
    fontSize: 11
  },
  notifyTextsTime_XXXHDPI: {
    fontSize: 12
  },
  notifyTextsTime_LAPTOP: {
    fontSize: 12
  },
  notMsg: {
    textAlign: 'center',
    marginTop: 50
  },
  notMsgTxt: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
