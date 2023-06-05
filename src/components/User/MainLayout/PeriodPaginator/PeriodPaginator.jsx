import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  console.log(date);
  const dateRecieved = new Date(date);
  const monthDetails = changeDate(date);
  const year = dateRecieved.getFullYear();
  return (
    <>
      <div style={{ backgroundColor: 'blue' }}>
        <p style={{ color: 'white' }}>
          {monthDetails.name} {year}
        </p>
      </div>
      <PeriodBtn onClick={() => console.log(monthDetails.name)}>
        <IconPag id="left" />
      </PeriodBtn>
      <PeriodBtn onClick={() => console.log(year)} id="right">
        <IconPag />
      </PeriodBtn>
    </>
  );
};
