import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets-react/avatar.svg";
import Arrow from "../../assets-react/arrow-left.svg";
import Trash from "../../assets-react/trash.svg";

import { Container, H1, Image, ContainerItens,  Button, User } from "./styles";



const Users = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {

        async function FetchUsers() {

            const { data: newUsers } = await axios.get("http://localhost:3001/users");

            setUsers(newUsers);
        }

        FetchUsers()

    }, [])


    async function deleteUSer(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`);

        const newUsers = users.filter(user => user.id !== userId);

        setUsers(newUsers);
    }

    function goBackPage(){
        navigate("/")
    }



    return (
        <Container>
            <Image alt="logo-imagem" src={Avatar} />
            <ContainerItens>
                <H1>Usuarios</H1>

                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p><p>{user.age}</p>

                            <button onClick={() => deleteUSer(user.id)}>
                                <img src={Trash} alt="Lata-de-lixo" />
                            </button>

                        </User>
                    ))}
                </ul>

                    <Button onClick={goBackPage}><img alt="seta" src={Arrow}></img>Voltar</Button>
            </ContainerItens>

        </Container>
    );
}

export default Users;