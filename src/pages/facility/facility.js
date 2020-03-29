import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
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

class Facility extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
      facilityArray: [
        {
          facilityImage: hospital1,
          facilityName: 'Ranjan Hospital',
          facilityType: 'Eye Speciality',
          favourite: true,
        },
        {
          facilityImage: hospital2,
          facilityName: 'Jayadeva',
          facilityType: 'Multi Speciality',
          favourite: false,
        },
        {
          facilityImage: hospital3,
          facilityName: 'Narayana',
          facilityType: 'Heart Speciality',
          favourite: false,
        },
        // {
        //   facilityImage: hospital3,
        //   facilityName: 'Narayana',
        //   facilityType: 'Heart Speciality',
        //   favourite: false,
        // }
      ],
      favIcon: false,
    };
  }

  onClickFavourite = () => {
    this.setState({
      favIcon: true,
    });
  };

  onClickFacilityTab = value => {
    const { navigation } = this.props;
    navigation.navigate('FacilityView', {value});
  }

  render() {
    const { facilityArray } = this.state;
    const { measure, navigation } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.mainPage}>
        {Platform.OS === 'web' ? <Dashboard navigation={navigation} measure={measure} /> : null}

        <View style={[Styles.container, Styles[getResponsiveStyle('container', styleWidth)]]}>
          <View style={[Styles.cardView, Styles[getResponsiveStyle('cardView', styleWidth)]]}>
            {facilityArray.map(value => (
              <TouchableOpacity
                style={[
                  Styles.facilityList,
                  Styles[getResponsiveStyle('facilityList', styleWidth)],
                ]}
                onPress={() => this.onClickFacilityTab(value)}
              >
                <View>
                  <View style={Styles.favIcon}>
                    <TouchableOpacity onPress={() => this.onClickFavourite()}>
                      {value.favourite ? (
                        <Image source={favourite} style={Styles.favIconImage} />
                      ) : (
                        <Image source={nonFavourite} style={Styles.favIconImage} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.secOne}>
                    <View style={Styles.imgSec}>
                      <Image source={value.facilityImage} style={Styles.imgStyle} />
                    </View>
                    <View style={Styles.facilityName}>
                      <CustomText style={Styles.hospitalName}>{value.facilityName}</CustomText>
                      <CustomText style={Styles.hospitalType}>{value.facilityType}</CustomText>
                    </View>
                  </View>
                  <View style={Styles.options}>
                    <View style={Styles.optionImg}>
                      <TouchableOpacity>
                        <Image source={call} style={Styles.optionImgStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.optionImg}>
                      <TouchableOpacity>
                        <Image source={mail} style={Styles.optionImgStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.optionImg}>
                      <TouchableOpacity>
                        <Image source={direction} style={Styles.optionImgStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.optionImg}>
                      <TouchableOpacity>
                        <Image source={share} style={Styles.optionImgStyle} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(Facility);
