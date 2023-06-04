import { ListDay, DayBtn } from './MonthCalendarHead.styled';

const days = [
  { id: '01', name: 'Mon' },
  { id: '02', name: 'Tue' },
  { id: '03', name: 'Wed' },
  { id: '04', name: 'Thu' },
  { id: '05', name: 'Fri' },
  { id: '06', name: 'Sut' },
  { id: '07', name: 'Sun' },
];
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
