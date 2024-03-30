import styled from 'styled-components';
import Background from '../../assets-react/background2.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
    height: 100%;
`
export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
backdrop-filter: blur(45px);

padding: 50px 36px;
display: flex;
flex-direction: column;

`;

export const H1 = styled.h1`
font-size: 34px;
font-weight: 700;
line-height: 40px;
text-align: center;
color: #EEEEEE;

margin-bottom: 80px;
`;


export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 120px;

border-radius: 14px;
display:flex;
align-items: center;
justify-content: center;
gap: 20px;


background: transparent;
border: 1px solid #ffffff;


font-size: 17px;
font-weight: 700;
line-height: 28px;
color: rgba(255, 255, 255, 1);

cursor: pointer;

&:hover{
    opacity:0.8
}

&:active{
    opacity:0.5
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border-radius: 14px;   
margin-bottom: 34px;

background: #FFFFFF40;
box-shadow: 0px 4px 4px 0px #00000040;

border: none;
outline: none;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}

`





