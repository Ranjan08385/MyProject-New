import { StyleSheet } from 'react-native';
import { responsiveWidth } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  row: { height: 80, flexDirection: 'row' },
  rowCommon: { backgroundColor: '#f9eee8' },
  container: { flex: 1 },
  container_MDPI: {
    marginHorizontal: responsiveWidth(0),
  },
  container_LDPI: {
    marginHorizontal: responsiveWidth(0),
  },
  container_HDPI: {
    marginHorizontal: responsiveWidth(0),
  },
  container_XHDPI: {
    marginHorizontal: responsiveWidth(0),
  },
  scrollStyleSecondTable: {
    // marginLeft: responsiveWidth(6)
  },
  scrollStyleSecondTable_LDPI: {
    marginLeft: responsiveWidth(6),
  },
  scrollStyleSecondTable_MDPI: {
    marginLeft: responsiveWidth(0),
  },
  scrollStyleSecondTable_HDPI: {
    marginLeft: responsiveWidth(0),
  },
  scrollStyleSecondTable_XHDPI: {
    marginLeft: responsiveWidth(6),
  },
  scrollStyle: {
    // marginLeft: responsiveWidth(12)
  },
  scrollStyle_MDPI: {
    marginLeft: responsiveWidth(48),
  },
  scrollStyle_LDPI: {
    marginLeft: responsiveWidth(48),
  },
  scrollStyle_HDPI: {
    marginLeft: responsiveWidth(35),
  },
  scrollStyle_XHDPI: {
    marginLeft: responsiveWidth(31),
  },
  containerForFixedOnScroll: {
    flex: 1,
    marginHorizontal: responsiveWidth(3),
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
    position: 'absolute',
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
    position: 'absolute',
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
    position: 'absolute',
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
    position: 'absolute',
  },

  containerForFixed: {
    width: responsiveWidth(45),
    marginLeft: responsiveWidth(0),
    zIndex: 0,
    position: 'relative',
  },
  containerForFixed_MDPI: {
    flex: 1,
    marginLeft: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute',
  },
  containerForFixed_LDPI: {
    flex: 1,
    marginLeft: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute',
  },

  head: { height: 50, backgroundColor: '#f7f6f6', marginBottom: 0 },
  head_LAPTOP: { marginBottom: '1.4%' },

  headFixedSecondList: {
    height: 50,
    backgroundColor: '#f7f6f6',
    marginBottom: 0,
  },
  headFixedSecondList_LAPTOP: { marginBottom: '1.5%' },
  headFixedSecondList_XXXHDPI: { marginBottom: '1.5%' },
  headFixedSecondList_XXHDPI: { marginBottom: '1.5%' },
  headFixedSecondList_XHDPI: { marginBottom: '1.5%' },
  text: {
    margin: 6,
    fontSize: 14,
    fontWeight: 'bold',

    color: '#4a4a4a',
  },

  table: {
    flex: 9,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(3),
  },

  AcceptButtonStyle: {
    width: responsiveWidth(8),
  },
  AcceptButtonStyle_LDPI: {
    width: responsiveWidth(20),
  },
  AcceptButtonStyle_MDPI: {
    width: responsiveWidth(20),
  },
  AcceptButtonStyle_HDPI: {
    width: responsiveWidth(22),
  },
  AcceptButtonStyle_XHDPI: {
    width: responsiveWidth(16),
  },
  AcceptButtonStyle_XXHDPI: {
    width: responsiveWidth(10),
  },
  AcceptButtonStyle_XXXHDPI: {
    width: responsiveWidth(13),
  },
  AcceptButtonStyle_LAPTOP: {
    width: responsiveWidth(8),
  },

  secondContainerForSecondTable: {
    width: responsiveWidth(48),
    marginRight: responsiveWidth(0),
  },
  secondContainerForSecondTable_MDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3),
  },
  secondContainerForSecondTable_LDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3),
  },
  secondContainerForSecondTable_HDPI: {
    width: responsiveWidth(95),
    marginRight: responsiveWidth(3),
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
