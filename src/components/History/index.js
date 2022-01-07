import Bottom from '../BottomBar';
import Top from '../TopBar';
import { Container} from './styles';

function History() {
    return (
        <Container>
            <Top />
            <h1>Histórico</h1>
            <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
            <Bottom />
        </Container>
    );
};

export default History;