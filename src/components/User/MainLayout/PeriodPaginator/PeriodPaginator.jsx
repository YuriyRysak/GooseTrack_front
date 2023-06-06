import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import {
  ChooseDayBtn,
  DateLabel,
  WrapperPaginator,
  WrapperPeriodBtn,
} from './PeriodPaginator.styled';
import { format } from 'date-fns';
import { getDateDetails } from 'helpers';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  const data = getDateDetails(date);
  const { selectDate, monthName, year } = data;
  const dateFormated = format(selectDate, 'd MMM yyyy');
  return (
    <div style={{ width: '768px', padding: '32px 32px' }}>
      <WrapperPaginator>
        <ChooseDayBtn
          onClick={() => console.log('calls the calendar to select a date')}
        >
          <DateLabel dateTime={date} style={{ color: 'white' }}>
            {type === 'month' ? (
              <>
                {monthName} {year}
              </>
            ) : (
              <>{dateFormated}</>
            )}
          </DateLabel>
        </ChooseDayBtn>
        <WrapperPeriodBtn>
          <PeriodBtn onClick={() => console.log(monthName)}>
            <IconPag id="left" />
          </PeriodBtn>
          <PeriodBtn onClick={() => console.log(year)} id="right">
            <IconPag />
          </PeriodBtn>
        </WrapperPeriodBtn>
      </WrapperPaginator>
    </div>
  );
};
