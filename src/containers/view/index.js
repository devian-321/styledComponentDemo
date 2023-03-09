import axios from "axios";
import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {ModalBackground,ModalMain,ModalHeading,ModalBody,ModalImage,ModalHeader,ModalBack, ModalCancel} from "./styles"

function View(props){
    const {violationId} = useParams();
    const [image,setImage] = useState();
    const location = useLocation();
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const imageUrl = location.state?.ChallanImageUrl;
    console.log(imageUrl)
    // console.log(val, "val");

    console.log(violationId);

    useEffect(()=>{
        axios.get(imageUrl,{
            responseType: "arraybuffer"
        }).then((res)=>{
            const base64 = btoa(
                new Uint8Array(res.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
                )
              )
              setImage(base64);
        })
    },[])
    


    return (<ModalBackground>
                <ModalMain>
                    <ModalHeader>
                        <ModalBack>
                           <button>back</button>
                        </ModalBack>
                        <ModalHeading>
                            Challan Details
                        </ModalHeading>
                        <ModalCancel>
                            X
                        </ModalCancel>
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalImage>
                        <img src={`data:;base64,${image}`}></img>
                    </ModalImage>
                </ModalMain>
            </ModalBackground>
            
            
            
            );
}

export default View;


