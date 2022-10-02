import React from 'react'
import { Redc } from '../style/Colors'

const Red = (props) => {
    const {numbe, deleteI, inD, colorDa} = props;
    const deleteIt = ()=>{
        if(typeof(deleteI) == 'function'){
            deleteI(inD, colorDa);
        }
    }
    return (
        <Redc className="color-item">
            <div className="remove-btn" onClick={deleteIt}><span><i class="fa-solid fa-circle-xmark"></i></span></div>
            
            {numbe}
        </Redc>
    )
  }

export default Red