import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import { Container, Figure, Form, Input, Button, P } from './styles';
import { usePromiseTracker } from "react-promise-tracker";
import logo from "../../assets/images/trackit.png";
import axios from 'axios';
import Spinner from '../Spinner';

function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    
    const { promiseInProgress } = usePromiseTracker();
    let navigate = useNavigate();

    function handleSignUp(event) {
        event.preventDefault();

        const data = {
            email: email,
            name: name,
            password: password,
            image: image,
        };

        function fetch() {
            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data);
            promisse.then(response => navigate("/"));
            promisse.catch(handleError);
            return promisse ;
        }

        function handleError(error) {
            if (error.response.status === 422) {
                alert("Preencha todos os campos corretamente!")
            } else if (error.response.status === 409) {
                alert("Usuário já cadastrado!")
            }
        }
        
        trackPromise(fetch());
    }

    return (
        <Container>
            <Figure>
                <img src={logo} alt="logo"/>
            </Figure>
            <Form onSubmit={handleSignUp}>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={promiseInProgress} placeholder='email'></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={promiseInProgress} placeholder='senha'></Input>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={promiseInProgress} placeholder='nome'></Input>
                <Input type="url" value={image} onChange={(e) => setImage(e.target.value)} disabled={promiseInProgress} placeholder='foto' ></Input>
                <Button type='submit'><Spinner />Cadastrar</Button>
                
            </Form>
            <Link to="/">
                <P>Já tem uma conta? Faça login!</P>
            </Link>
        </Container>
    );
}

export default SingUp;