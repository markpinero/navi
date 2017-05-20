import React from "react";
import Month from "./Month";
import * as DateUtils from "../../utils/DateUtils";

const Year = ({ thisYearEvents, age, dob }) => {
  const startDate = DateUtils.startDate(dob, age);
  const ageIndicator = <span className="age">{age}</span>;
  let months = [];
  for (let month = 0; month < 12; month++) {
    const startMonth = DateUtils.StartMonth(startDate, month);
    const thisMonthsEvents = DateUtils.withinMonth(
      thisYearEvents,
      startDate,
      month
    );
    months.push(
      Month({
        start: startMonth,
        age: age,
        birthday: startDate,
        events: thisMonthsEvents,
        key: startMonth
      })
    );
  }
  return (
    <div key={age} className="year-grid">
      {age % 5 === 0 ? ageIndicator : null}
      {months}
    </div>
  );
};

export default Year;
