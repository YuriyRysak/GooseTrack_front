import { patterns } from './patterns';

export const monthNamesArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dateRegex = patterns.datePattern;

export const getMonthDetails = dateString => {
  if (!dateRegex.test(dateString)) {
    return {
      Error:
        'Incorrect date format! Please use the format yyyy-dd-mm in getMonthDetails.',
    };
  }
  const date = new Date(dateString);
  const month = date.getMonth();
  const name = monthNamesArray[month];
  const number = month + 1;

  const year = date.getFullYear();
  const amountOfDays = new Date(year, month + 1, 0).getDate();

  return {
    name,
    number,
    amountOfDays,
  };
};
