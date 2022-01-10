import { Link, useNavigate  } from 'react-router-dom';
import { Container, Figure, Input, Button, P, Form } from './styles';
import { useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import logo from "../../assets/images/trackit.png";
import Spinner from '../Spinner';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react/cjs/react.development';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setImage } = useContext(UserContext);
    const { promiseInProgress } = usePromiseTracker();
    let navigate = useNavigate();

    if (localStorage.length > 0) {
        const serializedUser = localStorage.getItem("user");
        const user = JSON.parse(serializedUser);
        setToken(user.token);
        setImage(user.image);
        navigate("/hoje");
    }

    function handleSignIn(event) {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        function fetch() {
            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data);
            promisse.then(handleResponse);
            promisse.catch(handleError);
            return promisse ;
        }

        function handleResponse(response) {
            const user = response.data;
            setImage(user.image);
            setToken(user.token);
            const serializedUser = JSON.stringify(user);
            localStorage.setItem("user", serializedUser);
            navigate("/hoje");
        }

        function handleError(error) {
            if (error.response.status === 422) {
                alert("Preencha todos os campos corretamente!")
            } else if (error.response.status === 401) {
                alert("Usuário ou senha incorreta, verifique!")
            }
            console.dir(error);
        }
        trackPromise(fetch());
    }

    return (
        <Container>
            <Figure>
                <img src={logo} alt="logo"/>
            </Figure>
            <Form onSubmit={handleSignIn}>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={promiseInProgress} placeholder='email'></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={promiseInProgress} placeholder='senha'></Input>
                <Button type='submit' hide={promiseInProgress}><Spinner /><p>Entrar</p></Button>
            </Form>
            <Link to="/cadastro">
                <P>Não tem uma conta? Cadastre-se!</P>
            </Link>
        </Container>
    );
}

export default Login;

