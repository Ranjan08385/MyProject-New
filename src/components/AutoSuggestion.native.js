import React from 'react';
import { View } from 'react-native';
import CustomDropDown from './CustomDropdownV2';

class Autosuggestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      GetHeaderforemaildomain,
      styleMenuOptions,
      menuName,
      optionStyle,
      menuOptionHeader,
      menuOptionComponent,
      menuOptionDataArray,
      propRenderer,
      preferredPlacement,
      onSelectionOption,
      onMenuOpen,
      onMenuClose
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <View>
            {this.props.GetHeaderforemaildomain}
            <CustomDropDown
              styleMenuOptions={[
                styleMenuOptions,
                {
                  backgroundColor: '#00000000',
                  borderColor: '#00000000',
                  borderWidth: 0,
                  elevation: 0
                }
              ]}
              menuName={menuName}
              optionStyle={optionStyle}
              menuOptionHeader={menuOptionHeader}
              menuOptionComponent={menuOptionComponent}
              menuOptionDataArray={menuOptionDataArray}
              propRenderer={propRenderer}
              scrollStyle={{ marginBottom: 80, maxHeight: 180 }}
              preferredPlacement={preferredPlacement}
              onSelectionOption={onSelectionOption}
              onMenuOpen={onMenuOpen}
              onMenuClose={onMenuClose}
            ></CustomDropDown>
          </View>
        </View>
      </View>
    );
  }
}
export default Autosuggestion;
