import Bottom from "../BottomBar";
import Top from "../TopBar";
import { Container } from './styles';

function Today() {

    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);

    console.log(user);

    return (
        <Container>
            <Top />
            <h1>TESTE DE ROTA</h1>
            <Bottom />
        </Container>
    );
};

export default Today;