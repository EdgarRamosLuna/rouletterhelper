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
  
  const addColor = (color, numb = 0, index) =>{
    setContadorG(prev => prev + 1);
    if(color == 1){
        setColor(prevcolor => ([...prevcolor, {id:contadorG+1,"content":<Red numbe={numb} deleteI={deleteItems} inD={contadorG+1} colorDa={1} />}]));
        setContadorR(prev => prev + 1);
    }
    if(color == 2){
        setColor(prevcolor => ([...prevcolor, {id:contadorG+1,"content":<Black numbe={numb} deleteI={deleteItems} inD={contadorG+1} colorDa={2} />}]));
        setContadorB(prev => prev + 1);
    }
    
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
  const deleteB = () =>{
    setColor(prev=>{
       // return prev.filter(color=>color.idcat!=idcat) 
    })
    setContadorR(prev => prev - 1);
  }
  //console.log(color);
  const [numbers, setNumbers] = useState([]);
  const [numbersC, setNumbersC] = useState([]);
  const generateNumbers = () =>{
    for (let z = 0; z < 37; z++) {
   //     console.log(z);
        if(z == 0){ setNumbers(prev => ([...prev, {"number":0 , color:"white"}])) }
        if(z == 1){ setNumbers(prev => ([...prev, {"number":32 , color:"red"}])) }
        if(z == 2){ setNumbers(prev => ([...prev, {"number":15 , color:"black"}])) }
        if(z == 3){ setNumbers(prev => ([...prev, {"number":19 , color:"red"}])) }
        if(z == 4){ setNumbers(prev => ([...prev, {"number":4 , color:"black"}])) }
        if(z == 5){ setNumbers(prev => ([...prev, {"number":21 , color:"red"}])) }
        if(z == 6){ setNumbers(prev => ([...prev, {"number":2 , color:"black"}])) }
        if(z == 7){ setNumbers(prev => ([...prev, {"number":25 , color:"red"}])) }
        if(z == 8){ setNumbers(prev => ([...prev, {"number":17 , color:"black"}])) }
        if(z == 9){ setNumbers(prev => ([...prev, {"number":34 , color:"red"}])) }
        if(z == 10){setNumbers(prev => ([...prev, {"number":6 , color:"black"}])) }
        if(z == 11){setNumbers(prev => ([...prev, {"number":27 , color:"red"}])) }
        if(z == 12){setNumbers(prev => ([...prev, {"number":13 , color:"black"}])) }
        if(z == 13){setNumbers(prev => ([...prev, {"number":36 , color:"red"}])) }
        if(z == 14){setNumbers(prev => ([...prev, {"number":11 , color:"black"}])) }
        if(z == 15){setNumbers(prev => ([...prev, {"number":30 , color:"red"}])) }
        if(z == 16){setNumbers(prev => ([...prev, {"number":8 , color:"black"}])) }
        if(z == 17){setNumbers(prev => ([...prev, {"number":23 , color:"red"}])) }
        if(z == 18){setNumbers(prev => ([...prev, {"number":10 , color:"black"}])) }
        if(z == 19){setNumbers(prev => ([...prev, {"number":5 , color:"red"}])) }
        if(z == 20){setNumbers(prev => ([...prev, {"number":24 , color:"black"}])) }
        if(z == 21){setNumbers(prev => ([...prev, {"number":16 , color:"red"}])) }
        if(z == 22){setNumbers(prev => ([...prev, {"number":33 , color:"black"}])) }
        if(z == 23){setNumbers(prev => ([...prev, {"number":1 , color:"red"}])) }
        if(z == 24){setNumbers(prev => ([...prev, {"number":20 , color:"black"}])) }
        if(z == 25){setNumbers(prev => ([...prev, {"number":14 , color:"red"}])) }
        if(z == 26){setNumbers(prev => ([...prev, {"number":31 , color:"black"}])) }
        if(z == 27){setNumbers(prev => ([...prev, {"number":9 , color:"red"}])) }
        if(z == 28){setNumbers(prev => ([...prev, {"number":22 , color:"black"}])) }
        if(z == 29){setNumbers(prev => ([...prev, {"number":18 , color:"red"}])) }
        if(z == 30){setNumbers(prev => ([...prev, {"number":29 , color:"black"}])) }
        if(z == 31){setNumbers(prev => ([...prev, {"number":7 , color:"red"}])) }
        if(z == 32){setNumbers(prev => ([...prev, {"number":28 , color:"black"}])) }
        if(z == 33){setNumbers(prev => ([...prev, {"number":12 , color:"red"}])) }
        if(z == 34){setNumbers(prev => ([...prev, {"number":35 , color:"black"}])) }
        if(z == 35){setNumbers(prev => ([...prev, {"number":3 , color:"red"}])) }
        if(z == 36){setNumbers(prev => ([...prev, {"number":26 , color:"black"}])) }
        }
    
      
  }
  useEffect(() => {
    generateNumbers();
  }, []);
  const numArray = numbers.map((num, index) => {
    return(

        <div className="number-item" style={{color:`${index == 0 ? "green":""}${num.color}`}} onClick={()=> addColor(num.color == "red" ? 1:2, num.number, index) }>
           
           
                {num.number}
     
        </div>

    );
  })
  const deleteItems = (data, colorDa) =>{
    let colorL = color.length;
    setColor(prev=>{
        return prev.filter(color=>color.id!=data);
    });
    setContadorG(prev => prev - 1);
    if(color.length <= 0){
        setColor([]);
        setContadorG(0);
    }
    console.log(color);
  }
  return (
    <HomeS>
        <div className="container">
            
            <div className="cont-data">
                <div className="colors">
                    <div className="colors-container">
                        {
                            color.map((num, index) =>
                                num.content
                            )
                        }
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