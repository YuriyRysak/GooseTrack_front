import { selectIsIsLoadingUser, selectUser } from 'redux/auth/selectors';
import {
  StyledLink,
  StyledName,
  StyledAvatarContainer,
  StyledLetter,
  StyledAvatar,
} from './UserInfo.styled';
import { useSelector } from 'react-redux';

export const UserInfo = () => {
  const { user: { username, avatarURL } } = useSelector(selectUser);

  const isLoading = useSelector(selectIsIsLoadingUser);

  const firstLetter = username.trim().slice(0, 1).toUpperCase();

  return (
    <StyledLink to="/account">
      <StyledName>{username}</StyledName>
      <StyledAvatarContainer>
        {isLoading ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : !avatarURL ? (
          <StyledLetter>{firstLetter}</StyledLetter>
        ) : (
          <StyledAvatar src={avatarURL} alt="Avatar" />
        )}
      </StyledAvatarContainer>
    </StyledLink>
  );
};
