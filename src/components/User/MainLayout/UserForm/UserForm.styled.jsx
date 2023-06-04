import styled from '@emotion/styled';
import {  Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Icon } from "images/svg/avatar.svg"
import { ReactComponent as Plus } from "images/svg/plus.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
 
  h1 {
    margin-top: 59px;
    margin-bottom: 4px;
    height: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.colors.black};
    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
      margin-top: 0px;
      font-size: 18px;
      line-height: calc(18 / 18);
    }
  }
`;

export const FormUser = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    position: unset;
  }
`;

export const ContainerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 115px;
  top: -30px;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    position: relative;
    margin-top: 40px;
    margin-bottom: 14px;
    left: 0px;
    top: 0px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const SvgAvatar = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.accent};
  
`;

export const IconUser = styled(Icon)`
  background-color: ${({ theme }) => theme.colors.white};
  fill: rgba(62, 133, 243, 0.18);
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 43px;
  top: 62px;
  @media screen and (min-width: 768px) {
    left: 76px;
    top: 106px;
  }
`;

export const AddBtn = styled(Plus)`
  background-color: ${({ theme }) => theme.colors.accent};
  fill: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const User = styled.p`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const BlockInput = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 299px;
  height: 392px;
  margin-bottom: 80px;

  p {
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
  
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    height: 264px;
  }
`;

export const LabelInput = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.colors.borderInputActive};
  height: auto;
`;



export const Input = styled.input`
    box-sizing: border-box;
    width: 354px;
    height: 46px;
    padding: 14px;
    margin-top: 8px;
    background-color: ${({theme}) => (theme.colors.white)};
    color: ${({theme}) => (theme.colors.borderInputActive)};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid;
    border-color: ${({valid, theme}) => {
        switch (valid) {
            case true:
                return theme.colors.saccess;
            case false:
                return theme.colors.failed;
            default:
                return theme.colors.borderInput;
        }           
    }};
    border-radius: 8px;

    :focus {
        border: 1px solid ${({theme}) => (theme.colors.borderInputActive)};
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        height: 54px;
        padding: 18px;
        font-size: 16px;
        line-height: 18px;
    }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const StyledErrorMessage = styled(ErrorMessage) `
  /* position: absolute; */
  /* top: 50px; */
font-weight: 400;
font-size: 10px;
line-height: 14px;
color: #DA1414;
display: "flex";
flex-direction: "column";

`

export const DatePickerWrap = styled.div`
  .react-datepicker {
    border-radius: 16px;
    overflow: hidden;
    border: none;
    &__header {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
    }
    &__month-container {
      background-color: ${({ theme }) => theme.colors.accent};
    }
    &__day {
      color: ${({ theme }) => theme.colors.white};
      &:hover {
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.ligthBlue};
          color: ${({ theme }) => theme.colors.accent};
          opacity: 0.7;
          
        }
      &--weekend {
        opacity: 40%;
      }
      &--today {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.accent};
        
      }
      &--selected {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.ligthBlue};
        color: ${({ theme }) => theme.colors.accent};
        outline: none;
      }
      &--keyboard-selected {
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.ligthBlue};
        color: ${({ theme }) => theme.colors.accent};
        outline: none;
      }
    }
    &__day-name {
      color: ${({ theme }) => theme.colors.white};
    }
    &__current-month {
      color: ${({ theme }) => theme.colors.white};
    }
    &__year {
      
    }
    &__navigation--years {
      background-color: ${({ theme }) => theme.colors.ligthBlue};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin: 5px auto;
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        border: 1px solid ${({ theme }) => theme.colors.white};
      }
      
    }
    &__year-option {
      background-color: ${({ theme }) => theme.colors.accent};
      color: var(--mainWhite);
      &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
        font-size:14px;
        font-weight: 700;
      }      
    }
    &__year-dropdown {
      background-color: ${({ theme }) => theme.colors.accent};
      &::-webkit-scrollbar {
        width: 5px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 12px;
    
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.ligthBlue};
    border-radius: 12px;

  }
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 299px;
  height: 42px;
  margin-bottom: 18px;
  padding-left: 18px;
  border: 1px solid #FAFAFA;
  border-radius: 8px;
  background: transparent;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }

  &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      outline: none;
    }
`;



export const BtnSubmit = styled.button`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 22px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
  }
 :hover {
        background-color: ${({theme}) => (theme.colors.hovered)};
    }
  &:active {
    filter: blur(0.1rem);
  }
`;


