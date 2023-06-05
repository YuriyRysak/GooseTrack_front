import { dayNamesArray } from 'helpers';
import { ListDay, DayBtn } from './MonthCalendarHead.styled';

const days = dayNamesArray;
export const MonthCalendarHead = () => {
  return (
    <ListDay>
      {days.map(day => (
        <li key={day.id}>
          <DayBtn>{day.name.slice(0, 1)}</DayBtn>
        </li>
      ))}
    </ListDay>
  );
};
