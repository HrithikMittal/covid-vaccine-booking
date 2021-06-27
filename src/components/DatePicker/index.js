import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { format } from "date-fns";

const CustomDatePicker = ({ setDate }) => {
  const [displayDate, setDisplayDate] = useState(new Date());

  const handleDateSelection = (d) => {
    setDisplayDate(d);
    setDate(format(d, "dd-MM-yyyy"));
  };

  return (
    <DatePicker
      date={displayDate}
      onDateChange={handleDateSelection}
      locale={enGB}
    >
      {({ inputProps, focused }) => (
        <input
          className={"input" + (focused ? " -focused" : "")}
          {...inputProps}
        />
      )}
    </DatePicker>
  );
};
export default CustomDatePicker;
