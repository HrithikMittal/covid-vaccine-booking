import axios from "axios";
import { convertDataIntoJson } from "../root/conversion";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getStates = async () => {
  const res = await axios.get(BASE_URL + "/states");
  const _res = convertDataIntoJson(res.data.data);
  return _res.data;
};

export const getDistricts = async (district) => {
  const res = await axios.get(
    BASE_URL + `/districts?districtId=${district.state_id}`
  );
  const _res = convertDataIntoJson(res.data.data);
  return _res.data;
};

export const getSlotsByDistrict = async (district, date) => {
  const res = await axios.get(
    BASE_URL + `/calendarByDistrict?districtId=${district}&date=${date}`
  );
  const _res = convertDataIntoJson(res.data.data);
  return _res;
};

export const getSlotsByPincode = async (pincode, date) => {
  const res = await axios.get(
    BASE_URL + `/calendarByPin?pincode=${pincode}&date=${date}`
  );
  const _res = convertDataIntoJson(res.data.data);
  return _res;
};
