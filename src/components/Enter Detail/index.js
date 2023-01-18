import React,{useState} from "react";
import {H1,Label,InputChallan,Captcha,SubmitButton} from './form.styles'


function Form() {
    const [inputField,setInputVehicle]=useState({
        vehicleNumber: ''
    })

    const handleChallanChange = (event) =>{
        setInputVehicle({[event.target.vehicleNumber]: event.target.value})
    }
    const submition = ()=>{
        alert(inputField.vehicleNumber)
    }
    return(
                <form>
                     <div>
                         <H1>E-challan Payment</H1>
        
        
                         <InputChallan type="text" 
                                        placeholder="Enter your Challan Number/Vehicle Nmber"
                                        value={inputField.vehicleNumber} 
                                         onChange={handleChallanChange} />
        
                         <Label>
                             <div class="input-container">
                                 <input type="checkbox" class="checkbox" id="check" />
        
                                 <span class="checkbox-text">I'm not a robot</span>
                                
                             </div>
                         </Label>
        
                         <SubmitButton onClick={submition}>SUBMIT</SubmitButton>
        
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