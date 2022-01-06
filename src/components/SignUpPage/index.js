import { Link } from 'react-router-dom';
import { Container, Figure, Form, Input, Button, P } from './styles';
import logo from "../../assets/images/trackit.png";
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import Spinner from '../Spinner';


function SingUp({ email, setEmail, password, setPassword, name, setName, image, setImage }) {

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
            promisse.then(response => alert("ta indo"));
            promisse.catch(error => alert(error.response.data.message));
            
            return promisse ;
        }
        trackPromise(fetch());
                
    }

    return (
        <Container>
            <Figure>
                <img src={logo} alt="logo"/>
            </Figure>
            <Form onSubmit={handleSignUp}>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='senha'></Input>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='nome'></Input>
                <Input type="url" value={image} onChange={(e) => setImage(e.target.value)} placeholder='foto' ></Input>
                <Button type='submit'><Spinner />Cadastrar</Button>
                
            </Form>
            <Link to="/">
                <P>Já tem uma conta? Faça login!</P>
            </Link>
        </Container>
    );
}

export default SingUp;