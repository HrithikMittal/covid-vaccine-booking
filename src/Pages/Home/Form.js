import React, { useState } from "react";
import { useQuery } from "react-query";
import { format } from "date-fns";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import add from "date-fns/add";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import AutoComplete from "../../components/AutoComplete";
import StickyHeadTable from "../../components/Table";

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
  const [selectedDate] = useState(format(new Date(), "dd-MM-yyyy"));

  const [ageLimit, setAgeLimit] = useState(18);
  const [doseNumber, setDoseNumber] = useState("available_capacity_dose1");

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

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const getSession = (sessions, date) => {
    const filterSessions = sessions.filter((session) => {
      if (session.date === date && session.min_age_limit === ageLimit)
        return session;
      else return null;
    });
    return filterSessions[filterSessions.length - 1];
  };

  const handleSearch = async () => {
    let res;
    if (pincode) {
      res = await getSlotsByPincode(pincode, selectedDate);
    } else if (selectedDistrict?.district_id) {
      res = await getSlotsByDistrict(
        selectedDistrict.district_id,
        selectedDate
      );
    }

    let tempColumns = [];

    const date = new Date();
    const date1 = format(date, "dd-MM-yyyy");
    const date2 = format(add(date, { days: 1 }), "dd-MM-yyyy");
    const date3 = format(add(date, { days: 2 }), "dd-MM-yyyy");
    const date4 = format(add(date, { days: 3 }), "dd-MM-yyyy");
    const date5 = format(add(date, { days: 4 }), "dd-MM-yyyy");
    const date6 = format(add(date, { days: 5 }), "dd-MM-yyyy");
    const date7 = format(add(date, { days: 6 }), "dd-MM-yyyy");

    tempColumns = [
      { id: "centerName", label: "Center Name" },
      { id: "feeType", label: "Fee Type" },
      { id: date1, label: date1 },
      { id: date2, label: date2 },
      { id: date3, label: date3 },
      { id: date4, label: date4 },
      { id: date5, label: date5 },
      { id: date6, label: date6 },
      { id: date7, label: date7 },
    ];
    setColumns(tempColumns);

    const temp = res.centers.map((center) => {
      const session1 = getSession(center.sessions, date1);
      const session2 = getSession(center.sessions, date2);
      const session3 = getSession(center.sessions, date3);
      const session4 = getSession(center.sessions, date4);
      const session5 = getSession(center.sessions, date5);
      const session6 = getSession(center.sessions, date6);
      const session7 = getSession(center.sessions, date7);
      const retObj = {
        centerName: center.name,
        centerId: "#" + center.center_id,
        feeType: center.fee_type,
      };
      retObj[date1] = session1 ? session1[doseNumber] : "-";
      retObj[date2] = session2 ? session2[doseNumber] : "-";
      retObj[date3] = session3 ? session3[doseNumber] : "-";
      retObj[date4] = session4 ? session4[doseNumber] : "-";
      retObj[date5] = session5 ? session5[doseNumber] : "-";
      retObj[date6] = session6 ? session6[doseNumber] : "-";
      retObj[date7] = session7 ? session7[doseNumber] : "-";

      return retObj;
    });
    setTableData(temp);
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
        <span style={{ paddingTop: "18px" }}>OR</span>
        <TextField
          id="outlined-basic"
          label="Pin Code"
          variant="outlined"
          onChange={handlePincode}
        />
        <RadioGroup
          aria-label="dose"
          name="dose"
          value={doseNumber}
          row
          onChange={(e) => {
            setDoseNumber(e.target.value);
          }}
        >
          <FormControlLabel
            value="available_capacity_dose1"
            control={<Radio />}
            label="Dose 1"
          />
          <FormControlLabel
            value="available_capacity_dose2"
            control={<Radio />}
            label="Dose 2"
          />
        </RadioGroup>
        <RadioGroup
          row
          aria-label="age_limit"
          name="age_limit"
          value={ageLimit}
          onChange={(e) => {
            setAgeLimit(parseInt(e.target.value));
          }}
        >
          <FormControlLabel value={18} control={<Radio />} label="18+" />
          <FormControlLabel value={45} control={<Radio />} label="45+" />
        </RadioGroup>
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={!selectedDistrict?.district_id && pincode.length !== 6}
        onClick={handleSearch}
      >
        Search
      </Button>
      <StickyHeadTable tableData={tableData} tableColumns={columns} />
    </div>
  );
};

export default Forms;
