// App.js - React Native

import React, { Component } from 'react';
import { AppState, AsyncStorage, StatusBar, TouchableOpacity, View, Image } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Badge, withBadge } from 'react-native-elements';
import { AppConsumer, AppProvider } from './AppContext';
import Icon from './components/customIcon';
import Text from './components/customText';
// import SignOutMenuItems from './components/Header/nativeHomeMenuItems';
// import SignInMenuItems from './components/Header/nativeMenuItems';
import Toast from './components/Toast';
import HomePage from './pages/home/landingPage';
import DashBoard from './pages/dashBoard/dashboard';
import Facility from './pages/facility/facility';
import Provider from './pages/provider/provider';
import ManageUser from './pages/manageUser/manageUser';
import Conflicts from './pages/resolveConflicts/resolveConflicts';
import FacilityView from './pages/facility/facilityView';
import {
  PREF_CURRENCY_CON,
  removePrefData,
  getPrefData,
  NOTIFICATION_COUNT,
} from './storage/preferenceStorage';
import { getActiveRouteName, getHeaderName } from './utils/nativeutils';

const iconSize = 23;

const isSignedIn = true;

// const checkSignedIn = (navigation, onClick) => {
//   if (isSignedIn) {
//     if (onClick === 'menu') {
//       navigation.toggleDrawer();
//     } else if (onClick === 'notification') {
//       navigation.navigate('AllNotificationsPage');
//     }
//   } else {
//     // alert('login check to be done!');
//     // this.context.ShowToast({
//     //   showToast: true,
//     //   message: 'error',
//     //   duration: 3000,
//     //   align: 'center',
//     //   top: 'top',
//     //   errortype: 'error',
//     // });
//   }
// };

// const BusinessSignUp = createSwitchNavigator({
//   AboutTheBusiness,
//   BusinessAddress,
//   AuthorizedPerson,
//   AuthorizedPersonAddress,
//   BusinessReceipt,
// });

// const IndividualSignUp = createSwitchNavigator({
//   PersonalDetail,
//   PersonalDetailAddress,
//   PersonalDetailReview,
// });

const signOutStack = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const routename = getHeaderName(navigation.state.routeName);
      const IconComponent = Ionicons;
      const leftIcon =
        navigation.state.routeName === 'HomePage'
          ? require('./assets/images/icici.png')
          : 'ios-arrow-back';

      const screename =
        navigation.state.index !== undefined
          ? navigation.state.routes[navigation.state.index]
          : navigation.state.routeName;
      return {
        headerTitle: (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: screename.routeName === 'PersonalDetail' ? 'row' : 'column',
            }}
          >
            {screename.routeName === 'PersonalDetail' ? (
              <Image
                style={{
                  width: 27,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                source={require('./assets/images/icici.png')}
              ></Image>
            ) : null}
            {routename === 'Track Transaction' ||
            routename === 'Sign Up' ||
            routename === 'Registration' ||
            routename === 'Logout' ||
            routename === 'Send Money' ? (
              <Text
                style={{
                  color: routename === 'Track Transaction' ? 'white' : '#1e2546',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginHorizontal: 10,
                }}
              >
                {routename}
              </Text>
            ) : null}
          </View>
        ),
        headerLeft: null,
        headerRight: (
          <View style={{ marginRight: 20, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon
                name="menu-toggle"
                size={iconSize}
                color={routename === 'Track Transaction' ? 'white' : '#000'}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          paddingHorizontal: 10,
          backgroundColor: routename === 'Track Transaction' ? '#1e2546' : 'white',
        },
      };
    },
  }
);

const SignedOutNavigator = createDrawerNavigator(
  {
    signOutStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const name =
        navigation.state.index !== undefined
          ? navigation.state.routes[navigation.state.index]
          : navigation.state.routeName;
      let drawerLockMode = 'unlocked';
      if (name.routeName === 'HomePage') {
        drawerLockMode = 'locked-closed';
      }

      return {
        drawerLockMode,
      };
    },
    drawerPosition: 'right',
    // contentComponent: SignOutMenuItems,
  }
);

// const SendMoney = createStackNavigator(
//   {
//     //  TrackTransfer,
//     //  TrackConnection,
//     SendMoneyForRegUser,
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// );

// const MyTransactions = createStackNavigator(
//   {
//     MyTransaction,
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// );

