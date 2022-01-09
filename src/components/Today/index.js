import Bottom from "../BottomBar";
import Top from "../TopBar";
import dayjs from "dayjs";
import ptbr from 'dayjs/locale/pt-br';
import axios from 'axios';
import { Container, Div } from './styles';
import { useEffect, useState } from "react/cjs/react.development";

function Today() {
    let now = dayjs();
    const [ habits, setHabits ] = useState([]);
    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);

    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promisse.then(response => setHabits(response.data));
    }, [user.token])

    return (
        <>
            <Top />
            <Container>
                <h1>{now.locale(ptbr).format("dddd, DD/MM")}</h1>
                <h3>Nenhum hábito concluído ainda</h3>
                {habits.map(habit => (
                    <Div done={habit.done} key={habit.id}>
                        <div>
                            <h2>{habit.name}</h2>
                            <p>Sequência atual: {habit.currentSequence} dias</p>
                            <p>Seu recorde: {habit.highestSequence} dias</p>
                        </div>
                        <span><ion-icon name="checkmark-outline"></ion-icon></span>
                    </Div>
                ))}
            </Container>
            <Bottom />
        </>
    );
};

export default Today;