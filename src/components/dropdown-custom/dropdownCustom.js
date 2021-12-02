import React, {useState, useEffect, useRef} from 'react';

 

import './dropdownCustom.scss';

const arrowUp = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.41 0.59L6 5.17L10.59 0.59L12 2L6 8L0 2L1.41 0.59Z" fill="#D4D4D4"/>
            </svg>
const arrowDown = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 8L6 3.42L1.41 8L0 6.59L6 0.59L12 6.59L10.59 8Z" fill="#D4D4D4"/>
                </svg>


const DropdownCustom = ({data, placeholder="push"}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggling = (e) => {
        setIsOpen(!isOpen);
        if(e.target.className !== "dd-header"){
            setIsOpen(false)
        }
        console.log(e.target)
    }

    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = (value) => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    }

    const close = (e) => {
        if(e.target.className !== "dd-header"){
            setIsOpen(false);
        }
    }

    useEffect(()=>{
        document.addEventListener("click", (e)=>close(e)) 
        
        return () => document.removeEventListener("click", (e)=>close(e))
    },[])

    return(
        <div className="dd-wrapper">
            <div className="dd-header" onClick={(e)=>toggling(e)}>{selectedOption || placeholder}
                {!isOpen ? arrowUp : arrowDown}
            </div>
            {isOpen && (
                <div className="dd-list-wrapper">
                <ul className="dd-list">
                    {
                        data.map(el=>(
                            <li className="dd-list-item" onClick={()=>onOptionClicked(el.value)} key={el.id}>{el.value}</li>
                        ))
                    }
                </ul>
            </div>
            )}
            
        </div>
    )
}

export default DropdownCustom;