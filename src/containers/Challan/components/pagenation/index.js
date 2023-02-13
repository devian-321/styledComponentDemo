import React from "react";
import { HeadContainer,SubContainer,P,PageNumber,Button } from "./styles";


function Pagenation({cPage,tPage}) {

    const getPrevPage =()=>{
        console.log("prev page not Functional");
    };

    const getNextPage =()=>{
        console.log("next page not Functional");
    };

    return (
        <HeadContainer>
            <SubContainer>
                <Button onClick={getPrevPage()}>
                    Prev
                </Button>
                <PageNumber>
                    {cPage}
                </PageNumber>
                <PageNumber>{cPage+1}</PageNumber>
                <Button onClick={getNextPage()}>
                    Next
                </Button>
            </SubContainer>
            <div>
                <P>
                    Page {cPage} of {tPage}
                </P>
            </div>
        </HeadContainer>
    );
}

export default Pagenation