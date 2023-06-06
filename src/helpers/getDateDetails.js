import { monthNamesArray, patterns } from './index';
export const dayNamesArray = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const dateRegex = patterns.datePattern;

export const getDateDetails = dateString => {
  if (!dateRegex.test(dateString)) {
    return {
      Error:
        'Incorrect date format! Please use the format yyyy-mm-dd in getDateDetails function.',
    };
  }

  const selectDate = new Date(dateString);
  const year = selectDate.getFullYear();
  const month = selectDate.getMonth();
  const monthName = monthNamesArray[month];
  const week = getWeekNumber(selectDate);
  const dayOfTheWeek = dayNamesArray[selectDate.getDay()];

  return {
    date: dateString,
    selectDate,
    monthName,
    week,
    year,
    dayOfTheWeek,
  };
};

export const getWeekNumber = date => {
  const firstJanuaryDayName = new Date(date.getFullYear(), 0, 1);
  const millisecsInDay = 86400000;
  return Math.ceil(
    ((date - firstJanuaryDayName) / millisecsInDay +
      firstJanuaryDayName.getDay() +
      1) /
      7
  );
};
