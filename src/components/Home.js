import React, { useState, useEffect } from 'react';
import { HomeS } from '../style/Colors';
import Black from './Black';
import Red from './Red';


const Home = () => {
  const [contadorR, setContadorR] = useState(0);
  const [contadorB, setContadorB] = useState(0);
  const [color, setColor] = useState([]);
  const [contadorG, setContadorG] = useState(0);
  const [dominante, setDominante] = useState(0);
  const addColor = (color) =>{
    if(color == 1){
        setColor(prevcolor => ([...prevcolor, <Red/>]));
        setContadorR(prev => prev + 1);
    }
    if(color == 2){
        setColor(prevcolor => ([...prevcolor, <Black/>]));
        setContadorB(prev => prev + 1);
    }
    setContadorG(prev => prev + 1);
  }
  const reset = () =>{
    setColor([]);
    setContadorR(0);
    setContadorB(0);
    setContadorG(0);
  }
  const check7 = () =>{
    if(contadorG == 7 ){
        setContadorG(0);
        for (let i = 0; i < color.length; i++) {
            const element = color.length;
            console.log(color[i]);
            const collection = document.getElementsByClassName("color-item");
            if ( i%7 == 0 )
            {
           //     collection[color.length - 1].style.marginRight  = '125px';
            }
        }
    }
    if(contadorR > contadorB){
        setDominante(1);
    }
    if(contadorB > contadorR){
        setDominante(2);
    }
    /*for (let i = 0; i < contadorG.length; i++) {
        const element = contadorG.length - 1;
        
        
    }*/
  }
  useEffect(() => {
    check7();
  }, [color]);
  
  return (
    <HomeS>
        <div className="container">
            
            <div className="cont-data">
                <div className="colors">
                    <div className="colors-container">
                        {color}
                    </div>
                 </div>
                <div className="color-btn">
                   
                    <div className='btns'>
                        <div className='btn'>
                            
                            <div className="colors-contador">
                                <div>
                                    <span style={{color:"red"}}> Red:</span> {contadorR}
                                </div>
                                <hr/>
                                <div>
                                    <span style={{color:"black"}}>Black: {contadorB}</span>
                                </div>
                                <hr/>
                                <div className="dominante">
                                    <p style={{color:"green"}}>Dominate:{ dominante == 1 ? <Red />:<Black />}</p>
                                </div>
                            </div>
                            <div className="btns-btn">
                                <div className="btn-r">
                                    <button onClick={()=> addColor(1)}>Red</button>
                                </div>
                                <div className="btn-b">
                                    <button onClick={()=> addColor(2)}>Black</button>
                                </div>
                                <div className="btn-re">
                                    <button onClick={()=> reset()}>Reset</button>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>    
    </HomeS>
  )
}

export default Home