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
    const endDate = instadate.addMonths(startDate, month);
    if (eventDate >= startDate && eventDate < endDate) {
      return true;
    } else {
      return false;
    }
  });
};

export const renderClasses = (start, birthday, events) => {
  const today = new Date();
  let classes = "sq";
  if (start < today) classes += " alive";
  if (instadate.isSameMonth(birthday, start)) classes += " birthday";
  if (events.length > 0) {
    classes += events.map((event, index) => ` ${event.category}`);
  }
  return classes;
};

export const tooltipDate = date => instadate.isoDateString(date);
