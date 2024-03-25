import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import People from "./assets-react/people.svg";
import Arrow from "./assets-react/arrow-rigth.svg";
import Trash from "./assets-react/trash.svg";
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./styles";



const App = () => {

    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();

    useEffect(() => {

        async function FetchUsers() {

            const { data: newUsers } = await axios.get("http://localhost:3001/users");

            setUsers(newUsers);
        }

        FetchUsers()

    }, [])

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        });



        setUsers([
            ...users, newUser

        ]);



    }

    async function deleteUSer(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`);

        const newUsers = users.filter(user => user.id !== userId);

        setUsers(newUsers);
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

            </ContainerItens>

        </Container>
    );
}

export default App