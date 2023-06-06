import { IconPag, PeriodBtn } from 'utils/Buttons/MainButton.styled';
import { PeriodPaginatorContainer } from './PeriodPaginator.styled';
import { useState } from 'react';

export const PeriodPaginator = ({ date, type, changeDate }) => {
  const [buttonText, /* setButtonText */] = useState('JUNE 2023');
  // прописати проптайпи для date, type, changeDate

  // прописати логіку вибору buttonText залежно від type

  // прописати функцію кліку стрілочок - зміна дати/місяця і передача нової дати в changeDate
  // якщо змінюється місяць, то в переданій даті змінюється тільки поле місяця, число лишається попереднім
  
  // стилізувати використовуючи styled.components

  // додаткова фіча:
  // продумати і прописати логіку выдкриття маленького календаря по кнопці з датою/місяцем
  // отримання з нього вибраної дати чи місяця в змінну і передача її в changeDate

  // всі логічні перетворення одного формату дати в іншу можна виносити в окремий файл функції в хелперах

/*   console.log(date);
  const dateRecieved = new Date(date);
  const monthDetails = changeDate(date);
  const year = dateRecieved.getFullYear(); */

  
  return (
    <PeriodPaginatorContainer>
      <button>
          {buttonText}
      </button>
      <PeriodBtn onClick={() => console.log('a')}>
        <IconPag id="left" />
      </PeriodBtn>
      <PeriodBtn onClick={() => console.log('b')} id="right">
        <IconPag />
      </PeriodBtn>
    </PeriodPaginatorContainer>
  );
};
