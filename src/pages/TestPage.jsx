import { PeriodPaginator } from 'components/User';
import { getMonthDetails } from 'helpers';

const TestPage = () => {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h2>СЮДИ ТЕСТУЄМО СВОЇ КОМПОНЕНТИ</h2>
      <PeriodPaginator
        date={'2023-06-06'}
        type={'month'}
        changeDate={getMonthDetails}
      />
    </div>
  );
};

export default TestPage;
