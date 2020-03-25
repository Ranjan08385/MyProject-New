/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from 'react-native-popup-menu';
import Customtext from '../customText';

const image = require('../../assets/images/info.png');

const { Popover, SlideInMenu } = renderers;

const styles = StyleSheet.create({
  menuOptions: {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    borderWidth: 0,
    minHeight: 40,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  contentText: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17,
  },
});

class InfoTip extends Component {
  render() {
    const {
      preferredPlacement,
      placement,
      OptionsField,
      onMenuOpen,
      propRenderer,
      anchorStyle,
      styleMenuOptions,
      children,
      menuStyle,
      onMenuClose,
      onSelect,
      ref,
    } = this.props;

    return (
      <Menu
        style={menuStyle}
        onOpen={onMenuOpen}
        onClose={onMenuClose}
        onSelect={onSelect}
        ref={ref}
        renderer={propRenderer || Popover || SlideInMenu}
        rendererProps={{
          preferredPlacement: preferredPlacement || 'top',
          placement,
          anchorStyle: [
            {
              backgroundColor: 'black',
            },
            anchorStyle,
          ],
        }}
      >
        <MenuTrigger>
          {children || (
            <Image
              source={image}
              style={{
                width: 20,
                height: 20,
              }}
            ></Image>
          )}
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={[styles.menuOptions, styleMenuOptions]}>
          <MenuOption>
            {typeof OptionsField === 'string' ? (
              <Customtext style={styles.contentText}>{OptionsField}</Customtext>
            ) : (
              OptionsField
            )}
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
}

export default InfoTip;
