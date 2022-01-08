import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 98px;
    padding-bottom: 128px;
    background: #F2F2F2;
    min-height: 100vh;

    h1 {
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    
    h3 {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        
        margin-top: 17px;
        width: 340px;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    width: 340px;

    button {
        width: 40px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: 0;

        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
    }
`;

const Span = styled.span`
    display: ${props => props.hide ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    
    width: 340px;
    height: 180px;
    padding: 18px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-top: 20px;

    div {
        display: flex;
        flex-wrap:wrap;
    }

    span {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        width: 100%;
    }
`;

const DayButton = styled.button`
    width: 30px;
    height: 30px;

    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;

    margin-right: 4px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 5px;

    font-size: 18px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 6px;
`;

const CancelButton = styled.button`
    width: 84px;
    height: 35px;

    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;

    background: #FFFFFF;
    border: 0;
    border-radius: 4.63636px;

    margin-right: 4px;
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;

    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;

    background: #52B6FF;
    border: 0;
    border-radius: 4.63636px;

    p {
        display: ${props => props.hide ? 'none' : 'flex'};
        justify-content: center;
        width: 100%;
    }
`;

const HabitsStyle = styled.div`
    width: 340px;
    height: 91px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-top: 20px;
    padding: 18px;

    position: relative;

    div {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    ion-icon {
        font-size: 15px;
    }

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


export {
    Container, Div, Span, Input, CancelButton, SaveButton, DayButton, HabitsStyle, H3
}