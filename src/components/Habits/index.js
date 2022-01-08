import { useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import Bottom from '../BottomBar';
import Top from '../TopBar';
import axios from 'axios';
import { Container, Div, Span, Input, CancelButton, SaveButton, DayButton } from './styles';
import Spinner from '../Spinner';
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.development';

function Habits() {
    const days = [  {id: 7, name: "D"}, 
                    {id: 1, name: "S"}, 
                    {id: 2, name: "T"}, 
                    {id: 3, name: "Q"}, 
                    {id: 4, name: "Q"}, 
                    {id: 5, name: "S"}, 
                    {id: 6, name: "S"}
                ];
    
    const [ hide, setHide ] = useState(true);
    const [ selectedDays, setSelectedDays ] = useState([]);
    const [ habit, setHabit ] = useState("");
    const [ habits, setHabits ] = useState([]);
    const { promiseInProgress } = usePromiseTracker();

    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);
    
    let hideText = false;

    const data = {
        name: habit,
        days: selectedDays,
    };

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function HandleHabits() {
        if (habits.length > 0) {
            hideText = true;
        }
        useEffect(() => {
        console.log("entrei");
            const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            promisse.then(response => setHabits([...response.data]));
        }, [habit]);
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
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, config);
        promisse.then(handlePostResponse);
        promisse.catch(response => console.log(response));
        return promisse ;
    }

    function handlePostResponse() {
        setHabit("");
        setSelectedDays([]);
        setHide(true);
    }

    HandleHabits();

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
                {habits.map(habit => (
                    <MyHabits key={habit.id}>
                        <p>{habit.name}</p>
                        {days.map(day => (
                                    <DayButton isSelected={habit.days.includes(day.id)} key={day.id}>{day.name}</DayButton>
                                    ))
                                }
                    </MyHabits>
                    ))
                }
                <H3 hide={hideText}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</H3>
            </Container>
            <Bottom />
        </>
    );
};

export default Habits;

const MyHabits = styled.div`
    width: 340px;
    height: 91px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-top: 20px;
    padding: 18px;

    p {
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
        margin-bottom: 6px;
    }
`;

const H3 = styled.h3`
    display: ${props => props.hide ? 'none' : 'flex'};
`;