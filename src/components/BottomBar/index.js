import { useContext } from "react";
import { Link } from "react-router-dom";
import { Footer, P, Div } from './styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PercentageContext from "../../contexts/PercentageContext";

function Bottom() {
    const { percentage } = useContext(PercentageContext);

    return (
        <Footer>
            <Link to="/habitos">
                <P>Hábito</P>
            </Link>
            <Link to="/hoje">
                <Div>
                    <div>
                        <CircularProgressbar 
                            value={percentage} 
                            text={'Hoje'} 
                            styles={buildStyles({
                                textColor: "#FFFFFF",
                                pathColor: "#FFFFFF",
                                trailColor: "#52B6FF"
                            })}
                        />
                    </div>
                </Div>
            </Link>
            <Link to="/historico">
                <P>Histórico</P>
            </Link>
        </Footer>
    )
}


export default Bottom;