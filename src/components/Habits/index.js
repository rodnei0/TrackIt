import { useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import Bottom from '../BottomBar';
import Top from '../TopBar';
import axios from 'axios';
import { Container, Form, Div, Span, Input, CancelButton, SaveButton, DayButton } from './styles';
import Spinner from '../Spinner';

function Habits() {
    const days = [{id: 7, name: "D"}, {id: 1, name: "S"}, {id: 2, name: "T"}, {id: 3, name: "Q"}, {id: 4, name: "Q"}, {id: 5, name: "S"}, {id: 6, name: "S"}];
    
    const [ hide, setHide ] = useState(true);
    const [ selectedDays, setSelectedDays ] = useState([]);
    const [ habit, setHabit ] = useState("");
    const { promiseInProgress } = usePromiseTracker();

    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);

    const data = {
        name: habit,
        days: selectedDays,
    };

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    
    function handleDisplay(option) {
        if (option === "create") {
            setHide(false);
        } else {
            setHide(true);
        }
    }

    function handleSelection(day) {
        if (selectedDays.includes(day)) {
            const filteredDays = selectedDays.filter(selectedDay => selectedDay !== day);
            setSelectedDays([...filteredDays]);
            return;
        }
        setSelectedDays([...selectedDays, day])
    }

    function fetch() {
        console.log(data);
        console.log(config);
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, config);
        promisse.then(response => console.log(response));
        promisse.catch(response => console.log(response));
        return promisse ;
    }

    return (
        <>
            <Top />
            <Container>
                <Div>
                    <h1>Meus Hábitos</h1>
                    <button onClick={() => handleDisplay("create")}>+</button>
                </Div>
                <Span hide={hide}>
                    <div>
                            <Input value={habit} onChange={(e) => setHabit(e.target.value)} disabled={promiseInProgress} placeholder='nome do hábito'></Input>
                            {days.map(day => (
                                <DayButton onClick={() => handleSelection(day.id)} isSelected={selectedDays.includes(day.id)} key={day.id} disabled={promiseInProgress}>{day.name}</DayButton>
                                ))
                            }
                    </div>
                    <span>
                        <CancelButton onClick={() => handleDisplay("cancel")}>Cancelar</CancelButton>
                        <SaveButton onClick={() => trackPromise(fetch())} hide={promiseInProgress}><Spinner /><p>Salvar</p></SaveButton>
                    </span>
                </Span>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
            </Container>
            <Bottom />
        </>
    );
};

export default Habits;