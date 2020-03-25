const ReactNative = require('react-native');
const {
  responsiveWidth,
  responsiveHeight
} = require('../components/customResponsiveDimension');

const { StyleSheet } = ReactNative;

const Style = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    shadowOffset: { height: 0, width: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 5,
    backgroundColor: 'white'
  },
  contactUs_main_view: {
    display: 'flex',
    backgroundColor: '#182340',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  contactUs_head: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24
  },
  contactUs_firstSec: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  contactUs_firstSec_LDPI: {
    flexDirection: 'column',
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_firstSec_MDPI: {
    flexDirection: 'column',
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_firstSec_HDPI: {
    flexDirection: 'column',
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_firstSec_XHDPI: {
    flexDirection: 'column',
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_firstSec_XXHDPI: {
    flexDirection: 'column',
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_firstSec_headView: {
    shadowOffset: { height: 0, width: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 12,
    width: '65%',
    borderRadius: 5
  },
  contactUs_firstSec_headView_LDPI: {
    width: '100%',
    marginTop: responsiveHeight(4.5),
    elevation: 5
  },
  contactUs_firstSec_headView_MDPI: {
    width: '100%',
    marginTop: responsiveHeight(4.5),
    elevation: 5
  },
  contactUs_firstSec_headView_HDPI: {
    width: '100%',
    marginTop: responsiveHeight(4.5),
    elevation: 5
  },
  contactUs_firstSec_headView_XHDPI: {
    width: '100%',
    marginTop: responsiveHeight(4.5),
    elevation: 5
  },
  contactUs_firstSec_headView_XXHDPI: {
    width: '100%',
    elevation: 5
  },

  contactUs_firstSec_headSec: { display: 'flex' },
  contactUs_firstSec_headText: {
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    fontSize: 16,

    fontWeight: 'bold',
    color: '#4a4a4a'
  },
  contactUs_firstSec_headText_LDPI: {
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(4),
    borderBottomWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    borderBottomColor: 'rgba(155,155,155,0.6)'
  },
  contactUs_firstSec_headText_MDPI: {
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(4),
    borderBottomWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    borderBottomColor: 'rgba(155,155,155,0.6)'
  },
  contactUs_firstSec_headText_HDPI: {
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(4),
    borderBottomWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    borderBottomColor: 'rgba(155,155,155,0.6)'
  },
  contactUs_firstSec_headText_XHDPI: {
    paddingTop: responsiveHeight(4),
    paddingBottom: responsiveHeight(4),
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(4),
    borderBottomWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    borderBottomColor: 'rgba(155,155,155,0.6)'
  },
  contactUs_firstSec_SubSecView: {
    display: 'flex',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%'
  },
  contactUs_firstSec_SubSec_View: {
    display: 'flex',
    marginBottom: '4%',
    flexDirection: 'row',
    width: '100%'
  },
  contactUs_firstSec_SubSec_Text1: {
    marginLeft: '4%',
    color: '#e77817',
    fontSize: 16,
    paddingTop: '2%',
    paddingBottom: '2%',
    width: '90%'
  },
  contactUs_firstSec_SubSec_Text2: {
    marginLeft: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: 16,
    width: '90%'
  },
  contactUs_firstSec_SubSec_Text3: {
    marginLeft: '5%',
    paddingTop: '0.5%',
    paddingBottom: '0.5%',
    paddingRight: '3%',
    fontSize: 16,
    width: '100%'
  },
  contactUs_SecondSec: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '5%',
    paddingLeft: '5%',

    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '3%'
  },
  contactUs_SecondSec_LDPI: {
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_SecondSec_MDPI: {
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_SecondSec_HDPI: {
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_SecondSec_XHDPI: {
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_SecondSec_XXHDPI: {
    marginLeft: '0%',
    marginRight: '0%'
  },
  contactUs_RightSec_View: {
    width: '30%',
    marginLeft: '5%'
  },
  contactUs_RightSec_View_LDPI: {
    width: '100%',
    marginLeft: '0%',
    marginTop: responsiveHeight(6)
  },
  contactUs_RightSec_View_MDPI: {
    width: '100%',
    marginLeft: '0%',
    marginTop: responsiveHeight(6)
  },
  contactUs_RightSec_View_HDPI: {
    width: '100%',
    marginLeft: '0%',
    marginTop: responsiveHeight(6)
  },
  contactUs_RightSec_View_XHDPI: {
    width: '100%',
    marginLeft: '0%',
    marginTop: responsiveHeight(6)
  },
  contactUs_RightSec_View_XXHDPI: {
    width: '100%',
    marginLeft: '0%',
    marginTop: responsiveHeight(6)
  },
  contactUs_RightSec_Content: {
    display: 'flex',
    flexDirection: 'row'
  },
  contactUs_RightSec_Content_LDPI: {},
  contactUs_RightSec_Content_MDPI: {},
  contactUs_RightSec_Content_HDPI: {},
  contactUs_RightSec_Content_XHDPI: {},
  contactUs_RightSec_Text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '2%',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  contactUs_Caption: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '5%'
  },
  contactUs_CaptionText: {
    fontStyle: 'italic'
  },
  iconSec: {
    alignSelf: 'center',
    width: responsiveWidth(1.76),
    height: responsiveHeight(4.5)
  },
  iconSec_LDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2)
  },
  iconSec_MDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2)
  },
  iconSec_HDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2)
  },
  iconSec_XHDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2)
  },
  iconSec_XXHDPI: {
    width: responsiveWidth(7.5),
    height: responsiveHeight(4.5),
    marginRight: responsiveWidth(2)
  },

  iconSecReq: {
    alignSelf: 'center',
    width: '100%',
    height: responsiveHeight(4)
  },
  iconSecReq_LDPI: { width: '100%', marginRight: responsiveWidth(2) },
  iconSecReq_MDPI: { width: '100%', marginRight: responsiveWidth(2) },
  iconSecReq_HDPI: { width: '100%', marginRight: responsiveWidth(2) },
  iconSecReq_XHDPI: { width: '100%', marginRight: responsiveWidth(2) },
  iconSecReq_XXHDPI: { width: '100%', marginRight: responsiveWidth(2) },
  contactUsThirdSecView: {
    marginLeft: '1%',
    display: 'flex',
    flexDirection: 'column',
    width: '90%'
  },
  requestButtonMainTextView: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  requestButtonMainTextImage: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '15%'
  },
  requestButtonMainTextSec: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  touchStyle: {
    width: '100%'
  },
  contactUs_RightSec_Mob: {
    width: '100%',
    marginLeft: '0%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginBottom: '8%'
  },
  iconStyleContact: {
    marginBottom: '2%',
    marginLeft: '1%',
    marginRight: '2%'
  }
});

module.exports = Style;
