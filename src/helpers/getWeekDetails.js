import { getWeekNumber, patterns } from './index';

const dateRegex = patterns.datePattern;

export const getWeekDetails = dateString => {
  if (!dateRegex.test(dateString)) {
    return {
      Error:
        'Incorrect date format! Please use the format yyyy-dd-mm in getWeekDetails function.',
    };
  }
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(5, 7)) - 1;
  const day = parseInt(dateString.substring(8, 10));

  const inputDate = new Date(year, month, day);
  const weekNumber = getWeekNumber(inputDate);

  const dayOfWeek = inputDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = inputDate.getDate();

  return {
    number: weekNumber,
    [dayOfWeek]: dayOfMonth,
  };
};
