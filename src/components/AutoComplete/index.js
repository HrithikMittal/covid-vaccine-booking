import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoComplete(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.data}
      getOptionLabel={(option) => {
        if (props.id === "states") return option.state_name;
        if (props.id === "districts") return option.district_name;
      }}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
      onChange={(e, obj) => {
        console.log("Selected State:", obj);
        props.onSelected(obj);
      }}
    />
  );
}
