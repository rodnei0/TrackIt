import { Header, P, Figure } from './styles';

function Top() {
    const serializedUser = localStorage.getItem("user");
    const user = JSON.parse(serializedUser);

    return (
        <Header>
            <P>TrackIt</P>
            <Figure>
                <img src={user.image} alt="profile"></img>
            </Figure>
        </Header>
    )
}

export default Top;