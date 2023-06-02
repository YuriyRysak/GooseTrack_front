import { StyledInput, StyledLabel, StyledIcon, InputContainer, StyledInputNotification } from './AuthField.styled';
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

export const AuthField = ({valid, onChange, value, name, type, placeholder}) => {
    const themeColors = useTheme().colors;
    

    return (
        <InputContainer>
            <StyledLabel htmlFor={name.toLowerCase()} valid={valid}>{name}</StyledLabel>
            <StyledInput
                id={name.toLowerCase()}
                name={name.toLowerCase()}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                valid={valid}
            />
            {valid === false && <StyledIcon><BiErrorCircle color={themeColors.failed} size={20}/></StyledIcon>}
            {valid && <StyledIcon><BiCheckCircle color={themeColors.saccess} size={20}/></StyledIcon>}
            {valid !== null && <StyledInputNotification valid={valid}>This is  {valid ? ('a CORRECT') : ('an ERROR')} {name.toLowerCase()}</StyledInputNotification>}
        </InputContainer>
    )
};

AuthField.propTypes = {
    valid: PropTypes.oneOf([true, false, null]),
    onChange: PropTypes.func.isRequired, 
    value: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    type: PropTypes.oneOf(['text', 'email']).isRequired, 
    placeholder: PropTypes.string.isRequired
};
