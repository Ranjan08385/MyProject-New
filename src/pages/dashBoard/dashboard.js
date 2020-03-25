import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
import Styles from './styles';

const LoginImage = require('../images/header-logo.png');
const dashboard = require('../images/dashboard.png');
const adduser = require('../images/adduser.png');
const facility = require('../images/facility-icon.png');
const organization = require('../images/organization.png');
const resolve = require('../images/pending.png');
const edit = require('../images/edit.png');
const logout = require('../images/account-logout-24.png');

class DashBoard extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    navigation.navigate('Facility');
    this.state = {
      menuArray: [
        {
          image: edit,
          name: 'Search',
        },
        {
          image: organization,
          name: 'Facility',
        },
        {
          image: dashboard,
          name: 'Facility Assessment',
        },
        // {
        //   image: organization,
        //   name: 'Virtual Assessment',
        // },
        {
          image: facility,
          name: 'Provider',
        },
        {
          image: adduser,
          name: 'Manage User',
        },
        {
          image: resolve,
          name: 'Resolve Conflicts',
        },
      ],
      
    };
  }

  onClickOptions = name => {
    const { navigation } = this.props;
    if (name === 'Search') {
      navigation.navigate('Search');
    } else if (name === 'Facility') {
      navigation.navigate('Facility');
    }
  }

  onClickLogout = () => {
    const { navigation } = this.props;
    navigation.navigate('HomePage');
  }

  render() {
    const { menuArray, password, usernameError, passwordError } = this.state;
    const { measure } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.container}>
        {styleWidth === 'LAPTOP' ? (
          <View style={Styles.headerSec}>
            <View style={Styles.leftImg}>
              <Image source={LoginImage} style={Styles.imgLogo} />
            </View>
            <View style={Styles.rightDetails}>
              <CustomText style={Styles.username}>Ranjan Moger</CustomText>
            </View>
          </View>
        ) : null}
        {styleWidth === 'LAPTOP' ? (
          <View style={Styles.sideBar}>
            <View style={Styles.profileName}>
              <View style={Styles.profile}>
                <CustomText style={Styles.shortForm}>RM</CustomText>
              </View>
              <View style={Styles.completeName}>
                <CustomText style={Styles.nameStyle}>Ranjan Moger</CustomText>
              </View>
            </View>
            <View style={Styles.menuOptions}>
              {menuArray.map((value, key) => (
                <TouchableOpacity onPress={() => this.onClickOptions(value.name)}>
                  <View style={Styles.imgAndName}>
                    <View Style={Styles.iconImage}>
                      <Image source={value.image} style={Styles.logoStyle} />
                    </View>
                    <View style={Styles.logoText}>
                      <CustomText style={Styles.logoTextStyle}>{value.name}</CustomText>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              <View style={Styles.logoutSec}>
                <TouchableOpacity style={Styles.logoutView} onPress={() => this.onClickLogout()}>
                  <CustomText style={Styles.logoutTxt}>Log out</CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
       
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(DashBoard);
