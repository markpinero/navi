import React from "react";
import ReactTooltip from "react-tooltip";
import * as DateUtils from "../../utils/DateUtils";

const Month = ({ start, birthday, events }) => {
  const tooltipDate = DateUtils.tooltipDate(start);
  return (
    <div
      key={start}
      className={DateUtils.renderClasses(start, birthday, events)}
    >
      <div data-tip={tooltipDate} className="test" />
      {events.length > 0
        ? <ReactTooltip place="bottom" type="dark" effect="solid" />
        : null}
    </div>
  );
};

export default Month;
