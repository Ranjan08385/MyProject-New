import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
// import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
// import Styles from './styles';
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

class Provider extends Component {
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
    })
  }


  render() {
    const { facilityArray } = this.state;
    const { measure, navigation } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View>
        
       <CustomText>Provider</CustomText>

      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(Provider);
