import React, { useEffect , useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({children}) => {
    let elRef = useRef(null);
    if(!elRef.current){
        const div = document.createElement('div');
        elRef.current = div
    }
    
    useEffect(()=>{
        const modalRoot = document.getElementById('modal');
        console.log("modalRoot",modalRoot);
        modalRoot.appendChild(elRef.current)
        return () =>  modalRoot.removeChild(elRef.current)
    },[])
    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal