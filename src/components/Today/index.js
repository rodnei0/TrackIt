import dayjs from "dayjs";
import ptbr from 'dayjs/locale/pt-br';
import Bottom from "../BottomBar";
import Top from "../TopBar";
import { Container, Div } from './styles';

function Today() {

    // const serializedUser = localStorage.getItem("user");
    // const user = JSON.parse(serializedUser);

    let now = dayjs();

    return (
        <>
            <Top />
            <Container>
                <h1>{now.locale(ptbr).format("dddd, DD/MM")}</h1>
                <h3>Nenhum hábito concluído ainda</h3>
                <Div>
                    <div>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <span></span>
                </Div>
            </Container>
            <Bottom />
        </>
    );
};

export default Today;