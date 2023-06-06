export class DateManipulator {
  getNextMonthDate(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let nextMonth;
    let nextYear;

    if (currentMonth === 11) {
      nextMonth = 0;
      nextYear = currentYear + 1;
    } else {
      nextMonth = currentMonth + 1;
      nextYear = currentYear;
    }

    const nextMonthDate = new Date(nextYear, nextMonth, date.getDate());

    return nextMonthDate;
  }

  getPreviousMonthDate(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let previousMonth;
    let previousYear;

    if (currentMonth === 0) {
      previousMonth = 11;
      previousYear = currentYear - 1;
    } else {
      previousMonth = currentMonth - 1;
      previousYear = currentYear;
    }

    const previousMonthDays = new Date(
      previousYear,
      previousMonth + 1,
      0
    ).getDate();

    const currentDay = date.getDate();
    const previousMonthDateDay = Math.min(currentDay, previousMonthDays);

    const previousMonthDate = new Date(
      previousYear,
      previousMonth,
      previousMonthDateDay
    );

    return previousMonthDate;
  }

  getNextWeekDate(date) {
    const nextWeekDate = new Date(date);
    return nextWeekDate.setDate(date.getDate() + 7);
  }

  getPreviousWeekDate(date) {
    const previousWeekDate = new Date(date.getTime());

    // setDate(date.getDate() - 7);

    return previousWeekDate;
  }
}
