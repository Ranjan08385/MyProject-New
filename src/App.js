/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
// App.js - WEB
import React, { Component } from 'react';
import { View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Notifications from 'react-notify-toast';
import { AppProvider } from './AppContext';
import iconFont from './assets/fonts/icomoon.ttf';
import LoaderComponent from './components/loaderComponent';
import Toast from './components/Toast';
import HomePage from './pages/home/landingPage';
import DashBoard from './pages/dashBoard/dashboard';
import Facility from './pages/facility/facility';
import Provider from './pages/provider/provider';
import ManageUser from './pages/manageUser/manageUser';
import Conflicts from './pages/resolveConflicts/resolveConflicts';

import RoutesGenerator from './utils/route_wrapper';
import CacheBuster from './CacheBuster';
import { makeSessionId } from './utils/helperUtils';

const routeMap = {
  HomePage: {
    component: HomePage,
    path: '/',
    exact: true,
  },
  DashBoard: {
    component: DashBoard,
    path: '/dashboard',
  },
  Facility: {
    component: Facility,
    path: '/facility',
  },
  Provider: {
    component: Provider,
    path: '/provider',
  },
  ManageUser: {
    component: ManageUser,
    path: '/manage-user',
  },
  Conflicts: {
    component: Conflicts,
    path: '/resolve-conflicts',
  },
};

const iconFontStyles = `@font-face {
      src: url(${iconFont});
      font-family: IcoMoon;
    }`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheetss
document.head.appendChild(style);
// Disable the right click
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
} else {
  // production code
  window.onload = function() {
    document.addEventListener(
      'contextmenu',
      function(e) {
        e.preventDefault();
      },
      false
    );
    document.addEventListener(
      'keydown',
      function(e) {
        // document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
          disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          disabledEvent(e);
        }
        // "S" key + macOS
        if (
          e.keyCode == 83 &&
          (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
        ) {
          disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
          disabledEvent(e);
        }
        // "F12" key
        if (e.keyCode == 123) {
          disabledEvent(e);
        }
      },
      false
    );
    function disabledEvent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
  document.addEventListener('contextmenu', event => event.preventDefault());
}

export const secKey = makeSessionId(16);

class App extends Component {
  constructor(props) {
    super(props);
    this.Toaster = React.createRef();
    this.loader = React.createRef();
    this.state = {
      showToast: false,
      message: null,
      duration: null,
      ShowToast: this.showToast,
      align: null,
      position: null,
      toastStyle: null,
      errortype: null,
      ShowLoader: this.showLoader,
    };

    if (window.history != undefined) {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function() {
        window.history.go(1);
      };
    }
  }

  componentDidMount() {
    console.log('app js ccomponetdidmount');
  }

  showLoader = props => {
    if (this.loader && this.loader.current) {
      this.loader.current.showLoader(props.isLoading);
    }
  };

  showToast = props => {
    // console.log('showtoast', this);
    this.Toaster.current.showToast(
      typeof props.message === 'function' ? props.message() : props.message,
      props.duration,
      props.align,
      props.position,
      props.toastStyle,
      props.errortype
    );
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
    } = this.state;

    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          // console.log('props', loading, isLatestVersion);

          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          } else {
            return (
              <View style={{ flex: 1 }}>
                <AppProvider value={this.state}>
                  <MenuProvider>
                    <View
                      style={{
                        backgroundColor: '#fcfcfc',
                        height: '100vh',
                        width: '100vw',
                        overflowX: 'hidden',
                      }}
                    >
                      {RoutesGenerator({ routeMap })}
                    </View>
                    <Notifications></Notifications>

                    <Toast
                      ref={this.Toaster}
                      showToast={showToast}
                      message={message}
                      duration={duration}
                      position={position}
                      align={align}
                      toastStyle={toastStyle}
                      errortype={errortype}
                    />
                  </MenuProvider>

                  <LoaderComponent ref={this.loader} />
                </AppProvider>
              </View>
            );
          }
        }}
      </CacheBuster>
    );
  }
}

export default App;
