import Bottom from "../BottomBar";
import Top from "../TopBar";
import dayjs from "dayjs";
import ptbr from 'dayjs/locale/pt-br';
import axios from 'axios';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import { Container, Div } from './styles';
import { useEffect, useState } from "react/cjs/react.development";
import { useMemo } from "react";
import Spinner from "../Spinner";

function Today() {
    let now = dayjs();

    const { promiseInProgress } = usePromiseTracker();
    const [ habits, setHabits ] = useState([]);
    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);


    const config = useMemo(() => {
        const token = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        return token;
    }, [user.token]);

    useEffect(fetch, [config]);

    function handleSelection(done, id) {
        if (!done) {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
            promisse.then(fetch);
            return promisse;
        } else {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
            promisse.then(fetch);
            return promisse;
        }
    }

    function fetch() {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promisse.then(response => setHabits(response.data));
    };

    return (
        <>
            <Top />
            <Container>
                <h1>{now.locale(ptbr).format("dddd, DD/MM")}</h1>
                <h3>{!habits.length > 0 ? 'Nenhum hábito concluído ainda' : 'teste'}</h3>
                {habits.map(habit => (
                    // <Div onClick={() => handleSelection(habit.done, habit.id)} done={habit.done} key={habit.id}>
                    <Div onClick={() => trackPromise( handleSelection(habit.done, habit.id))} done={habit.done} disabled={promiseInProgress} key={habit.id}>
                        <div>
                            <h2>{habit.name}</h2>
                            <p>Sequência atual: <strong>{habit.currentSequence} dias</strong></p>
                            <p>Seu recorde: {habit.highestSequence} dias</p>
                        </div>
                        <span><Spinner /><ion-icon name="checkmark-outline"></ion-icon></span>
                    </Div>
                ))}
            </Container>
            <Bottom />
        </>
    );
};

export default Today;