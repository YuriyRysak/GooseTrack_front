import { patterns } from './index';
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
        'Incorrect date format! Please use the format yyyy-dd-mm in getDateDetails function.',
    };
  }

  const date = new Date(dateString);
  const week = getWeekNumber(date);
  const dayOfTheWeek = dayNamesArray[date.getDay()];

  return {
    date: dateString,
    week: week,
    dayOfTheWeek: dayOfTheWeek,
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
