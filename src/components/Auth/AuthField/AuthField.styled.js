import styled from "@emotion/styled";

// add import of 3 breakpoints
// add import of colors
// check main font size and line height and delete doubling
// check using font family

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    margin-top: 24px;
    color: ${(props) => {
        switch (props.valid) {
            case true:
                return '#3CBC81';
            case false:
                return '#E74A3B';
            default:
                return '#111111'
        }           
    }};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    @media screen and (min-width: 768px) {
        margin-top: 18px;
        font-size: 14px;
        line-height: 17px; 
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    height: 46px;
    padding: 14px;
    margin-top: 8px;
    background-color: #FFFFFF;
    color: #111111;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid;
    border-color: ${(props) => {
        switch (props.valid) {
            case true:
                return '#3CBC81';
            case false:
                return '#E74A3B';
            default:
                return 'rgba(220, 227, 229, 0.6)'
        }           
    }};
    border-radius: 8px;

    ::placeholder {
        color: #DCE3E5;    
    }
    :focus {
        border: 1px solid #111111;
    }

    @media screen and (min-width: 768px) {
        height: 54px;
        padding: 18px;
        font-size: 16px;
        line-height: 18px;
    }
`;

export const StyledIcon = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 12px;
    position: absolute;
    bottom: 13px;
    right: 0;

`;

export const StyledInputNotification = styled.p`
    position: absolute;
    bottom: -22px;
    margin: 0 18px;
    position: absolute;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => {
        switch (props.valid) {
            case true:
                return '#3CBC81';
            case false:
                return '#E74A3B';
            default:
                return 'transparant';
        }           
    }};
`;