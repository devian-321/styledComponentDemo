import { NavLink } from "react-router-dom";
import {LiU,LiP } from "./styled";


const Header = ()=>{
    return(
        <header>
            <nav>
                <ul>
                    
                    <LiU><NavLink to={"/unpaidChallan"}>UnpaidChallan</NavLink></LiU>
                    <LiP><NavLink to = {"/paidChallan"}>PaidChallan</NavLink></LiP>
                </ul>
            </nav>
        </header>
    );
}
export default Header;