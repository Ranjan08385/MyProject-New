/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';

const GetAllFacility = facilityDetails => {
  // console.log("User Details", facilityDetails);
  return {
    url: 'facility/getAllFacility',
    payload: facilityDetails,
    type: Types.GET,
    tag: 'Get All Facility',
    headers: { 'Content-Type': 'application/json' },
  };
};

export default GetAllFacility;
