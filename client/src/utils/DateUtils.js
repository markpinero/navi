import instadate from 'instadate';

export const withinYear = (event, dob, age) => {
  const eventDate = new Date(event.date);
  const dateOfBirth = new Date(dob);
  const startDate = instadate.addYears(dateOfBirth, age);
  const endDate = instadate.addYears(dateOfBirth, age + 1);
  if (eventDate >= startDate && eventDate < endDate) {
    return true;
  } else {
    return false;
  }
};
