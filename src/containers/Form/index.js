import React,{useEffect, useState} from "react";
import {H1,Label,InputChallan,Captcha,SubmitButton,RadioChallanInput} from './form.styles'
import { Link,useParams } from "react-router-dom";




function Form() {
   
   const [inputField,setInputVehicle] = useState("");
   const [checkboxVerification ,setCheckbox]= useState(false);
   const [radioChoice,setRadioChoice] = useState("vehicleNumber");

    const handleChallanChange = (e) =>{
        setInputVehicle(e.target.value); //for the input Challan number.
    }


    const handleRadioChoice = (e)=>{       // it can differenciate between challan and vehicle number so far.
                                            // With default as vehicle Number. 
        // console.log(e.target.value);
       let radioStatus = e.target.value;
       setRadioChoice(e.target.value);
        // console.log(radioChoice);
       if(radioStatus =="challanNumber"){
        console.log("it is challan number");
       }
       else {
        console.log("it is vehicle Number");
       }
        

    }

    // const enableButton = (e)=>{

    //     // var checker = document.getElementById('checkme');
    //     // var sendbtn = document.getElementById('submitButtom');
    //     // checker.CheckForCaptcha = ()=>{
    //     // if(this.checked){
    //     // sendbtn.removeAttribute("disabled");
    //     // } else {
    //     // alert("Click the checkbox");
    //     // }

    // // }
    // }

    const handleSubmit = (e)=>{
         e.preventDefault();
        //  console.log(inputField);
         if(!checkboxVerification){
            alert("you haven't checked the box");   /// if checkbox is not checked.
         }else {
            console.log(inputField); /// when the check box is checked.
         }
       

    }
    useEffect(()=>{
        console.log(radioChoice);
    },[radioChoice])


    return(
                <form >
                     <div>

                        {/*  E-challan payment header */}

                         <H1>E-challan Payment</H1>


                         {/*  radio Button */}

                         <div>
                            <label for="challanNumber">ChallanNumber</label>
                            <input type="radio" 
                                    id="challanNumber" 
                                    name="radioChoice" 
                                    value="challanNumber" 
                                    onChange={handleRadioChoice} 
                                    checked={radioChoice == "challanNumber"}> 
                            </input>
    
                            <label for="vehicleNumber">vehicleNumber</label>
                            <input type="radio" 
                                    id="vehicleNumber" 
                                    name="radioChoice" 
                                    value="vehicleNumber" 
                                    onChange={handleRadioChoice}  
                                    checked={radioChoice=="vehicleNumber"}> 
                            </input>
                        </div>
        
                        {/*  Challan/VehicleNumber */}

                         <InputChallan type="text" 
                                        placeholder="Enter your Challan Number/Vehicle Number"
                                        value={inputField} 
                                         onChange={handleChallanChange} />

                       
                        {/* CheckBox */}

                         <Label>
                             <div class="input-container">
                                 <input type="checkbox"
                                         class="checkbox" 
                                         id="checkme" 
                                         onClick= {(e)=>setCheckbox(e.target.checked)} />
        
                                 <span class="checkbox-text">I'm not a robot</span>
                                
                             </div>
                         </Label>

                         {/* SubmitButton */}

                         <Link to={"./PaidChallan"}>
                         <SubmitButton 
                            type="submit" 
                            onClick={handleSubmit} 
                            id="submitButton" > SUBMIT
                         </SubmitButton>
                         </Link>
                       
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