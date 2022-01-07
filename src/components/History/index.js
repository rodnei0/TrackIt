import Bottom from '../BottomBar';
import Top from '../TopBar';
import { Container} from './styles';

function History() {
    return (
        <>
            <Top />
            <Container>
                <h1>Histórico</h1>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
            </Container>
            <Bottom />
        </>
    );
};

export default History;