import { Outlet } from 'react-router-dom';
import { TasksColumn, TasksColumnsList } from 'components/User';
import { AuthLink, ListLink } from 'utils/Buttons/MainButton.styled';

const CalendarPage = () => {
  return (
    <div>
      <h3>CalendarPage</h3>
      <Outlet />
      <TasksColumn />
      <AuthLink MainBtn to={'/calendar/:currentDay'}>
        Current Day BTN
      </AuthLink>
      <AuthLink to={'/calendar/month/:currentDate'}>
        Current Month Day BTN
      </AuthLink>
      <TasksColumnsList />
    </div>
  );
};

export default CalendarPage;
