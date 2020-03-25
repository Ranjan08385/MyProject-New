/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import { AppConsumer } from '../../AppContext';
import Constant from '../../constants/displayConstants';
import { logout } from '../../network/request/signup/logout';
import { encodeBase64 } from '../../utils/jsEncrypt';

import ModelNotification from '../../pages/notification/modelNotificationLanding';
import {
  CUST_ID,
  getPrefData,
  LOGIN_ID,
  RESCOUNTRYID,
  RESCOUNTRYCODE,
  storePrefData,
  TRANSFER_TYPE,
  USER_ID,
  ACCOUNT_TYPE,
  CUSTTYPE,
  NOTIFICATION_COUNT,
} from '../../storage/preferenceStorage';
import { clearStorage } from '../../utils/appUtils';
import Icon from '../customIcon';
import {
  responsiveHeight as heightInPercentage,
  responsiveWidth as widthInPercentage,
} from '../customResponsiveDimension';
import CustomText from '../customText';
import ExpandableText from '../ExpandableView';
import Hoverable from '../hover/hoverable';
import InfoTip from './customInfoTipMain';
import {
  BILLERS,
  CHANGE_PASSWORD,
  CHAT,
  CONTACT,
  FAQ,
  isWeb,
  LOGO,
  LOGOUT,
  MY_BANK_ACCOUNTS,
  MY_PROFILE,
  MY_REWARDS,
  MY_TRANSACTIONS,
  NOTIFICATION,
  PAY_BILLS,
  RECIPENTS,
  RECIPENT_REQUEST,
  REFER_A_FRIEND,
  SEND_MONEY_NEW_USER,
  SEND_MONEY_REG_USER,
  UPLOAD_DOCUMENTS,
} from './HeaderCommons';
import {
  N_BILLERS,
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
  N_PAYBILLS,
  N_RECIPENTS,
  N_RECIPENT_REQUEST,
  N_REFER_A_FRIEND,
  N_SEND_MONEY_REG_USER,
  N_UPLOAD_DOCUMENTS,
} from './headerNavigations';

const { Popover, ContextMenu } = renderers;
const mobIcon = require('../../assets/images/icici.png');
const tabIcon = require('../../assets/images/logo-sm.png');
const lapIcon = require('../../assets/images/logo.png');
const arrowup = require('../../assets/images/arrowUp.png');
const arrowdown = require('../../assets/images/arrowDown.png');
const rewardsIcon = require('../../assets/images/gold-active.png');
const menuIcon = require('../../assets/images/menu.png');

const fontSize = 16;

const headerStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: isWeb ? 1 : heightInPercentage(0.5),
    paddingHorizontal: isWeb ? widthInPercentage(3) : widthInPercentage(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#968365',
    shadowRadius: 9,
  },
  containerStyleTab: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: isWeb ? 5 : heightInPercentage(0.5),
    paddingTop: isWeb ? 15 : heightInPercentage(0.5),
    paddingHorizontal: isWeb ? widthInPercentage(3) : widthInPercentage(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#968365',
    shadowRadius: 9,
  },
  containerStyleMobile: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: isWeb ? heightInPercentage(2) : heightInPercentage(3),
    paddingHorizontal: isWeb ? widthInPercentage(1.5) : widthInPercentage(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    elevation: 6,
    shadowOpacity: 8,
    shadowColor: '#968365',
    shadowRadius: 9,
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

class Header extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    const { hideIcons, hideRewardIcon, showScreen } = this.props;
    this.AccountType = '';
    this.state = {
      width: '',
      height: '',
      isManageExpanded: false,
      isHelpExpanded: false,
      isProfileExpanded: false,
      hideIcons: hideIcons || false,
      hideReward: hideRewardIcon || false,
      showScreen: '0',
      manage: [
        {
          label: 'Recipents',
          value: 'Recipents',
          isSelected: !!(showScreen === '0'),
        },
        {
          label: 'Recipent Requests',
          value: 'Recipent Requests',
          isSelected: !!(showScreen === '1'),
        },
        {
          label: 'Billers',
          value: 'Billers',
          isSelected: !!(this.getNavigation() === BILLERS),
        },
        {
          label: 'My Bank Accounts',
          value: 'My Bank Accounts',
          isSelected: !!(this.getNavigation() === MY_BANK_ACCOUNTS),
        },
      ],
      help: [
        {
          label: 'Contact',
          value: 'Contact',
          isSelected: !!(this.getNavigation() === CONTACT),
        },
        // {
        //   label: 'Chat',
        //   value: 'Chat',
        //   isSelected: !!(this.getNavigation() === CHAT),
        // },
        {
          label: 'FAQ',
          value: 'FAQ',
          isSelected: !!(this.getNavigation() === FAQ),
        },
      ],
      profile: [
        {
          label: 'My Profile',
          value: 'My Profile',
          isSelected: !!(this.getNavigation() === MY_PROFILE),
        },
        {
          label: 'Upload Documents',
          value: 'Upload Documents',
          isSelected: !!(this.getNavigation() === UPLOAD_DOCUMENTS),
        },
        {
          label: 'Refer a Friend',
          value: 'Refer a Friend',
          isSelected: !!(this.getNavigation() === REFER_A_FRIEND),
        },
        {
          label: 'Change Password',
          value: 'Change Password',
          isSelected: !!(this.getNavigation() === CHANGE_PASSWORD),
        },
      ],
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      showScreen: newProps.showScreen === undefined ? '0' : newProps.showScreen,
    });
  }
  // componentWillMount() {
  //   if (
  //     this.getNavigation() === "myRecipients" ||
  //     this.getNavigationForMobile() === "MyRecipientList"
  //   ) {
  //   this.setState(prevState=>({
  //     profile: {
  //       ...prevState.profile,
  //       [prevState.profile[0].isSelected]: true
  //     }
  //   })
  //   console.log(this.state.profile);
  //   }
  //   console.log('nav', this.getNavigation());
  //   console.log('path', MY_REWARDS);
  // }

  getNavigation() {
    const { navigation } = this.props;
    const pageRep = isWeb
      ? window.location.pathname.toString()
      : navigation.state.routeName.toString();
    const page = isWeb ? pageRep.replace('/', '') : pageRep;
    return page;
  }

  onLayout = ({ nativeEvent }) => {
    this.setState({
      width: nativeEvent.layout.width,
      height: nativeEvent.layout.height,
    });
  };

  onMenuOpen = () => {
    this.setState({ menuOpened: true });
  };

  onMenuClose = () => {
    this.setState({ menuOpened: false });
  };

  onMenuOpenHelp = () => {
    this.setState({ menuOpenedHelp: true });
  };

  onMenuCloseHelp = () => {
    this.setState({ menuOpenedHelp: false });
  };

  onMenuOpenNotification = () => {
    this.setState({ menuOpenedNotifiy: true });
  };

  onMenuCloseNotification = () => {
    this.setState({ menuOpenedNotifiy: false });
  };

  onMenuOpenProfile = () => {
    this.setState({ menuOpenedProfile: true });
  };

  onMenuCloseProfile = () => {
    this.setState({ menuOpenedProfile: false });
  };

  onMobileMenuOpen = () => {
    this.setState({ menuOpenedMobile: true });
  };

  onMobileMenuClose = () => {
    this.setState({ menuOpenedMobile: false });
  };

  onClickChild = (item, index) => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onClickChild, navigation } = this.props;
    if (onClickChild) {
      onClickChild(item, index);
    } else {
      if (item.label === 'Recipents') {
        // if (this.getNavigation() !== RECIPENTS) {
        navigation.navigate(N_RECIPENTS, { showScreen: '0' });
        // }
      }
      if (item.label === 'Recipent Requests') {
        // if (this.getNavigation() !== N_RECIPENTS) {
        navigation.navigate(N_RECIPENT_REQUEST, { showScreen: '1' });
        // }
      }
      if (item.label === 'Billers') {
        if (this.getNavigation() !== BILLERS) {
          this.props.navigation.navigate(N_BILLERS);
        }
      }
      if (item.label === 'My Bank Accounts') {
        if (this.getNavigation() !== MY_BANK_ACCOUNTS) {
          navigation.navigate(N_MY_BANK_ACCOUNTS);
        }
      }
      if (item.label === 'Contact') {
        if (this.getNavigation() !== CONTACT) {
          navigation.navigate(N_CONTACT);
        }
      }
      if (item.label === 'Chat') {
        if (this.getNavigation() !== CHAT) {
          // this.props.navigation.navigate("chat");
        }
      }
      if (item.label === 'FAQ') {
        if (this.getNavigation() !== FAQ) {
          Linking.openURL(' http://www.icicibankusa.com/faq/index.page');
        }
      }
      if (item.label === 'My Profile') {
        if (this.getNavigation() !== MY_PROFILE) {
          navigation.navigate(N_MY_PROFILE);
        }
      }
      if (item.label === 'Upload Documents') {
        if (this.getNavigation() !== UPLOAD_DOCUMENTS) {
          storePrefData(TRANSFER_TYPE, {
            lnStatus: 'defaultTransfer',
            loginType: 'direct',
          });
          navigation.navigate(N_UPLOAD_DOCUMENTS);
        }
      }
      if (item.label === 'Refer a Friend') {
        if (this.getNavigation() !== REFER_A_FRIEND) {
          navigation.navigate(N_REFER_A_FRIEND);
        }
      }
      if (item.label === 'Change Password') {
        if (this.getNavigation() !== CHANGE_PASSWORD) {
          navigation.navigate(N_CHANGE_PASSWORD);
        }
      }
    }
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    this.AccountType = await getPrefData(ACCOUNT_TYPE);
    this.notificationCount = await getPrefData(NOTIFICATION_COUNT);
    // console.log('account type ====', this.AccountType);
  }

  onPressUploadDoc = () => {
    const { onPressUploadDoc, navigation } = this.props;
    if (onPressUploadDoc) {
      onPressUploadDoc();
    } else if (this.getNavigation() !== UPLOAD_DOCUMENTS) {
      storePrefData(TRANSFER_TYPE, {
        lnStatus: 'defaultTransfer',
        loginType: 'direct',
      });
      navigation.navigate(N_UPLOAD_DOCUMENTS);
    }
  };

  onPressRecipents = () => {
    const { onPressRecipents, navigation } = this.props;
    if (onPressRecipents) {
      onPressRecipents();
    } else {
      navigation.navigate(N_RECIPENTS, { showScreen: '0' });
    }
  };

  onPressRecipentReq = () => {
    const { onPressRecipentReq, navigation } = this.props;
    if (onPressRecipentReq) {
      onPressRecipentReq();
    } else {
      navigation.navigate(N_RECIPENT_REQUEST, { showScreen: '1' });
    }
  };

  onPressBillers = () => {
    const { onPressBillers } = this.props;

    if (onPressBillers) {
      onPressBillers();
    } else if (this.getNavigation() !== BILLERS) {
      this.props.navigation.navigate(N_BILLERS);
    }
  };

  onPressBankAccounts = () => {
    const { onPressBankAccounts, navigation } = this.props;
    if (onPressBankAccounts) {
      onPressBankAccounts();
    } else if (this.getNavigation() !== MY_BANK_ACCOUNTS) {
      navigation.navigate(N_MY_BANK_ACCOUNTS);
    }
  };

  onPressMyProfile = () => {
    const { onPressMyProfile, navigation } = this.props;
    if (onPressMyProfile) {
      onPressMyProfile();
    } else if (this.getNavigation() !== MY_PROFILE) {
      if (this.AccountType === 'BUSINESS' || this.AccountType === 'Business') {
        navigation.navigate('MyProfileBusiness');
      } else {
        navigation.navigate(N_MY_PROFILE);
      }
    }
  };

  optionsFieldNotification = () => {
    return <ModelNotification navigation={this.props.navigation} {...this.props} />;
  };

  optionsField = () => {
    const { showScreen } = this.state;
    return (
      <View>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressRecipents}
            >
              <CustomText
                style={{
                  fontFamily: 'Arial',
                  padding: 10,
                  fontSize: 16,
                  color:
                    this.getNavigation() === RECIPENTS && showScreen === '0' ? '#e77817' : '#333',
                }}
              >
                Recipients
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressRecipentReq}
            >
              <CustomText
                style={{
                  fontFamily: 'Arial',
                  padding: 10,
                  fontSize: 16,
                  color:
                    this.getNavigation() === RECIPENT_REQUEST && showScreen === '1'
                      ? '#e77817'
                      : '#333',
                }}
              >
                Recipient Requests
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressBillers}
            >
              <CustomText
                style={{
                  fontFamily: 'Arial',
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === BILLERS ? '#e77817' : '#333',
                }}
              >
                Billers
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressBankAccounts}
            >
              <CustomText
                style={{
                  fontFamily: 'Arial',
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === MY_BANK_ACCOUNTS ? '#e77817' : '#333',
                }}
              >
                My Bank Accounts
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
      </View>
    );
  };

  optionsFieldMenu = () => {
    const {
      isManageExpanded,
      isProfileExpanded,
      isHelpExpanded,
      width,
      manage,
      help,
      profile,
    } = this.state;
    return (
      <View style={{ paddingVertical: 5 }}>
        <ScrollView
          style={{
            maxHeight: isWeb ? heightInPercentage(90) : heightInPercentage(70),
          }}
        >
          <MenuOption>
            {width < 768 ? (
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
                          this.getNavigation() === SEND_MONEY_NEW_USER ||
                          this.getNavigation() === SEND_MONEY_REG_USER
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
                          this.getNavigation() === SEND_MONEY_NEW_USER ||
                          this.getNavigation() === SEND_MONEY_REG_USER
                            ? '#e77817'
                            : '#4a4a4a',
                        fontWeight:
                          this.getNavigation() === SEND_MONEY_NEW_USER ||
                          this.getNavigation() === SEND_MONEY_REG_USER
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
                        color={this.getNavigation() === PAY_BILLS ? '#e77817' : '#4a4a4a'}
                        size={25}
                        name="wallet"
                        fontWeight="normal"
                      />
                    </View>
                    <CustomText
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: this.getNavigation() === PAY_BILLS ? '#e77817' : '#4a4a4a',
                        fontWeight: this.getNavigation() === PAY_BILLS ? 'bold' : 'normal',
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
                        color={this.getNavigation() === MY_TRANSACTIONS ? '#e77817' : '#4a4a4a'}
                        size={25}
                        name="online-pay"
                        fontWeight="normal"
                      />
                    </View>
                    <CustomText
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: this.getNavigation() === MY_TRANSACTIONS ? '#e77817' : '#4a4a4a',
                        fontWeight: this.getNavigation() === MY_TRANSACTIONS ? 'bold' : 'normal',
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
                  item={manage}
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
                          this.getNavigation() === RECIPENTS ||
                          this.getNavigation() === RECIPENT_REQUEST ||
                          this.getNavigation() === BILLERS ||
                          this.getNavigation() === MY_BANK_ACCOUNTS
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
                          this.getNavigation() === RECIPENTS ||
                          this.getNavigation() === RECIPENT_REQUEST ||
                          this.getNavigation() === BILLERS ||
                          this.getNavigation() === MY_BANK_ACCOUNTS
                            ? '#e77817'
                            : '#4a4a4a',
                        fontWeight: isManageExpanded ? 'bold' : 'normal',
                      }}
                    >
                      Manage
                    </CustomText>

                    {this.getNavigation() === RECIPENTS ||
                    this.getNavigation() === RECIPENT_REQUEST ||
                    this.getNavigation() === BILLERS ||
                    this.getNavigation() === MY_BANK_ACCOUNTS ? (
                      <View
                        style={
                          isManageExpanded
                            ? headerStyle.arrowSelectedUp
                            : headerStyle.arrowSelectedDown
                        }
                      />
                    ) : (
                      <View
                        style={isManageExpanded ? headerStyle.arrowUp : headerStyle.arrowDown}
                      />
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
            ) : null}
            <ExpandableText
              containerstyle={{
                paddingHorizontal: width < 768 ? 10 : null,
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
                    color: this.getNavigation() === MY_REWARDS ? '#e77817' : '#4a4a4a',
                    fontWeight: this.getNavigation() === MY_REWARDS ? 'bold' : 'normal',
                  }}
                >
                  M2I Rewards
                </CustomText>
              </View>
            </ExpandableText>
            <ExpandableText
              onClickChild={this.onClickChild}
              containerstyle={{
                paddingHorizontal: width < 768 ? 10 : null,
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
              item={help}
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
                      this.getNavigation() === CONTACT ||
                      this.getNavigation() === CHAT ||
                      this.getNavigation() === FAQ
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
                      this.getNavigation() === CONTACT ||
                      this.getNavigation() === CHAT ||
                      this.getNavigation() === FAQ
                        ? '#e77817'
                        : '#4a4a4a',
                    fontWeight: isHelpExpanded ? 'bold' : 'normal',
                  }}
                >
                  Help
                </CustomText>
                {this.getNavigation() === CONTACT ||
                this.getNavigation() === CHAT ||
                this.getNavigation() === FAQ ? (
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
                paddingHorizontal: width < 768 ? 10 : null,
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
              item={profile}
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
                      this.getNavigation() === MY_PROFILE ||
                      this.getNavigation() === UPLOAD_DOCUMENTS ||
                      this.getNavigation() === REFER_A_FRIEND ||
                      this.getNavigation() === CHANGE_PASSWORD
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
                      this.getNavigation() === MY_PROFILE ||
                      this.getNavigation() === UPLOAD_DOCUMENTS ||
                      this.getNavigation() === REFER_A_FRIEND ||
                      this.getNavigation() === CHANGE_PASSWORD
                        ? '#e77817'
                        : '#4a4a4a',
                    fontWeight: isProfileExpanded ? 'bold' : 'normal',
                  }}
                >
                  Profile
                </CustomText>
                {this.getNavigation() === MY_PROFILE ||
                this.getNavigation() === UPLOAD_DOCUMENTS ||
                this.getNavigation() === REFER_A_FRIEND ||
                this.getNavigation() === CHANGE_PASSWORD ? (
                  <View
                    style={
                      isProfileExpanded
                        ? headerStyle.arrowSelectedUp
                        : headerStyle.arrowSelectedDown
                    }
                  />
                ) : (
                  <View style={isProfileExpanded ? headerStyle.arrowUp : headerStyle.arrowDown} />
                )}
              </View>
            </ExpandableText>
            <ExpandableText
              containerstyle={{
                paddingHorizontal: width < 768 ? 10 : null,
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
          </MenuOption>
        </ScrollView>
      </View>
    );
  };

  onPressContact = () => {
    const { onPressContact, navigation } = this.props;
    if (onPressContact) {
      onPressContact();
    } else if (this.getNavigation() !== CONTACT) {
      navigation.navigate(N_CONTACT);
    }
  };

  onPressChat = () => {
    const { onPressChat } = this.props;

    if (onPressChat) {
      onPressChat();
    } else if (this.getNavigation() !== CHAT) {
      // this.props.navigation.navigate("chat");
    }
  };

  onPressFAQ = () => {
    const { onPressFAQ } = this.props;

    if (onPressFAQ) {
      onPressFAQ();
    } else if (this.getNavigation() !== FAQ) {
      Linking.openURL('http://www.icicibankusa.com/faq/index.page');
    }
  };

  onPressReferFriend = () => {
    const { onPressReferFriend, navigation } = this.props;

    if (onPressReferFriend) {
      onPressReferFriend();
    } else if (this.getNavigation() !== REFER_A_FRIEND) {
      navigation.navigate(N_REFER_A_FRIEND);
    }
  };

  onPressChangePassword = () => {
    const { onPressChangePassword, navigation } = this.props;

    if (onPressChangePassword) {
      onPressFAQ();
    } else if (this.getNavigation() !== CHANGE_PASSWORD) {
      navigation.navigate(N_CHANGE_PASSWORD);
    }
  };

  optionsFieldQuery = () => {
    return (
      <View>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressContact}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === CONTACT ? '#e77817' : '#333',
                }}
              >
                Contact
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        {/* <Hoverable>
          {isHovered => (
            // <TouchableOpacity
            //   style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
            //   onPress={this.onPressChat}
            // >
            //   <CustomText
            //     style={{
            //       padding: 10,
            //       fontSize: 16,
            //       color: this.getNavigation() === CHAT ? '#e77817' : '#333',
            //     }}
            //   >
            //     Chat
            //   </CustomText>
            // </TouchableOpacity>
          )}
        </Hoverable> */}
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressFAQ}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === FAQ ? '#e77817' : '#333',
                }}
              >
                FAQ
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
      </View>
    );
  };

  onPressLogout = async () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressLogout, navigation, makeAPICall } = this.props;
    if (onPressLogout) {
      onPressLogout();
    } else if (this.getNavigation() !== LOGOUT) {
      const custId = await getPrefData(CUST_ID);
      const countryId = await getPrefData(RESCOUNTRYID);
      const loginId = await getPrefData(LOGIN_ID);
      const emailId = await getPrefData(USER_ID);

      makeAPICall(
        logout(loginId, custId, countryId, encodeBase64(emailId)),
        this.onDataReceived,
        this.onError
      );
    }
  };

  onDataReceived = response => {
    const { ShowToast } = this.context;
    if (response.status === Constant.SUCCESS_RESPONSE) {
      const { navigation } = this.props;

      clearStorage();
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

  optionsFieldProfile = () => {
    return (
      <View>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressMyProfile}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === MY_PROFILE ? '#e77817' : '#333',
                }}
              >
                My Profile
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressUploadDoc}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === UPLOAD_DOCUMENTS ? '#e77817' : '#333',
                }}
              >
                Upload Documents
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressReferFriend}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === FAQ ? '#e77817' : '#333',
                }}
              >
                Refer a Friend
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressChangePassword}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: this.getNavigation() === CHANGE_PASSWORD ? '#e77817' : '#333',
                }}
              >
                Change Password
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity
              style={{ backgroundColor: isHovered ? '#f5f5f5' : null }}
              onPress={this.onPressLogout}
            >
              <CustomText
                style={{
                  padding: 10,
                  fontSize: 16,
                  color: '#333',
                }}
              >
                Logout
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
      </View>
    );
  };

  onPressLogo = async () => {
    const { onPressLogo, navigation } = this.props;
    const custId = await getPrefData(CUST_ID);
    if (onPressLogo) {
      onPressLogo();
    } else if (this.getNavigation() !== LOGO) {
      if (custId) {
        navigation.navigate(N_SEND_MONEY_REG_USER);
      } else {
        navigation.navigate('HomePage');
      }
    }
  };

  onPressNotification = () => {
    const { onPressNotification } = this.props;

    if (onPressNotification) {
      onPressNotification();
    } else {
      // this.props.navigation.navigate("Notification");
    }
  };

  onPressRewards = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressRewards, navigation } = this.props;

    if (onPressRewards) {
      onPressRewards();
    } else if (this.getNavigation() !== MY_REWARDS) {
      navigation.navigate(N_MY_REWARDS);
    }
  };

  onPressQuery = () => {
    const { onPressQuery } = this.props;
    if (onPressQuery) {
      onPressQuery();
    } else {
      // this.props.navigation.navigate("Query");
    }
  };

  onPressProfile = () => {
    const { onPressProfile } = this.props;
    if (onPressProfile) {
      onPressProfile();
    } else {
      // this.props.navigation.navigate("Profile");
    }
  };

  onPressSend = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onClickSend, navigation } = this.props;
    if (onClickSend) {
      onClickSend();
    } else if (
      this.getNavigation() !== SEND_MONEY_NEW_USER ||
      this.getNavigation() !== SEND_MONEY_REG_USER
    ) {
      navigation.navigate(N_SEND_MONEY_REG_USER);
    }
  };

  closeMenu() {
    this.menu.close();
  }

  onPressPayBills = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onClickPay, navigation } = this.props;
    if (onClickPay) {
      onClickPay();
    } else {
      navigation.navigate(N_PAYBILLS);
    }
  };

  onPressTransactions = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onClickTransactions, navigation } = this.props;
    if (onClickTransactions) {
      onClickTransactions();
    } else {
      navigation.navigate(N_MY_TRANSACTIONS);
    }
  };

  onPressManage = () => {
    const { onClickManage } = this.props;

    if (onClickManage) {
      onClickManage();
    } else {
      navigation.navigate('ManageMyAccounts');
    }
  };

  renderIconsLeft() {
    const { width } = this.state;

    let renderImage =
      width < 992 ? (
        <Image
          style={{
            width: 140,

            height: 40,
          }}
          source={tabIcon}
        />
      ) : (
        <Image
          style={{
            width: widthInPercentage(23),
            height: heightInPercentage(12),
          }}
          resizeMode="contain"
          source={lapIcon}
        />
      );

    renderImage =
      width < 768 ? (
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          resizeMode="contain"
          source={mobIcon}
        />
      ) : (
        renderImage
      );

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',

          marginBottom: width < 768 ? null : heightInPercentage(3),
          justifyContent: width > 767 && width < 992 ? 'center' : 'flex-start',
        }}
      >
        <TouchableOpacity onPress={this.onPressLogo}>{renderImage}</TouchableOpacity>
      </View>
    );
  }

  renderIconsCenter() {
    const { width, menuOpened } = this.state;

    return (
      <View
        style={{
          display: width < 768 ? 'none' : 'flex',
          flex: 2,
          flexDirection: 'row',
          height: 25,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginHorizontal: widthInPercentage(3),
        }}
      >
        <Hoverable>
          {isHovered => (
            <TouchableOpacity onPress={this.onPressSend}>
              <CustomText
                style={{
                  marginHorizontal: widthInPercentage(1),
                  fontSize,
                  color:
                    this.getNavigation() === SEND_MONEY_NEW_USER ||
                    this.getNavigation() === SEND_MONEY_REG_USER ||
                    isHovered
                      ? '#e77817'
                      : '#4a4a4a',
                  fontWeight:
                    this.getNavigation() === SEND_MONEY_NEW_USER ||
                    this.getNavigation() === SEND_MONEY_REG_USER
                      ? 'bold'
                      : 'normal',
                }}
              >
                Send Money
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity onPress={this.onPressPayBills}>
              <CustomText
                style={{
                  marginHorizontal: widthInPercentage(1),
                  fontSize,
                  color: this.getNavigation() === PAY_BILLS || isHovered ? '#e77817' : '#4a4a4a',
                  fontWeight: this.getNavigation() === PAY_BILLS ? 'bold' : 'normal',
                }}
              >
                Pay Bills
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>
        <Hoverable>
          {isHovered => (
            <TouchableOpacity onPress={this.onPressTransactions}>
              <CustomText
                style={{
                  marginHorizontal: widthInPercentage(1),
                  fontSize,
                  color:
                    this.getNavigation() === MY_TRANSACTIONS || isHovered ? '#e77817' : '#4a4a4a',
                  fontWeight: this.getNavigation() === MY_TRANSACTIONS ? 'bold' : 'normal',
                }}
              >
                My Transactions
              </CustomText>
            </TouchableOpacity>
          )}
        </Hoverable>

        <InfoTip
          onMenuOpen={this.onMenuOpen}
          onMenuClose={this.onMenuClose}
          placement="bottom"
          styleMenuOptions={{
            display: width < 768 ? 'none' : 'flex',
            backgroundColor: 'white',
            width: 200,
            justifyContent: 'space-evenly',
            marginTop: heightInPercentage(2),
            padding: 10,
            elevation: 6,
            shadowOpacity: 8,
            shadowColor: '#b1b1b1',
            shadowRadius: 10,
            borderRadius: 5,
          }}
          anchorStyle={{ backgroundColor: 'transparent' }}
          OptionsField={this.optionsField()}
        >
          <Hoverable>
            {isHovered => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: widthInPercentage(1),
                }}
              >
                <CustomText
                  style={{
                    fontSize,
                    color:
                      menuOpened === true ||
                      this.getNavigation() === RECIPENTS ||
                      this.getNavigation() === RECIPENT_REQUEST ||
                      this.getNavigation() === BILLERS ||
                      this.getNavigation() === MY_BANK_ACCOUNTS ||
                      isHovered
                        ? '#e77817'
                        : '#4a4a4a',
                    fontWeight:
                      menuOpened === true ||
                      this.getNavigation() === RECIPENTS ||
                      this.getNavigation() === RECIPENT_REQUEST ||
                      this.getNavigation() === BILLERS ||
                      this.getNavigation() === MY_BANK_ACCOUNTS
                        ? 'bold'
                        : 'normal',
                  }}
                >
                  Manage
                </CustomText>
                {menuOpened === true ||
                this.getNavigation() === RECIPENTS ||
                this.getNavigation() === RECIPENT_REQUEST ||
                this.getNavigation() === BILLERS ||
                this.getNavigation() === MY_BANK_ACCOUNTS ? (
                  <Image
                    style={{
                      width: widthInPercentage(1),
                      height: heightInPercentage(2),
                      marginLeft: widthInPercentage(0.2),
                    }}
                    source={arrowup}
                  />
                ) : (
                  <Image
                    style={{
                      width: widthInPercentage(1),
                      height: heightInPercentage(2),
                      marginLeft: widthInPercentage(0.2),
                    }}
                    source={arrowdown}
                  />
                )}
              </View>
            )}
          </Hoverable>
        </InfoTip>
      </View>
    );
  }

  renderIconsRight() {
    const {
      width,
      hideReward,
      height,
      menuOpenedHelp,
      menuOpenedProfile,
      menuOpenedNotifiy,
    } = this.state;
    let justifyContent = width < 992 ? 'center' : 'flex-end';
    justifyContent = width < 768 ? 'flex-end' : justifyContent;
    const { notificationCount } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent,
          marginBottom: width > 767 && width < 992 ? 10 : null,
          alignItems: 'center',
        }}
      >
        <InfoTip
          onMenuOpen={this.onMenuOpenNotification}
          onMenuClose={this.onMenuCloseNotification}
          placement="bottom"
          menuStyle={{ marginLeft: 30 }}
          styleMenuOptions={{
            backgroundColor: 'white',
            width: width < 768 ? '100%' : 400,
            justifyContent: 'space-evenly',
            marginTop: heightInPercentage(2),
            elevation: 6,
            shadowOpacity: 8,
            shadowColor: '#b1b1b1',
            shadowRadius: 10,
            borderRadius: 5,
          }}
          anchorStyle={{ backgroundColor: 'transparent' }}
          OptionsField={this.optionsFieldNotification()}
        >
          <Hoverable>
            {isHovered => (
              <View>
                <View>
                  <Icon
                    color={
                      isHovered || menuOpenedNotifiy || this.getNavigation() === NOTIFICATION
                        ? '#e77817'
                        : '#4a4a4a'
                    }
                    size={25}
                    name="notification"
                    fontWeight="normal"
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#e77817',
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    marginLeft: 10,
                    marginTop: -8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CustomText style={{ color: '#fff', fontSize: 10 }}>
                    {this.notificationCount == undefined ? '0' : this.notificationCount}
                  </CustomText>
                </View>
              </View>
            )}
          </Hoverable>
        </InfoTip>

        {hideReward === false ? (
          <TouchableOpacity
            style={{ display: width < 992 ? 'none' : 'flex' }}
            onPress={this.onPressRewards}
          >
            <Image
              style={{
                width: 30,
                // width: responsiveWidth(5),
                height: 30,
                marginLeft: 30,
              }}
              resizeMode="contain"
              source={rewardsIcon}
            />
          </TouchableOpacity>
        ) : null}

        <InfoTip
          onMenuOpen={this.onMenuOpenHelp}
          onMenuClose={this.onMenuCloseHelp}
          placement="bottom"
          menuStyle={{ marginLeft: 30, display: width < 992 ? 'none' : 'flex' }}
          styleMenuOptions={{
            display: width < 992 ? 'none' : 'flex',
            backgroundColor: 'white',
            width: 180,
            justifyContent: 'space-evenly',
            marginTop: heightInPercentage(2),
            padding: 10,
            elevation: 6,
            shadowOpacity: 8,
            shadowColor: '#b1b1b1',
            shadowRadius: 10,
            borderRadius: 5,
          }}
          anchorStyle={{ backgroundColor: 'transparent' }}
          OptionsField={this.optionsFieldQuery()}
        >
          <Hoverable>
            {isHovered => (
              <View>
                <Icon
                  color={
                    isHovered ||
                    menuOpenedHelp ||
                    this.getNavigation() === CONTACT ||
                    this.getNavigation() === CHAT ||
                    this.getNavigation() === FAQ
                      ? '#e77817'
                      : '#4a4a4a'
                  }
                  size={25}
                  name="help1"
                  fontWeight="normal"
                />
              </View>
            )}
          </Hoverable>
        </InfoTip>

        <InfoTip
          onMenuOpen={this.onMenuOpenProfile}
          onMenuClose={this.onMenuCloseProfile}
          placement="bottom"
          menuStyle={{ marginLeft: 30, display: width < 992 ? 'none' : 'flex' }}
          styleMenuOptions={{
            display: width < 992 ? 'none' : 'flex',
            backgroundColor: 'white',
            width: 200,
            justifyContent: 'space-evenly',
            marginTop: heightInPercentage(2),
            padding: 10,
            elevation: 6,
            shadowOpacity: 8,
            shadowColor: '#b1b1b1',
            shadowRadius: 10,
            borderRadius: 5,
          }}
          anchorStyle={{ backgroundColor: 'transparent' }}
          OptionsField={this.optionsFieldProfile()}
        >
          <Hoverable>
            {isHovered => (
              <View>
                <Icon
                  color={
                    isHovered ||
                    menuOpenedProfile ||
                    this.getNavigation() === MY_PROFILE ||
                    this.getNavigation() === UPLOAD_DOCUMENTS ||
                    this.getNavigation() === REFER_A_FRIEND ||
                    this.getNavigation() === CHANGE_PASSWORD ||
                    this.getNavigation() === LOGOUT
                      ? '#e77817'
                      : '#4a4a4a'
                  }
                  size={25}
                  name="user"
                  fontWeight="normal"
                />
              </View>
            )}
          </Hoverable>
        </InfoTip>

        {isWeb ? (
          <InfoTip
            onMenuOpen={this.onMobileMenuOpen}
            onMenuClose={this.onMobileMenuClose}
            placement="bottom"
            ref={this.onRef}
            menuStyle={{ marginLeft: 30 }}
            propRenderer={width < 768 ? ContextMenu : Popover}
            styleMenuOptions={{
              display: width > 991 ? 'none' : 'flex',
              backgroundColor: 'white',
              width: width < 768 ? '100%' : widthInPercentage(25),
              justifyContent: 'space-evenly',
              marginTop: width < 768 ? height - heightInPercentage(3) : null,
              elevation: 6,
              shadowOpacity: 8,
              shadowColor: '#b1b1b1',
              shadowRadius: 10,
              borderTopLeftRadius: width < 768 ? 0 : 5,
              borderTopRightRadius: width < 768 ? 0 : 5,
              borderBottomLeftRadius: width < 768 ? 3 : 5,
              borderBottomRightRadius: width < 768 ? 3 : 5,
            }}
            anchorStyle={{ backgroundColor: 'transparent' }}
            OptionsField={this.optionsFieldMenu()}
          >
            <Image
              style={{
                display: width > 991 ? 'none' : 'flex',
                width: 25,
                // width: responsiveWidth(5),
                height: 25,
              }}
              resizeMode="contain"
              source={menuIcon}
            />
          </InfoTip>
        ) : null}
      </View>
    );
  }

  onRef = r => {
    this.menu = r;
  };

  render() {
    const { containerstyle } = this.props;
    const { width, height, hideIcons } = this.state;
    const headerstyle = headerStyle.containerStyle;
    const headerTabStyle = headerStyle.containerStyleTab;
    let style = width < 992 ? headerTabStyle : headerstyle;
    style = width < 768 ? headerStyle.containerStyleMobile : style;

    // let top =
    //   initialHeight < 992 ? heightInPercentage(10) : heightInPercentage(15);
    // top = initialHeight < 768 ? heightInPercentage(5) : top;

    return isWeb ? (
      <View
        onLayout={this.onLayout}
        // style={{ height: width ? null : top }}
      >
        {width ? (
          <View style={[style, containerstyle]}>
            {this.renderIconsLeft()}

            {hideIcons === false ? this.renderIconsCenter() : null}

            {hideIcons === false ? this.renderIconsRight() : null}

            {!hideIcons && !isWeb ? (
              <Menu
                ref={this.onRef}
                style={{ marginLeft: 30, marginRight: 10 }}
                renderer={width < 768 ? ContextMenu : Popover}
              >
                <MenuTrigger>
                  <Image
                    style={{
                      display: width > 991 ? 'none' : 'flex',
                      width: 25,
                      // width: responsiveWidth(5),
                      height: 25,
                    }}
                    resizeMode="contain"
                    source={menuIcon}
                  />
                </MenuTrigger>

                <MenuOptions
                  optionsContainerStyle={{
                    display: width > 991 ? 'none' : 'flex',
                    backgroundColor: 'white',
                    width: width < 768 ? '100%' : widthInPercentage(25),
                    justifyContent: 'space-evenly',
                    marginTop: width < 768 ? height - heightInPercentage(3) : null,
                    elevation: 6,
                    shadowOpacity: 8,
                    shadowColor: '#b1b1b1',
                    shadowRadius: 10,
                    borderTopLeftRadius: width < 768 ? 0 : 5,
                    borderTopRightRadius: width < 768 ? 0 : 5,
                    borderBottomLeftRadius: width < 768 ? 3 : 5,
                    borderBottomRightRadius: width < 768 ? 3 : 5,
                  }}
                >
                  {this.optionsFieldMenu()}
                </MenuOptions>
              </Menu>
            ) : null}
          </View>
        ) : null}
      </View>
    ) : null;
  }
}

Header.defaultProps = {};

export default Header;
