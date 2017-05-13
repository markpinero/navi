import React from "react";
import ReactTooltip from "react-tooltip";
import * as DateUtils from "../../utils/DateUtils";

const Month = ({ start, age, birthday, events }) => {
  const tooltips = DateUtils.renderTooltips(events);
  const tooltip = (
    <div className="tooltip">
      <div data-tip={tooltips} className="tooltip" />
      <ReactTooltip place="bottom" type="dark" effect="solid" />
    </div>
  );
  return (
    <div
      key={start}
      className={DateUtils.renderClasses(start, age, birthday, events)}
    >
      {events.length > 0 ? tooltip : null}
    </div>
  );
};

export default Month;
