import Bottom from '../BottomBar';
import Top from '../TopBar';
import { Container, Div, Span, Input, CancelButton, SaveButton } from './styles';

function Habits() {
    return (
        <>
            <Top />
            <Container>
                <Div>
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </Div>
                <Span>
                    <div>
                        <Input placeholder='nome do hábito'></Input>
                        <button>D</button><button>S</button><button>T</button><button>Q</button><button>Q</button><button>S</button><button>S</button>
                    </div>
                    <span>
                        <CancelButton>Cancelar</CancelButton>
                        <SaveButton>Salvar</SaveButton>
                    </span>
                </Span>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </Container>
            <Bottom />
        </>
    );
};

export default Habits;