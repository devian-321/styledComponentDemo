import { NavLink,link } from "react-router-dom";
import {LiU,LiP, HeadContainer ,HeadSubContainer,Ul,PayButton,A} from "./styled";



const Header = ()=>{
    return(
        <HeadContainer>
            <HeadSubContainer>
            <nav>
                <Ul>
                    
                    <LiU><A href={"/unpaidChallan"}>Unpaid Challan</A></LiU>
                    <LiP><A href = {"/paidChallan"}>Paid Challan</A></LiP>
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