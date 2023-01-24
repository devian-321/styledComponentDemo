import React,{useState} from "react";
import {H1,Label,InputChallan,Captcha,SubmitButton} from './form.styles'
import { Link,useParams } from "react-router-dom";




// var checker = document.getElementById('checkme');
//     var sendbtn = document.getElementById('submitButtom');
//     checker.handleOnClick = function(){
//     if(this.checked){
//         sendbtn.disabled = false;
//         } else {
//     sendbtn.disabled = true;
//     alert("Click the checkbox");
//     }

//     }

function Form() {
   
   const [inputField,setInputVehicle] = useState("");

    const handleChallanChange = (e) =>{
        setInputVehicle(e.target.value);
    }



    const handleOnClick = (e)=>{
        e.preventDefault();
       console.log(inputField)
        
    }


    



    return(
                <form>
                     <div>
                         <H1>E-challan Payment</H1>
        
        
                         <InputChallan type="text" 
                                        placeholder="Enter your Challan Number/Vehicle Nmber"
                                        value={inputField} 
                                         onChange={handleChallanChange} />
        
                         <Label>
                             <div class="input-container">
                                 <input type="checkbox" class="checkbox" id="checkme" />
        
                                 <span class="checkbox-text">I'm not a robot</span>
                                
                             </div>
                         </Label>
                         {/* <Link to={"./PaidChallan"}>
                         <SubmitButton >SUBMIT</SubmitButton>
                         </Link> */}
                       
                         {/* <SubmitButton onClick={handleOnClick}  id="submitButton">SUBMIT</SubmitButton> */}
        
                     </div>
                 </form>
    )}

export default Form;

// class Form extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             vehicleNumber: ''
//         }


//     }

//     handleChallanChange = (event)=>{
//         console.log(event.target.value);
//         this.setState({
//             vehicleNumber: event.target.value
//         })

//     }



// render() {
//     return(
//         <form>
//             <div>
//                 <H1>E-challan Payment</H1>


//                 <InputChallan type="text"  value={this.state.vehicleNumber} 
                
//                                             onChange={this.handleChallanChange} />

//                 <Label>
//                     <div class="input-container">
//                         <input type="checkbox" class="checkbox" id="check" />

//                         <span class="checkbox-text">I'm not a robot</span>
                        
//                     </div>
//                 </Label>

//                 <SubmitButton>Submit</SubmitButton>

//             </div>
//         </form>
//     )
// }
// }

// export default Form 