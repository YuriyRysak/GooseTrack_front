import { FeedbackFormWrap, FeedbackFormLabel, RatingStarWrap, RatingStar, GreyStar, TextInput, BtnSave} from './FeedbackForm.styled';
// import {SecondBtn} from '../../../../utils/Buttons/MainButton/SecondBtn';

export const FeedbackForm = () => {
  return (
    <FeedbackFormWrap>
      <FeedbackFormLabel>Rating</FeedbackFormLabel>
      <RatingStarWrap>
      <GreyStar /><GreyStar /><RatingStar /><RatingStar /><RatingStar />
      </RatingStarWrap>
      <FeedbackFormLabel>Review</FeedbackFormLabel>
      <TextInput
        name="feedback"
        placeholder='Enter your text ...' />
      <BtnSave >Save</BtnSave>
    </FeedbackFormWrap>
  );
};
