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
       /* for (let i = 0; i < color.length; i++) {
            const element = color.length;
           // console.log(color[i]);
            const collection = document.getElementsByClassName("color-item");
            if ( i%7 == 0 )
            {
           //     collection[color.length - 1].style.marginRight  = '125px';
            }
        }*/
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
  const [numbers, setNumbers] = useState([]);
  const [numbersC, setNumbersC] = useState([]);
  const generateNumbers = () =>{
    for (let z = 0; z < 37; z++) {
        console.log(z);
        if(z == 0){ setNumbers(prev => ([...prev, {"number":0}])) }
        if(z == 1){ setNumbers(prev => ([...prev, {"number":32}])) }
        if(z == 2){ setNumbers(prev => ([...prev, {"number":15}])) }
        if(z == 3){ setNumbers(prev => ([...prev, {"number":19}])) }
        if(z == 4){ setNumbers(prev => ([...prev, {"number":4}])) }
        if(z == 5){ setNumbers(prev => ([...prev, {"number":21}])) }
        if(z == 6){ setNumbers(prev => ([...prev, {"number":2}])) }
        if(z == 7){ setNumbers(prev => ([...prev, {"number":25}])) }
        if(z == 8){ setNumbers(prev => ([...prev, {"number":17}])) }
        if(z == 9){ setNumbers(prev => ([...prev, {"number":34}])) }
        if(z == 10){setNumbers(prev => ([...prev, {"number":6}])) }
        if(z == 11){setNumbers(prev => ([...prev, {"number":27}])) }
        if(z == 12){setNumbers(prev => ([...prev, {"number":31}])) }
        if(z == 13){setNumbers(prev => ([...prev, {"number":36}])) }
        if(z == 14){setNumbers(prev => ([...prev, {"number":11}])) }
        if(z == 15){setNumbers(prev => ([...prev, {"number":30}])) }
        if(z == 16){setNumbers(prev => ([...prev, {"number":8}])) }
        if(z == 17){setNumbers(prev => ([...prev, {"number":23}])) }
        if(z == 18){setNumbers(prev => ([...prev, {"number":10}])) }
        if(z == 19){setNumbers(prev => ([...prev, {"number":5}])) }
        if(z == 20){setNumbers(prev => ([...prev, {"number":21}])) }
        if(z == 21){setNumbers(prev => ([...prev, {"number":16}])) }
        if(z == 22){setNumbers(prev => ([...prev, {"number":33}])) }
        if(z == 23){setNumbers(prev => ([...prev, {"number":1}])) }
        if(z == 24){setNumbers(prev => ([...prev, {"number":20}])) }
        if(z == 25){setNumbers(prev => ([...prev, {"number":14}])) }
        if(z == 26){setNumbers(prev => ([...prev, {"number":31}])) }
        if(z == 27){setNumbers(prev => ([...prev, {"number":9}])) }
        if(z == 28){setNumbers(prev => ([...prev, {"number":22}])) }
        if(z == 29){setNumbers(prev => ([...prev, {"number":18}])) }
        if(z == 30){setNumbers(prev => ([...prev, {"number":29}])) }
        if(z == 31){setNumbers(prev => ([...prev, {"number":7}])) }
        if(z == 32){setNumbers(prev => ([...prev, {"number":28}])) }
        if(z == 33){setNumbers(prev => ([...prev, {"number":12}])) }
        if(z == 34){setNumbers(prev => ([...prev, {"number":35}])) }
        if(z == 35){setNumbers(prev => ([...prev, {"number":3}])) }
        if(z == 36){setNumbers(prev => ([...prev, {"number":26}])) }
        }
    
      
  }
  useEffect(() => {
    generateNumbers();
  }, []);
  const numArray = numbers.map((num, index) => {
    return(

        <div className="number-item" style={{color:`${index == 0 ? "green":""}${index%2 == 0 ? "red":"black"}`}}>
            {num.number}
        </div>

    );
  })
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
                                    <span style={{color:"#fff"}}> Red:</span> {contadorR}
                                </div>
                                <hr/>
                                <div>
                                    <span style={{color:"#fff"}}>Black: {contadorB}</span>
                                </div>
                                <hr/>
                                <div className="dominante">
                                    <p style={{color:"greenyellow"}}>Dominate:{ dominante == 1 ? <Red />:<Black />}</p>
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
                            <div className="numbers">
                                {
                                    numArray
                                }
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