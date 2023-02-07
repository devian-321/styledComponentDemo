import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const HeadTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
`

//vehicle Number tag
export const VehicleNumberTag = styled.span`
    position: relative;
    width: 200px;
    height: 27px;
    /* left: 557px;
    top: 94px; */
    font-family: 'InterExtraLight';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    /* line-height: 27px; */
/* identical to box height */
    display: flex;
    align-items: center;
    color: #000000;
`;

//vehicle Number
export const VehicleNumber = styled.span`
    position: relative;
    width: 150px;
    height: 27px;
    /* left: 741px;
    top: 94px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
/* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;

`;




//PendingChallan

export const PendingChallan = styled.div`
        position: relative;

width: 250px;
margin-top: 10px;

font-family: 'InterExtraLight';
font-style: normal;
font-weight: 600;
font-size: 14px;
/* line-height: 27px; */
/* identical to box height */

display: flex;
justify-content: flex-start;
align-items: flex-start;
/* flex-direction: column; */

color: red;

`;


export const Notice = styled.div`
 position: relative;
width: 900px;
height: 10px; 
display: flex;
align-items: center;
justify-content: center;
/* margin-bottom: 30px; */

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

/* identical to box height */


color: #000000;

`











//Table
export const Table = styled.table`
    box-sizing: border-box;
   
   
    
    position: relative;
    width: 1279px;
    height: 705px;
    margin-top: 10px;
    /* left: 82px;
    top: 271px; */
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    border-radius: 2px;
`;

//Columns
export const Column = styled.tr`
    position: relative;
    width: 1279px;
    height: 60px;
    
    /* left: 82px;
    top: 271px; */
    background: #D5D8DE;
    border-radius: 4px;

`;
export const Thead = styled.thead`
    position: relative;
    width: 1279px;
    height: 63px;
    background: #D5D8DE;
    border-radius: 4px;

    font-family: 'InterExtraLight';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    /* color: #2D2D32; */
    `
export const Tbody = styled.tbody`
    position: relative;
    width: 1279px;
    height: 63px;
    /* padding-left: 10px; */
    /* background: #D5D8DE; */
    border-radius: 4px;

    font-family: 'InterExtraLight';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
/* identical to box height */


color: #2D2D32;

`

// export const SelectAll = styled.p`
//     position: relative;
// width: 59px;
// height: 16px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 500;
// font-size: 13px;
// line-height: 16px;
// /* identical to box height */


// color: #2D2D32;

// `
// `
// style={{backgroundColor: '#D5D8DE'}}