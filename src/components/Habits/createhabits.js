import { Span, Input, CancelButton, SaveButton, DayButton } from './styles';
import Spinner from '../Spinner';


function CreateHabits({ hide, habit, setHabit, promiseInProgress, days, handleSelection, selectedDays, handleDisplay, verifyHabit}) {
    return (
        <>
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
                <SaveButton onClick={verifyHabit} hide={promiseInProgress}><Spinner /><p>Salvar</p></SaveButton>
            </span>
        </Span>
        </>
    );
}

export default CreateHabits;