// const Manage = createSwitchNavigator(
//   {
//     MyRecipientList,
//     // MyRecipientRequest,
//     ManageMyAccounts,
//     // ManageBiller,
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// );
// const PaybillStack = createSwitchNavigator(
//   {
//     PayBills,
//     ManageBiller,
//     LandlineServiceProvider,
//     AddLandline,
//     BillingStatus,
//     BillPayments,
//     PayBillConfirm,

//     // Insurance,
//     // PolicyDetails,
//     // AddInsurance,
//     // ElectricityBill,
//     // AddElectricity,
//     // GasAgency,
//     // AddGasAgency,

//     // PrepaidMobile,
//     // AddPrepaidMobile,
//     // PostpaidMobile,
//     // AddPostpaidMobile
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// );

// const Recipient = createStackNavigator(
//   {
//     MyRecipients,
//     RecipientBankDetails,
//     RecipientInfoIndividual,
//     RecipientInfoBusiness,
//     RecipientAddress,
//     AddRecipientDetails,
//   },
//   {
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// );

// const prevGetStateForActionManage = Manage.router.getStateForAction;
// Manage.router = {
//   ...Manage.router,
//   getStateForAction(action, state) {
//     if (state && action.type === 'ReplaceManageScreen') {
//       const routes = state.routes.slice(0, state.routes.length - 1);
//       routes.push(action);
//       return {
//         ...state,
//         routes,
//         index: routes.length - 1,
//       };
//     }
//     return prevGetStateForActionManage(action, state);
//   },
// };

const tabBarOnPress = ({ navigation, defaultHandler }) => {
  const { isFocused, state, goBack } = navigation;

  if (isSignedIn === false) {
    if (state.routeName !== 'SendMoney') {
      alert('login check to be done!');
    }
  } else if (isSignedIn === true) {
    if (isFocused()) {
      if (state.routes && state.routes.length > 1) {
        // <--- undefined handling
        for (let i = 0; i < state.routes.length - 1; i += 1) {
          goBack();
        }
      } else {
        // @TODO SCROLL TO TOP OF EACH TAB IF SCROLLABLE, $CALLBACK().
      }
    } else {
      defaultHandler();
    }
  }
};

const homeBottomNavigator = createBottomTabNavigator(
  {
    Facility: {
      screen: Facility,
      navigationOptions: {
        title: 'Facility',
      },
    },
    Provider: {
      screen: Provider,
      navigationOptions: {
        title: 'Provider',
      },
    },
    ManageUser: {
      screen: ManageUser,
      navigationOptions: {
        title: 'ManageUser',
      },
    },
    Conflicts: {
      screen: Conflicts,
      navigationOptions: {
        title: 'Conflicts',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Facility') {
          iconName = 'pay-money';
        } else if (routeName === 'Provider') {
          iconName = 'wallet';
        } else if (routeName === 'ManageUser') {
          iconName = 'online-pay';
        } else if (routeName === 'Conflicts') {
          iconName = 'setting';
        }
        return <Icon name={iconName} size={23} color={tintColor} />;
      },
      tabBarOnPress,
    }),
    initialRouteName: 'Facility',
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: 'white',
      activeBackgroundColor: '#2e5e33',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#458757',
      labelStyle: {
        paddingTop: 3,
        color: 'white',
        fontWeight: 'normal',
        fontSize: 12,
      },
      tabStyle: {
        paddingVertical: 5,
      },
      style: { height: 60 },
    },
  }
);

const bottomNavigatorStack = createStackNavigator(
  {
    homeBottomNavigator,
  },
  // {
  //   defaultNavigationOptions: ({ screenProps, navigation }) => {
  //     console.log(' yavag call agutte', screenProps);
  //     return {
  //       headerTitle: (
  //         <View
  //           style={{
  //             justifyContent: 'flex-start',
  //             alignItems: 'flex-start',
  //             flex: 1,
  //           }}
  //         >
  //           <Text
  //             style={{
  //               color: 'white',
  //               fontWeight: 'bold',
  //               fontSize: 18,
  //               marginHorizontal: 10,
  //             }}
  //           >
  //             {getHeaderName(getActiveRouteName(navigation.state))}
  //           </Text>
  //         </View>
  //       ),
  //       headerRight: (
  //         <View style={{ marginRight: 10, flexDirection: 'row' }}>
  //           <TouchableOpacity
  //             onPress={() => checkSignedIn(navigation, 'notification')}
  //             style={{ marginHorizontal: 10 }}
  //           >
  //             <Icon
  //               name="notification"
  //               size={iconSize}
  //               color={
  //                 getActiveRouteName(navigation.state) === 'AllNotificationsPage'
  //                   ? '#e77817'
  //                   : 'white'
  //               }
  //             />
  //             <Badge
  //               value={screenProps.notificationCount}
  //               status="error"
  //               containerStyle={{ position: 'absolute', top: -4, right: -4 }}
  //             />
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             onPress={() => checkSignedIn(navigation, 'menu')}
  //             style={{ marginHorizontal: 10 }}
  //           >
  //             <Icon name="menu-toggle" size={iconSize} color="white" />
  //           </TouchableOpacity>
  //         </View>
  //       ),
  //       headerStyle: {
  //         paddingHorizontal: 10,
  //       },
  //       headerStyle: {
  //         backgroundColor: '#458757',
  //       },
  //       headerTintColor: '#fff',
  //       headerTitleStyle: {
  //         fontWeight: 'bold',
  //       },
  //     };
  //   },
  // }
);

