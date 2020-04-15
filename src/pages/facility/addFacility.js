/* eslint-disable no-undef */
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
// import TextInput from '../../components/customTextInput';
import { validateUserName, validatePassword } from '../validation/validations';
import { VALIDATIONS } from '../displayConstants/constants';
import { AppConsumer } from '../../AppContext';
import { getResponsiveStyle } from '../../utils/appUtils';
import Styles from './styles';
import Dashboard from '../dashBoard/dashboard';
import TextInput from '../../components/customTextInput';
import {
  validateName,
  validateType,
  validateAddress,
  validateState,
  validateCity,
  validateZipCode,
  validateEmail,
  validateMobile,
  validateUploadPhoto,
  validateFacilityType,
} from '../validation/validations';
// import makeAPICall from '../../network/api';
import AddFacility from '../../network/request/facilityApi/addFacility';

const organization = require('../images/prov-icon.png');
let data = [];

class AddNewFacility extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    // const { navigation } = this.props;
    // data = navigation.getParam('value');
    this.state = {
      name: '',
      type: '',
      address: '',
      state: '',
      city: '',
      zipcode: '',
      email: '',
      mobile: '',
      uploadPhoto: null,
      facilityType: '',
      nameError: '',
      typeError: '',
      addressError: '',
      stateError: '',
      cityError: '',
      zipcodeError: '',
      emailError: '',
      mobileError: '',
      uploadPhotoError: '',
      facilityTypeError: '',
    };
  }

  onChangeName = value => {
    this.setState(validateName(value));
  };

  onChangeType = value => {
    this.setState(validateType(value));
  };

  onChangeAddress = value => {
    this.setState(validateAddress(value));
  };

  onChangeState = value => {
    this.setState(validateState(value));
  };

  onChangeCity = value => {
    this.setState(validateCity(value));
  };

  onChangeZipCode = value => {
    this.setState(validateZipCode(value));
  };

  onChangeEmail = value => {
    this.setState(validateEmail(value));
  };

  onChangeMobile = value => {
    this.setState(validateMobile(value));
  };

  onChangeUploadPhoto = event => {
    // this.setState(validateUploadPhoto(value));
    this.setState({
      uploadPhoto: event.target.files[0]
    });

  };

  onChangeFacilityType = value => {
    this.setState(validateFacilityType(value));
  };

  validate = () => {
    const {
      name,
      type,
      address,
      state,
      city,
      zipcode,
      email,
      mobile,
      uploadPhoto,
      facilityType,
    } = this.state;
    let nameError;
    let typeError;
    let addressError;
    let stateError;
    let cityError;
    let zipcodeError;
    let emailError;
    let mobileError;
    let uploadPhotoError;
    let facilityTypeError;
    if (name === '') {
      nameError = VALIDATIONS.NAME_BLANK;
    }
    if (type === '') {
      typeError = VALIDATIONS.TYPE_BLANK;
    }
    if (address === '') {
      addressError = VALIDATIONS.ADDRESS_BLANK;
    }
    if (state === '') {
      stateError = VALIDATIONS.STATE_BLANK;
    }
    if (city === '') {
      cityError = VALIDATIONS.CITY_BLANK;
    }
    if (zipcode === '') {
      zipcodeError = VALIDATIONS.ZIPCODE_BLANK;
    }
    if (email === '') {
      emailError = VALIDATIONS.EMAIL_BLANK;
    }
    if (mobile === '') {
      mobileError = VALIDATIONS.MOBILE_BLANK;
    }
    if (uploadPhoto === null) {
      uploadPhotoError = VALIDATIONS.UPLOAD_PHOTO_BLANK;
    }
    if (facilityType === '') {
      facilityTypeError = VALIDATIONS.FACILITY_TYPE_BLANK;
    }

    if (
      nameError ||
      typeError ||
      addressError ||
      stateError ||
      cityError ||
      zipcodeError ||
      emailError ||
      mobileError ||
      uploadPhotoError ||
      facilityTypeError
    ) {
      this.setState({
        nameError,
        typeError,
        addressError,
        stateError,
        cityError,
        zipcodeError,
        emailError,
        mobileError,
        uploadPhotoError,
        facilityTypeError,
      })
      return false;
    }
    return true;
  }

  onSubmit = () => {
    const isValid = this.validate();
    const { makeAPICall } = this.props;
    const {
      name,
      type,
      address,
      state,
      city,
      zipcode,
      email,
      mobile,
      uploadPhoto,
      facilityType,
    } = this.state;
    if (isValid) {
      const data = new FormData();
      const dataValues = {
        facilityName: name,
        facilityType: type,
        address,
        state,
        city,
        zipcode,
        email,
        mobile,
        facilityDesc: facilityType,
      };
      data.append('facilityData', JSON.stringify(dataValues));
      data.append('facilityImage', uploadPhoto);
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      console.log('photo data', data.values());
      makeAPICall(AddFacility(data), this.onSuccessAddFacility);
    }
  }

  onSuccessAddFacility = response => {
    console.log("photo data res", response);
    const { navigation } = this.props;
    const { ShowToast } = this.context;
    if (response.status === 'success') {
      ShowToast({
        showToast: true,
        message: `Facility Successfully Added`,
        duration: 3000,
        align: 'center',
        top: 'top',
      });
      navigation.navigate('Facility')
    } else {
      ShowToast({
        showToast: true,
        message: `Facility not Added`,
        duration: 3000,
        align: 'center',
        top: 'top',
        errortype: 'error',
      });
    }
  }


  render() {
    const { 
      name,
      type,
      address,
      state,
      city,
      zipcode,
      email,
      mobile,
      uploadPhoto,
      facilityType,
      nameError,
      typeError,
      addressError,
      stateError,
      cityError,
      zipcodeError,
      emailError,
      mobileError,
      uploadPhotoError,
      facilityTypeError,
     } = this.state;
    const { measure, navigation } = this.props;
    const styleWidth = measure;
    console.log('styleWidth', styleWidth);
    return (
      <View style={Styles.mainPageView}>
        <View style={Styles.headerFixed}>
          {Platform.OS === 'web' ? <Dashboard navigation={navigation} measure={measure} /> : null}
        </View>
        <View style={[Styles.container, Styles[getResponsiveStyle('container', styleWidth)]]}>
          <View style={Styles.addNewFac}>
            <View style={[Styles.addFacHead, Styles[getResponsiveStyle('addFacHead', styleWidth)]]}>
              <View style={Styles.addNewFacImg}>
                <Image source={organization} style={Styles.addFacImgStyle} />
              </View>
              <View style={Styles.addNewFacImgText}>
                <CustomText style={Styles.addFacHeadText}>ADD FACILITY</CustomText>
              </View>
            </View>
            <View style={Styles.textInputSec}>
              <View style={[Styles.textInputStyle, Styles[getResponsiveStyle('textInputStyle', styleWidth)]]}>
                <View style={Styles.textInputOne}>
                  <TextInput
                    placeholder={"1. Name"}
                    value={name}
                    error={nameError}
                    onChange={value => this.onChangeName(value)}
                    />
                </View>
                <View style={Styles.textInputTwo}>
                  <TextInput
                    placeholder={"2. Type"}
                    value={type}
                    error={typeError}
                    onChange={value => this.onChangeType(value)}
                  />
                </View>
              </View>
              <View style={[Styles.textInputStyle, Styles[getResponsiveStyle('textInputStyle', styleWidth)]]}>
                <View style={Styles.textInputOne}>
                  <TextInput
                    placeholder={"3. Address"}
                    value={address}
                    error={addressError}
                    onChange={value => this.onChangeAddress(value)}
                  />
                </View>
                <View style={Styles.textInputTwo}>
                  <TextInput
                    placeholder={"4. State"}
                    value={state}
                    error={stateError}
                    onChange={value => this.onChangeState(value)}
                  />
                </View>
              </View>
              <View style={[Styles.textInputStyle, Styles[getResponsiveStyle('textInputStyle', styleWidth)]]}>
                <View style={Styles.textInputOne}>
                  <TextInput
                    placeholder={"5. City"}
                    value={city}
                    error={cityError}
                    onChange={value => this.onChangeCity(value)}
                  />
                </View>
                <View style={Styles.textInputTwo}>
                  <TextInput
                    placeholder={"6. Zipcode"}
                    value={zipcode}
                    error={zipcodeError}
                    onChange={value => this.onChangeZipCode(value)}
                  />
                </View>
              </View>
              <View style={[Styles.textInputStyle, Styles[getResponsiveStyle('textInputStyle', styleWidth)]]}>
                <View style={Styles.textInputOne}>
                  <TextInput
                    placeholder={"7. Email"}
                    value={email}
                    error={emailError}
                    onChange={value => this.onChangeEmail(value)}
                  />
                </View>
                <View style={Styles.textInputTwo}>
                  <TextInput
                    placeholder={"8. Mobile"}
                    value={mobile}
                    error={mobileError}
                    onChange={value => this.onChangeMobile(value)}
                  />
                </View>
              </View>
              <View style={[Styles.textInputStyle, Styles[getResponsiveStyle('textInputStyle', styleWidth)]]}>
                <View style={Styles.textInputOne}>
                  {/* <TextInput
                    type='file'
                    placeholder={"9. Upload Photo"}
                    value={uploadPhoto}
                    error={uploadPhotoError}
                    onChange={value => this.onChangeUploadPhoto(value)}
                  /> */}
                  <input type='file' onChange={this.onChangeUploadPhoto} />
                </View>
                <View style={Styles.textInputTwo}>
                  <TextInput
                    placeholder={"10. Which type of facility best describes this site­­­­ ?"}
                    value={facilityType}
                    error={facilityTypeError}
                    onChange={value => this.onChangeFacilityType(value)}
                  />
                </View>
              </View>
            </View>
            <View style={Styles.addFacBTN}>
              <TouchableOpacity
                style={[Styles.addFacBTNStyle, Styles[getResponsiveStyle('addFacBTNStyle', styleWidth)]]}
                onPress={() => this.onSubmit()}
              >
                <CustomText style={Styles.addFacText}>Submit</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(AddNewFacility);
