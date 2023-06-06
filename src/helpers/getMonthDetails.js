import { getWeekDetails } from './getWeekDetails';
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
        'Incorrect date format! Please use the format yyyy-mm-dd in getMonthDetails.',
    };
  }
  const date = new Date(dateString);
  const month = date.getMonth();
  const name = monthNamesArray[month];
  const number = month + 1;

  const year = date.getFullYear();
  const amountOfDays = new Date(year, month + 1, 0).getDate();

  const amountOfWeeks = getWeeks(year, month);
  const numberOfFirstWeek = getWeekDetails(
    `${dateString.slice(0, 7)}-01`
  ).number;
  const numberOfLastWeek = getWeekDetails(
    `${dateString.slice(0, 7)}-${amountOfDays}`
  ).number;

  return {
    name,
    number,
    amountOfDays,
    amountOfWeeks,
    numberOfFirstWeek,
    numberOfLastWeek,
  };
};

function getWeeks(year, month) {
  // Внимание: Месяцы нумеруются с 0
  let l = new Date(year, month + 1, 0);
  return Math.ceil((l.getDate() - (l.getDay() ? l.getDay() : 7)) / 7) + 1;
}
