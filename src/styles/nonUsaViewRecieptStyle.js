import { Dimensions, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../components/customResponsiveDimension';

const { width } = Dimensions.get('window'); // full width
const { height } = Dimensions.get('window'); // full height

export default StyleSheet.create({
  fullPage: {
    height: '99%',
    width: '67%',
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 19,
    backgroundColor: '#fcfcfc',
  },
  fullPage_LDPI: {
    width: '100%',
    alignSelf: 'center',
  },
  fullPage_MDPI: {
    width: '100%',
    alignSelf: 'center',
  },
  fullPage_HDPI: {
    width: '100%',
    alignSelf: 'center',
  },
  fullPage_XHDPI: {
    width: '100%',
    alignSelf: 'center',
  },
  fullPage_XXHDPI: {
    alignSelf: 'center',
    width: '95%',
  },
  fullPage_XXXHDPI: {
    alignSelf: 'center',
    marginRight: '4%',
    marginLeft: '4%',
  },
  fullPage_LAPTOP: {
    alignSelf: 'center',
    marginRight: '4%',
    marginLeft: '4%',
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
  headingFollowSteps: {
    color: '#e77817',
    fontSize: 24,
    fontWeight: 'bold',
  },
  StepsDesciptionText: {
    color: '#4A4A4A',
    fontSize: 16,
  },
  StepsView: {
    paddingTop: responsiveHeight(4),
    flexDirection: 'row',
  },
  pleaseNote: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  pleaseNoteBox: {
    backgroundColor: '#FCF2EC',
    width: '50%',
    padding: responsiveWidth(2),

    marginTop: responsiveHeight(4),
  },
  pleaseNoteBoxMobile: {
    backgroundColor: '#FCF2EC',
    width: '90%',
    padding: responsiveWidth(2),

    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(4),
  },

  kindlyNoteBox: {
    backgroundColor: '#F4F4FA',
    marginBottom: responsiveHeight(4),
  },

  textPleaseNote: {
    fontSize: 16,
    color: '#4A4A4A',
  },
});
