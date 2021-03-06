import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  mainPage: {
    width: '100%',
    height: '150%',
    backgroundColor: '#eef0ed',
    position: 'absolute',
  },
  headerFixed: {
    position: Platform.OS === 'web' ? 'sticky' : 'absolute',
    top: 0,
    zIndex: 1,
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
  headTag: {
    marginTop: 30,
    marginLeft: 30,
  },
  headTag_LAPTOP: {
    marginTop: 50,
    marginLeft: 60,
  },
  headTagStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardView: {
    width: '100%',
    padding: '5%',
  },
  cardView_LAPTOP: {
    width: '33%',
    padding: '2%',
  },
  facilityList: {
    backgroundColor: '#fff',
    width: '100%',
    // marginBottom: '5%',
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
    width: '100%',
    margin: '2%',
    // height: '25%',
    // marginTop: '0%',
    // marginLeft: '5%',
    // marginRight: '1%',
    // marginBottom: '5%',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  facilityName: {
    width: '70%',
    marginLeft: 10,
    padding: 5,
  },
  imgStyle: {
    width: 70,
    height: 60,
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
  },
  SectionView: {
    width: '100%',
    // borderWidth: 1,
    // backgroundColor: 'red',
  },
  facilityImage: {
    width: '100%',
    marginTop: 0,
  },
  facilityImage_LAPTOP: {
    width: '100%',
    marginTop: 5,
  },
  hospitalDashboardImg: {
    width: '100%',
    height: 300,
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 300,
  },
  facilityOptions: {
    marginTop: -40,
    backgroundColor: '#fff',
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  facilityOptions_LAPTOP: {
    marginTop: -40,
    backgroundColor: '#fff',
    width: '50%',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#a8a8a8',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  optionImgSec: {
    width: '25%',
    alignItems: 'center',
  },
  optionImgStyleSec: {
    width: 25,
    height: 25,
  },
  optionImgStyleSec_LAPTOP: {
    width: 50,
    height: 50,
  },
  mainPageView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
  },
  hospitalHead: {
    width: '100%',
    position: 'absolute',
    marginTop: 170,
    alignItems: 'center',
  },
  hospitalHead_LAPTOP: {
    alignItems: 'baseline',
    position: 'absolute',
    marginTop: 200,
    marginLeft: 60,
  },
  facName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  facTypeName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 20,
    // fontWeight: 'bold',
  },
  detailsView: {
    width: '100%',
    margin: 20,
    padding: 5,
  },
  detailsView_LAPTOP: {
    width: '70%',
    margin: 50,
    padding: 20,
  },
  detailSec: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  partOne: {
    flex: 1,
    flexDirection: 'row',
  },
  partOneText: {
    width: '90%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: '10%',
    fontSize: 16,
  },
  partTwo: {
    flex: 1,
  },
  partTwoText: {
    color: '#5d5e5e',
    fontSize: 16,
  },
  addFacility: {
    position: 'sticky',
    width: '100%',
    marginTop: 700,
    alignItems: 'flex-end',
  },
  addFacility_LAPTOP: {
    position: 'absolute',
    width: '100%',
    marginTop: 450,
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
  addFacilityBtn: {
    marginRight: 40,
  },
  addFacilityImg: {
    width: 50,
    height: 50,
  },
  excelAndSort: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    paddingLeft: 30,
  },
  excelAndSort_LAPTOP: {
    paddingLeft: 60,
  },
  excelSheet: {
    flex: 1,
  },
  excelImg: {
    width: 25,
    height: 25,
  },
  excelImg_LAPTOP: {
    width: 35,
    height: 35,
  },
  excelText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#706e6e',
  },
  sortOrFilter: {
    flex: 1,
  },
  sortText: {
    marginRight: 10,
    fontSize: 16,
    color: '#706e6e',
  },
  sortImg: {
    width: 25,
    height: 25,
    marginRight: 30,
  },
  sortImg_LAPTOP: {
    width: 25,
    height: 25,
    marginRight: 40,
  },
  clickExcel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '0%',
  },
  clickExcel_LAPTOP: {
    marginRight: '70%',
  },
  clickFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '0%',
  },
  clickFilter_LAPTOP: {
    marginLeft: '60%',
  },
  addNewFac: {
    margin: 35,
  },
  textInputStyle: {
    flexDirection: 'column',
  },
  textInputStyle_LAPTOP: {
    flexDirection: 'row',
  },
  textInputOne: {
    flex: 1,
    padding: 10,
  },
  textInputTwo: {
    flex: 1,
    padding: 10,
  },
  addFacBTN: {
    alignItems: 'center',
    marginTop: 25,
  },
  addFacBTNStyle: {
    width: '50%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#458757',
  },
  addFacBTNStyle_LAPTOP: {
    width: '20%',
  },
  addFacText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  addFacHeadText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addFacImgStyle: {
    width: 40,
    height: 40,
  },
  addFacHead: {
    width: '50%',
    // alignItems: 'center',
    paddingLeft: 10,
  },
  addFacHead_LAPTOP: {
    width: '15%',
  },
  addNewFacImgText: {
    marginTop: 10,
  },
  flatlistStyle: {
    margin: '5%',
  },
  flatlistStyle_LAPTOP: {
    margin: '4%',
  },
})