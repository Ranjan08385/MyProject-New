import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainPage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eef0ed',
    position: 'absolute',
  },
  container: {
    width: '100%',
  },
  container_LAPTOP: {
    width: '80%',
    height: '85%',
    position: 'absolute',
    // borderWidth: 1,
    marginTop: '7%',
    marginLeft: '20%',
  },
  cardView: {
    flexDirection: 'column',
    margin: '7%',
  },
  cardView_LAPTOP: {
    flexDirection: 'row',
    marginLeft: '1%',
  },
  facilityList: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: '5%',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 5,
    borderRadius: 10,
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  facilityList_LAPTOP: {
    backgroundColor: '#fff',
    width: '25%',
    // height: '25%',
    marginTop: '0%',
    marginLeft: '5%',
    marginRight: '1%',
    marginBottom: '5%',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 5,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  secOne: {
    width: '100%',
    // height: '100%',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  imgSec: {
    width: '30%',
  },
  facilityName: {
    width: '70%',
    marginLeft: 10,
    padding: 5, 
  },
  imgStyle: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hospitalType: {
    fontSize: 14,
    color: '#818583',
    marginTop: 5,
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: '#458757',
    // marginLeft: 10,
    // marginRight: 10,
  },
  optionImg: {
    width: '25%',
    alignItems: 'center',
  },
  optionImgStyle: {
    width: 25,
    height: 25,
  },
  favIcon: {
    alignSelf: 'flex-end',
    width: 20,
    marginRight: -24,
    marginTop: -12,
  },
  favIconImage: {
    width: 30,
    height: 30,
  }
})