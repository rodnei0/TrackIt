import { Header, P, Figure } from './styles';
import { useContext } from 'react/cjs/react.development';
import UserContext from '../../contexts/UserContext';

function Top() {
    const { image } = useContext(UserContext);
    
    return (
        <Header>
            <P>TrackIt</P>
            <Figure>
                <img src={image} alt="profile"></img>
            </Figure>
        </Header>
    )
}

export default Top;