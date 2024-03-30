import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets-react/people.svg";
import Arrow from "../../assets-react/arrow-rigth.svg";


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";



const App = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        });



        setUsers([...users, newUser ]);

        navigate("/usuarios");



    }


    return (
        <Container>
            <Image alt="logo-imagem" src={People} />
            <ContainerItens>
                <H1>Ola!</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={inputName}></Input>

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} ></Input>

                <Button onClick={addNewUser}>Cadatrar<img alt="seta" src={Arrow}></img></Button>
            </ContainerItens>

        </Container>
    );
}

export default App