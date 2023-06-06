import { getWeekNumber, patterns, dayNamesArray } from './index';

const dateRegex = patterns.datePattern;

export const getWeekDetails = dateString => {
  if (!dateRegex.test(dateString)) {
    return {
      Error:
        'Incorrect date format! Please use the format yyyy-mm-dd in getWeekDetails function.',
    };
  }

  const days = {};
  const currentDate = new Date(dateString);
  const weekNumber = getWeekNumber(currentDate);

  /* during this cycle, the dayNamesArray array is traversed,
  the index of each element of this array currentDayOfWeek undergoes changes,
  the change of which, in turn, occurs in the last structure of this array,
  the value of which is written to the variable currentDayOfMonth */

  for (let i = 0; i < 7; i += 1) {
    const currentDayOfWeek = currentDate.getDay();
    const currentDayOfMonth = currentDate.getDate();

    days[dayNamesArray[currentDayOfWeek]] = currentDayOfMonth;

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return {
    number: weekNumber,
    days: days,
  };
};
