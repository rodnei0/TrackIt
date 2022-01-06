import Top from "../Top";
import { Container } from './styles';

function Today() {

    const token = localStorage.getItem("token");
    console.log(token);

    return (
        <Container>
            <h1>TESTE DE ROTA</h1>
            <Top />
        </Container>
    );
};

export default Today;