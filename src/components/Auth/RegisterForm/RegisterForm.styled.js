import styled from "@emotion/styled";
// add import of 3 breakpoints
// add import of colors: #FFFFFF #3E85F3 #111111 #DCE3E5 rgba(220, 227, 229, 0.6) 
// check main font size and line height and delete doubling
// check using font family

export const TesterDiv = styled.div`
    background-color: #DCEBF7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export const StyledForm = styled.form`
    //min-height: 469px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF /* change to imported variable */;
    border-radius: 8px;
    width: 100%;
    margin: auto 20px;
    padding: 40px 20px;

    @media screen and (min-width: 375px /* change to imported variable */){
        width: 335px;
    }

    @media screen and (min-width: 768px /* change to imported variable */){
        width: 480px;
    }

    @media screen and (min-width: 1440px /* change to imported variable */){

    }
`;

export const StyledHeading = styled.h2`
    margin-bottom: 8px;
    color: #3E85F3 /* change to imported variable */;
    font-family: 'Inter'; /* check fonts connection */
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035); /* change to imported variable */
`;

export const StyledLabel = styled.label`
    margin-top: 24px;
    color: #111111;
    font-weight: 600;
    font-size: 12px; /* delete if it doubles main one */
    line-height: 15px; /* delete if it doubles main one */
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 14px;
    margin-top: 8px;
    height: 46px;
    background: #FFFFFF; /* change to imported variable */
    border: 1px solid rgba(220, 227, 229, 0.6); /* change to imported variable */
    border-radius: 8px;
    color: #111111;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    ::placeholder {
        color: #DCE3E5;  
        
    }
    :focus {
        border: 1px solid #111111;
        border-radius: 8px;
    }
`;

export const StyledButton = styled.button`
    margin-top: 32px;
    height: 46px;
    background: #3E85F3;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    border-width: 0;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;

`;