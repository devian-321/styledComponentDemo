import styled from "styled-components";
import React from "react";

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: flex-start; */
    flex-direction: row;
    padding-top: 30px;
    width: 1270px;
`
export const SubContainer = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    width: 127px;
height: 31px;
background: #FFFFFF;
border: 1px solid #DBDBDB;
border-radius: 2px;

`;

export const PageNumber = styled.a`
width: 20px;
height: 31px;
display: inline-block;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 30px;
/* align-items: center; */
/* left: 127px;
top: 890px; */

:active{
    border: 1px solid #1D2D4E;
}
:hover:not(.active){
    background-color: #ddd;
  /* border-radius: 5px; */
}

    margin: 0 4px;
`

export const Button = styled.a`
    width: 28px;
height: 16px;
/* left: 94px;
top: 898px; */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
/* identical to box height */


color: #1D2D4E;

`



export const P = styled.p`
    width: 77px;
height: 16px;
/* left: 1284px;
top: 890px; */

font-family: 'InterExtraLight';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
/* identical to box height */


color: #1D2D4E;
`;