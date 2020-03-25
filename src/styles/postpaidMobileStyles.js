import { StyleSheet } from 'react-native';
import { responsiveWidth } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  fullPage: {
    backgroundColor: '#fcfcfc',
    height: '100%',
    // width: '100%'
  },
  mainPage: {
    marginTop: 40,
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '0%',
  },
  mainPage_LAPTOP: {
    marginTop: 50,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  mainPage_XXXHDPI: {
    marginTop: 50,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  mainPage_XXHDPI: {
    marginTop: 50,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  titleSubHead: {
    width: '100%',
    marginTop: '1%',
  },
  titleSubHead_LAPTOP: {
    width: '42%',
    marginTop: '1%',
  },
  titleSubHead_XXXHDPI: {
    width: '42%',
    marginTop: '1%',
  },
  titleSubHead_XXHDPI: {
    width: '42%',
    marginTop: '1%',
  },
  subText: {
    lineHeight: 25,
  },
  textInput: {
    width: '100%',
    marginTop: '10%',
  },
  textInput_LAPTOP: {
    width: '23%',
    marginTop: '2%',
  },
  textInput_XXXHDPI: {
    width: '23%',
    marginTop: '2%',
  },
  textInput_XXHDPI: {
    width: '40%',
    marginTop: '2%',
  },
  // textInput_XHDPI: {
  //   width: '100%',
  //   marginTop: '2%',
  // },
  cancelOrSubmitBtnIcici: {
    width: '100%',
    marginTop: '15%',
    marginBottom: '10%',
    flex: 1,
    flexDirection: 'column-reverse',
  },
  cancelOrSubmitBtnIcici_LAPTOP: {
    width: '28%',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  cancelOrSubmitBtnIcici_XXXHDPI: {
    width: '28%',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  cancelOrSubmitBtnIcici_XXHDPI: {
    width: '50%',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  selectBtnIcici: {
    flex: 1,
    marginRight: '0%',
    marginBottom: '5%',
  },
  selectBtnIcici_LAPTOP: {
    marginRight: '6%',
    marginBottom: '0%',
  },
  selectBtnIcici_XXXHDPI: {
    marginRight: '6%',
    marginBottom: '0%',
  },
  selectBtnIcici_XXHDPI: {
    marginRight: '6%',
    marginBottom: '0%',
  },

  mainPageLandline: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: '5%',
  },
  mainPageLandline_LAPTOP: {
    marginTop: 40,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  mainPageLandline_XXXHDPI: {
    marginTop: 40,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  mainPageLandline_XXHDPI: {
    marginTop: 40,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '5%',
  },
  menuOptionStyle: {
    display: 'flex',
    backgroundColor: 'white',
    width: 150,
    justifyContent: 'space-evenly',
    marginTop: 5,
    paddingTop: 3,
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    borderRadius: 5,
  },
  anchor: { backgroundColor: 'transparent' },
  // menuOptionStyle_MDPI: { width: responsiveWidth(50) },
  menuOptionsView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuOptionsText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  menuOptionsImage: { marginRight: 5 },
  menuText: {
    paddingTop: 4,
  },
  // ////////////////////////////////////////////-POPUP STYLES-//////////////////////////////////////////////////////
  // popupFullpage: {
  //   marginLeft: '0%',
  //   marginRight: '0%',
  //   borderRadius: 5,
  //   shadowColor: 'grey',
  //   shadowOpacity: 0.7,
  //   shadowRadius: 12,
  // },
  //   popupFullpage_LAPTOP: {
  //     marginLeft: '17%',
  //     marginRight: '17%'
  //   },
  // popupFullpage_XXXHDPI: {
  //   marginLeft: '17%',
  //   marginRight: '17%'
  // },
  // popupFullpage_XXHDPI: {
  //   marginLeft: '17%',
  //   marginRight: '17%'
  // },
  popupHead: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: '4%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  popupHead_LAPTOP: {
    padding: '2%',
  },
  popupHead_XXXHDPI: {
    padding: '2%',
  },
  popupHead_XXHDPI: {
    padding: '2%',
  },
  popupHeadTagClose: {
    flex: 1,
    alignItems: 'flex-end',
  },
  popupHeadTag: {
    flex: 2,
    alignItems: 'flex-start',
  },
  popupHeadTag_LAPTOP: {
    flex: 1,
  },
  popupHeadTag_XXXHDPI: {
    flex: 1,
  },
  popupHeadTag_XXHDPI: {
    flex: 1,
  },
  headText: {
    fontWeight: 'bold',
  },
  closeText: {
    // cursor: 'pointer'
  },
  popupBody: {
    padding: '4%',
    marginTop: '0%',
  },
  popupBody_LAPTOP: {
    paddingTop: '0%',
    marginTop: '0%',
    flex: 1,
    // flexDirection: 'row',
  },
  popupBody_XXXHDPI: {
    padding: '4%',
    marginTop: '0%',
  },
  popupBody_XXHDPI: {
    padding: '4%',
    marginTop: '0%',
  },
  instructions: {
    padding: '4%',
    borderRadius: 5,
    backgroundColor: 'rgba(226, 122, 59, 0.15)',
  },
  instructions_LAPTOP: {
    padding: '2%',
  },
  instructions_XXXHDPI: {
    padding: '2%',
  },
  instructions_XXHDPI: {
    padding: '2%',
  },
  textInfo: {
    lineHeight: 25,
  },
  stepsToFollow: {
    marginTop: '8%',
  },
  stepsToFollow_LAPTOP: {
    marginTop: '4%',
  },
  stepsToFollow_XXXHDPI: {
    marginTop: '4%',
  },
  stepsToFollow_XXHDPI: {
    marginTop: '4%',
  },
  steps: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '4%',
  },
  steps_LAPTOP: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
  steps_XXXHDPI: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
  steps_XXHDPI: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
  },
  stepOne: {
    flex: 1,
    paddingRight: '0%',
  },
  stepOne_LAPTOP: {
    paddingRight: '1%',
  },
  stepOne_XXXHDPI: {
    paddingRight: '1%',
  },
  stepOne_XXHDPI: {
    paddingRight: '1%',
  },
  stepTwo: {
    flex: 1,
    paddingLeft: '0%',
    paddingRight: '0%',
    paddingTop: '5%',
  },
  stepTwo_LAPTOP: {
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: '0%',
  },
  stepTwo_XXXHDPI: {
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: '0%',
  },
  stepTwo_XXHDPI: {
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: '0%',
  },
  stepThree: {
    flex: 1,
    paddingLeft: '0%',
    paddingTop: '5%',
  },
  stepThree_LAPTOP: {
    paddingLeft: '1%',
    paddingTop: '0%',
  },
  stepThree_XXXHDPI: {
    paddingLeft: '1%',
    paddingTop: '0%',
  },
  stepThree_XXHDPI: {
    paddingLeft: '1%',
    paddingTop: '0%',
  },
  italicsText: {
    fontStyle: 'italic',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeBtn: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  closeBtn_LAPTOP: {
    // borderWidth: 1,
    marginLeft: '41%',
    marginRight: '41%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  closeBtn_XXXHDPI: {
    marginLeft: '41%',
    marginRight: '41%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  closeBtn_XXHDPI: {
    marginLeft: '41%',
    marginRight: '41%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  popupModal: {
    margin: '0%',
    marginLeft: '0%',
    marginRight: '0%',
    borderRadius: 6,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 12,
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 0,
  },
  popupModal_LAPTOP: {
    width: '65%',
    marginLeft: '17%',
    marginRight: '17%',
  },
  popupModal_XXXHDPI: {
    marginLeft: '17%',
    marginRight: '17%',
  },
  popupModal_XXHDPI: {
    marginLeft: '17%',
    marginRight: '17%',
  },
  landlineHeadText: {
    fontSize: 25,
  },
  amount: {
    marginBottom: '3%',
  },
  nextBtn: {
    fontWeight: 'bold',
  },
  headSection: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '5%',
    marginLeft: 10,
  },
  headSection_LAPTOP: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '1%',
    marginLeft: 0,
  },
  headSection_XXXHDPI: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '1%',
    marginLeft: 0,
  },
  titleHead: {
    flex: 1,
    // borderWidth: 1,
  },
  titleHeadBtn: {
    flex: 1,
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
  AcceptButtonStyle: {
    width: responsiveWidth(12),
  },
  backPayBillBtn: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  backPayBillBtn_LAPTOP: {
    marginTop: 5,
    marginBottom: 10,
  },
  backPayBillBtn_XXXHDPI: {
    marginTop: 0,
    marginBottom: 5,
  },
  backPayBillBtn_XXHDPI: {
    marginTop: 0,
    marginBottom: 5,
  },
  viewDetails: {
    color: '#e77817',
  },
  firstSection: {
    flex: 1,
    // borderWidth: 1
  },
  secondSection: {
    flex: 1,
    // borderWidth: 1
  },
  details: {
    marginBottom: '6%',
  },
  detailsHead: {
    marginBottom: '1%',
  },
  policyDetails: {
    marginTop: '8%',
    marginBottom: '10%',
  },
  policyDetailsHead: {
    marginBottom: '5%',
  },
  cancelandPayBtnIcici: {
    width: '100%',
    marginTop: '15%',
    marginBottom: '10%',
    flex: 1,
    flexDirection: 'column-reverse',
  },
  cancelandPayBtnIcici_LAPTOP: {
    width: '28%',
    marginTop: '2%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  cancelandPayBtnIcici_XXXHDPI: {
    width: '28%',
    marginTop: '2%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  cancelandPayBtnIcici_XXHDPI: {
    width: '28%',
    marginTop: '2%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  menuOptionsStyle: {
    width: '90%',
    marginTop: 60,
    backgroundColor: '#FCFCFC',
  },
  menuOptionsStyle_XHDPI: {
    width: '40%',
  },
  menuOptionsStyle_XXHDPI: {
    width: '40%',
  },
  menuOptionsStyle_XXXHDPI: {
    width: '22%',
  },
  menuOptionsStyle_LAPTOP: {
    width: '22%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dropdown_header_label: {
    flexBasis: '95%',
  },
  dropdown_arrow: {
    alignSelf: 'center',
    height: 50,
    marginRight: 5,
    paddingRight: 10,
    paddingTop: 15,
    marginTop: 15,
    marginLeft: -25,
    // borderWidth: 1,
  },
  dropdown_arrow_LAPTOP: {
    marginLeft: -15,
  },
  dropdown_arrow_XXXHDPI: {
    marginLeft: -15,
  },
  menu_option_hovered: {
    padding: 10,
    backgroundColor: '#097dfa',
  },
  menu_option_normal: {
    padding: 10,
    // width: '1%',
  },
  dropDown: {
    width: '100%',
    marginBottom: 20,
    marginTop: '3%',
    marginLeft: 10,
  },
  dropDown_LAPTOP: {
    width: '25%',
    marginBottom: 10,
    marginTop: '0%',
    marginLeft: 0,
  },
  dropDown_XXXHDPI: {
    width: '25%',
    marginBottom: 10,
    marginTop: '0%',
    marginLeft: 0,
  },
  dropDown_XXHDPI: {
    width: '45%',
    marginBottom: 10,
    marginTop: '0%',
    marginLeft: 0,
  },
  dropDown_XHDPI: {
    width: '45%',
    marginBottom: 10,
    marginTop: '0%',
    marginLeft: 0,
  },
  headSection_landlineService: {
    flex: 1,
    flexDirection: 'column-reverse',
    marginBottom: '1%',
    padding: 10,
  },
  headSection_landlineService_LAPTOP: {
    flexDirection: 'row',
    padding: 0,
  },
  headSection_landlineService_XXXHDPI: {
    flexDirection: 'row',
    padding: 0,
  },
  headSection_landlineService_XXHDPI: {
    flexDirection: 'row',
    padding: 0,
  },
  headSection_landlineService_XHDPI: {
    flexDirection: 'row',
    padding: 0,
  },
  titleHeadBtn_landlineService: {
    flex: 1,
    marginBottom: '10%',
  },
  titleHeadBtn_landlineService_LAPTOP: {
    alignItems: 'flex-end',
    marginBottom: '0%',
  },
  titleHeadBtn_landlineService_XXXHDPI: {
    alignItems: 'flex-end',
    marginBottom: '0%',
  },
  titleHeadBtn_landlineService_XXHDPI: {
    alignItems: 'flex-end',
    marginBottom: '0%',
  },
  titleHeadBtn_landlineService_XHDPI: {
    alignItems: 'flex-end',
    marginBottom: '0%',
  },
  imageContainerForTable: {
    // borderWidth: 1,
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
  },
  listFullPage: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d7d2',
  },
  listFullPageHeader: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d7d2',
  },
  serviceProvider: {
    paddingLeft: '15%',
    // borderWidth: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  serviceProviderLogo: {
    // borderWidth: 1,
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
  },
  providerName: {
    marginTop: 10,
  },
  providerNameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  providerDetails: {
    flexDirection: 'row',
    // borderWidth: 1,
    padding: 10,
  },
  nicknameSection: {
    borderRightWidth: 2,
    borderColor: '#dedcdc',
    paddingRight: 5,
  },
  teleNumSection: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  pendingBillStatus: {
    padding: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    // borderTopWidth: 2,
    // borderBottomWidth: 1,
    // borderColor: '#dedcdc',
  },
  providerListLogo: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    marginRight: 20,
  },
  // tableOuterContainer: {
  //   borderTopWidth: 1,
  //   borderTopColor: '#d9d7d2',
  // },
  // popupPage: {
  //   width: '100%',
  //   marginLeft: '10%',
  // },
  popUpDetails: {
    flexDirection: 'column',
  },
  firstRow: {
    flex: 1,
    marginTop: 20,
  },
  firstRow_LAPTOP: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
  },
  firstColumn: {
    flex: 1,
    marginBottom: 20,
  },
  firstColumn_LAPTOP: {
    flex: 1,
    marginBottom: 0,
  },
  secondColumn: {
    flex: 1,
  },
});
