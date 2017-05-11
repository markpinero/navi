import instadate from "instadate";

export const currentYear = (dob, age) => dob.getFullYear() + age;

export const withinYear = (events, dob, age) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    const startDate = instadate.addYears(dob, age);
    const endDate = instadate.addYears(dob, age + 1);
    if (eventDate >= startDate && eventDate < endDate) {
      return true;
    } else {
      return false;
    }
  });
};
export const startDate = (dob, age) => instadate.addYears(dob, age);

export const StartMonth = (startDate, month) =>
  instadate.addMonths(startDate, month);

export const withinMonth = (events, startDate, month) => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    const startMonth = instadate.addMonths(startDate, month);
    const endMonth = instadate.addMonths(startMonth, 1);
    if (eventDate >= startMonth && eventDate < endMonth) {
      return true;
    } else {
      return false;
    }
  });
};

export const renderClasses = (start, age, birthday, events) => {
  const today = new Date();
  let classes = "sq";
  if (start < today) classes += " alive";
  if (instadate.isSameMonth(birthday, start)) {
    if (age % 5 === 0) classes += " five";
    classes += " birthday";
  }
  let eventClasses = "";
  if (events.length > 0) {
    events.map(
      (event, index) => (eventClasses = eventClasses + " " + event.category)
    );
  }
  return classes + eventClasses;
};

export const tooltipDate = date => instadate.isoDateString(date);

export const renderTooltips = events => {
  let tooltips = "";
  events.map((x, i) => {
    return (tooltips += `${x.event}. `);
  });
  return tooltips;
};
