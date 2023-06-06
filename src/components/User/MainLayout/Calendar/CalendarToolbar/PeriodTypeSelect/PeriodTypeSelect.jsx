import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  // const location = useLocation();
  // const isMonthRoute = location.pathname.includes('month');
  // const isDayRoute = location.pathname.includes('day');

  return (
    <List>
      select
      {/* <Item>
        <StyledNavLink
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`month/${format(today, 'yyyy-MM-dd')}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`day/${format(new Date(), 'yyyy-MM-dd')}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item> */}
    </List>
  );
};
