import React,{useEffect, useState} from "react";
import {MainContainer,
         Container,
         HeadingContainer,
         FormContainer,
         CheckBoxContainer,
         InputChallan,
         SubmitButton,
         RadioContainer,
         EmptyForm,
         VehicleNumberRadio,
         ChallanNumberRadio,
         InputContainer,
         CheckBoxInput,
         Captcha,
         SubmitContainer} from './form.styles'
import { Link} from "react-router-dom";
// import { VehicleNumber } from "../Challan/styled";
// import Challan from "../Challan";




function Form() {
   
   const [inputField,setInputVehicle] = useState("");
   const [checkboxVerification ,setCheckbox]= useState(false);
   const [radioChoice,setRadioChoice] = useState("vehicleNumber");
   const [formError,setFormError] = useState("");
//    const[isValidSubmit,setValidSubmit] = useState(false);


    const handleOnChange = (e) =>{
         setFormError("");
        setInputVehicle(e.target.value); //for the input Challan number.
    }



    const handleRadioChoice = (e)=>{  
       
        let radioStatus = e.target.value;                        
        // console.log(e.target.value);
       setRadioChoice(e.target.value);
        // console.log(radioChoice);
       if(radioStatus =="challanNumber"){

          document.getElementById('enterDetail').placeholder='Enter your Challan ID';
        console.log("it is challan number");
       }
       else {
        console.log("it is vehicle Number");
         document.getElementById('enterDetail').placeholder='Enter your Vehicle Number';
       }
    }
   
    useEffect(()=>{
        console.log(radioChoice);
    },[radioChoice])


    /////////////





    const handleSubmit = (e)=>{
            // e.preventDefault();
        //  console.log(inputField);
        setFormError(validation(inputField));
         if(!checkboxVerification){
            alert("you haven't checked the box"); 
             e.preventDefault();  /// if checkbox is not checked.
         }else {
            
            console.log(inputField); /// when the check box is checked.
         }
         
    }

    useEffect(()=>{
        console.log(formError);
        if(Object.keys(formError).length === 0 ){
            console.log(inputField);
        }
    },[formError])




    const validation = (val)=> {
        let errors= "";
        let regex = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/i;
        if(!val){
            errors = "Please enter your Details";
        }
        return errors;

    }
   


    return(
                <MainContainer>
                <Container>
                <HeadingContainer>E-challan Payment</HeadingContainer>
                <FormContainer>    
                     <RadioContainer>                       
                        <VehicleNumberRadio>
                           <input type="radio" 
                                id="vehicleNumber" 
                                name="radioChoice" 
                                value="vehicleNumber" 
                                onChange={handleRadioChoice}  
                                checked={radioChoice=="vehicleNumber"}> 
                           </input>
                           <label for="vehicleNumber">VehicleNumber</label>
                        </VehicleNumberRadio>


                        <ChallanNumberRadio>
                           <input type="radio" 
                                id="challanNumber" 
                                name="radioChoice" 
                                value="challanNumber" 
                                onChange={handleRadioChoice} 
                                checked={radioChoice == "challanNumber"}> 
                           </input>
                           <label  for="challanNumber">ChallanNumber</label>
                        </ChallanNumberRadio>
                    </RadioContainer>
    
                    {/*  Challan/VehicleNumber */}

                     <InputContainer>
                     <InputChallan type="text" 
                                    id="enterDetail"
                                    placeholder="Enter your Vehicle Number"
                                    value={inputField} 
                                     onChange={handleOnChange} />
                     <EmptyForm>{formError}</EmptyForm>
                     </InputContainer>

                    

                   
                    {/* CheckBox */}

                     <CheckBoxContainer>
                         
                             <CheckBoxInput type="checkbox"
                                     class="checkbox" 
                                     id="checkme" 
                                     onClick= {(e)=>setCheckbox(e.target.checked)} />
    
                             <Captcha class="checkbox-text">I'm not a robot</Captcha>
                            
                         
                     </CheckBoxContainer>

                     {/* SubmitButton */}

                    {/* <SubmitContainer> */}
                           <Link to={`./Challan/${radioChoice}/${inputField}`}>
                              <SubmitButton 
                                 type="submit" 
                                 onClick={handleSubmit} 
                                 id="submitButton" > SUBMIT
                              </SubmitButton>
                           </Link>
                    {/* </SubmitContainer> */}
                   
                     {/* <SubmitButton onClick={handleOnClick}  id="submitButton">SUBMIT</SubmitButton> */}
    
                    
             </FormContainer>
                </Container>
                     
                </MainContainer>
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