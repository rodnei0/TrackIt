import { Container} from './styles';
import { useMemo, useState } from 'react';
import { useContext, useEffect } from 'react';
import Calendar from 'react-calendar';
import Bottom from '../BottomBar';
import Top from '../TopBar';
import axios from 'axios';
// import dayjs from 'dayjs';
import UserContext from '../../contexts/UserContext';
import 'react-calendar/dist/Calendar.css';
import './style.css';


function History({ setMainPage }) {
    setMainPage(false);
    
    const [value, setValue] = useState(new Date());
    const [ setHabits ] = useState([]);
    // const [ habits, setHabits ] = useState([]);
    const { token } = useContext(UserContext);

    function onChange(nextValue) {
        setValue(nextValue);
    }

    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return data;
    }, [token]);

    // let now = dayjs();
    // let testDate = `${now.format("ddd MMM D YYYY")} 00:00:00 GMT-0400 (Amazon Standard Time)`;

    // const datesToAddClassTo = [testDate];

    // function tileClassName({ date, view }) {
    //     if (view === 'month') {
    //         if (datesToAddClassTo.find(dDate => dDate == date)) {
    //             if(filterHabits()) {
    //                 return 'allDone'
    //             } else {
    //                 return 'notAllDone'
    //             }
    //         }
    //     }
    // }

    useEffect(fetch, [config, setHabits]);

    function fetch() {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config);
        promisse.then(response => setHabits(...response.data));
    }

    // function filterHabits() {
    //     console.log(habits);
    //     if (habits.habits !== undefined) {
    //         let filteredHabits = [];
    //         filteredHabits = habits.habits.filter(habit => habit.done);
    //         if (filteredHabits.length === habits.habits.length) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     } 
    // }

    return (
        <>
            <Top />
            <Container>
                <h1>Histórico</h1>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
                <Calendar   onChange={onChange}
                            value={value}
                            locale='pt-br'
                            calendarType='US'
                            // tileClassName={tileClassName}
                            />
            </Container>
            <Bottom />
        </>
    );
};

export default History;