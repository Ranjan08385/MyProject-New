import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

export default StyleSheet.create({
  welcomeDivLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(50),
    flex: 2,
    paddingLeft: responsiveWidth(9),
    paddingRight: responsiveWidth(1),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  welcomeDivLeft_LDPI: {
    display: 'none',
  },
  welcomeDivLeft_MDPI: {
    display: 'none',
  },
  welcomeDivLeft_HDPI: {
    display: 'none',
  },
  welcomeDivLeft_XHDPI: {
    display: 'none',
  },

  welcomeDivRight: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(50),
    flex: 2,
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(6),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(5),
  },
  welcomeDivRight_LDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(100),
    flex: 2,
    paddingLeft: responsiveWidth(0),
    paddingRight: responsiveWidth(0),
    paddingTop: responsiveHeight(0),
    paddingBottom: responsiveHeight(0),
  },
  welcomeDivRight_MDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(100),
    flex: 2,
    paddingLeft: responsiveWidth(0),
    paddingRight: responsiveWidth(0),
    paddingTop: responsiveHeight(0),
    paddingBottom: responsiveHeight(0),
  },
  welcomeDivRight_HDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(100),
    flex: 2,
    paddingLeft: responsiveWidth(0),
    paddingRight: responsiveWidth(0),
    paddingTop: responsiveHeight(0),
    paddingBottom: responsiveHeight(5),
  },
  welcomeDivRight_XHDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(100),
    flex: 2,
    paddingLeft: responsiveWidth(0),
    paddingRight: responsiveWidth(0),
    paddingTop: responsiveHeight(0),
    paddingBottom: responsiveHeight(0),
  },
  headerWelcome: {
    fontSize: 36,
    color: '#4a4a4a',
  },
  headerM2i: {
    fontSize: 50,
    color: '#e77817',

    paddingBottom: responsiveHeight(6),
  },
  subHeadHomePage: {
    fontSize: 16,
    color: '#4a4a4a',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingRight: '5%',
    fontWeight: '300',
  },
  subHeadHomePage_LAPTOP: {
    paddingRight: responsiveWidth(8),
  },
  rightFitSec: {
    backgroundColor: '#182340',
    flexDirection: 'row',
    width: responsiveWidth(100),
    flexWrap: 'wrap',
    paddingTop: responsiveHeight(15),
    paddingBottom: responsiveHeight(5),
    paddingLeft: responsiveWidth(10),
    paddingRight: responsiveWidth(10),
  },
  rightFitSec_LDPI: {
    flexDirection: 'column',
  },
  rightFitSec_MDPI: {
    flexDirection: 'column',
  },
  rightFitSec_HDPI: {
    flexDirection: 'column',
  },
  rightFitSec_XHDPI: {
    flexDirection: 'column',
  },
  rightFitSecNext: {
    backgroundColor: '#182340',
    flexDirection: 'row',
    width: responsiveWidth(100),
    flexWrap: 'wrap',
    paddingBottom: responsiveHeight(15),
    paddingLeft: responsiveWidth(10),
    paddingRight: responsiveWidth(10),
  },
  rightFitSecNext_LDPI: {
    flexDirection: 'column',
  },
  rightFitSecNext_MDPI: {
    flexDirection: 'column',
  },
  rightFitSecNext_HDPI: {
    flexDirection: 'column',
  },
  rightFitSecNext_XHDPI: {
    flexDirection: 'column',
  },
  rightFitHead: {
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize: 36,

    marginBottom: responsiveHeight(8),
  },
  sliderHead: {
    textAlign: 'center',
    width: '100%',
    color: '#4a4a4a',
    fontSize: 36,
    marginBottom: responsiveHeight(0),
    marginTop: responsiveHeight(8),
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(4),
  },
  sliderHead_LDPI: {
    marginBottom: responsiveHeight(8),
    marginTop: responsiveHeight(8),
  },
  sliderHead_MDPI: {
    marginBottom: responsiveHeight(8),
    marginTop: responsiveHeight(8),
  },
  sliderHead_HDPI: {
    marginBottom: responsiveHeight(8),
    marginTop: responsiveHeight(8),
  },
  sliderHead_XHDPI: {
    marginBottom: responsiveHeight(8),
    marginTop: responsiveHeight(8),
  },
  sliderHead_XXHDPI: {
    marginBottom: responsiveHeight(8),
    marginTop: responsiveHeight(8),
  },
  rightFitSubSec: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(33),
    flex: 1,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
  },
  rightFitSubSec_LDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(8),
    marginBottom: responsiveWidth(2),
  },
  rightFitSubSec_MDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(8),
    marginBottom: responsiveWidth(2),
  },
  rightFitSubSec_HDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(8),
    marginBottom: responsiveWidth(2),
  },
  rightFitSubSec_XHDPI: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(8),
    marginBottom: responsiveWidth(2),
  },

  rightFitSubSecText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  listSec: {
    flexDirection: 'row',
  },
  iconSec: {
    alignSelf: 'center',
    width: responsiveWidth(1.76),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(1),
  },
  iconSec_LDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2),
  },
  iconSec_MDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2),
  },
  iconSec_HDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2),
  },
  iconSec_XHDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2),
  },

  globeImage: {
    flex: 2,
    alignSelf: 'center',
    height: responsiveHeight(80),
  },
  shadowImage: {
    height: responsiveHeight(15),
  },
  clickHere: {
    color: '#e77817',
    fontSize: 16,
    fontWeight: '300',
    // marginLeft: responsiveWidth(0.5)
  },
  rightFitIcons: {
    alignSelf: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
  },

  countrySelectionSec: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSec_LDPI: {
    display: 'flex',
    flexDirection: 'column',
  },
  countrySelectionSec_MDPI: {
    display: 'flex',
    flexDirection: 'column',
  },
  countrySelectionSec_HDPI: {
    display: 'flex',
    flexDirection: 'column',
  },
  countrySelectionSec_XHDPI: {
    display: 'flex',
    flexDirection: 'column',
  },

  countrySelectionSecPickerView: {
    width: responsiveWidth(20),
    marginRight: responsiveWidth(1),
    // marginTop: responsiveHeight(4),
  },
  countrySelectionSecPickerView_LDPI: {
    width: responsiveWidth(90),
    marginRight: '0%',
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPickerView_MDPI: {
    width: responsiveWidth(90),
    marginRight: responsiveWidth(0),
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPickerView_HDPI: {
    width: responsiveWidth(90),
    marginRight: responsiveWidth(0),
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPickerView_XHDPI: {
    width: responsiveWidth(90),
    marginRight: responsiveWidth(0),
    // marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPicker: {
    borderRadius: 4,
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(1),
    paddingRight: responsiveWidth(1),
    borderColor: '#9b9b9b',
    borderWidth: 1,
    color: '#9b9b9b',
    backgroundColor: 'transparent',
  },
  countrySelectionSecPicker_LDPI: {
    height: responsiveHeight(5),
    borderRadius: 6,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPicker_MDPI: {
    height: responsiveHeight(5),
    borderRadius: 6,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPicker_HDPI: {
    height: responsiveHeight(5),
    borderRadius: 6,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecPicker_XHDPI: {
    height: responsiveHeight(5),
    borderRadius: 6,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  countrySelectionSecButtonView: {
    // marginTop: responsiveHeight(4),
  },
  countrySelectionSecButtonView_LDPI: {
    marginTop: responsiveHeight(0),
  },
  countrySelectionSecButtonView_MDPI: {
    marginTop: responsiveHeight(0),
  },
  countrySelectionSecButtonView_HDPI: {
    marginTop: responsiveHeight(0),
  },
  countrySelectionSecButtonView_XHDPI: {
    marginTop: responsiveHeight(0),
  },
  countrySelectionSecButton: {
    borderColor: '#182340',
    color: '#182340',
    borderWidth: 1,
    fontWeight: '500',
    borderRadius: 30,
    paddingTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(2.5),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    fontSize: 16,
  },
  countrySelectionSecButton_LDPI: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  countrySelectionSecButton_MDPI: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  countrySelectionSecButton_HDPI: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  countrySelectionSecButton_XHDPI: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  welcomeSec: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    flexWrap: 'wrap',
    display: 'flex',
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(5),
  },
  welcomeSec_LDPI: {
    paddingBottom: responsiveHeight(0),
  },
  welcomeSec_HDPI: {
    paddingBottom: responsiveHeight(0),
  },
  welcomeSec_MDPI: {
    paddingBottom: responsiveHeight(0),
  },
  welcomeSec_XHDPI: {
    paddingBottom: responsiveHeight(0),
  },
  headerImage: {
    height: responsiveHeight(10),
  },
  welcomeHeader: {
    display: 'flex',
    width: responsiveWidth(100),
    flex: 1,
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
  welcomeHeader_LDPI: {
    display: 'none',
  },
  welcomeHeader_MDPI: {
    display: 'none',
  },
  welcomeHeader_HDPI: {
    display: 'none',
  },
  welcomeHeader_XHDPI: {
    display: 'none',
  },
  welcomeHeaderLeft: {
    display: 'flex',
    width: responsiveWidth(20),
  },
  wrapper: {
    height: responsiveHeight(60),
    backgroundColor: '#fcfcfc',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  sliderMainView: {
    marginTop: '2%',
  },
  sliderClientSecView: {
    marginBottom: '0.5%',
  },
  sliderClientNameView: {
    width: '100%',
    marginBottom: '0.5%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0%',
  },
  sliderClientNameView_LDPI: {
    marginLeft: '3%',
  },
  sliderClientNameView_MDPI: {
    marginLeft: '3%',
  },
  sliderClientNameView_HDPI: {
    marginLeft: '3%',
  },
  sliderClientNameView_XHDPI: {
    marginLeft: '3%',
  },
  sliderClientCountryView: {
    width: '100%',
    marginBottom: '0.5%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0%',
  },
  sliderClientCountryView_LDPI: {
    marginLeft: '3%',
  },
  sliderClientCountryView_HDPI: {
    marginLeft: '3%',
  },
  sliderClientCountryView_MDPI: {
    marginLeft: '3%',
  },
  sliderClientCountryView_XHDPI: {
    marginLeft: '3%',
  },
  sliderClientRateView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '0.5%',
  },
  sliderClientRateInnerView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '45%',
    paddingRight: '45%',
    marginLeft: '1%',
  },
  sliderClientRateInnerView_LDPI: {
    paddingLeft: '35%',
    paddingRight: '35%',
    marginLeft: '1%',
  },
  sliderClientRateInnerView_MDPI: {
    paddingLeft: '35%',
    paddingRight: '35%',
    marginLeft: '1%',
  },
  sliderClientRateInnerView_HDPI: {
    paddingLeft: '35%',
    paddingRight: '35%',
    marginLeft: '1%',
  },
  sliderClientRateInnerView_XHDPI: {
    paddingLeft: '35%',
    paddingRight: '35%',
    marginLeft: '1%',
  },
  sliderClientRateSingleView: {
    width: '20%',
  },
  sliderClientCommentView: {
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  sliderClientCommentViewText: {
    paddingTop: '2%',
    fontSize: 20,

    fontWeight: 'normal',
    position: 'relative',
    color: '#4a4a4a',
    textAlign: 'center',
  },
  popUpCloseBtnView: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '1%',
    fontSize: 14,
  },
  popUpImageView: {
    marginTop: '2%',
    marginBottom: '8%',
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    height: '10%',
  },
  popUpFirstText: {
    marginTop: '2%',
    marginBottom: '4%',
  },
  popUpButtonView: {
    marginTop: '0%',
    marginBottom: '2%',
  },
  popUpSecondText: {
    marginBottom: '6%',
  },
  popUpWhiteButtonView: {
    marginBottom: '2%',
  },
  popUpLastText: {
    justifyContent: 'flex-start',
    marginBottom: '15%',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  popUpCloseBtnStyle: {
    color: '#cccccc',
    fontWeight: 'bold',
    fontSize: 25,
  },
  popUpLogoStyle: {
    width: '100%',
    height: '100%',
  },
  popUpLastSecView: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  popUpLastSecViewLeft: {
    width: '18%',
  },
  popUpLastSecViewLeft_LDPI: {
    width: '0%',
  },
  popUpLastSecViewLeft_MDPI: {
    width: '0%',
  },
  popUpLastSecViewLeft_HDPI: {
    width: '0%',
  },
  popUpLastSecViewLeft_XHDPI: {
    width: '0%',
  },
  popUpLastSecViewRight: {
    width: '82%',
  },
  popUpLastSecViewRight_LDPI: {
    width: '100%',
  },
  popUpLastSecViewRight_MDPI: {
    width: '100%',
  },
  popUpLastSecViewRight_HDPI: {
    width: '100%',
  },
  popUpLastSecViewRight_XHDPI: {
    width: '100%',
  },
  popUpLastSecViewText: {
    justifyContent: 'flex-start',
    marginBottom: '1%',
  },
  popUpModal: {
    paddingLeft: '30%',
    paddingRight: '30%',
    margin: 0,
  },
  popUpModal_LDPI: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  popUpModal_MDPI: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  popUpModal_HDPI: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  popUpModal_XHDPI: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  iconStyle: {
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: '1%',
    marginRight: '2%',
  },
  imgStyle: {
    width: 25,
    height: 25,
  },
  main_width: {
    padding: '2%',
  },
  mainWidth_LAPTOP: {
    height: responsiveHeight(7),
  },
  mainWidth_LDPI: {
    height: responsiveHeight(9),
  },
  mainWidth_MDPI: {
    height: responsiveHeight(9),
  },
  mainWidth_HDPI: {
    height: responsiveHeight(9),
  },
  mainWidth_XHDPI: {
    height: responsiveHeight(9),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    paddingLeft: '1%',
    paddingRight: '1%',
    // paddingTop: '3%',
    // paddingBottom: '3%',
    height: 50,
  },
  menu_option_list: {
    elevation: 0,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    shadowOpacity: 0,
    marginTop: responsiveHeight(3),
    marginLeft: 15,
    borderRadius: 0,
  },
  menu_option_list_XHDPI: {
    // width: 300
  },
  menu_option_list_XXHDPI: {
    // width: 300
  },
  menu_option_list_XXXHDPI: {
    // width: 300
  },
  menu_option_list_LAPTOP: {
    width: responsiveWidth(4),
  },
  header_image_LAPTOP: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%',
  },
  header_image_LDPI: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%'
  },
  header_image_MDPI: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%'
  },
  header_image_HDPI: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%'
  },
  header_image_XHDPI: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%'
  },
  header_image_XXHDPI: {
    width: 30,
    height: 20,
    justifyContent: 'center',
    // marginHorizontal: '5%'
  },
  header_image_view_LAPTOP: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  header_image_view_LDPI: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  header_image_view_MDPI: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  header_image_view_XHDPI: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  header_image_view_XXHDPI: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  header_image_view_XXXHDPI: {
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#b1b1b1',
    shadowRadius: 10,
    marginHorizontal: '5%',
  },
  width_eighty_five: {
    width: '100%',

    paddingLeft: '1%',
    paddingRight: '1%',
    color: '#4a4a4a',
    fontSize: 16,

    height: '100%',
  },
  width_eighty_five_LDPI: {
    marginTop: '4.5%',
    paddingLeft: '1%',
    paddingRight: '1%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },
  width_eighty_five_MDPI: {
    marginTop: '6.5%',
    paddingLeft: '1%',
    paddingRight: '1%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },
  width_eighty_five_HDPI: {
    marginTop: '6.5%',
    paddingLeft: '1%',
    paddingRight: '1%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },
  width_eighty_five_XHDPI: {
    marginTop: '4.5%',
    paddingLeft: '1%',
    paddingRight: '1%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },

  width_ninty_five: {
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50
  },
  width_ninty_five_LDPI: {
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#9b9b9b',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },
  width_ninty_five_MDPI: {
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    marginTop: '4.5%',
    alignSelf: 'center',
  },
  width_ninty_five_HDPI: {
    marginTop: '4.5%',
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50,
    alignSelf: 'center',
  },
  width_ninty_five_XHDPI: {
    marginTop: '4.5%',
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    color: '#4a4a4a',
    fontSize: 16,
    // height: 50
  },
  border_bottom_zero: {
    borderBottomWidth: 0,
    height: responsiveHeight(10),
  },
  menu_option: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  pickkerText: {
    flex: 1,
    flexDirection: 'column',
    // alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    // paddingTop: 5
    // height: responsiveHeight(6)
    // position: 'absolute',
    // width: '70%'
  },
  hiddenTextView: {
    width: '100%',
    marginTop: responsiveWidth(4),
  },
  customPickerStyle: {
    width: '20%',
    // position: 'relative'
  },
  customPickerStyle_LDPI: {
    width: '100%',
  },

  customPickerStyle_MDPI: {
    width: '100%',
  },
  customPickerStyle_HDPI: {
    width: '100%',
  },
  customPickerStyle_XHDPI: {
    width: '100%',
  },
  customPickerStyle_LAPTOP: {
    width: '20%',
  },
  netBankModalContent: {
    backgroundColor: 'white',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  netBankModalContentStepView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3%',
    marginTop: '3%',
  },
  netBankModalContentStepViewRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3%',
  },
  netBankModalContentStepViewRow_LDPI: {
    marginBottom: '8%',
  },
  netBankModalContentStepViewRow_MDPI: {
    marginBottom: '8%',
  },
  netBankModalContentStepViewRow_HDPI: {
    marginBottom: '8%',
  },
  netBankModalContentStepViewRow_XHDPI: {
    marginBottom: '8%',
  },
  netBankModalContentStepImageSec: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f6f6',
  },
  netBankModalContentStepImage: { width: 40, height: 40, marginLeft: '10%' },
  netBankModalContentStepContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  netBankModalContentStepContent_LDPI: {
    width: '75%',
  },
  netBankModalContentStepContent_MDPI: {
    width: '75%',
  },
  netBankModalContentStepContent_HDPI: {
    width: '75%',
  },
  netBankModalContentStepContent_XHDPI: {
    width: '75%',
  },
  netBankModalContentStepContentHead: {
    paddingBottom: '3%',
  },
  netBankModalContentStepContentSubSec: {
    width: '100%',
  },
  netBankModalContentBtnSec: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5%',
    marginTop: '5%',
    paddingRight: '30%',
    paddingLeft: '30%',
  },
  netBankModalContentBtnSec_LDPI: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  netBankModalContentBtnSec_MDPI: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  netBankModalContentBtnSec_HDPI: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  netBankModalContentBtnSec_XHDPI: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  netBankModalContentBtnSec_XXHDPI: {
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  netBankModalContentBtnSec_XXXHDPI: {
    paddingRight: '15%',
    paddingLeft: '15%',
  },
  coutrySelectionError: {
    fontSize: 12,
    color: 'red',
  },
});
