import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
// import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
import Styles from './styles';
import Dashboard from '../dashBoard/dashboard';

const hospital1 = require('../hospitalImages/hospital-1.jpg');
const hospital2 = require('../hospitalImages/hospital-2.jpg');
const hospital3 = require('../hospitalImages/hospital-3.jpg');
const call = require('../images/cal-v.png');
const mail = require('../images/mail-v.png');
const direction = require('../images/direction.png');
const share = require('../images/share-v.png');
const favourite = require('../images/heart-filled.png');
const nonFavourite = require('../images/heart-blank.png');
let data = [];

class FacilityView extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    data = navigation.getParam('value');
    this.state = {
      
    };
  }

  onClickFavourite = () => {
    this.setState({
      favIcon: true,
    })
  }


  render() {
    // const { facilityArray } = this.state;
    const { measure, navigation } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.mainPageView}>
        <View style={Styles.headerFixed}>
          {Platform.OS === 'web' ? <Dashboard navigation={navigation} measure={measure} /> : null}
        </View>
        <View style={[Styles.container, Styles[getResponsiveStyle('container', styleWidth)]]}>
          <View style={Styles.SectionView}>
            <View style={[Styles.facilityImage, Styles[getResponsiveStyle('facilityImage', styleWidth)]]}>
              <Image source={data.facilityImage} style={Styles.overlay} blurRadius={3} />
            </View>
            <View style={[Styles.facilityOptions, Styles[getResponsiveStyle('facilityOptions', styleWidth)]]}>
              <View style={Styles.optionImgSec}>
                <TouchableOpacity>
                  <Image source={call} style={[Styles.optionImgStyleSec, Styles[getResponsiveStyle('optionImgStyleSec', styleWidth)]]} />
                </TouchableOpacity>
              </View>
              <View style={Styles.optionImgSec}>
                <TouchableOpacity>
                  <Image source={mail} style={[Styles.optionImgStyleSec, Styles[getResponsiveStyle('optionImgStyleSec', styleWidth)]]} />
                </TouchableOpacity>
              </View>
              <View style={Styles.optionImgSec}>
                <TouchableOpacity>
                  <Image source={direction} style={[Styles.optionImgStyleSec, Styles[getResponsiveStyle('optionImgStyleSec', styleWidth)]]} />
                </TouchableOpacity>
              </View>
              <View style={Styles.optionImgSec}>
                <TouchableOpacity>
                  <Image source={share} style={[Styles.optionImgStyleSec, Styles[getResponsiveStyle('optionImgStyleSec', styleWidth)]]} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[Styles.hospitalHead, Styles[getResponsiveStyle('hospitalHead', styleWidth)]]}>
              <CustomText style={Styles.facName}>{data.facilityName}</CustomText>
              <CustomText style={Styles.facTypeName}>{data.facilityType}</CustomText>
            </View>
          </View>
          <View style={[Styles.detailsView, Styles[getResponsiveStyle('detailsView', styleWidth)]]}>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>1. Name </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.facilityName}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>2. Type </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.facilityType}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>3. Address </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.address}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>4. City </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.city}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>5. State </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.state}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>6. Zip Code </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.zipcode}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>8. Email </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.email}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>8. Contact No </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.mobile}</CustomText>
              </View>
            </View>
            <View style={Styles.detailSec}>
              <View style={Styles.partOne}>
                <CustomText style={Styles.partOneText}>9. Which type of facility best describes this
                      site­­­­?(medical group, IPA, clinic or FQHC) </CustomText>
                <CustomText style={Styles.separator}> : </CustomText>
              </View>
              <View style={Styles.partTwo}>
                <CustomText style={Styles.partTwoText}>{data.facilityDesc}</CustomText>
              </View>
            </View>
          </View>
        </View>
        </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(FacilityView);
