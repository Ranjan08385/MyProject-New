/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import SignUpButton from '../customDarkBlueButton';
import Icon from '../customIcon';
import {
  responsiveHeight as heightInPercentage,
  responsiveWidth as widthInPercentage,
} from '../customResponsiveDimension';
import CustomText from '../customText';
import LoginButton from '../customWhiteButton';
import ExpandableText from '../ExpandableView';
import Hoverable from '../hover/hoverable';
import InfoTip from './customInfoTipMain';
import { CHAT, CONTACT, FAQ, HOW_IT_WORKS, isWeb, TRACK_MY_TRANSACTION } from './HeaderCommons';

const { ContextMenu } = renderers;
const fontSize = 16;

const mobIcon = require('../../assets/images/icici.png');
const tabIcon = require('../../assets/images/logo-sm.png');
const lapIcon = require('../../assets/images/logo.png');
const arrowup = require('../../assets/images/arrowUp.png');
const arrowdown = require('../../assets/images/arrowDown.png');
const menuIcon = require('../../assets/images/menu.png');

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
class HeaderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
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
    };
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

  onClickChild = (item, index) => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onClickChild, navigation } = this.props;
    if (onClickChild) {
      onClickChild(item, index);
    } else {
      if (item.label === 'Contact') {
        if (this.getNavigation() !== CONTACT) {
          navigation.navigate('ContactUs');
        }
      }
      if (item.label === 'Chat') {
        if (this.getNavigation() !== CHAT) {
          // TODO
        }
      }
      if (item.label === 'FAQ') {
        if (this.getNavigation() !== FAQ) {
          Linking.openURL(' http://www.icicibankusa.com/faq/index.page');
        }
      }
    }
  };

  onPressContact = () => {
    const { onPressContact, navigation } = this.props;
    if (onPressContact) {
      onPressContact();
    } else if (this.getNavigation() !== CONTACT) {
      navigation.navigate('ContactUs');
    }
  };

  onPressChat = () => {
    const { onPressChat } = this.props;
    if (onPressChat) {
      onPressChat();
    } else if (this.getNavigation() !== CHAT) {
      // TODO
    }
  };

  onPressFAQ = () => {
    const { onPressFAQ } = this.props;
    if (onPressFAQ) {
      onPressFAQ();
    } else {
      Linking.openURL('http://www.icicibankusa.com/faq/index.page');
    }
  };

  onPressTrackTransaction = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressTrackTransaction, navigation } = this.props;
    if (onPressTrackTransaction) {
      onPressTrackTransaction();
    } else if (this.getNavigation !== TRACK_MY_TRANSACTION) {
      navigation.navigate('TrackTransfer');
    }
  };

  onPressHowItWorks = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressHowItWorks } = this.props;
    if (onPressHowItWorks) {
      onPressHowItWorks();
    } else {
      Linking.openURL(
        'https://www.icicibank.com/nri-banking/money_transfer/videos-listing.page?&_ga=2.120035083.265893719.1575872069-1447154883.1551188293'
      );
    }
  };

  onPressHelp = () => {
    const { onPressHelp } = this.props;

    if (onPressHelp) {
      onPressHelp();
    }
  };

  onPressLogo = () => {
    const { onPressLogo, navigation } = this.props;
    const path = isWeb
      ? window.location.pathname.toString() !== '/'
      : this.getNavigation() !== 'HomePage';
    if (path) {
      if (onPressLogo) {
        onPressLogo();
      } else if (path) {
        navigation.navigate('HomePage');
      }
    }
  };

  onPressLogin = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressLogin, navigation } = this.props;

    if (onPressLogin) {
      onPressLogin();
    } else {
      gtag('event', 'Login', {
        event_category: 'Home-Page',

        event_label: 'Top-panel',
      });
      navigation.navigate('Registration', {
        showScreen: false,
      });
    }
  };

  onPressSignUp = () => {
    {
      !isWeb ? this.menu.close() : null;
    }
    const { onPressSignUp, navigation } = this.props;
    if (onPressSignUp) {
      onPressSignUp();
    } else {
      // ga('send', {
      //   hitType: 'event',
      //   eventCategory: 'Home-Page',
      //   eventAction: 'Sign-Up',
      //   eventLabel: 'Top-panel',
      // });
      gtag('event', 'Sign-Up', {
        event_category: 'Home-Page',

        event_label: 'Top-panel',
      });
      navigation.navigate('Registration', {
        showScreen: true,
      });
    }
  };

  getNavigation() {
    const { navigation } = this.props;
    const pageRep = isWeb
      ? window.location.pathname.toString()
      : navigation.state.routeName.toString();
    const page = isWeb ? pageRep.replace('/', '') : pageRep;
    return page;
  }

  optionsFieldMenu = () => {
    const { isHelpExpanded, width, help } = this.state;
    return (
      <View style={{ paddingVertical: 5 }}>
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
                  color={this.getNavigation() === TRACK_MY_TRANSACTION ? '#e77817' : '#4a4a4a'}
                  size={25}
                  name="track"
                  fontWeight="normal"
                />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: this.getNavigation() === TRACK_MY_TRANSACTION ? '#e77817' : '#4a4a4a',
                  fontWeight: this.getNavigation() === TRACK_MY_TRANSACTION ? 'bold' : 'normal',
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
                  color={this.getNavigation() === HOW_IT_WORKS ? '#e77817' : '#4a4a4a'}
                  size={25}
                  name="zoom"
                  fontWeight="normal"
                />
              </View>
              <CustomText
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: this.getNavigation() === HOW_IT_WORKS ? '#e77817' : '#4a4a4a',
                  fontWeight: this.getNavigation() === HOW_IT_WORKS ? 'bold' : 'normal',
                }}
              >
                How it works
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
                    // this.getNavigation() === CHAT ||
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
          <View style={{ marginHorizontal: '4%', marginVertical: '2%' }}>
            <LoginButton onPress={this.onPressLogin}>Login</LoginButton>

            <View style={{ marginBottom: '2%' }} />
            <SignUpButton onPress={this.onPressSignUp}>Sign Up</SignUpButton>
          </View>
        </ScrollView>
      </View>
    );
  };

  optionsField = () => {
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

  renderIconsLeft() {
    const { width } = this.state;
    let renderLogo =
      width < 992 ? (
        <Image
          style={{
            width: 140,
            height: 38,
          }}
          source={tabIcon}
        />
      ) : (
        <Image
          style={{
            width: 308,
            height: 37,
          }}
          resizeMode="contain"
          source={lapIcon}
        />
      );

    renderLogo =
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
        renderLogo
      );

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: width > 767 && width < 992 ? 'center' : 'flex-start',
          paddingBottom: width < 768 ? null : 20,
          paddingTop: width < 768 ? null : 10,
          justifyContent: 'flex-start',
        }}
      >
        <TouchableOpacity onPress={this.onPressLogo}>{renderLogo}</TouchableOpacity>
      </View>
    );
  }

  renderIconsCenter() {
    const { width, menuOpened } = this.state;
    return (
      <View
        style={{
          display: width < 768 ? 'none' : 'flex',
          flex: width > 992 ? 1 : 2,
          flexDirection: 'row',
          paddingVertical: 10,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginHorizontal: widthInPercentage(3),
        }}
      >
        <Hoverable>
          {isHovered => {
            const color =
              isHovered || this.getNavigation() === TRACK_MY_TRANSACTION ? '#e77817' : '#4a4a4a';

            return (
              <TouchableOpacity onPress={this.onPressTrackTransaction}>
                <CustomText
                  style={{
                    marginHorizontal: widthInPercentage(1),
                    fontSize,
                    color,
                    fontWeight: this.getNavigation() === TRACK_MY_TRANSACTION ? 'bold' : 'normal',
                  }}
                >
                  Track my transaction
                </CustomText>
              </TouchableOpacity>
            );
          }}
        </Hoverable>
        <Hoverable>
          {isHovered => {
            const color =
              isHovered || this.getNavigation() === HOW_IT_WORKS ? '#e77817' : '#4a4a4a';
            return (
              <TouchableOpacity onPress={this.onPressHowItWorks}>
                <CustomText
                  style={{
                    marginHorizontal: widthInPercentage(1),
                    fontSize,
                    color,
                    fontWeight: this.getNavigation() === HOW_IT_WORKS ? 'bold' : 'normal',
                  }}
                >
                  How it works
                </CustomText>
              </TouchableOpacity>
            );
          }}
        </Hoverable>

        <InfoTip
          onMenuOpen={this.onMenuOpen}
          onMenuClose={this.onMenuClose}
          placement="bottom"
          styleMenuOptions={{
            display: width < 768 ? 'none' : 'flex',
            backgroundColor: 'white',
            width: widthInPercentage(14),
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
            {isHovered => {
              const color =
                isHovered || menuOpened === true || this.getNavigation() === CONTACT
                  ? '#e77817'
                  : '#4a4a4a';
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: widthInPercentage(1.5),
                  }}
                >
                  <CustomText
                    style={{
                      fontSize,
                      color,
                      fontWeight:
                        menuOpened === true || this.getNavigation() === CONTACT ? 'bold' : 'normal',
                    }}
                  >
                    Help
                  </CustomText>
                  {menuOpened === true || this.getNavigation() === CONTACT ? (
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
              );
            }}
          </Hoverable>
        </InfoTip>

        <LoginButton
          onPress={this.onPressLogin}
          containerStyle={{ marginRight: widthInPercentage(1), width: 100 }}
        >
          Login
        </LoginButton>
        <SignUpButton
          onPress={this.onPressSignUp}
          containerStyle={{ marginLeft: widthInPercentage(1) }}
        >
          Sign Up
        </SignUpButton>
      </View>
    );
  }

  renderIconsRight() {
    const { width, height } = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
        >
          <CustomText
            onPress={this.onPressLogin}
            style={{
              fontWeight: 'normal',
              color: '#e77817',
              justifyContent: 'flex-end',
              marginVertical: heightInPercentage(2),
              marginHorizontal: widthInPercentage(2),
              fontSize: 16,
            }}
          >
            Login
          </CustomText>
        </View>

        {isWeb ? (
          <InfoTip
            placement="bottom"
            propRenderer={ContextMenu}
            styleMenuOptions={{
              display: width > 991 ? 'none' : 'flex',
              backgroundColor: 'white',
              width: '100%',
              justifyContent: 'space-evenly',
              marginTop: height - heightInPercentage(3),
              elevation: 6,
              shadowOpacity: 8,
              shadowColor: '#b1b1b1',
              shadowRadius: 10,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 3,
              borderBottomRightRadius: 3,
            }}
            anchorStyle={{ backgroundColor: 'transparent' }}
            OptionsField={this.optionsFieldMenu()}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: 20,
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
    const { containerStyle, containerStyleMobile } = this.props;
    const { width, height } = this.state;
    return isWeb ? (
      <View onLayout={this.onLayout}>
        {width ? (
          <View
            style={
              width < 768
                ? [headerStyle.containerStyleMobile, containerStyleMobile]
                : [headerStyle.containerStyle, containerStyle]
            }
          >
            {this.renderIconsLeft()}

            {this.renderIconsCenter()}

            {width < 768 ? this.renderIconsRight() : null}

            {!isWeb ? (
              <Menu
                ref={this.onRef}
                // style={{ marginLeft: 30, marginRight: 10 }}
                renderer={ContextMenu}
              >
                <MenuTrigger>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      marginHorizontal: 20,
                    }}
                    resizeMode="contain"
                    source={menuIcon}
                  />
                </MenuTrigger>

                <MenuOptions
                  optionsContainerStyle={{
                    display: width > 991 ? 'none' : 'flex',
                    backgroundColor: 'white',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    marginTop: height - heightInPercentage(3),
                    elevation: 6,
                    shadowOpacity: 8,
                    shadowColor: '#b1b1b1',
                    shadowRadius: 10,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3,
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

HeaderHome.defaultProps = {};

export default HeaderHome;
