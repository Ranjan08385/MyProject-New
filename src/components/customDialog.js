import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  View,
  ViewPropTypes,
  TouchableWithoutFeedback,
  Text,
  Platform,
  ScrollView,
} from 'react-native';

import CustomText from './customText';

const { OS } = Platform;
class Dialog extends Component {
  renderContent() {
    const { children, contentStyle } = this.props;

    return (
      <View
        style={[
          {
            width: '100%',
            padding: 24,
            paddingTop: 20,
          },
          contentStyle,
        ]}
      >
        {children}
      </View>
    );
  }

  renderTitle() {
    const { title, titleStyle } = this.props;

    const textAlign = OS === 'ios' ? 'center' : null;

    if (title)
      return (
        <CustomText
          style={[
            {
              textAlign,
              color: '#000000DD',
              fontSize: 20,
              margin: 24,
              marginBottom: 0,
            },
            titleStyle,
          ]}
        >
          {title}
        </CustomText>
      );
  }

  renderButtons() {
    const { buttons, buttonsStyle } = this.props;

    const containerStyle =
      OS === 'ios'
        ? {}
        : {
            width: '100%',
            paddingLeft: 24,
            paddingRight: 8,
            paddingTop: 8,
            paddingBottom: 8,
          };

    if (buttons) return <View style={[containerStyle, buttonsStyle]}>{buttons}</View>;
  }

  _renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: '100%' }} />;

    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const {
      dialogStyle,
      visible,
      animationType,
      onRequestClose,
      onShow,
      onOrientationChange,
      onTouchOutside,
      overlayStyle,
      supportedOrientations,
      keyboardDismissMode,
      keyboardShouldPersistTaps,
    } = this.props;

    const dialogBackgroundColor = OS === 'ios' ? '#e8e8e8' : '#ffffff';
    const dialogBorderRadius = OS === 'ios' ? 5 : 1;

    return (
      <Modal
        animationType={animationType}
        transparent
        visible={visible}
        onRequestClose={onRequestClose}
        onShow={onShow}
        onOrientationChange={onOrientationChange}
        supportedOrientations={supportedOrientations}
      >
        <ScrollView
          bounces={false}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            flex: 1,
          }}
          keyboardDismissMode={keyboardDismissMode}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        >
          <View
            style={[
              {
                flex: 1,
                backgroundColor: '#000000AA',
                padding: 24,
              },
              overlayStyle,
            ]}
          >
            {this._renderOutsideTouchable(onTouchOutside)}

            <View
              style={[
                {
                  backgroundColor: dialogBackgroundColor,
                  width: '100%',
                  shadowOpacity: 0.24,
                  borderRadius: dialogBorderRadius,
                  elevation: 4,
                  shadowOffset: {
                    height: 4,
                    width: 2,
                  },
                },
                dialogStyle,
              ]}
            >
              {this.renderTitle()}

              {this.renderContent()}

              {this.renderButtons()}
            </View>

            {this._renderOutsideTouchable(onTouchOutside)}
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

Dialog.propTypes = {
  dialogStyle: ViewPropTypes.style,
  contentStyle: ViewPropTypes.style,
  buttonsStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  buttons: PropTypes.element,
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onShow: PropTypes.func,
  onTouchOutside: PropTypes.func,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  keyboardDismissMode: PropTypes.string,
  keyboardShouldPersistTaps: PropTypes.string,
};

Dialog.defaultProps = {
  visible: false,
  onRequestClose: () => null,
};

export default Dialog;
