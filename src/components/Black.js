import React from 'react'
import { Blackc } from '../style/Colors'

const Black = (props) => {
  const {numbe, deleteI, inD, colorDa} = props;
    const deleteIt = ()=>{
        if(typeof(deleteI) == 'function'){
            deleteI(inD, colorDa);
        }
    }
  return (
    <Blackc className="color-item">
        <div className="remove-btn" onClick={deleteIt}><span><i class="fa-solid fa-circle-xmark"></i></span></div>
        
        {numbe}
    </Blackc>
  )
}

export default Black