import styled from "styled-components";

export const Blackc = styled.div`
    width:100px;
    height:100px;
    background-color:#000;
    filter: drop-shadow(rgb(255, 255, 255) 0px -1px 6px);
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 100%;
`;
export const Redc = styled.div`
    width:100px;
    height:100px;
    background-color:red;
   // filter: drop-shadow(rgb(255, 255, 255) 0px -1px 6px);
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 100%;
`;
export const HomeS = styled.div`
    .cont-data {
        display: flex;
    }
    .colors-container {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        flex-wrap:wrap ;
        max-width: 800px;
        height:80%;
        overflow-y:auto ;
        div{
            margin:20px 0;
        }
    }
    .colors{
        width:80%;
        height:100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .color-btn{
        width:25%;
        display:flex ;
        position: relative;
        justify-content: center;
        align-items: center;
        @media(max-width:1300px){
            align-items: center;
        }
    }
    .btns {
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .btn {
        width: 30%;
        position: fixed;
        display: flex;
        gap: 10px;
        justify-content: space-around;
        align-items: start;
        height: 293px;
        padding-top: 5%;
        height: 100%;
        box-sizing: border-box;
        flex-wrap:wrap;
        @media(max-width:1500px){
            top: unset;
            align-items: center;
            box-sizing: border-box;
            padding:25px; ;
        }
        button{
            border: 0;
            width: 100px;
            height: 100px;
            color: #fff;
            cursor: pointer;
            filter: drop-shadow(rgb(255, 255, 255) 0px -1px 6px);
            border: 1px solid rgba(255,255,255,0.8);
            border-radius: 100%;
        }
        .btn-r, .btn-b{
            width: 49%;
            @media(max-width:1300px){
                width: 100%;
                margin: 15px 0;
            }
        }
        .btn-r button{
            background:red;
          
        }
        .btn-b button{
            background:#000;
          
        }
        .btn-re{
            width: 100%;
            margin: 15px 0;
        }
        .btn-re  button{
            background: green;
          
        }
        /*button:nth-child(1){
            background:#000;
        }*/
    }
    .btns-btn{
        display: flex;
        gap:5px;
        flex-wrap:wrap ;
    }
    .dominante p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .color-item {
            box-sizing: border-box;
            height: 50px;
            width: 50px;
            margin-top: 15px;
        }
    }
    .colors-container .colors-container:nth-child(7n+5){
        
    }
    .numbers {
        background: #8250ff;
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        filter: drop-shadow(rgb(255,255,255) 0px -1px 6px);
        border: 1px solid rgba(255,255,255,0.8);
        border-radius: 15px;
        box-sizing: border-box;
        padding: 10px;
    }
    .number-item {
        filter: drop-shadow(rgb(31, 0, 108) 0px 5px 5px);
        font-size: 1.3em;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 6%;
        cursor: pointer;
        transition:all 0.3s;
        &:hover{
            scale:1.1;
            transition:all 0.3s;
            filter: drop-shadow(rgb(31, 0, 108) 0px 2px 1px);
        }
    }
`;