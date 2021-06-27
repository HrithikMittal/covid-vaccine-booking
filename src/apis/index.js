import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const getStates = async () => {
  const res = await axios.get(BASE_URL + "/states");
  return res.data.data;
};

export const getDistricts = async (district) => {
  const res = await axios.get(
    BASE_URL + `/districts?districtId=${district.state_id}`
  );
  return res.data.data;
};

export const getSlotsByDistrict = async (district, date) => {
  const res = await axios.get(
    BASE_URL + `/calendarByDistrict?districtId=${district}&date=${date}`
  );
  return res.data;
};

export const getSlotsByPincode = async (pincode, date) => {
  const res = await axios.get(
    BASE_URL + `/calendarByPin?pincode=${pincode}&date=${date}`
  );
  return res.data;
};
