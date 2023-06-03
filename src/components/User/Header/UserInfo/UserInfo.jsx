import { selectIsIsLoadingUser, selectUser } from 'redux/auth/selectors';
import {
  StyledLink,
  StyledName,
  StyledAvatarContainer,
  StyledLetter,
  StyledAvatar,
} from './UserInfo.styled';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const {
    user: { name },
    userPhoto,
  } = useSelector(selectUser);
  const isLoading = useSelector(selectIsIsLoadingUser);

  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  return (
    <StyledLink to="/main/account">
      <StyledName>{name}</StyledName>
      <StyledAvatarContainer>
        {isLoading ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : !userPhoto ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : (
          <StyledAvatar src={userPhoto} alt="Avatar" />
        )}
      </StyledAvatarContainer>
    </StyledLink>
  );
};

export default UserInfo;
