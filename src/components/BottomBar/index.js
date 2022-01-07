import { Link } from "react-router-dom";
import { Footer, P, Div } from './styles';

function Bottom() {
    // const serializedUser = localStorage.getItem("user");
    // const user = JSON.parse(serializedUser);

    return (
        <Footer>
            <Link to="/habitos">
                <P>Hábito</P>
            </Link>
            <Link to="/hoje">
                <Div><p>Hoje</p></Div>
            </Link>
            <Link to="/historico">
                <P>Histórico</P>
            </Link>
        </Footer>
    )
}


export default Bottom;