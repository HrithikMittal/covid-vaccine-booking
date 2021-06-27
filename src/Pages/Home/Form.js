import React, { useState } from "react";
import { useQuery } from "react-query";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AutoComplete from "../../components/AutoComplete";
// import CustomDatePicker from "../../components/DatePicker";

import {
  getStates,
  getDistricts,
  getSlotsByPincode,
  getSlotsByDistrict,
} from "../../apis";

const Forms = () => {
  const [selectedState, setSelectedState] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [pincode, setPincode] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data: states, isLoading: statesLoading } = useQuery(
    "states",
    () => getStates(),
    {
      staleTime: 1000 * 60 * 15,
      cacheTime: 1000 * 60 * 15,
    }
  );

  const { data: districts, isLoading: districtsLoading } = useQuery(
    ["districts", selectedState],
    () => getDistricts(selectedState),
    {
      staleTime: 1000 * 60 * 15,
      cacheTime: 1000 * 60 * 15,
    }
  );

  const handlePincode = (e) => {
    setPincode(e.target.value);
    setSelectedDistrict({});
  };

  const handleSearch = () => {
    if (pincode) {
      getSlotsByPincode(pincode, selectedDate);
    } else if (selectedDistrict?.district_id) {
      getSlotsByDistrict(selectedDistrict.district_id, selectedDate);
    }
  };

  return (
    <div className="formContainer">
      <div className="formFirstRow">
        {!statesLoading && (
          <AutoComplete
            data={states?.states ? states.states : []}
            onSelected={setSelectedState}
            id="states"
            label="States"
          />
        )}
        {!districtsLoading && (
          <AutoComplete
            data={districts?.districts ? districts.districts : []}
            onSelected={setSelectedDistrict}
            id="districts"
            label="Districts"
          />
        )}
        <TextField
          id="outlined-basic"
          label="Pin Code"
          variant="outlined"
          onChange={handlePincode}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Forms;
