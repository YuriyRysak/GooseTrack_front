import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';

export const PeriodPaginator = ({ data, type, changeDate }) => {
  return (
    <>
      <PeriodBtn onClick={console.log('left')}>
        <IconPag id="left" />
      </PeriodBtn>
      <PeriodBtn onClick={console.log('right')} id="right">
        <IconPag />
      </PeriodBtn>
    </>
  );
};
