import { Link } from 'react-router-dom';
import logo from "../../assets/images/trackit.png";
import { Container, Figure, Input, Button, P } from './styles';
import { useState } from 'react';

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
            <Button onClick={(e) => alert(email)}>Entrar</Button>
            <Link to="/signup">
                <P>Não tem uma conta? Cadastre-se!</P>
            </Link>
        </Container>
    );
}

export default Login;

