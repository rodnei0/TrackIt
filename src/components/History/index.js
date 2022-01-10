import Calendar from 'react-calendar';
import Bottom from '../BottomBar';
import Top from '../TopBar';
import { Container} from './styles';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react/cjs/react.development';
import dayjs from 'dayjs';
import './style.css';

function History({ setMainPage }) {
    setMainPage(false);
    
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }

    let now = dayjs();
    let testDate = `${now.format("ddd MMM D YYYY")} 00:00:00 GMT-0400 (Amazon Standard Time)`;

    const datesToAddClassTo = [testDate];

    function tileClassName({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (datesToAddClassTo.find(dDate => dDate == date)) {
                return 'myClassName';
            }
        }
    }


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
                            tileClassName={tileClassName}
                            />
            </Container>
            <Bottom />
        </>
    );
};

export default History;