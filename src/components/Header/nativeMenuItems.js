import React, { Component } from 'react';
import { AsyncStorage, Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { AppConsumer } from '../../AppContext';
import { hocComponentFetcherWithLoader } from '..';
import { logout } from '../../network/request/signup/logout';
import {
  CUST_ID,
  getPrefData,
  PREF_AUTH_TOKEN,
  PREF_CURRENCY_CON,
  removePrefData,
  RESCOUNTRYID,
  SESSION_ID,
  storePrefData,
  TRANSFER_TYPE,
  USER_DETAIL,
  USER_ID,
  LOGIN_ID,
  ACCOUNT_TYPE,
} from '../../storage/preferenceStorage';
import Icon from '../customIcon';
import {
  responsiveHeight as heightInPercentage,
  responsiveWidth as widthInPercentage,
} from '../customResponsiveDimension';
import CustomText from '../customText';
import ExpandableText from '../ExpandableView';
import {
  BILLERS,
  CHANGE_PASSWORD,
  CHAT,
  CONTACT,
  FAQ,
  isWeb,
  LOGOUT,
  MY_BANK_ACCOUNTS,
  MY_PROFILE,
  MY_REWARDS,
  MY_TRANSACTIONS,
  PAY_BILLS,
  RECIPENTS,
  RECIPENT_REQUEST_NATIVE,
  REFER_A_FRIEND,
  SEND_MONEY_NEW_USER,
  SEND_MONEY_REG_USER,
  UPLOAD_DOCUMENTS,
} from './HeaderCommons';
import {
  // N_SEND_MONEY_NEW_USER,
  // N_PAY_BILLS,
  N_CHANGE_PASSWORD,
  // N_TRACK_MY_TRANSACTION,
  // N_HOW_IT_WORKS,
  N_CONTACT,
  // N_CHAT,
  // N_FAQ,
  // N_LOGIN,
  // N_SIGN_UP,
  N_LOGOUT,
  N_MY_BANK_ACCOUNTS,
  N_MY_PROFILE,
  N_MY_REWARDS,
  N_MY_TRANSACTIONS,
  N_RECIPENTS,
  // N_BILLERS,
  N_RECIPENT_REQUEST_NATIVE,
  N_REFER_A_FRIEND,
  N_SEND_MONEY_REG_USER,
  N_UPLOAD_DOCUMENTS,
} from './headerNavigations';
import { encodeBase64 } from '../../utils/jsEncrypt';

const fontSize = 16;
const rewardsIcon = require('../../assets/images/gold-active.png');

let custId = '';
let countryId = '';
let emailId = '';
let loginId = '';

const headerStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: isWeb ? widthInPercentage(2) : widthInPercentage(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerStyleMobile: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: isWeb ? 10 : heightInPercentage(1),
    paddingHorizontal: isWeb ? widthInPercentage(3) : widthInPercentage(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  arrowDown: {
    width: 10,
    height: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    margin: 10,
    alignSelf: 'center',
    borderColor: '#4a4a4a',
    transform: [{ rotate: '45deg' }],
    borderRightWidth: 1,
  },
  arrowUp: {
    width: 10,
    height: 10,
    borderColor: '#e77817',
    borderBottomWidth: 0,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    margin: 10,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
    borderRightWidth: 0,
  },
  arrowSelectedDown: {
    width: 10,
    height: 10,
    borderColor: '#e77817',
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    margin: 10,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
    borderRightWidth: 2,
  },
  arrowSelectedUp: {
    width: 10,
    height: 10,
    borderColor: '#e77817',
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    margin: 10,
    alignSelf: 'center',
    transform: [{ rotate: '45deg' }],
    borderRightWidth: 0,
  },
});

class MenuItems extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {};

    this.getNavigation = '';
    this.manage = [];
    this.profile = [];
    this.help = [];
    this.AccountType = '';
  }

  async componentWillMount() {
    // console.log('props---->', this.props);
    custId = await getPrefData(CUST_ID);
    countryId = await getPrefData(RESCOUNTRYID);
    emailId = await getPrefData(USER_ID);
    this.AccountType = await getPrefData(ACCOUNT_TYPE);
    loginId = await getPrefData(LOGIN_ID);
  }

  onPressSend = () => {
    const { onClickSend, navigation } = this.props;
    if (onClickSend) {
      onClickSend();
    } else if (
      this.getNavigation !== SEND_MONEY_NEW_USER ||
      this.getNavigation !== SEND_MONEY_REG_USER
    ) {
      navigation.navigate(N_SEND_MONEY_REG_USER);
    }
  };

  onPressPayBills = () => {
    const { onClickPay, navigation } = this.props;
    if (onClickPay) {
      onClickPay();
    } else {
      navigation.navigate('PayBills');
    }
  };

  onPressTransactions = () => {
    const { onClickTransactions, navigation } = this.props;
    if (onClickTransactions) {
      onClickTransactions();
    } else {
      navigation.navigate(N_MY_TRANSACTIONS);
    }
  };

  onPressRewards = () => {
    const { onPressRewards, navigation } = this.props;

    if (onPressRewards) {
      onPressRewards();
    } else if (this.getNavigation !== MY_REWARDS) {
      navigation.navigate(N_MY_REWARDS);
    }
  };

  onPressLogout = () => {
    // console.log('props', this.props);
    const { onPressLogout, navigation, makeAPICall } = this.props;
    navigation.closeDrawer();
    if (onPressLogout) {
      onPressLogout();
    } else if (this.getNavigation !== LOGOUT) {
      makeAPICall(
        logout(loginId, custId, countryId, encodeBase64(emailId)),
        this.onDataReceived,
        this.onError,
        loader => loader
      );
    }
  };

  onDataReceived = response => {
    const { ShowToast } = this.context;
    if (response.status === 'success') {
      const { navigation } = this.props;

      removePrefData(CUST_ID, response.CUSTID);
      removePrefData(PREF_AUTH_TOKEN, response.TokenId);
      removePrefData(USER_ID, response.userID);
      removePrefData(RESCOUNTRYID, response.RESCOUNTRYID);
      removePrefData(SESSION_ID, response.RESCOUNTRYID);
      removePrefData(PREF_CURRENCY_CON);
      removePrefData(USER_DETAIL);
      navigation.navigate(N_LOGOUT);

      ShowToast({
        showToast: true,
        message: 'Successfully logged out',
        duration: 3000,
        align: 'center',
        top: 'top',
      });
    } else {
      ShowToast({
        showToast: true,
        message: 'Something went wrong',
        duration: 3000,
        align: 'center',
        top: 'top',
        errortype: 'error',
      });
    }
  };

  onClickChild = (item, index) => {
    const { onClickChild, navigation } = this.props;
    if (onClickChild) {
      onClickChild(item, index);
    } else {
      if (item.label === 'Recipents') {
        if (this.getNavigation !== RECIPENTS) {
          navigation.navigate(N_RECIPENTS, { showScreen: '0' });
        }
      }
      if (item.label === 'Recipent Requests') {
        if (this.getNavigation !== RECIPENT_REQUEST_NATIVE) {
          navigation.navigate(N_RECIPENT_REQUEST_NATIVE, { showScreen: '1' });
        }
      }
      if (item.label === 'Billers') {
        if (this.getNavigation !== BILLERS) {
          navigation.navigate('ManageBiller');
        }
      }
      if (item.label === 'My Bank Accounts') {
        if (this.getNavigation !== MY_BANK_ACCOUNTS) {
          navigation.navigate(N_MY_BANK_ACCOUNTS);
        }
      }
      if (item.label === 'Contact') {
        if (this.getNavigation !== CONTACT) {
          navigation.navigate(N_CONTACT);
        }
      }
      if (item.label === 'Chat') {
        if (this.getNavigation !== CHAT) {
          // this.props.navigation.navigate("chat");
        }
      }
      if (item.label === 'FAQ') {
        if (this.getNavigation !== FAQ) {
          Linking.openURL('http://www.icicibankusa.com/faq/index.page');
        }
      }
      if (item.label === 'My Profile') {
        if (this.getNavigation !== MY_PROFILE) {
          // navigation.navigate(N_MY_PROFILE);

          if (this.AccountType === 'BUSINESS' || this.AccountType === 'Business') {
            navigation.navigate('MyProfileBusiness');
          } else {
            navigation.navigate(N_MY_PROFILE);
          }
        }
      }
      if (item.label === 'Upload Documents') {
        if (this.getNavigation !== UPLOAD_DOCUMENTS) {
          storePrefData(TRANSFER_TYPE, {
            lnStatus: 'defaultTransfer',
            loginType: 'direct',
          });
          navigation.navigate(N_UPLOAD_DOCUMENTS);
        }
      }
      if (item.label === 'Refer a Friend') {
        if (this.getNavigation !== REFER_A_FRIEND) {
          navigation.navigate(N_REFER_A_FRIEND);
        }
      }
      if (item.label === 'Change Password') {
        if (this.getNavigation !== CHANGE_PASSWORD) {
          navigation.navigate(N_CHANGE_PASSWORD);
        }
      }
    }
  };

  onPressLogin = () => {
    const { onPressLogin, navigation } = this.props;

    if (onPressLogin) {
      onPressLogin();
    } else if (this.getNavigation !== LOGIN) {
      navigation.navigate('Registration', { showScreen: false });
    }
  };

  onPressSignUp = () => {
    const { onPressSignUp, navigation } = this.props;
    if (onPressSignUp) {
      onPressSignUp();
    } else if (this.getNavigation !== LOGIN) {
      navigation.navigate('Registration', { showScreen: true });
    }
  };

  async retrieveData() {
    try {
      const value = await AsyncStorage.getItem('router');
      if (value !== null) {
        // We have data!!
        (this.getNavigation = value),
          (this.manage = [
            {
              label: 'Recipents',
              value: 'Recipents',
              isSelected: !!(this.getNavigation === RECIPENTS),
            },
            {
              label: 'Recipent Requests',
              value: 'Recipent Requests',
              isSelected: !!(this.getNavigation === RECIPENT_REQUEST_NATIVE),
            },
            {
              label: 'Billers',
              value: 'Billers',
              isSelected: !!(this.getNavigation === BILLERS),
            },
            {
              label: 'My Bank Accounts',
              value: 'My Bank Accounts',
              isSelected: !!(this.getNavigation === MY_BANK_ACCOUNTS),
            },
          ]),
          (this.help = [
            {
              label: 'Contact',
              value: 'Contact',
              isSelected: !!(this.getNavigation === CONTACT),
            },
            // {
            //   label: 'Chat',
            //   value: 'Chat',
            //   isSelected: !!(this.getNavigation === CHAT),
            // },
            {
              label: 'FAQ',
              value: 'FAQ',
              isSelected: !!(this.getNavigation === FAQ),
            },
          ]),
          (this.profile = [
            {
              label: 'My Profile',
              value: 'My Profile',
              isSelected: !!(this.getNavigation === MY_PROFILE),
            },
            {
              label: 'Upload Documents',
              value: 'Upload Documents',
              isSelected: !!(this.getNavigation === UPLOAD_DOCUMENTS),
            },
            {
              label: 'Refer a Friend',
              value: 'Refer a Friend',
              isSelected: !!(this.getNavigation === REFER_A_FRIEND),
            },
            {
              label: 'Change Password',
              value: 'Change Password',
              isSelected: !!(this.getNavigation === CHANGE_PASSWORD),
            },
          ]);
        // });
        // console.log('values', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
    const { isHelpExpanded, isManageExpanded, isProfileExpanded } = this.state;
    // console.log('state', this.state);

    this.retrieveData();

    return (
      <View style={{ paddingVertical: 5 }}>
        <ScrollView>
          <View>
            <ExpandableText
              containerstyle={{
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onClickMain={this.onPressSend}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    margin: 10,
                  }}
                >
                  <Icon
                    color={
                      this.getNavigation === SEND_MONEY_NEW_USER ||
                      this.getNavigation === SEND_MONEY_REG_USER
                        ? '#e77817'
                        : '#4a4a4a'
                    }
                    size={25}
                    name="pay-money"
                    fontWeight="normal"
                  />
                </View>
                <CustomText
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color:
                      this.getNavigation === SEND_MONEY_NEW_USER ||
                      this.getNavigation === SEND_MONEY_REG_USER
                        ? '#e77817'
                        : '#4a4a4a',
                    fontWeight:
                      this.getNavigation === SEND_MONEY_NEW_USER ||
                      this.getNavigation === SEND_MONEY_REG_USER
                        ? 'bold'
                        : 'normal',
                  }}
                >
                  Send Money
                </CustomText>
              </View>
            </ExpandableText>
            <ExpandableText
              containerstyle={{
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onClickMain={this.onPressPayBills}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    margin: 10,
                  }}
                >
                  <Icon
                    color={this.getNavigation === PAY_BILLS ? '#e77817' : '#4a4a4a'}
                    size={25}
                    name="wallet"
                    fontWeight="normal"
                  />
                </View>
                <CustomText
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: this.getNavigation === PAY_BILLS ? '#e77817' : '#4a4a4a',
                    fontWeight: this.getNavigation === PAY_BILLS ? 'bold' : 'normal',
                  }}
                >
                  Pay Bills
                </CustomText>
              </View>
            </ExpandableText>
            <ExpandableText
              containerstyle={{
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onClickMain={this.onPressTransactions}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    margin: 10,
                  }}
                >
                  <Icon
                    color={this.getNavigation === MY_TRANSACTIONS ? '#e77817' : '#4a4a4a'}
                    size={25}
                    name="online-pay"
                    fontWeight="normal"
                  />
                </View>
                <CustomText
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: this.getNavigation === MY_TRANSACTIONS ? '#e77817' : '#4a4a4a',
                    fontWeight: this.getNavigation === MY_TRANSACTIONS ? 'bold' : 'normal',
                  }}
                >
                  My Transactions
                </CustomText>
              </View>
            </ExpandableText>
            <ExpandableText
              onClickChild={this.onClickChild}
              containerstyle={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: isManageExpanded ? '#e5e5e5' : '#fff',
              }}
              childContainerStyle={{ backgroundColor: '#e5e5e5' }}
              isChildVisible={isManageExpanded}
              childSelectedStyle={{ color: '#e77817' }}
              childUnSelectedStyle={{ color: '#4a4a4a' }}
              onClickMain={() =>
                this.setState({
                  isManageExpanded: !isManageExpanded,
                  isProfileExpanded: isProfileExpanded ? false : null,
                  isHelpExpanded: isHelpExpanded ? false : null,
                })
              }
              item={this.manage}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    margin: 10,
                  }}
                >
                  <Icon
                    color={
                      isManageExpanded === true ||
                      this.getNavigation === RECIPENTS ||
                      this.getNavigation === RECIPENT_REQUEST_NATIVE ||
                      this.getNavigation === BILLERS ||
                      this.getNavigation === MY_BANK_ACCOUNTS
                        ? '#e77817'
                        : '#4a4a4a'
                    }
                    size={25}
                    name="setting"
                    fontWeight="normal"
                  />
                </View>
                <CustomText
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color:
                      isManageExpanded ||
                      this.getNavigation === RECIPENTS ||
                      this.getNavigation === RECIPENT_REQUEST_NATIVE ||
                      this.getNavigation === BILLERS ||
                      this.getNavigation === MY_BANK_ACCOUNTS
                        ? '#e77817'
                        : '#4a4a4a',
                    fontWeight: isManageExpanded ? 'bold' : 'normal',
                  }}
                >
                  Manage
                </CustomText>

                {this.getNavigation === RECIPENTS ||
                this.getNavigation === RECIPENT_REQUEST_NATIVE ||
                this.getNavigation === BILLERS ||
                this.getNavigation === MY_BANK_ACCOUNTS ? (
                  <View
                    style={
                      isManageExpanded ? headerStyle.arrowSelectedUp : headerStyle.arrowSelectedDown
                    }
                  />
                ) : (
                  <View style={isManageExpanded ? headerStyle.arrowUp : headerStyle.arrowDown} />
                )}
              </View>
            </ExpandableText>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#e3e3e3',
              }}
            />
          </View>

          <ExpandableText
            containerstyle={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onClickMain={this.onPressRewards}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  margin: 10,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    // width: responsiveWidth(5),
                    height: 30,
                  }}
                  resizeMode="contain"
                  source={rewardsIcon}
                />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: this.getNavigation === MY_REWARDS ? '#e77817' : '#4a4a4a',
                  fontWeight: this.getNavigation === MY_REWARDS ? 'bold' : 'normal',
                }}
              >
                M2I Rewards
              </CustomText>
            </View>
          </ExpandableText>
          <ExpandableText
            onClickChild={this.onClickChild}
            containerstyle={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: isHelpExpanded ? '#e5e5e5' : '#fff',
            }}
            childContainerStyle={{ backgroundColor: '#e5e5e5' }}
            isChildVisible={isHelpExpanded}
            childSelectedStyle={{ color: '#e77817' }}
            childUnSelectedStyle={{ color: '#4a4a4a' }}
            onClickMain={() =>
              this.setState({
                isHelpExpanded: !isHelpExpanded,
                isProfileExpanded: isProfileExpanded ? false : null,
                isManageExpanded: isManageExpanded ? false : null,
              })
            }
            item={this.help}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  margin: 10,
                }}
              >
                <Icon
                  color={
                    isHelpExpanded ||
                    this.getNavigation === CONTACT ||
                    this.getNavigation === CHAT ||
                    this.getNavigation === FAQ
                      ? '#e77817'
                      : '#4a4a4a'
                  }
                  size={25}
                  name="help1"
                  fontWeight="normal"
                />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color:
                    isHelpExpanded ||
                    this.getNavigation === CONTACT ||
                    this.getNavigation === CHAT ||
                    this.getNavigation === FAQ
                      ? '#e77817'
                      : '#4a4a4a',
                  fontWeight: isHelpExpanded ? 'bold' : 'normal',
                }}
              >
                Help
              </CustomText>
              {this.getNavigation === CONTACT ||
              this.getNavigation === CHAT ||
              this.getNavigation === FAQ ? (
                <View
                  style={
                    isHelpExpanded ? headerStyle.arrowSelectedUp : headerStyle.arrowSelectedDown
                  }
                />
              ) : (
                <View style={isHelpExpanded ? headerStyle.arrowUp : headerStyle.arrowDown} />
              )}
            </View>
          </ExpandableText>
          <ExpandableText
            onClickChild={this.onClickChild}
            containerstyle={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: isProfileExpanded ? '#e5e5e5' : '#fff',
            }}
            childContainerStyle={{ backgroundColor: '#e5e5e5' }}
            isChildVisible={isProfileExpanded}
            childSelectedStyle={{ color: '#e77817' }}
            childUnSelectedStyle={{ color: '#4a4a4a' }}
            onClickMain={() =>
              this.setState({
                isProfileExpanded: !isProfileExpanded,
                isManageExpanded: isManageExpanded ? false : null,
                isHelpExpanded: isHelpExpanded ? false : null,
              })
            }
            item={this.profile}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  margin: 10,
                }}
              >
                <Icon
                  color={
                    isProfileExpanded ||
                    this.getNavigation === MY_PROFILE ||
                    this.getNavigation === UPLOAD_DOCUMENTS ||
                    this.getNavigation === REFER_A_FRIEND ||
                    this.getNavigation === CHANGE_PASSWORD
                      ? '#e77817'
                      : '#4a4a4a'
                  }
                  size={25}
                  name="user"
                  fontWeight="normal"
                />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color:
                    isProfileExpanded ||
                    this.getNavigation === MY_PROFILE ||
                    this.getNavigation === UPLOAD_DOCUMENTS ||
                    this.getNavigation === REFER_A_FRIEND ||
                    this.getNavigation === CHANGE_PASSWORD
                      ? '#e77817'
                      : '#4a4a4a',
                  fontWeight: isProfileExpanded ? 'bold' : 'normal',
                }}
              >
                Profile
              </CustomText>
              {this.getNavigation === MY_PROFILE ||
              this.getNavigation === UPLOAD_DOCUMENTS ||
              this.getNavigation === REFER_A_FRIEND ||
              this.getNavigation === CHANGE_PASSWORD ? (
                <View
                  style={
                    isProfileExpanded ? headerStyle.arrowSelectedUp : headerStyle.arrowSelectedDown
                  }
                />
              ) : (
                <View style={isProfileExpanded ? headerStyle.arrowUp : headerStyle.arrowDown} />
              )}
            </View>
          </ExpandableText>
          <ExpandableText
            containerstyle={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            onClickMain={this.onPressLogout}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  margin: 10,
                }}
              >
                <Icon color="#4a4a4a" size={25} name="logout" fontWeight="normal" />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: '#4a4a4a',
                  fontWeight: 'normal',
                }}
              >
                Logout
              </CustomText>
            </View>
          </ExpandableText>
        </ScrollView>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(MenuItems);
