import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import { Container, Div } from './styles';
import { useMemo, useContext, useEffect, useState } from 'react';
import dayjs from "dayjs";
import ptbr from 'dayjs/locale/pt-br';
import axios from 'axios';
import Spinner from "../Spinner";
import UserContext from "../../contexts/UserContext";

function Today({ percentage, setPercentage, setMainPage}) {
    setMainPage(false);

    let now = dayjs();
    const { token } = useContext(UserContext);
    const { promiseInProgress } = usePromiseTracker();
    const [ habits, setHabits ] = useState([]);
    
    const config = useMemo(() => {
        const teste = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return teste;
    }, [token]);

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
        promisse.catch(response => console.log(response))
    };

    function HandlePercentage() {
        const total = habits.length;
        const done = habits.filter(habit => habit.done === true).length;

        useEffect(() => {
            if (total !== 0) {
                setPercentage(Math.round((done / total) * 100));
            }
        });

        if (done === 0) {
            return "Nenhum hábito concluído ainda";
        } else {
            return `${percentage} % dos hábitos concluídos`;
        }
    }

    return (
            <Container>
                <h1>{now.locale(ptbr).format("dddd, DD/MM")}</h1>
                <h3>{HandlePercentage()}</h3>
                {habits.map(habit => (
                    <Div onClick={() => trackPromise(handleSelection(habit.done, habit.id))} done={habit.done} disabled={promiseInProgress} key={habit.id}>
                        <div>
                            <h2>{habit.name}</h2>
                            <p>Sequência atual: <strong>{habit.currentSequence} dias</strong></p>
                            <p>Seu recorde: {habit.highestSequence} dias</p>
                        </div>
                        <span><Spinner /><ion-icon name="checkmark-outline"></ion-icon></span>
                    </Div>
                ))}
            </Container>
    );
};

export default Today;