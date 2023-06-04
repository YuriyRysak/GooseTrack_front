import { patterns } from './patterns';
export const dayNamesArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dateRegex = patterns.datePattern;

export const getDateDetails = dateString => {
  if (!dateRegex.test(dateString)) {
    return {
      Error: 'Incorrect date format! Please use the format yyyy-dd-mm.',
    };
  }

  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month - 1, day);
  const week = getWeekNumber(date);
  const dayOfTheWeek = dayNamesArray[date.getDay()];

  return {
    date: dateString,
    week: week,
    dayOfTheWeek: dayOfTheWeek,
  };
};

export const getWeekNumber = date => {
  const onejan = new Date(date.getFullYear(), 0, 1);
  const millisecsInDay = 86400000;
  return Math.ceil(
    ((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
  );
};

console.log(getDateDetails('2024-20-12'));
