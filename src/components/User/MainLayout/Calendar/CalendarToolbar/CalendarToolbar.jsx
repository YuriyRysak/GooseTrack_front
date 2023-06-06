import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper, PeriodPaginatorContainer } from './CalendarToolbar.styled';
import { useSelector } from 'react-redux';

export const CalendarToolbar = ({date, type, changeType}) => {

  
  return (
    <CalendarToolbarWrapper>
        <PeriodPaginator
          date={date}
          type={type}
          changeDate={''}
        />
        
      {/* <PeriodTypeSelect type={type} today={today} onChangeType={changeType} /> */}
    </CalendarToolbarWrapper>
  );
};

// прописати проптайпс для date враховуючи, що це не просто строка, а ця строка повинна відповідати певному патерну, або повертати тру при виклиці функції валідації
