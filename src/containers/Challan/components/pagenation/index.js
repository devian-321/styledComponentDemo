import React from "react";
import { HeadContainer,SubContainer } from "./styles";


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
                <button onClick={getPrevPage()}>
                    Prev
                </button>
                <button onClick={getNextPage()}>
                    Next
                </button>
            </SubContainer>
            <div>
                <p>
                    Page {cPage} of {tPage}
                </p>
            </div>
        </HeadContainer>
    );
}

export default Pagenation