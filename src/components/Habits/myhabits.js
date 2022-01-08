import { HabitsStyle, DayButton } from './styles';

function MyHabits({ habits, days, handleDeletion }) {
    return (
        <>
            {habits.map(habit => (
                <HabitsStyle key={habit.id}>
                    <p>{habit.name}</p>
                    {days.map(day => (
                                <DayButton isSelected={habit.days.includes(day.id)} key={day.id}>{day.name}</DayButton>
                                ))
                            }
                    <div onClick={() => handleDeletion(habit.id)}><ion-icon name="trash-outline"></ion-icon></div>
                </HabitsStyle>
                ))
            }
        </>
    );
}

export default MyHabits;