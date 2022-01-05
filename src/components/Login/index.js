import { useState } from 'react';
import logo from "../../assets/images/trackit.png";
import { Container, Figure, Input, Button, P } from './style';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Figure>
                <img src={logo} alt="logo"/>
            </Figure>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></Input>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='senha'></Input>
            <Button>Entrar</Button>
            <P>Não tem uma conta? Cadastre-se!</P>
        </Container>
    );
}

export default Login;

