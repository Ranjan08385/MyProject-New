import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { hocComponentFetcherWithLoader } from '../../components';
import CustomText from '../../components/customText';
import Styles from './styles';
import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
// import GetLoginService from '../../network/loginApi';

const LoginImage = require('../images/login.png');
const LoginLogo = require('../images/login-logo.png');

class LandingPage extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: ' ',
      passwordError: ' ',
    };
  }

  onChangeUsername = value => {
    this.setState(validateUserName(value));
  };

  onChangePassword = value => {
    this.setState(validatePassword(value));
  };

  validate = () => {
    const { username, password } = this.state;
    let usernameError;
    let passwordError;
    if (username.length === 0) {
      usernameError = VALIDATIONS.EMAIL_ID;
    }
    if (password.length === 0) {
      passwordError = VALIDATIONS.PASSWORD;
    }

    if (usernameError || passwordError) {
      this.setState({
        usernameError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  onLogin = () => {
    const { makeAPICall, navigation } = this.props;
    const { username, password } = this.state;
    const isValid = this.validate();
    if (isValid) {
      const data = {
        username,
        password,
      };
      navigation.navigate('DashBoard');
      // makeAPICall(GetLoginService(data), res => this.onSuceessLogin(res), err => this.onErrorLogin(err));
    }
  };

  onSuceessLogin = res => {
    console.log('res', res);
    const { ShowToast } = this.context;
    const { navigation } = this.props;
    if (res.status === 'success') {
      ShowToast({
        showToast: true,
        message: `Login Successfull`,
        duration: 3000,
        align: 'center',
        top: 'top',
      });
      navigation.navigate('DashBoard');
    } else {
      ShowToast({
        showToast: true,
        message: `${res.error}`,
        duration: 3000,
        align: 'center',
        top: 'top',
        errortype: 'error',
      });
    }
  };

  onErrorLogin = err => {
    console.log(err);
  };

  render() {
    const { username, password, usernameError, passwordError } = this.state;
    const { measure } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.container}>
        <View style={[Styles.imgSection, Styles[getResponsiveStyle('imgSection', styleWidth)]]}>
          <Image
            source={LoginImage}
            style={[Styles.loginImage, Styles[getResponsiveStyle('loginImage', styleWidth)]]}
          />
          <View style={[Styles.content, Styles[getResponsiveStyle('content', styleWidth)]]}>
            <Image source={LoginLogo} style={Styles.loginLogo} />
            <View style={Styles.loginText}>
              <CustomText style={Styles.loginTextStyle}>Login.</CustomText>
            </View>
            <View style={Styles.welcomeText}>
              <CustomText style={Styles.welcomeTextStyle}>Welcome aboard</CustomText>
            </View>
            <View style={Styles.signInText}>
              <CustomText style={Styles.signInTextStyle}>Sign in to continue</CustomText>
            </View>
          </View>
        </View>
        <View style={Styles.loginSection}>
          <View
            style={[Styles.unameAndPass, Styles[getResponsiveStyle('unameAndPass', styleWidth)]]}
          >
            <View style={Styles.uname}>
              <TextInput
                placeholder="Enter Username"
                value={username}
                onChange={value => this.onChangeUsername(value)}
                error={usernameError}
              />
            </View>
            <View style={Styles.password}>
              <TextInput
                placeholder="Enter Password"
                value={password}
                securetextentry
                onChange={value => this.onChangePassword(value)}
                error={passwordError}
              />
            </View>
          </View>
          <View style={[Styles.loginBtn, Styles[getResponsiveStyle('loginBtn', styleWidth)]]}>
            <TouchableOpacity onPress={this.onLogin} style={Styles.loginBtnStyle}>
              <CustomText style={Styles.btnText}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(LandingPage);
