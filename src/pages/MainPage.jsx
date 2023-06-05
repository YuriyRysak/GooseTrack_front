import { Header, Description, ReviewsSlider } from 'components/Main';
import { MainWrapper } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Description />
        <ReviewsSlider />
      </MainWrapper>
    </>
  );
};

export default MainPage;
