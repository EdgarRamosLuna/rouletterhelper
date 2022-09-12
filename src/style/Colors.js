import styled from "styled-components";

export const Blackc = styled.div`
    width:100px;
    height:100px;
    background-color:#000;
`;
export const Redc = styled.div`
    width:100px;
    height:100px;
    background-color:red;
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
    }
    .color-btn{
        width:20%;
        display:flex ;
        position: relative;
    }
    .btns {
        width: 100%;
        position: absolute;
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
            height: 50px;
            color: #fff;
            
            
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
        }
    }
    .colors-container .colors-container:nth-child(7n+5){
        
    }
    
`;