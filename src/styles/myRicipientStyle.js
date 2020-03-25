import {
  responsiveHeight,
  responsiveWidth
} from '../components/customResponsiveDimension';

const ReactNative = require('react-native');

const { StyleSheet } = ReactNative;

const styles = StyleSheet.create({
  acceptStyleButton: {
    padding: responsiveHeight(3),
    width: responsiveWidth(8),
    overflow: 'hidden',
    borderRadius: 25,
    borderWidth: 1
  },
  rejectStyleButton: {
    padding: responsiveHeight(3),
    width: responsiveWidth(8),
    overflow: 'hidden',
    borderRadius: 25,
    borderWidth: 1
  },
  rejectStyleButton_HDPI: {
    padding: responsiveHeight(2),
    width: responsiveWidth(30)
  },
  acceptStyleButton_HDPI: {
    padding: responsiveHeight(2),
    width: responsiveWidth(30)
  },
  wrapper: { flexDirection: 'row' },
  row: { height: 75, flexDirection: 'row' },
  rowCommon: { backgroundColor: '#f9eee8' },
  container: { flex: 1 },
  container_MDPI: {
    marginHorizontal: responsiveWidth(0)
  },
  container_LDPI: {
    marginHorizontal: responsiveWidth(0)
  },
  container_HDPI: {
    marginHorizontal: responsiveWidth(0)
  },
  container_XHDPI: {
    marginHorizontal: responsiveWidth(0)
  },
  scrollStyleSecondTable: {},
  scrollStyleSecondTable_LDPI: {
    marginLeft: responsiveWidth(6)
  },
  scrollStyleSecondTable_MDPI: {
    marginLeft: responsiveWidth(0)
  },
  scrollStyleSecondTable_HDPI: {
    marginLeft: responsiveWidth(0)
  },
  scrollStyleSecondTable_XHDPI: {
    marginLeft: responsiveWidth(6)
  },
  scrollStyle: {},
  scrollStyle_MDPI: {
    marginLeft: responsiveWidth(48)
  },
  scrollStyle_LDPI: {
    marginLeft: responsiveWidth(48)
  },
  scrollStyle_HDPI: {
    marginLeft: responsiveWidth(35)
  },
  scrollStyle_XHDPI: {
    marginLeft: responsiveWidth(31)
  },
  containerForFixedOnScroll: {
    flex: 1,
    marginHorizontal: responsiveWidth(3)
  },
  containerForFixedOnScroll_MDPI: {
    backgroundColor: '#FCFCFC',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 0 },
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  containerForFixedOnScroll_LDPI: {
    backgroundColor: '#FCFCFC',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 0 },
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  containerForFixedOnScroll_HDPI: {
    backgroundColor: '#FCFCFC',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 0 },
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  containerForFixedOnScroll_XHDPI: {
    backgroundColor: '#FCFCFC',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 0 },
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },

  containerForFixed: {
    width: responsiveWidth(50),
    flex: 1,
    marginLeft: responsiveWidth(3)
  },
  containerForFixed_XXXHDPI: {
    width: responsiveWidth(50),
    flex: 1,
    marginLeft: responsiveWidth(3)
  },
  containerForFixed_MDPI: {
    flex: 1,
    marginLeft: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },

  containerForFixed_LDPI: {
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  containerForFixed_HDPI: {
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  containerForFixed_XHDPI: {
    flex: 1,
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute'
  },
  head: { height: 50, backgroundColor: '#f7f6f6', marginBottom: '1.23%' },
  head_LAPTOP: { marginBottom: '1.4%' },
  headFixedForFirstList: {
    height: 50,
    backgroundColor: '#f7f6f6',
    marginBottom: '4%'
  },
  headFixedForFirstList_LAPTOP: { marginBottom: '4%' },
  headFixedSecondList: {
    height: 50,
    backgroundColor: '#f7f6f6',
    marginBottom: 0
  },
  headFixedSecondList_LAPTOP: { marginBottom: '8%' },
  text: {
    margin: 6,
    fontSize: 14,
    fontWeight: 'bold',

    color: '#4a4a4a'
  },
  textRow: {
    margin: 6,
    fontSize: 14,

    color: '#4a4a4a'
  },
  btnText: { color: '#e77817' },

  table: {
    flex: 9,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(3)
  },
  tableForRequestList: {
    flex: 8,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(3)
  },
  placeholder: {
    fontSize: 15
    // marginLeft: responsiveWidth(31),
    // alignItems: 'center',
  },
  // placeholder_XXHDPI: {
  //   fontSize: 15,
  //   marginLeft: responsiveWidth(20),
  //   alignItems: 'center',
  // },
  // placeholder_MDPI: {
  //   fontSize: 15,
  //   marginLeft: responsiveWidth(20),
  //   alignItems: 'center',
  // },
  // placeholder_LDPI: {
  //   fontSize: 15,
  //   marginLeft: responsiveWidth(20),
  //   alignItems: 'center',
  // },

  tableHead: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  tableHeadAccNo: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    flex: 2
  },

  tableText: {
    color: 'black'
  },
  webWidth: {
    flexDirection: 'column',
    marginLeft: responsiveWidth(2)
  },
  webWidth_LAPTOP: {
    width: responsiveWidth(100)
  },
  webWidth_XXXHDPI: {
    width: responsiveWidth(90)
  },
  webWidth_XXHDPI: {
    width: responsiveWidth(90)
  },
  webWidth_XHDPI: {
    width: responsiveWidth(90)
  },
  stleButtons: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    // marginLeft: responsiveWidth(2),
    marginTop: responsiveWidth(3),
    marginBottom: responsiveWidth(2),
    justifyContent: 'space-between'
  },
  stleButtons_LDPI: {
    flexDirection: 'column'
  },
  stleButtons_MDPI: {
    flexDirection: 'column'
  },
  stleButtons_HDPI: {
    flexDirection: 'column'
  },
  stleButtons_XHDPI: {
    flexDirection: 'column'
  },
  stleButtons_XXHDPI: {
    flexDirection: 'row'
  },
  stleButtons_XXXHDPI: {
    flexDirection: 'row',
    paddingLeft: responsiveWidth(1),
    paddingRight: responsiveWidth(1),
    // marginLeft: responsiveWidth(2),
    marginTop: responsiveWidth(3),
    marginBottom: responsiveWidth(1)
  },
  textFieldStyle: {
    borderRadius: 70,
    borderWidth: 2,
    borderRightColor: '#DCDCDC',
    borderLeftColor: '#DCDCDC',
    borderTopColor: '#DCDCDC',
    borderColor: '#DCDCDC',
    justifyContent: 'center',
    height: 50,
    width: responsiveWidth(27)
  },
  textFieldStyle_MDPI: {
    width: responsiveWidth(62)
  },
  textFieldStyle_LDPI: {
    width: responsiveWidth(62)
  },
  textFieldStyle_XHDPI: {
    width: responsiveWidth(62)
  },
  textFieldStyle_HDPI: {
    width: responsiveWidth(64)
  },
  textFieldStyle_XXHDPI: {
    width: responsiveWidth(36)
  },
  textFieldStyle_XXXHDPI: {
    width: responsiveWidth(36)
  },
  // textFieldStyle: {
  //   backgroundColor: 'yellow',
  //   borderRadius: 70,
  //   borderWidth: 1,
  //   borderRightColor: '#DCDCDC',
  //   borderLeftColor: '#DCDCDC',
  //   borderTopColor: '#DCDCDC',
  //   borderColor: '#DCDCDC',
  //   paddingTop: responsiveHeight(2.5),
  //   paddingBottom: responsiveHeight(2.5),
  //   paddingLeft: responsiveWidth(0.5),
  //   paddingRight: responsiveWidth(0.5),
  //   width: responsiveWidth(27),
  //   justifyContent: 'center',
  // },
  // textFieldStyle_MDPI: {
  //   alignItems: 'center',
  //   paddingTop: responsiveHeight(0),
  //   paddingBottom: responsiveHeight(0),
  //   height: 50,
  //   width: responsiveWidth(62),
  //   marginBottom: responsiveWidth(2),
  // },
  // textFieldStyle_XHDPI: {
  //   alignItems: 'center',
  //   paddingTop: responsiveHeight(0),
  //   paddingBottom: responsiveHeight(0),
  //   height: 15,
  //   width: responsiveWidth(25),
  //   marginBottom: responsiveWidth(2),
  // },
  // textFieldStyle_LAPTOP: {
  //   borderRadius: 70,
  //   borderWidth: 1,
  //   borderRightColor: '#DCDCDC',
  //   borderLeftColor: '#DCDCDC',
  //   borderTopColor: '#DCDCDC',
  //   borderColor: '#DCDCDC',
  //   paddingTop: responsiveHeight(2.5),
  //   paddingBottom: responsiveHeight(2.5),
  //   paddingLeft: responsiveWidth(0.5),
  //   paddingRight: responsiveWidth(0.5),
  //   width: responsiveWidth(27),
  //   overflow: 'hidden',
  // },
  addRecipientButtonStyle: {
    marginVertical: responsiveHeight(3),
    padding: responsiveHeight(1),
    width: responsiveWidth(15),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(2),
    borderRadius: 25,
    borderWidth: 1
  },
  addRecipientButtonStyle_LAPTOP: {
    marginVertical: responsiveHeight(3),
    padding: responsiveHeight(3),
    width: responsiveWidth(15),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(2),
    borderRadius: 25,
    borderWidth: 1
  },
  // textFieldStyle_LDPI: {
  //   borderRadius: 70,
  //   borderWidth: 1,
  //   borderRightColor: '#DCDCDC',
  //   borderLeftColor: '#DCDCDC',
  //   borderTopColor: '#DCDCDC',
  //   borderColor: '#DCDCDC',
  //   paddingTop: responsiveHeight(4),
  //   paddingBottom: responsiveHeight(4),
  //   paddingLeft: responsiveWidth(0.5),
  //   paddingRight: responsiveWidth(0.5),
  //   width: responsiveWidth(94),
  //   marginBottom: responsiveWidth(2),
  // },
  // textFieldStyle_XXHDPI: {
  //   alignItems: 'center',
  //   paddingTop: responsiveHeight(0),
  //   paddingBottom: responsiveHeight(0),
  //   height: 50,
  //   width: responsiveWidth(35),
  //   marginBottom: responsiveWidth(2),
  // },
  // textFieldStyle_HDPI: {
  //   padding: responsiveHeight(1),
  //   width: responsiveWidth(90),
  //   overflow: 'hidden',
  //   marginBottom: responsiveHeight(2),
  //   marginLeft: responsiveWidth(1),
  //   borderRadius: 70,
  //   borderWidth: 1,
  //   borderColor: '#DCDCDC',
  // },

  // textFieldStyle_XXXHDPI: {
  //   borderRadius: 70,
  //   borderWidth: 1,
  //   borderRightColor: '#DCDCDC',
  //   borderLeftColor: '#DCDCDC',
  //   borderTopColor: '#DCDCDC',
  //   borderColor: '#DCDCDC',
  //   paddingTop: responsiveHeight(2.5),
  //   paddingBottom: responsiveHeight(2.5),
  //   paddingLeft: responsiveWidth(0.5),
  //   paddingRight: responsiveWidth(0.5),
  //   width: responsiveWidth(27),
  // },
  addRecipientButtonStyle_HDPI: {
    marginVertical: responsiveHeight(1),
    marginLeft: responsiveWidth(20),
    padding: responsiveHeight(1),
    width: responsiveWidth(70),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    borderRadius: 25,
    borderWidth: 1
  },
  addRecipientButtonStyle_XXHDPI: {
    marginVertical: responsiveHeight(1),
    marginLeft: responsiveWidth(1),
    padding: responsiveHeight(1),
    width: responsiveWidth(15),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    borderRadius: 25,
    borderWidth: 1
  },
  addRecipientButtonStyle_XHDPI: {
    marginVertical: responsiveHeight(1),
    padding: responsiveHeight(1),
    width: responsiveWidth(70),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(10),
    borderRadius: 25,
    borderWidth: 1
  },

  addRecipientButtonStyle_LDPI: {
    marginVertical: responsiveHeight(1),
    padding: responsiveHeight(1),
    width: responsiveWidth(80),
    overflow: 'hidden',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(10),
    borderRadius: 25,
    borderWidth: 1
  },

  addRecipientButtonStyle_MDPI: {
    marginLeft: responsiveWidth(8),
    padding: responsiveHeight(1),
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1)
  },

  recipientButtonContainerSelected: {
    marginVertical: responsiveHeight(3),
    padding: responsiveHeight(3),
    width: responsiveWidth(13),
    overflow: 'hidden',
    borderRadius: 25,
    backgroundColor: '#1D1841',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(2)
  },
  recipientButtonContainerSelected_LDPI: {
    display: 'none'
  },

  recipientButtonContainerSelected_MDPI: {
    display: 'none'
  },
  recipientButtonContainerSelected_HDPI: {
    display: 'none'
  },
  recipientButtonContainerSelected_XHDPI: {
    display: 'none'
  },
  recipientButtonContainerSelected_XXHDPI: {
    display: 'none'
  },

  recipientButtonContainerUnSelected: {
    marginVertical: responsiveHeight(3),
    padding: responsiveHeight(3),
    width: responsiveWidth(13),
    overflow: 'hidden',
    borderRadius: 25,
    backgroundColor: '#DCDCDC',
    marginBottom: responsiveHeight(7),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(2)
  },
  recipientButtonContainerUnSelected_LDPI: {
    display: 'none'
  },

  recipientButtonContainerUnSelected_MDPI: {
    display: 'none'
  },
  recipientButtonContainerUnSelected_HDPI: {
    display: 'none'
  },
  recipientButtonContainerUnSelected_XHDPI: {
    display: 'none'
  },
  recipientButtonContainerUnSelected_XXHDPI: {
    display: 'none'
  },
  recipientPicker: {
    borderBottomWidth: 2,
    borderWidth: 0,
    marginHorizontal: responsiveWidth(8),
    marginBottom: responsiveWidth(5)
  },
  recipientPicker_LDPI: {
    borderBottomWidth: 2,
    borderWidth: 0,
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveWidth(1)
  },
  recipientPicker_XHDPI: {
    width: responsiveWidth(90),
    borderBottomWidth: 1,
    borderWidth: 0,
    marginHorizontal: responsiveWidth(0),
    marginBottom: responsiveWidth(1)
  },
  recipientPicker_MDPI: {
    borderBottomWidth: 2,
    borderWidth: 0,
    marginHorizontal: responsiveWidth(0),
    marginBottom: responsiveWidth(1)
  },
  recipientPicker_HDPI: {
    borderBottomWidth: 2,
    borderWidth: 0,
    marginHorizontal: responsiveWidth(1),
    marginBottom: responsiveWidth(1)
  },
  recipientPicker_XXHDPI: {
    borderBottomWidth: 2,
    borderWidth: 0,
    width: responsiveWidth(26),
    marginHorizontal: responsiveWidth(0),
    marginBottom: responsiveWidth(0)
  },
  recipientPicker_XXXHDPI: {
    display: 'none'
  },
  recipientPicker_LAPTOP: {
    display: 'none'
  },
  whiteButtonStyle: {
    width: responsiveWidth(9),
    marginLeft: responsiveWidth(1)
  },
  whiteButtonStyle_LDPI: {
    width: responsiveWidth(25),
    marginLeft: responsiveWidth(7)
  },
  whiteButtonStyle_HDPI: {
    width: responsiveWidth(20),
    marginLeft: responsiveWidth(7)
  },
  whiteButtonStyle_MDPI: {
    width: responsiveWidth(25),
    marginLeft: responsiveWidth(7)
  },
  whiteButtonStyle_XHDPI: {
    width: responsiveWidth(23),
    marginLeft: responsiveWidth(7)
  },
  whiteButtonStyle_XXHDPI: {
    width: responsiveWidth(9)
  },
  whiteButtonStyle_XXXHDPI: {
    width: responsiveWidth(16),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(2)
  },
  viewWhiteButton: {
    width: '100%'
  },
  // viewWhiteButton_XXHDPI: {
  //   width: responsiveWidth(15),
  // },
  // viewWhiteButton_XHDPI: {
  //   width: responsiveWidth(16),
  // },
  // viewWhiteButton_MDPI: {
  //   width: '100%',
  // },

  BlueButtonStyle: {
    width: responsiveWidth(13)
  },
  BlueButtonStyle_LDPI: { display: 'none' },
  BlueButtonStyle_HDPI: { display: 'none' },
  BlueButtonStyle_MDPI: { display: 'none' },
  BlueButtonStyle_XHDPI: { display: 'none' },
  BlueButtonStyle_XXHDPI: {
    display: 'none'
  },
  BlueButtonStyle_XXXHDPI: {
    width: responsiveWidth(16),
    marginLeft: responsiveWidth(2)
  },

  greyButtonStyle: {
    width: responsiveWidth(15),
    marginLeft: responsiveWidth(1.5)
  },
  greyButtonStyle_LDPI: { display: 'none' },
  greyButtonStyle_HDPI: { display: 'none' },
  greyButtonStyle_MDPI: { display: 'none' },
  greyButtonStyle_XHDPI: { display: 'none' },
  greyButtonStyle_XXHDPI: {
    display: 'none'
  },
  greyButtonStyle_XXXHDPI: {
    width: responsiveWidth(18),
    marginLeft: responsiveWidth(6)
  },
  AcceptButtonStyle: {
    width: responsiveWidth(7)
  },
  AcceptButtonStyle_LDPI: {
    width: responsiveWidth(27)
  },
  AcceptButtonStyle_MDPI: {
    width: responsiveWidth(26)
  },
  AcceptButtonStyle_HDPI: {
    width: responsiveWidth(22)
  },
  AcceptButtonStyle_XHDPI: {
    width: responsiveWidth(16)
  },
  AcceptButtonStyle_XXHDPI: {
    width: responsiveWidth(15)
  },
  AcceptButtonStyle_XXXHDPI: {
    width: responsiveWidth(13)
  },
  AcceptButtonStyle_LAPTOP: {
    width: responsiveWidth(8)
  },

  rejectButtonStyle: {
    width: responsiveWidth(7),
    marginLeft: responsiveWidth(3)
  },
  rejectButtonStyle_LDPI: {
    width: responsiveWidth(27)
  },
  rejectButtonStyle_MDPI: {
    width: responsiveWidth(25),
    marginLeft: responsiveWidth(1)
  },
  rejectButtonStyle_HDPI: {
    width: responsiveWidth(22),
    marginLeft: responsiveWidth(1)
  },
  rejectButtonStyle_XHDPI: {
    width: responsiveWidth(16),
    marginLeft: responsiveWidth(1)
  },
  rejectButtonStyle_XXHDPI: {
    width: responsiveWidth(15),
    marginLeft: responsiveWidth(1)
  },
  rejectButtonStyle_XXXHDPI: {
    width: responsiveWidth(13),
    marginLeft: responsiveWidth(1)
  },
  rejectButtonStyle_LAPTOP: {
    width: responsiveWidth(8),
    marginLeft: responsiveWidth(1)
  },
  paginationInFirstPage: {
    alignContent: 'center',
    marginLeft: responsiveWidth(86),
    flexDirection: 'row',
    marginBottom: responsiveWidth(1)
  },
  viewNoRecords: {
    height: responsiveHeight(34.3),
    marginTop: responsiveWidth(2),
    // height: 35,
    alignItems: 'center'
  },
  paginationInFirstPage_LDPI: {
    marginLeft: responsiveWidth(60),
    flexDirection: 'row',
    marginBottom: responsiveWidth(10),
    marginTop: responsiveWidth(10)
  },
  paginationInFirstPage_MDPI: {
    marginLeft: responsiveWidth(60),
    flexDirection: 'row',
    marginTop: responsiveWidth(10),
    marginBottom: responsiveWidth(10)
  },
  paginationInFirstPage_HDPI: {
    marginLeft: responsiveWidth(75),
    flexDirection: 'row',
    marginBottom: responsiveWidth(3),
    marginTop: responsiveWidth(2)
  },
  paginationInFirstPage_XHDPI: {
    marginLeft: responsiveWidth(78),
    flexDirection: 'row',
    marginBottom: responsiveWidth(3),
    marginTop: responsiveWidth(2)
  },
  paginationInFirstPage_XXHDPI: {
    marginLeft: responsiveWidth(83),
    flexDirection: 'row',
    marginBottom: responsiveWidth(2)
    // marginVertical: responsiveWidth(2),
  },
  paginationInFirstPage_XXXHDPI: {
    marginLeft: responsiveWidth(84),
    flexDirection: 'row',
    marginVertical: responsiveWidth(2)
  },
  searchIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 14,
    fontSize: 20
  },
  // searchIcon: {
  //   position: 'absolute',
  //   fontSize: 20,
  //   right: responsiveWidth(2),
  //   top: responsiveHeight(3),
  // },
  // searchIcon_LDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(13),
  //   top: 18,
  // },
  // searchIcon_MDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(5),
  //   top: 17,
  // },
  // searchIcon_HDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(4),
  //   top: 13,
  // },
  // searchIcon_XHDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(5),
  //   top: 18,
  // },
  // searchIcon_XXHDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(3),
  //   top: 13,
  // },
  // searchIcon_XXXHDPI: {
  //   position: 'absolute',

  //   right: responsiveWidth(2),
  //   top: 14,
  // },
  inputFieldGap: {
    marginVertical: responsiveHeight(3),
    width: responsiveWidth(29)
  },
  inputFieldGap_LAPTOP: {
    width: responsiveWidth(28)
  },
  inputFieldGap_MDPI: {
    marginVertical: responsiveHeight(0),
    width: responsiveWidth(0)
  },

  inputFieldGap_XXXHDPI: {
    marginVertical: responsiveHeight(3),
    width: responsiveWidth(15)
  },
  inputFieldGap_XXHDPI: {
    width: responsiveWidth(15)
  },
  secondContainerForSecondTable: {
    width: responsiveWidth(80),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_XXHDPI: {
    width: responsiveWidth(97),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_XXXHDPI: {
    width: responsiveWidth(84),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_MDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_LDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_HDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainerForSecondTable_XHDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainer: {
    width: responsiveWidth(70),
    marginRight: responsiveWidth(3)
  },
  secondContainer_MDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainer_HDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainer_XHDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  secondContainer_XXXHDPI: {
    width: responsiveWidth(75),
    marginRight: responsiveWidth(3)
  },
  secondContainer_LDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3)
  },
  pickerBox: {
    paddingTop: responsiveHeight(1),
    // paddingBottom: responsiveHeight(1),
    width: responsiveWidth(25),
    fontSize: 16,
    borderColor: '#d4d4d4',
    backgroundColor: '#fcfcfc',
    // borderWidth: 0,
    // borderBottomWidth: 1,
    color: '#4a4a4a'
  },
  pickerBox_LDPI: {
    width: responsiveWidth(93)
  },
  pickerBox_HDPI: {
    width: responsiveWidth(80)
  },
  pickerBox_MDPI: {
    width: responsiveWidth(93)
  },
  pickerBox_XHDPI: {
    width: responsiveWidth(90)
    // paddingBottom: responsiveHeight(0),
  },
  pickerBox_XXHDPI: {
    width: responsiveWidth(30)
  },
  menu_option_normal: {
    padding: 10
  },
  menu_option_hovered: {
    padding: 10,
    backgroundColor: '#007fff'
  },
  inputDropdown: {
    paddingBottom: 5,
    paddingTop: 5,
    color: '#4a4a4a',
    fontSize: 16
  },
  headerDropDown: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  dropdown_header_label: {
    flexBasis: '95%',
    color: '#333333',
    fontSize: 16
  },
  border_bottom_zero: {
    borderBottomWidth: 0,
    color: '#333333',
    fontSize: 16
  },
  dropdown_arrow: {
    alignSelf: 'center',
    marginRight: 5
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
  },
  pickerBoxWrapperCountry: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'row',
    width: responsiveWidth(25),
    // marginBottom: responsiveHeight(3),
    marginLeft: 0,
    borderColor: '#d4d4d4',
    backgroundColor: '#fcfcfc',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#4a4a4a',
    justifyContent: 'center'
    // alignSelf: 'flex-start',
    // backgroundColor: 'red',
  },
  pickerBoxWrapperCountry_LDPI: {
    width: responsiveWidth(93),
    marginBottom: responsiveHeight(1),
    marginLeft: 0
  },
  pickerBoxWrapperCountry_MDPI: {
    width: responsiveWidth(93),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    marginLeft: 0
  },
  pickerBoxWrapperCountry_HDPI: {
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    height: 40
  },
  pickerBoxWrapperCountry_XHDPI: {
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    height: 40
  },
  pickerBoxWrapperCountry_XXHDPI: {
    width: responsiveWidth(30),
    marginBottom: responsiveHeight(1),
    marginLeft: 0
  },
  imageContainerForListView: {
    marginLeft: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50
    // backgroundColor: '#FFFFFF',
    // shadowColor: '#4a4a4a',
    // shadowOpacity: 0.9,
    // elevation: 4,
    // shadowOffset: {
    //   height: 4,
    //   width: 2,
    // },
  },
  imageContainerForTable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50
    // backgroundColor: '#FFFFFF',
    // shadowColor: '#4a4a4a',
    // shadowOpacity: 0.9,
    // shadowRadius: 9,
  },
  menuOptionStyle: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(2),
    paddingTop: 3,
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    borderRadius: 5

  },
  menuOptionStyle_LAPTOP: {
    display: 'flex',
    backgroundColor: 'white',
    width: responsiveWidth(60),
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(2),
    paddingTop: 3,
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    borderRadius: 5
  },
  anchor: { backgroundColor: 'transparent' },
  menuOptionsView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  menuOptionsText: {
    fontSize: 16,
    color: '#4A4A4A'
  },
  searchAddView: {
    flexDirection: 'row'
  },
  searchAddView_MDPI: {
    marginVertical: 15
  },
  searchAddView_LDPI: {
    marginVertical: 15
  },
  menuOptionsImage: { marginRight: responsiveWidth(0.5) },
  menuOptionsImage_MDPI: { marginRight: responsiveWidth(2) }
});

export default styles;