// const RecipientStack = createStackNavigator(
//   {

//   }
// )

const signedInStack = createStackNavigator(
  {
    homeNavigator: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      },
    },
    homeBottomNavigator,
    DashBoard,
    FacilityView,
  },

  {
    defaultNavigationOptions: ({ screenProps, navigation }) => {
      const IconComponent = Ionicons;
      console.log(' signin navigation ', screenProps);

      return {
        headerLeft: null,
        headerTitle: (
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                marginHorizontal: 10,
              }}
            >
              {getHeaderName(navigation.state.routeName)}
            </Text>
          </View>
        ),
        headerRight: (
          <View style={{ marginRight: 10, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllNotificationsPage')}
              style={{ marginHorizontal: 10 }}
            >
              <Icon
                name="notification"
                size={iconSize}
                color={navigation.state.routeName === 'AllNotificationsPage' ? '#e77817' : 'white'}
              />
              <Badge
                value={screenProps.notificationCount}
                status="error"
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigation.openDrawer} style={{ marginHorizontal: 10 }}>
              <Icon name="menu-toggle" size={iconSize} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          paddingHorizontal: 10,

          backgroundColor: '#458757',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  }
);

const prevGetStateForAction = signedInStack.router.getStateForAction;
signedInStack.router = {
  ...signedInStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceSignedInScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForAction(action, state);
  },
};

const SignedInNavigator = createDrawerNavigator(
  {
    signedInStack,
  },
  {
    drawerPosition: 'right',
    // contentComponent: SignInMenuItems,
  }
);

const RootSwitch = createSwitchNavigator({
  SignedOutNavigator,
  SignedInNavigator,
});

const AppNavigator = createAppContainer(RootSwitch);

class App extends Component {
  static contextType = AppConsumer;

  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      message: null,
      duration: null,
      ShowToast: this.showToast,
      align: null,
      position: null,
      toastStyle: null,
      errortype: null,
      ShowBadgeCount: this.showBadgeCount,
      notificationCount: 0,
    };
  }

  async componentDidMount() {
    // isSignedIn = await getPrefData(CUST_ID);
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'inactive') {
      removePrefData(PREF_CURRENCY_CON);
    }
  };

  showBadgeCount = props => {
    this.setState({
      notificationCount: props.count,
    });
  };

  showToast = props => {
    this.refs.Toast.showToast(
      typeof props.message === 'function' ? props.message() : props.message,
      props.duration,
      props.align,
      props.position,
      props.toastStyle,
      props.errortype
    );
  };

  storeData = async routeName => {
    try {
      await AsyncStorage.setItem('router', routeName);
      console.log('checking this');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const {
      showToast,
      message,
      duration,
      align,
      position,
      toastStyle,
      errortype,
      notificationCount,
    } = this.state;

    return (
      <AppProvider value={this.state}>
        <StatusBar backgroundColor="#1e2546" barStyle="light-content" />
        <MenuProvider>
          <AppNavigator
            screenProps={{ notificationCount }}
            onNavigationStateChange={(prevState, currentState, action) => {
              const currentRouteName = getActiveRouteName(currentState);
              this.storeData(currentRouteName);
            }}
          />
        </MenuProvider>
        <Toast
          ref="Toast"
          showToast={showToast}
          message={message}
          duration={duration}
          position={position}
          align={align}
          toastStyle={toastStyle}
          errortype={errortype}
        />
      </AppProvider>
    );
  }
}
export default App;
