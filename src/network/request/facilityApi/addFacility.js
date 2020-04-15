/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';

const AddFacility = facilityDetails => {
  console.log("User Details", facilityDetails);
  return {
    url: 'facility/add',
    payload: facilityDetails,
    type: Types.POST,
    tag: 'login Service',
    headers: { 'Content-Type': 'application/json' },
  };
};

export default AddFacility;
