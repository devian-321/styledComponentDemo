import axios from "axios";
import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {ModalBackground,ModalMain,ModalHeading,ModalBody,ModalImage,ModalHeader,ModalBack, ModalCancel} from "./styles"

function View(props){
    const imageUrl = props.imageUrl;
    

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


