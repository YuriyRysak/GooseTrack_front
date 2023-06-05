import { Outlet } from 'react-router-dom';
import { CalendarContainer, DayAndMonthsContainer } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/User';

const CalendarPage = () => {
  return (
    <CalendarContainer>

      <CalendarToolbar />

      <DayAndMonthsContainer>
        <Outlet />
      </DayAndMonthsContainer>
      
    </CalendarContainer>
  );
};

export default CalendarPage;
