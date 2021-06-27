import CryptoJS from "crypto-js";

export const convertDataIntoJson = (data) => {
  const _decrypted_data = CryptoJS.AES.decrypt(data, process.env.REACT_APP_KEY);
  return JSON.parse(_decrypted_data.toString(CryptoJS.enc.Utf8));
};
