/* eslint-disable no-undef */
import React, { Component } from 'react';
import { AsyncStorage, Linking, ScrollView, StyleSheet, View } from 'react-native';
import { hocComponentFetcherWithLoader } from '..';
import SignUpButton from '../customDarkBlueButton';
import Icon from '../customIcon';
import {
  responsiveHeight as heightInPercentage,
  responsiveWidth as widthInPercentage,
} from '../customResponsiveDimension';
import CustomText from '../customText';
import LoginButton from '../customWhiteButton';
import ExpandableText from '../ExpandableView';
import { CHAT, CONTACT, FAQ, HOW_IT_WORKS, isWeb, TRACK_MY_TRANSACTION } from './HeaderCommons';
import { getPrefData, SIGNUP_OTP_VERIFIED } from '../../storage/preferenceStorage';

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
  constructor(props) {
    super(props);
    this.state = {
      showOnlyHelp: false,
    };

    this.getNavigation = '';
    this.help = [];
  }

  //   componentDidMount() {
  //     this._retrieveData();
  //   }

  onPressTrackTransaction = () => {
    const { onPressTrackTransaction, navigation } = this.props;
    if (onPressTrackTransaction) {
      onPressTrackTransaction();
    } else if (this.getNavigation !== TRACK_MY_TRANSACTION) {
      navigation.navigate('TrackTransfer');
    }
  };

  onPressHowItWorks = () => {
    const { onPressHowItWorks } = this.props;
    if (onPressHowItWorks) {
      onPressHowItWorks();
    } else {
      Linking.openURL(
        'https://www.icicibank.com/nri-banking/money_transfer/videos-listing.page?&_ga=2.120035083.265893719.1575872069-1447154883.1551188293'
      );
    }
  };

  onClickChild = (item, index) => {
    const { onClickChild, navigation } = this.props;
    // /this._retrieveData();
    // console.log('FAQ', item.label);
    if (onClickChild) {
      onClickChild(item, index);
    } else {
      // console.log('FAQ1', item.label);
      if (item.label === 'Contact') {
        if (this.getNavigation !== CONTACT) {
          navigation.navigate('ContactUs');
        }
      }
      if (item.label === 'Chat') {
        if (this.getNavigation !== CHAT) {
          // TODO
        }
      }
      if (item.label === 'FAQ') {
        if (this.getNavigation !== FAQ) {
          Linking.openURL('http://www.icicibankusa.com/faq/index.page');
        }
      }
    }
  };

  onPressLogin = () => {
    const { onPressLogin, navigation } = this.props;

    if (onPressLogin) {
      onPressLogin();
    } else {
      navigation.closeDrawer();
      navigation.navigate('Registration', { showScreen: false });
    }
  };

  onPressSignUp = () => {
    const { onPressSignUp, navigation } = this.props;
    if (onPressSignUp) {
      onPressSignUp();
    } else {
      navigation.closeDrawer();
      navigation.navigate('Registration', { showScreen: true });
    }
  };

  async retrieveData() {
    try {
      const value = await AsyncStorage.getItem('router');
      if (value !== null) {
        // We have data!!
        // eslint-disable-next-line no-sequences
        (this.getNavigation = value),
          (this.help = [
            {
              label: 'Contact',
              value: 'Contact',
              isSelected: !!(value === CONTACT),
            },
            // {
            //   label: 'Chat',
            //   value: 'Chat',
            //   isSelected: !!(value === CHAT),
            // },
            {
              label: 'FAQ',
              value: 'FAQ',
              isSelected: !!(value === 'FAQ'),
            },
          ]);
        // });
        // console.log('values', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async componentWillReceiveProps() {
    const help = await getPrefData(SIGNUP_OTP_VERIFIED);
    this.setState({ showOnlyHelp: help });
    // console.log('state', help);
  }

  render() {
    const { isHelpExpanded, showOnlyHelp } = this.state;

    this.retrieveData();

    return (
      <View>
        <View style={{ paddingVertical: 5 }}>
          {showOnlyHelp ? (
            <ScrollView style={{ maxHeight: heightInPercentage(90) }}>
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
            </ScrollView>
          ) : (
            <ScrollView style={{ maxHeight: heightInPercentage(90) }}>
              <ExpandableText
                containerstyle={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
                onClickMain={this.onPressTrackTransaction}
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
                      color={this.getNavigation === TRACK_MY_TRANSACTION ? '#e77817' : '#4a4a4a'}
                      size={25}
                      name="track"
                      fontWeight="normal"
                    />
                  </View>
                  <CustomText
                    style={{
                      flex: 1,
                      fontSize: 16,
                      color: this.getNavigation === TRACK_MY_TRANSACTION ? '#e77817' : '#4a4a4a',
                      fontWeight: this.getNavigation === TRACK_MY_TRANSACTION ? 'bold' : 'normal',
                    }}
                  >
                    Track my transaction
                  </CustomText>
                </View>
              </ExpandableText>
              <ExpandableText
                containerstyle={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
                onClickMain={this.onPressHowItWorks}
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
                      color={this.getNavigation === HOW_IT_WORKS ? '#e77817' : '#4a4a4a'}
                      size={25}
                      name="zoom"
                      fontWeight="normal"
                    />
                  </View>
                  <CustomText
                    style={{
                      flex: 1,
                      fontSize: 16,
                      color: this.getNavigation === HOW_IT_WORKS ? '#e77817' : '#4a4a4a',
                      fontWeight: this.getNavigation === HOW_IT_WORKS ? 'bold' : 'normal',
                    }}
                  >
                    How it works
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

              <View style={{ marginHorizontal: '4%', marginVertical: '2%' }}>
                <LoginButton onPress={this.onPressLogin}>Login</LoginButton>

                <View style={{ marginBottom: '2%' }} />
                <SignUpButton onPress={this.onPressSignUp}>Sign Up</SignUpButton>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

export default hocComponentFetcherWithLoader()(MenuItems);
