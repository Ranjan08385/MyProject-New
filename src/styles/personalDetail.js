import { StyleSheet } from 'react-native';

import { responsiveWidth, responsiveHeight } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FCFCFC',
    marginHorizontal: responsiveWidth(15),
    marginTop: responsiveHeight(5),
    paddingBottom: responsiveWidth(5),
  },
  container_LDPI: {
    marginHorizontal: responsiveHeight(5),
  },
  container_MDPI: {
    marginHorizontal: responsiveHeight(5),
  },
  container_HDPI: {
    marginHorizontal: responsiveHeight(5),
  },
  container_XHDPI: {
    marginHorizontal: responsiveHeight(5),
  },
  container_XXHDPI: {
    marginHorizontal: responsiveHeight(5),
  },
  container_XXXHDPI: {
    marginHorizontal: responsiveHeight(10),
  },

  textWrapper: {
    height: responsiveHeight(70), // 70% of height device screen
    width: responsiveWidth(80), // 80% of width device screen
  },
  headerWrapper: {
    borderBottomColor: '#e77817',
    borderBottomWidth: 1,
    marginBottom: responsiveHeight(7),
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  headerWrapper_LDPI: {
    marginBottom: responsiveHeight(3),
  },
  headerWrapper_MDPI: {
    marginBottom: responsiveHeight(4),
  },
  headerWrapper_HDPI: {
    marginBottom: responsiveHeight(4),
  },
  headerWrapper_XHDPI: {
    marginBottom: responsiveHeight(4),
  },
  headerWrapper_XXHDPI: {
    marginBottom: responsiveHeight(4),
  },
  headerWrapper_XXXHDPI: {
    marginBottom: responsiveHeight(5),
  },

  header: {
    fontSize: 20, // End result looks like the provided UI mockup
    color: '#e77817',
    marginBottom: responsiveHeight(1),
    fontWeight: 'normal',
  },
  header_LAPTOP: {
    fontSize: 20,
  },
  helpTest: {
    // position: 'absolute',
    marginBottom: responsiveHeight(1),
    alignSelf: 'flex-end',
    color: '#9b9b9b',
    fontStyle: 'italic',
    fontSize: 12,
    justifyContent: 'flex-end',
    display: 'flex',
    top: 0,
  },
  helpTest_LDPI: {
    display: 'none',
  },
  helpTest_MDPI: {
    display: 'none',
  },
  helpTest_HDPI: {
    display: 'none',
  },
  helpTest_XHDPI: {
    display: 'none',
  },

  helpTest_XXHDPI: {
    display: 'none',
  },
  helpTest_XXXHDPI: {
    display: 'flex',
  },
  helpTest_LAPTOP: {
    display: 'flex',
  },
  miniLabel: {
    color: '#4a4a4a',
    marginBottom: responsiveHeight(3),
    fontSize: 12,
  },

  viewWrapperForAddress: {
    marginBottom: responsiveHeight(5),
  },
  viewWrapperForAddress_LDPI: {
    marginBottom: responsiveHeight(2),
  },
  viewWrapperForAddress_MDPI: {
    marginBottom: responsiveHeight(2),
  },
  viewWrapperForAddress_HDPI: {
    marginBottom: responsiveHeight(3),
  },
  viewWrapperForAddress_XHDPI: {
    marginBottom: responsiveHeight(3),
  },
  viewWrapperForAddress_XXHDPI: {
    marginBottom: responsiveHeight(3),
  },
  viewWrapperForAddress_XXXHDPI: {
    marginBottom: responsiveHeight(4),
  },

  viewWrapper: {
    marginBottom: responsiveHeight(4),
  },
  viewWrapper_LDPI: {
    marginBottom: responsiveHeight(3),
  },
  viewWrapper_MDPI: {
    marginBottom: responsiveHeight(3),
  },
  viewWrapper_HDPI: {
    marginBottom: responsiveHeight(4),
  },
  viewWrapper_XHDPI: {
    marginBottom: responsiveHeight(4),
  },
  viewWrapper_XXHDPI: {
    marginBottom: responsiveHeight(4),
  },
  viewWrapper_XXXHDPI: {
    marginBottom: responsiveHeight(5),
  },
  stepView: {
    marginTop: responsiveHeight(15),
    marginLeft: responsiveWidth(3),
  },
  stepView_LDPI: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(1.5),
  },
  stepView_MDPI: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(3),
  },
  stepView_HDPI: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(3),
  },
  stepView_XHDPI: {
    marginTop: responsiveHeight(8),
    marginLeft: responsiveWidth(3),
  },
  stepView_XXHDPI: {
    marginTop: responsiveHeight(8),
    marginLeft: responsiveWidth(3),
  },
  stepView_XXXHDPI: {
    marginTop: responsiveHeight(10),
    marginLeft: responsiveWidth(3),
  },
  stepView_LAPTOP: {
    marginTop: responsiveHeight(15),
    marginLeft: responsiveWidth(3),
  },
  pickerBoxWrapper: {
    width: responsiveWidth(25),
    marginBottom: responsiveHeight(3),
  },
  pickerBoxWrapper_LDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
  },
  pickerBoxWrapper_HDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
  },
  pickerBoxWrapper_MDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
  },
  pickerBoxWrapper_XHDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2),
  },
  pickerBoxWrapper_XXHDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2),
  },
  pickerBoxWrapper_XXXHDPI: {
    width: responsiveWidth(30),
    marginBottom: responsiveHeight(2),
  },
  pickerBoxWrapper2: {
    width: responsiveWidth(25),
    marginBottom: responsiveHeight(3),
    marginLeft: responsiveWidth(3),
    marginTop: 0,
  },
  pickerBoxWrapper2_LDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  pickerBoxWrapper2_HDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  pickerBoxWrapper2_MDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  pickerBoxWrapper2_XHDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  pickerBoxWrapper2_XXHDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  pickerBoxWrapper2_XXXHDPI: {
    width: responsiveWidth(30),
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
  },
  pickerBox: {
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    width: responsiveWidth(25),
    fontSize: 16,
    borderColor: '#d4d4d4',
    backgroundColor: '#fcfcfc',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#4a4a4a',
  },
  pickerBox_LDPI: {
    width: responsiveWidth(80),
  },
  pickerBox_HDPI: {
    width: responsiveWidth(80),
  },
  pickerBox_MDPI: {
    width: responsiveWidth(80),
  },
  pickerBox_XHDPI: {
    width: responsiveWidth(80),
  },
  pickerBox_XXHDPI: {
    width: responsiveWidth(80),
  },
  labelInput: {
    color: '#4a4a4a',
  },
  formInputWrapper: {
    flexDirection: 'column',
    width: responsiveWidth(25),
    borderColor: '#d4d4d4',
    borderWidth: 0,
    fontSize: 16,
  },
  formInputWrapper_LDPI: {
    width: responsiveWidth(80),
  },
  formInputWrapper_MDPI: {
    width: responsiveWidth(80),
  },
  formInputWrapper_HDPI: {
    width: responsiveWidth(80),
  },
  formInputWrapper_XHDPI: {
    width: responsiveWidth(80),
  },
  formInputWrapper_XXHDPI: {
    width: responsiveWidth(80),
  },
  formInputWrapper_XXXHDPI: {
    width: responsiveWidth(30),
  },
  formInput: {
    // borderBottomWidth: 1,
    width: responsiveWidth(25),
    borderColor: '#d4d4d4',
    borderWidth: 0,
    // fontSize: 16,
  },
  formInput_LDPI: {
    width: responsiveWidth(80),
  },
  formInput_MDPI: {
    width: responsiveWidth(80),
  },
  formInput_HDPI: {
    width: responsiveWidth(80),
  },
  formInput_XHDPI: {
    width: responsiveWidth(80),
  },
  formInput_XXHDPI: {
    width: responsiveWidth(80),
  },
  formInput_XXXHDPI: {
    width: responsiveWidth(30),
  },
  formInputBig: {
    // borderBottomWidth: 1,
    width: responsiveWidth(50),
    borderColor: '#d4d4d4',
    borderWidth: 0,
    fontSize: 16,
  },
  formInputBig_LDPI: {
    width: responsiveWidth(80),
  },
  formInputBig_MDPI: {
    width: responsiveWidth(80),
  },
  formInputBig_HDPI: {
    width: responsiveWidth(80),
  },
  formInputBig_XHDPI: {
    width: responsiveWidth(80),
  },
  formInputBig_XXHDPI: {
    width: responsiveWidth(80),
  },
  input: {
    borderWidth: 0,
    color: '#4a4a4a',
    paddingTop: 2,
    paddingBottom: 2,
  },
  horizontalView: {
    flexDirection: 'row',
    //  marginBottom: responsiveHeight(7),
    width: responsiveWidth(70),
  },
  horizontalView_LDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(100),
  },
  horizontalView_MDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(100),
  },
  horizontalView_HDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(3),
  },
  horizontalView_XHDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(3),
  },
  horizontalView_XXHDPI: {
    flexDirection: 'column',
    // marginBottom: responsiveHeight(4)
  },
  horizontalView_XXXHDPI: {
    // flexDirection: 'row',
    // marginBottom: responsiveHeight(5)
    flexDirection: 'column',
    // marginBottom: responsiveHeight(4)
  },

  horizontalViewButton: {
    flexDirection: 'row',
    //  marginBottom: responsiveHeight(7),
    width: responsiveWidth(70),
  },
  horizontalViewButton_LDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(100),
  },
  horizontalViewButton_MDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(100),
  },
  horizontalViewButton_HDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(3),
  },
  horizontalViewButton_XHDPI: {
    flexDirection: 'column',
    marginBottom: responsiveHeight(3),
  },
  horizontalViewButton_XXHDPI: {
    // flexDirection: 'row',
    // marginBottom: responsiveHeight(4)
    flexDirection: 'column',
    marginVertical: responsiveHeight(3),
  },
  horizontalViewButton_XXXHDPI: {
    // flexDirection: 'row',
    // marginBottom: responsiveHeight(5)
    flexDirection: 'column',
    marginVertical: responsiveHeight(3),
  },

  buttonBack: {
    // borderColor: '#e77817',
    // color: '#e77817',
    // borderWidth: 1,
    fontWeight: '500',
    // paddingTop: responsiveHeight(2),
    // paddingBottom: responsiveHeight(2),
    // paddingLeft: responsiveWidth(0.5),
    // paddingRight: responsiveWidth(0.5),
    fontSize: 16,
    textAlign: 'center',
    // borderRadius: 4,
    width: responsiveWidth(12),
    // fontFamily: 'Arial, Helvetica, sans-serif'
  },
  buttonNext: {
    // backgroundColor: '#e77817',
    // borderColor: '#e77817',
    // color: '#fff',
    // fontWeight: 'bold',
    // paddingTop: responsiveHeight(2),
    // paddingBottom: responsiveHeight(2),
    // paddingLeft: responsiveWidth(0.5),
    // paddingRight: responsiveWidth(0.5),
    // fontSize: 16,
    // textAlign: 'center',
    // borderWidth: 1,
    // borderRadius: 4,
    marginLeft: responsiveWidth(3),
    width: responsiveWidth(12),
    // fontFamily: 'Arial, Helvetica, sans-serif'
  },
  buttonBack_LDPI: {
    width: responsiveWidth(80),
    justifyContent: 'center',
  },
  buttonBack_HDPI: {
    width: responsiveWidth(80),
  },
  buttonBack_MDPI: {
    width: responsiveWidth(80),
  },
  buttonBack_XHDPI: {
    width: responsiveWidth(80),
  },
  buttonBack_XXHDPI: {
    width: responsiveWidth(80),
  },
  buttonBack_XXXHDPI: {
    width: responsiveWidth(80),
  },
  buttonNext_LDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  buttonNext_HDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  buttonNext_MDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  buttonNext_XHDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveHeight(2),
  },
  buttonNext_XXHDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveWidth(3),
  },
  buttonNext_XXXHDPI: {
    width: responsiveWidth(80),
    marginLeft: 0,
    marginTop: responsiveWidth(3),
  },
  radioForm_LDPI: {
    width: responsiveWidth(80),
  },
  radioForm_MDPI: {
    width: responsiveWidth(80),
  },
  radioForm_HDPI: {
    width: responsiveWidth(80),
  },
  radioForm_XHDPI: {
    width: responsiveWidth(80),
  },
  radioForm_XXHDPI: {
    width: responsiveWidth(80),
  },
  radioForm_XXXHDPI: {
    width: responsiveWidth(40),
  },

  termsText: {
    // width: responsiveWidth(40),
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'justify',
    marginLeft: responsiveWidth(1),
    // fontFamily: 'Arial, Helvetica, sans-serif'
  },
  termsText_LDPI: {
    width: responsiveWidth(80),
  },
  termsText_MDPI: {
    width: responsiveWidth(80),
  },
  termsText_HDPI: {
    width: responsiveWidth(80),
  },
  termsText_XHDPI: {
    width: responsiveWidth(80),
  },
  termsText_XXHDPI: {
    width: responsiveWidth(80),
  },
  termsText_XXXHDPI: {
    width: responsiveWidth(80),
  },
  termsText_LAPTOP: {
    width: responsiveWidth(50),
  },

  dobText: {
    width: responsiveWidth(25),
    // color: '#4a4a4a',
    // fontSize: 16,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderBottomColor: '#d4d4d4',
    paddingBottom: responsiveHeight(1),
  },
  dobText_LDPI: {
    width: responsiveWidth(80),
  },
  dobText_MDPI: {
    width: responsiveWidth(80),
  },
  dobText_HDPI: {
    width: responsiveWidth(80),
  },
  dobText_XHDPI: {
    width: responsiveWidth(80),
  },
  dobText_XXHDPI: {
    width: responsiveWidth(80),
  },
  dobText_XXXHDPI: {
    width: responsiveWidth(30),
  },

  pickerBoxWrapperCountry: {
    width: responsiveWidth(25),
    marginBottom: responsiveHeight(3),
    marginLeft: responsiveWidth(3),
    // marginTop: responsiveHeight(4),
  },
  pickerBoxWrapperCountry_LDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(0),
    marginLeft: 0,
    // marginTop: responsiveHeight(2),
  },
  pickerBoxWrapperCountry_HDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(0),
    marginLeft: 0,
    // marginTop: responsiveHeight(2),
  },
  pickerBoxWrapperCountry_MDPI: {
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(0),
    marginLeft: 0,
    // marginTop: responsiveHeight(2),
  },
  pickerBoxWrapperCountry_XHDPI: {
    width: responsiveWidth(80),
    // marginBottom: responsiveHeight(1),
    marginLeft: 0,
    // marginTop: responsiveHeight(2),
  },
  pickerBoxWrapperCountry_XXHDPI: {
    // width: responsiveWidth(80),

    // marginLeft: 0,
    width: responsiveWidth(80),
    // marginBottom: responsiveHeight(1),
    marginLeft: 0,
    marginTop: responsiveWidth(5),
  },
  pickerBoxWrapperCountry_XXXHDPI: {
    // width: responsiveWidth(30),
    // marginBottom: responsiveHeight(2),
    // marginLeft: responsiveWidth(2)
    width: responsiveWidth(80),

    marginLeft: 0,
    marginTop: responsiveWidth(5),
  },
  headerDropDown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dropdown_header_label: {
    flexBasis: '95%',
  },
  dropdown_arrow: {
    alignSelf: 'center',
    marginRight: 5,
  },
  menu_option_normal: {
    padding: 10,
  },
  menu_option_hovered: {
    padding: 10,
    backgroundColor: '#097dfa',
  },
});
