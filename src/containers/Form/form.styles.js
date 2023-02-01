// e challan payment 

import styled from 'styled-components'



export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;



export const HeadingContainer=styled.h2`
 position: relative;
 display: flex;
 margin-top: 250px;
 justify-content: center;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
`

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const VehicleNumberRadio = styled.div`
display: relative;
font-family: 'InterExtraLight';
font-style: normal;
align-self: flex-start;
margin-right: 50px;


`
export const ChallanNumberRadio = styled.div`
display: relative;
font-family: 'InterExtraLight';
font-style: normal;
align-self: flex-end;
margin-right: 50px;
`



// box-sizing



export const InputContainer = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

`

export const InputChallan=styled.input`
box-sizing: border-box;

position: relative;
width: 543px;
height: 49px;
/* left: 433px;
top: 465px; */

padding-left: 15px;

font-family: 'InterExtraLight';
font-style: normal;

border: 1px solid #B5B5B5;
border-radius: 10px;
`;


export const EmptyForm = styled.h5`
    position: relative;
    width: 217px;
/* height: 29px; */
margin-top: 2px;


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 29px;
align-self: center;



color: red;
`




// Verification Captcha

export const CheckBoxContainer = styled.div`
box-sizing: border-box;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
/* position: relative; */
width: 282px;
height: 56px;
/* left: 564px;
top: 573px; */

background: #FAFAFA;
border: 1px solid #E3E2E3;
border-radius: 6px;
 `;

 export const CheckBoxInput = styled.input`
    margin-left: 15px;
 
 `


//span for I Am not a robot

export const Captcha = styled.span`
position: relative;
width: 89px;
height: 16px;
/* left: 625px;
top: 559px; */

font-family: 'InterExtraLight';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;

color: #6B6B6B;
`;

// submit Button

export const SubmitContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
export const SubmitButton = styled.button`

position: relative;
margin-top: 30px;
width: 107px;
height: 49px;
/* left: 652px;
top: 660px; */

background: #1D2D4E;
border-radius: 2px;
color: white;


`;



// radio buttons

 export const RadioContainer = styled.div`

   
position: relative;
display: flex;
align-items: flex-start;
width: 543px;
margin-top: 50px;
font-weight: 400;
font-size: 13px;
color: #6B6B6B;
/* height: 16px ;
left: 480px;
top: 414px;
padding-left: 50px; */


`

export const ChallanChoice = styled.section`
position: relative;
width: 63px;
height: 16px;
left: 681px;
top: 414px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;

color: #6B6B6B;


`