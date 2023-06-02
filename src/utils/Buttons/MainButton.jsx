//! Стилі всьго цього барахла
import {
  ListLink,
  AuthLink,
  MainBtn,
  MonthDayBtn,
  SecondBtn,
  WrapperSecondBtn,
  AddTaskBtn,
} from '/MainButton.styled';
// ! іконку на всі елементи однакова, зявляться ті які треба або я або ти поставиш в свій елемент
import { CgLogIn } from 'react-icons/cg';

const MainButton = () => {
  return (
    /* //!для того щоб розмістити елемент у себе в файлі просто копіюєте необхідну вам кількість рядків які знаходяться нижче
    ! і також не забуваємо імпортувати необхідні елементи з файлику стилів кнопок MainButton.styled.jsx,*/
    //! в данному випадку  ListLink являє собою контейнер з певною фіксованою шириною і падінгами тому у*/
    //! тих кнопок які за макетом мають довжину на весь батьківський елемент вона стоїть 100%*/
    //! В САМОМУ НИЗУ ПРИКЛАД ТОГО ЩО ВИ ЗАБИРАЄТЕ ДО СЕБЕ В ФАЙЛ*/*/
    <ListLink>
      <li>
        {/*//! лінк  Sign up в голубому кольорі*/}
        <AuthLink color="blue">Sign up</AuthLink>
      </li>
      <li>
        {/*//! лінк  Sign up в білому кольорі*/}
        <AuthLink>Sign up</AuthLink>
      </li>
      <li>
        {/*//! лінк  у вигляді кнопки Log in в білому кольорі*/}
        <AuthLink color="blue" colorbtn="white">
          Log in
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </AuthLink>
      </li>
      <li>
        {/*//! кнопка Log out*/}
        <MainBtn>
          Log out
          <CgLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        {/*//! кнопка Log in з довжиною на весь контейнер*/}
        <MainBtn style={{ width: '100%' }}>
          Log in
          <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        {/*//! кнопка Sign up з довжиною на весь контейнер*/}
        <MainBtn style={{ width: '100%' }}>
          Sign up
          <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
        </MainBtn>
      </li>
      <li>
        {/*//! кнопка Save changes*/}
        <MainBtn padding="50">Save changes</MainBtn>
      </li>
      <li>
        {/*//! кнопка Save up з довжиною на весь контейнер*/}
        <MainBtn style={{ width: '100%' }}>Save</MainBtn>
      </li>
      <li>
        {/*//! кнопка Feedback*/}
        <SecondBtn>Feedback</SecondBtn>
      </li>
      <li>
        {/*//! контейнер з кнопками Edit та Cancel довжина кожної з них 50% від загального контейнера */}
        <WrapperSecondBtn>
          <SecondBtn style={{ width: '50%' }}>Edit</SecondBtn>
          <SecondBtn btn="cancel" style={{ width: '50%' }}>
            Cancel
          </SecondBtn>
        </WrapperSecondBtn>
      </li>
      <li>
        {/*//! контейнер з кнопками Add та Cancel довжина кожної з них 50% від загального контейнера */}
        <WrapperSecondBtn>
          <SecondBtn style={{ width: '50%' }}>
            <CgLogIn style={{ marginLeft: 11, width: 18, height: 18 }} />
            Add
          </SecondBtn>
          <SecondBtn btn="cancel" style={{ width: '50%' }}>
            Cancel
          </SecondBtn>
        </WrapperSecondBtn>
      </li>
      <li>
        <SecondBtn style={{ width: '100%' }} btn="edit">
          <CgLogIn style={{ marginLeft: 11, width: 16, height: 16 }} />
          Edit
        </SecondBtn>
      </li>
      <li>
        {/*//! кнопка Add task з довжиною на весь контейнер*/}
        <AddTaskBtn style={{ width: '100%' }}>
          <CgLogIn style={{ marginLeft: 11, width: 24, height: 24 }} />
          Add task
        </AddTaskBtn>
      </li>
      <li>
        {/*//! кнопка перемикання між місяцем та днем*/}
        <MonthDayBtn>Month</MonthDayBtn>
        <MonthDayBtn swith="day">Day</MonthDayBtn>
      </li>
      {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    </ListLink>
  );
};

export default MainButton;

// !ПРИКЛАД №1
// import { ListLink,AuthLink,
//   SecondBtn,
//   WrapperSecondBtn,
// } from "/MainButton.styled";
// ! контейнер з кнопками Edit та Cancel довжина кожної з них 50% від загального контейнера
// <WrapperSecondBtn>
//   <SecondBtn style={{ width: '50%' }}>Edit</SecondBtn>
//   <SecondBtn btn="cancel" style={{ width: '50%' }}>
//     Cancel
//   </SecondBtn>
// </WrapperSecondBtn>

// !ПРИКЛАД №2
//         import {
//     AddTaskBtn,
// } from "/MainButton.styled";
// ! іконку на всі елементи однакова, зявляться ті які треба або я або ти поставиш в свій елемент
//   import { CgLogIn } from 'react-icons/cg';
// ! кнопка Add task з довжиною на весь контейнер
// <AddTaskBtn style={{ width: '100%' }}>
//   <CgLogIn style={{ marginLeft: 11, width: 24, height: 24 }} />
//   Add task
// </AddTaskBtn>
