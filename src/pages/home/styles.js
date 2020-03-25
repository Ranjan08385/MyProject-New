import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // position: 'absolute',
  },
  imgSection: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // borderColor: '#000',
    // borderWidth: 1,
  },
  loginSection: {
    // width: '100%',
    flex: 1,
  },
  unameAndPass: {
    marginTop: 50,
    marginLeft: '5%',
    marginRight: '5%',
  },
  unameAndPass_LAPTOP: {
    marginTop: 50,
    marginLeft: '35%',
    marginRight: '35%',
  },
  uname: {
    marginBottom: 20,
  },
  password: {
    marginBottom: 20,
  },
  loginBtn: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  loginBtn_LAPTOP: {
    marginLeft: '40%',
    marginRight: '40%',
  },
  loginBtnStyle: {
    backgroundColor: '#458757',
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  loginImage_LAPTOP: {
    width: '100%',
    height: '110%',
  },
  loginLogo: {
    width: 130,
    height: 130,  
  },
  loginText: {
    marginTop: 1,
  },
  loginTextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeText: {
    marginTop: 10,
  },
  welcomeTextStyle: {
    fontSize: 28,
    color: '#fff',
  },
  signInText: {
    marginTop: 20,
  },
  signInTextStyle: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    position: 'absolute',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 50,
  },
  content_LAPTOP: {
    position: 'absolute',
    marginLeft: '35%',
    marginRight: '35%',
    marginTop: 10,
  }
})