import { NavLink,link } from "react-router-dom";
import {LiU,LiP, HeadContainer ,HeadSubContainer,Ul,PayButton} from "./styled";


const Header = ()=>{
    return(
        <HeadContainer>
            <HeadSubContainer>
            <nav>
                <Ul>
                    
                    <LiU><NavLink href={"/unpaidChallan"}>UnpaidChallan</NavLink></LiU>
                    <LiP><NavLink href = {"/paidChallan"}>PaidChallan</NavLink></LiP>
                </Ul>
            </nav>
            </HeadSubContainer>
            <PayButton >
                pay 4200
            </PayButton>
            
        
        </HeadContainer>
    );
}
export default Header;