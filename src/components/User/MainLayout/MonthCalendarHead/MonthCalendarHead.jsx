import { dayNamesArray } from 'helpers';
import { ListDay, DayBtn, ItemDay } from './MonthCalendarHead.styled';

const days = dayNamesArray;
export const MonthCalendarHead = () => {
  return (
    <ListDay>
      {days.map((day, i) => (
        <ItemDay key={i}>
          <DayBtn id={day}>
            {day}
          </DayBtn>
        </ItemDay>
      ))}
    </ListDay>
  );
};
