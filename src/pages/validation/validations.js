import { VALIDATIONS } from '../displayConstants/constants';

export const validateUserName = event => {
  const letterNumber = /^[0-9a-zA-Z@.]+$/;
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;

  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.EMAIL_ID;
  }
  if (!emailRegExp.test(event.nativeEvent.text.trim())) {
    errorMessage = VALIDATIONS.VALID_EMAIL;
  }
  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      username: event.nativeEvent.text,
      usernameError: errorMessage,
    };
  }
  return {
    usernameError: errorMessage,
  };
};

export const validatePassword = event => {
  const letterNumber = /^[0-9a-zA-Z@.!#$%^&*]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.PASSWORD;
  }
 
  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      password: event.nativeEvent.text,
      passwordError: errorMessage,
    };
  }
  return {
    passwordError: errorMessage,
  };
};

export const validateName = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.NAME_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      name: event.nativeEvent.text,
      nameError: errorMessage,
    };
  }
  return {
    nameError: errorMessage,
  };
};

export const validateType = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.TYPE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      type: event.nativeEvent.text,
      typeError: errorMessage,
    };
  }
  return {
    typeError: errorMessage,
  };
};

export const validateAddress = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.ADDRESS_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      address: event.nativeEvent.text,
      addressError: errorMessage,
    };
  }
  return {
    addressError: errorMessage,
  };
};

export const validateState = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.STATE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      state: event.nativeEvent.text,
      stateError: errorMessage,
    };
  }
  return {
    stateError: errorMessage,
  };
};

export const validateCity = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.CITY_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      city: event.nativeEvent.text,
      cityError: errorMessage,
    };
  }
  return {
    cityError: errorMessage,
  };
};

export const validateZipCode = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.ZIPCODE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      zipcode: event.nativeEvent.text,
      zipcodeError: errorMessage,
    };
  }
  return {
    zipcodeError: errorMessage,
  };
};

export const validateEmail = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.ZIPCODE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      email: event.nativeEvent.text,
      emailError: errorMessage,
    };
  }
  return {
    emailError: errorMessage,
  };
};

export const validateMobile = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.MOBILE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      mobile: event.nativeEvent.text,
      mobileError: errorMessage,
    };
  }
  return {
    mobileError: errorMessage,
  };
};

export const validateUploadPhoto = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.UPLOAD_PHOTO_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      uploadPhoto: event.nativeEvent.text,
      uploadPhotoError: errorMessage,
    };
  }
  return {
    uploadPhotoError: errorMessage,
  };
};

export const validateFacilityType = event => {
  const letterNumber = /^[a-zA-Z]+$/;
  let errorMessage = ' ';

  if (event.nativeEvent.text.length === 0) {
    errorMessage = VALIDATIONS.FACILITY_TYPE_BLANK;
  }

  if (!event.nativeEvent.text || event.nativeEvent.text.match(letterNumber)) {
    return {
      facilityType: event.nativeEvent.text,
      facilityTypeError: errorMessage,
    };
  }
  return {
    facilityTypeError: errorMessage,
  };
};