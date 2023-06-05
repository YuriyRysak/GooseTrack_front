import {
  FeedbackListWraper, FeedbackItem, AvatarContainer, FBInfo, FBName, FBRating, FBText, RatingStar, GreyStar,
  PencilIcon, TrashIcon, EditBlock, EditBtn, TrashBtn
} from './FeedbackList.styled';

export const FeedbackList = () => {
  return (
    <FeedbackListWraper>
      <FeedbackItem>
        <AvatarContainer></AvatarContainer>
        <FBInfo>
          <FBName>Olena Doe</FBName>
          <FBRating>
            <GreyStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar />
          </FBRating>
          <FBText>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</FBText>
        </FBInfo>
        <EditBlock>
          <EditBtn><PencilIcon /></EditBtn>
          <TrashBtn><TrashIcon /></TrashBtn>
        </EditBlock>
      </FeedbackItem>
      <FeedbackItem>
        <AvatarContainer></AvatarContainer>
        <FBInfo>
          <FBName>Olena Doe</FBName>
          <FBRating>
            <GreyStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar />
          </FBRating>
          <FBText>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</FBText>
        </FBInfo>
        <EditBlock>
          <EditBtn><PencilIcon /></EditBtn>
          <TrashBtn><TrashIcon /></TrashBtn>
        </EditBlock>
      </FeedbackItem>
      <FeedbackItem>
        <AvatarContainer></AvatarContainer>
        <FBInfo>
          <FBName>Olena Doe</FBName>
          <FBRating>
            <GreyStar /><RatingStar /><RatingStar /><RatingStar /><RatingStar />
          </FBRating>
          <FBText>GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.</FBText>
        </FBInfo>
        <EditBlock>
          <EditBtn><PencilIcon /></EditBtn>
          <TrashBtn><TrashIcon /></TrashBtn>
        </EditBlock>
      </FeedbackItem>
    </FeedbackListWraper>
  );
};
