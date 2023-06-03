import { Outlet } from 'react-router-dom';
import { TasksColumn, TasksColumnsList } from 'components/User';

const CalendarPage = () => {
  return (
    <div>
      <h3>CalendarPage</h3>
      <Outlet />
      <TasksColumn />
      <TasksColumnsList />
    </div>
  );
};

export default CalendarPage;
