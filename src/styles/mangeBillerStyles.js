import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

export default StyleSheet.create({
  outerContainer: { flexDirection: 'column' },
  outercontainerBlur: {
    flexDirection: 'column',
    zIndex: 0.1,
  },
  overallWidth: { width: '100%', zIndex: -1 },
  overallWidthForTable: { width: '100%', marginBottom: 100 },
  headerStyle: {
    backgroundColor: '#182340',
    // shadowColor: '#000000',
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
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
  subHeaderForMobile: {
    paddingHorizontal: responsiveWidth(0),
  },

  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#182340',
  },
  menuOptionStyle: {
    display: 'flex',
    backgroundColor: 'white',
    width: responsiveWidth(15),
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(2),
    paddingTop: 3,
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    borderRadius: 5,
  },
  menuOptionStyle_MDPI: { width: responsiveWidth(50) },
  anchor: { backgroundColor: 'transparent' },
  menuOptionsView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuOptionsImage: { marginRight: responsiveWidth(0.5) },
  menuOptionsImage_MDPI: { marginRight: responsiveWidth(2) },

  menuOptionsText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  confirmButton: { width: responsiveWidth(11), justifyContent: 'center' },
  confirmButton_MDPI: { width: responsiveWidth(93) },
  buttonViewForMobile: { flexDirection: 'row' },
  buttonViewForMobile_MDPI: { paddingBottom: 30 },
  buttonViewForMobile_LDPI: { paddingBottom: 30 },
  buttonViewForMobile_XHDPI: { paddingBottom: 30 },
  buttonViewForMobile_HDPI: { paddingBottom: 30 },
  arrowGap: { width: responsiveWidth(2.5) },
  arrowGap_MDPI: { width: responsiveWidth(55) },
  arrowGap_LDPI: { width: responsiveWidth(54) },
  transformArrow: {
    transform: [{ rotate: '270deg' }],
  },
  pickerBox: {
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    width: responsiveWidth(23),
    fontSize: 16,
    borderColor: '#d4d4d4',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#4a4a4a',
  },
  pickerBox_LDPI: {
    width: responsiveWidth(90),
  },
  pickerBox_HDPI: {
    width: responsiveWidth(90),
  },
  pickerBox_MDPI: {
    width: responsiveWidth(93),
  },
  pickerBox_XHDPI: {
    width: responsiveWidth(93),
  },
  headerDropDown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dropdown_header_label: {
    flexBasis: '95%',
    fontSize: 16,
  },
  placeholder: {
    color: 'black',
    fontSize: 16,
  },
  dropdown_arrow: {
    alignSelf: 'center',
    marginRight: 5,
  },
  pickerBoxWrapperCountry: {
    width: responsiveWidth(23),
    marginBottom: responsiveHeight(3),
    paddingBottom: responsiveWidth(1),
    borderColor: '#d4d4d4',
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#4a4a4a',
  },
  pickerBoxWrapperCountry_LDPI: {
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
  },
  pickerBoxWrapperCountry_MDPI: {
    width: responsiveWidth(93),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
  },
  pickerBoxWrapperCountry_HDPI: {
    width: responsiveWidth(93),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
  },
  pickerBoxWrapperCountry_XHDPI: {
    width: responsiveWidth(93),
    marginBottom: responsiveHeight(1),
    marginLeft: 0,
  },
  datePickerForStatements: {
    flexDirection: 'row',
    paddingBottom: responsiveWidth(1),
  },
  datePickerForStatements_MDPI: { flexDirection: 'column' },
  menu_option_normal: {
    padding: 10,
  },
  menu_option_hovered: {
    padding: 10,
    backgroundColor: '#007fff',
  },
  inputDropdown: {
    paddingBottom: 5,
    paddingTop: 5,
    color: '#4a4a4a',
    fontSize: 16,
  },
  border_bottom_zero: {
    borderBottomWidth: 0,
    fontSize: 16,
  },
  dateFilters: { flexDirection: 'column', paddingBottom: responsiveWidth(0.5) },
  dateFilters_LAPTOP: { flexDirection: 'row' },
  dateFilters_XXXHDPI: { flexDirection: 'row' },
  dateFilters_XXHDPI: { flexDirection: 'row' },
  infoTip: {
    maxWidth: 200,
    minHeight: 20,
    borderRadius: 4,
    backgroundColor: 'black',
  },

  h2SecHeadStyleOrange: {
    color: '#e77817',
    fontSize: 24,
    fontWeight: 'normal',
  },

  addBiller: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  addBiller_XHDPI: { flexDirection: 'column', alignItems: 'flex-start' },
  addBiller_HDPI: { flexDirection: 'column', alignItems: 'flex-start' },
  addBiller_MDPI: { flexDirection: 'column', alignItems: 'flex-start' },
  addBiller_LDPI: { flexDirection: 'column', alignItems: 'flex-start' },

  addBillerText: { flex: 1 },
  addBillerText_XHDPI: { marginBottom: '2%' },
  addBillerText_HDPI: { marginBottom: '2%' },
  addBillerText_MDPI: { marginBottom: '2%' },
  addBillerText_LDPI: { marginBottom: '2%' },

  myBiller: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  addBillContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  addBillContainer_XHDPI: {
    alignItems: 'flex-start',
  },
  addBillContainer_HDPI: {
    alignItems: 'flex-start',
  },
  addBillContainer_MDPI: {
    alignItems: 'flex-start',
  },
  addBillContainer_LDPI: {
    alignItems: 'flex-start',
  },
  myBillContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageOuterContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 60,
    width: 60,
    shadowColor: '#4a4a4a',
    shadowOpacity: 2,
    shadowRadius: 9,
    backgroundColor: '#182340',
  },
  imageContainerForList: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 60,
    width: 60,
    shadowColor: '#4a4a4a',
    shadowRadius: 18,
    backgroundColor: '#182340',
    shadowOpacity: 2,
    elevation: 16,
    shadowOffset: {
      height: 4,
      width: 2,
    },
  },

  imageContainerForTable: {
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
  imageContainerForListView: {
    marginLeft: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.9,
    elevation: 4,
    shadowOffset: {
      height: 4,
      width: 2,
    },
  },
  itemName: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'red',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 30,
  },
  containerForFixed: {
    width: responsiveWidth(60),
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  row: { height: 80, flexDirection: 'row' },
  rowCommon: { backgroundColor: '#f9eee8' },
  textRow: {
    margin: 6,
    fontSize: 14,

    color: '#4a4a4a',
  },
  text: {
    margin: 6,
    fontSize: 14,
    fontWeight: 'bold',

    color: '#4a4a4a',
  },
  headFixedForFirstList: {
    height: 50,
    backgroundColor: '#f7f6f6',
    marginBottom: 0,
  },
  scrollTable: {
    width: responsiveWidth(58),
  },
  scrollTable_HDPI: {
    width: responsiveWidth(62),
  },
  scrollTable_MDPI: {
    width: responsiveWidth(60),
  },
  scrollTable_LDPI: {
    width: responsiveWidth(71),
  },

  headScroll: { height: 50, backgroundColor: '#f7f6f6', marginBottom: '1.5%' },

  tableOuterContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  firstFixedTable: {
    width: responsiveWidth(42),
    flexDirection: 'column',
  },
  firstFixedTable_HDPI: {
    width: responsiveWidth(54),
    flexDirection: 'column',
  },
  firstFixedTable_MDPI: {
    width: responsiveWidth(60),
    flexDirection: 'column',
  },
  firstFixedTable_LDPI: {
    width: responsiveWidth(70),
    flexDirection: 'column',
  },

  firstFixedTableOnScroll: {
    flexDirection: 'column',
    backgroundColor: '#FCFCFC',
    shadowColor: '#4a4a4a',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 0 },
    marginHorizontal: responsiveWidth(3),
    zIndex: 999999999999999,
    position: 'absolute',
  },
  headFixed: { height: 50, backgroundColor: '#f7f6f6', marginBottom: '2%' },
  btnText: { color: '#e77817' },
  billerOptions: {
    alignItems: 'center',
    width: responsiveWidth(7),
    height: 30,
    textAlign: 'center',
  },
  billerOptionsForMobile: {
    alignItems: 'center',
    width: responsiveWidth(27),
    height: 37,
    textAlign: 'center',
  },
  headFixedForPagination: {
    height: 50,
    backgroundColor: '#f7f6f6',
    justifyContent: 'center',
    width: '100%',
  },
  textStyle: {
    color: '#4a4a4a',
    fontSize: 16,
    textAlign:'center',
  },
});
