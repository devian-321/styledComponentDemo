import { Link } from "react-router-dom";
import styled from "styled-components";
import $ from "jquery";


export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 30px;
    width: 1279px;
`
export const HeadSubContainer= styled.header`
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    


`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const PayButton = styled.button`

    position: relative;
    width: 173px;
    height: 45px;

    background: #1D2D4E;
    border-radius: 4px;
    color: white;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
`


export const LiU = styled.li`
    position: relative;
width: 109px;
height: 17px;
/* left: 80px;
top: 235px; */

font-family: 'InterExtraLight';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* color: #2D2D32; */
color: ${props => props.paidviolation ? "#2D2D32" : " #F58706"};
list-style-type: none;

`

export const LiP = styled.li`
    position: relative;
width: 92px;
height: 17px;
margin-left: 30px;

font-family: 'InterExtraLight';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */
color: ${props => props.paidviolation ? "#F58706" : " #2D2D32"};
list-style-type: none;

`


export const A = styled.a`
    text-decoration: none;
   



/* color: #2D2D32;


    :link{
    font-family: 'InterExtraLight';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
/* identical to box height */


    /* color: #2D2D32;
    }
    :active{
        color: #F58706;
        text-decoration: underline;
    } */
    /* :visited{
        color: #F58706;
    } */ 
    
    

`