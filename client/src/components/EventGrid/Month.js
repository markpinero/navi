import React from "react";
import * as DateUtils from "../../utils/DateUtils";

const Month = ({ start, birthday, events }) => {
  return (
    <div
      key={start}
      className={DateUtils.renderClasses(start, birthday, events)}
    />
  );
};

export default Month;
