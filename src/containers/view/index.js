import React,{useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
import {ModalBackground,ModalMain,ModalHeading,ModalBody,ModalImage,ModalHeader,ModalBack, ModalCancel} from "./styles"

function View(){
    // const {violationId} = useParams();


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

                    </ModalImage>
                </ModalMain>
            </ModalBackground>
            
            
            
            );
}

export default View;


