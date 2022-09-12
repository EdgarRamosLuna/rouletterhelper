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
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap:wrap ;
        max-width: 770px;
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
        align-items: center;
        justify-content: center;
    }
    .btns {
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn {
        width: 20%;
        position: fixed;
        display: flex;
        gap: 10px;
        justify-content: space-around;
        align-items: center;
        height: 293px;

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
        .btn-r{
            width: 50%;
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
            margin-top: 5px;
        }
    }
    .colors-container .colors-container:nth-child(7n+5){
        
    }
    
`;