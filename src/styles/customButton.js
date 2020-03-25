const ReactNative = require('react-native');

const { StyleSheet } = ReactNative;

const style = StyleSheet.create({
  text: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  disabledText: {
    color: '#dcdcdc'
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  commonButtonTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  commonButtonContainerStyle: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    minHeight: 50,
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  commonLinearOrangeGradientButtonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,

    paddingHorizontal: 20
    // paddingVertical: 6,
  },
  commonLinearBlueGradientButtonContainerStyle: {
    // justifyContent: 'center',
    borderRadius: 25
    // minHeight: 50
    // paddingHorizontal: 20
    //  paddingVertical: 6
  },
  commonLinearButtonContainerStyle: { minHeight: 50, justifyContent: 'center' },

  whiteButtonTextStyle: {
    color: '#182340'
  },
  whiteButtonContainerStyle: {
    borderColor: '#182340',
    backgroundColor: 'transparent'
  },
  whiteOrangeButtonTextStyle: {
    color: '#428749'
  },
  whiteOrangeContainerStyle: {
    borderColor: '#428749',
    backgroundColor: 'transparent',
    borderRadius: 4
  },
  darkBlueButtonTextStyle: {
    color: 'white'
  },
  darkBlueButtonContainerStyle: {
    borderColor: '#182340',
    backgroundColor: '#182340'
  },
  orangeButtonTextStyle: {
    color: 'white'
  },
  orangeButtonContainerStyle: {
    borderColor: '#e77817',
    backgroundColor: '#e77817',
    borderRadius: 4
  },
  grayButtonTextStyle: {
    color: '#4a4a4a'
  },
  grayButtonContainerStyle: {
    borderColor: '#e4e6e8',
    backgroundColor: '#e4e6e8'
  }
});

module.exports = style;
