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
         Captcha} from './form.styles'
import { Link} from "react-router-dom";





function Form() {
   
   const [inputField,setInputVehicle] = useState("");
   const [checkboxVerification ,setCheckbox]= useState(false);
   const [radioChoice,setRadioChoice] = useState("vehicleNumber");
   const [formError,setFormError] = useState("");



    const handleOnChange = (e) =>{
         setFormError("");
        setInputVehicle(e.target.value); //for the input Challan number.
    }



    const handleRadioChoice = (e)=>{  
       
        let radioStatus = e.target.value;                        
       setRadioChoice(e.target.value);

       if(radioStatus ==="challanNumber"){

          document.getElementById('enterDetail').placeholder='Enter your Challan ID';
        console.log("it is challan number");
       }
       else {
        
         document.getElementById('enterDetail').placeholder='Enter your Vehicle Number';
         console.log("it is vehicle Number");
       }
    }
   
    useEffect(()=>{
        console.log(radioChoice);
    },[radioChoice])


    /////////////





    const handleSubmit = (e)=>{
           
        setFormError(validation(inputField));
         if(!checkboxVerification){
            alert("you haven't checked the box"); 
             e.preventDefault();  
         }else {
            
            console.log(inputField); 
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
                                checked={radioChoice==="vehicleNumber"}> 
                           </input>
                           <label for="vehicleNumber">Vehicle Number</label>
                        </VehicleNumberRadio>


                        <ChallanNumberRadio>
                           <input type="radio" 
                                id="challanNumber" 
                                name="radioChoice" 
                                value="challanNumber" 
                                onChange={handleRadioChoice} 
                                checked={radioChoice === "challanNumber"}> 
                           </input>
                           <label  for="challanNumber">Challan ID</label>
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

                           <Link to={`./Challan/${radioChoice}/${inputField}`}>
                              <SubmitButton 
                                 type="submit" 
                                 onClick={handleSubmit} 
                                 id="submitButton" > SUBMIT
                              </SubmitButton>
                           </Link>
             </FormContainer>
                </Container>
                     
                </MainContainer>
    )}

export default Form;
