/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import LinearGradient from './gradient';
import CustomButton from './customButton';
import Style from '../styles/customButton';
import Hoverable from './hover/hoverable';

export default function CustomLinearOrangeButton(props) {
  const {
    style,
    containerStyle,
    hoverStyle,
    hoverColor,
    colors,
    ...others
  } = props;
  return (
    <View>
      <Hoverable>
        {isHovered => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={
              isHovered
                ? hoverColor || ['#E17019e6', '#D15A20e6', '#C14427e6']
                : colors || ['#428749', '#428749', '#76b37c']
            }
            style={[
              containerStyle,
              Style.commonLinearOrangeGradientButtonContainerStyle
            ]}
          >
            <CustomButton
              style={[
                Style.commonButtonTextStyle,
                Style.darkBlueButtonTextStyle,
                style
              ]}
              containerStyle={[
                containerStyle,

                Style.commonLinearButtonContainerStyle
              ]}
              hoverStyle={{ backgroundColor: 'transparent' }}
              {...others}
            ></CustomButton>
          </LinearGradient>
        )}
      </Hoverable>
    </View>
  );
}
