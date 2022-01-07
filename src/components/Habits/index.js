import Bottom from '../BottomBar';
import Top from '../TopBar';
import { Container, Div } from './styles';

function Habits() {
    return (
        <Container>
            <Top />
            <Div>
                <h1>Meus Hábitos</h1>
                <button>+</button>
            </Div>
            <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            <Bottom />
        </Container>
    );
};

export default Habits;