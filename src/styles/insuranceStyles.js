import { StyleSheet } from 'react-native';
import { responsiveWidth } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  outerContainer: { flexDirection: 'column' },
  outercontainerBlur: {
    flexDirection: 'column',
    zIndex: 0.1,
  },
  overallWidth: { width: '100%', zIndex: -1 },
  overallWidthForTable: { width: '100%', marginBottom: 150 },
  headerStyle: {
    backgroundColor: '#182340',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  headerInputStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: '3%',
    color: '#FFFFFF',
    paddingVertical: responsiveWidth(1),
  },
  subHeader: {
    paddingTop: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
  },
  subHeader_XXHDPI: {
    paddingTop: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(9),
  },
  subHeaderForMobile: {
    paddingHorizontal: responsiveWidth(3),
  },

  h2SecHeadStyleOrange: {
    color: '#e77817',
    fontSize: 24,
    fontWeight: 'normal',
  },

  addBiller: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  addBiller_XHDPI: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
  addBiller_HDPI: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  addBiller_MDPI: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  addBiller_LDPI: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  addBillerText: { flex: 1, alignSelf: 'flex-start' },
  addBillerText_XHDPI: {
    marginBottom: '2%',
    marginTop: '8%',
  },
  addBillerText_HDPI: {
    marginBottom: '2%',
    marginTop: '8%',
  },
  addBillerText_MDPI: {
    marginBottom: '2%',
    marginTop: '8%',
  },
  addBillerText_LDPI: {
    marginBottom: '2%',
    marginTop: '8%',
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 30,
  },

  tableOuterContainer: {
    flexDirection: 'row',
    width: '100%',
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
    width: responsiveWidth(24),
  },
  textFieldStyle_XHDPI: {
    width: responsiveWidth(93),
  },
  textFieldStyle_HDPI: {
    width: responsiveWidth(93),
  },
  textFieldStyle_MDPI: {
    width: responsiveWidth(93),
  },
  textFieldStyle_LDPI: {
    width: responsiveWidth(93),
  },
  textFieldStyle_XXHDPI: {
    width: responsiveWidth(36),
  },
  textFieldStyle_XXXHDPI: {
    width: responsiveWidth(36),
  },
  placeholder: {
    fontSize: 15,
    // paddingLeft: 10,
  },
  searchIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 14,
    fontSize: 20,
  },
  buttonWidth: { width: 210 },
  buttonWidth_XHDPI: { width: responsiveWidth(93), marginTop: '8%' },
  buttonWidth_HDPI: { width: responsiveWidth(93), marginTop: '8%' },
  buttonWidth_MDPI: { width: responsiveWidth(93), marginTop: '8%' },
  buttonWidth_LDPI: { width: responsiveWidth(93), marginTop: '8%' },

  imageContainerForListView: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.9,
    shadowRadius: 9,
  },
  imageContainerForListViewMobile: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowRadius: 9,
    backgroundColor: '#FFFFFF',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.9,
    elevation: 4,
    shadowOffset: {
      height: 4,
      width: 2,
    },
  },
  applyButton: { width: responsiveWidth(7) },
  applyButton_XXXHDPI: { width: responsiveWidth(9) },
  applyButton_XXHDPI: { width: responsiveWidth(9) },
  applyButton_MDPI: { width: responsiveWidth(23) },
  applyButton_LDPI: { width: responsiveWidth(21) },
  applyButton_XHDPI: { width: responsiveWidth(10) },
  applyButton_HDPI: { width: responsiveWidth(13) },
  outerListView: {
    width: responsiveWidth(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerListView_XXXHDPI: {
    backgroundColor: 'yellow',
    width: responsiveWidth(70),
  },
  outerListView_XXHDPI: {
    backgroundColor: 'yellow',
    width: responsiveWidth(70),
  },
  outerListView_XHDPI: {
    backgroundColor: 'yellow',
    width: responsiveWidth(90),
  },
  listSecondView: {
    display: 'flex',
    width: responsiveWidth(50),
  },
  listSecondView_XXXHDPI: { display: 'flex', width: responsiveWidth(30) },
  listSecondView_XXHDPI: { display: 'flex', width: responsiveWidth(30) },
  listSecondView_XHDPI: { display: 'none' },
  listSecondView_HDPI: { display: 'none' },
  listSecondView_MDPI: { display: 'none' },
  listSecondView_LDPI: { display: 'none' },
  insuranceListView: {
    padding: 20,
    width: responsiveWidth(35),
  },
  insuranceListView_XXXHDPI: {
    backgroundColor: 'red',
    padding: 20,
    width: responsiveWidth(54),
  },
  insuranceListView_XXHDPI: {
    backgroundColor: 'red',
    padding: 20,
    width: responsiveWidth(54),
  },
  insuranceListView_XHDPI: {
    backgroundColor: 'red',
    padding: 20,
    width: responsiveWidth(75),
  },
  insuranceListView_HDPI: {
    width: responsiveWidth(71),
  },
  insuranceListView_MDPI: {
    width: responsiveWidth(55),
  },
  insuranceListView_LDPI: {
    width: responsiveWidth(55),
  },
  viewNoRecords: {
    marginTop: responsiveWidth(2),
    height: 35,
    alignItems: 'center',
  },
  fullPage: {
    backgroundColor: '#fcfcfc',
    height: '100%',
    // width: '100%'
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
  titleHead: {
    flex: 1,
    // borderWidth: 1,
  },
  landlineHeadText: {
    fontSize: 25,
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
  amount: {
    marginBottom: '3%',
  },
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
  nextBtn: {
    fontWeight: 'bold',
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
  detailsValue: {
    alignSelf: 'flex-start',
  },
});
