import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

const Figure = styled.figure`
    img {
        width: 130px;
        heigth: 140px;
    }

    margin-bottom: 30px;
`;

const Form = styled.form`
    width: 303px;
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

const Button = styled.button`
    width: 303px;
    height: 45px;

    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;

    background: #52B6FF;
    border: 0;
    border-radius: 4.63636px;

    margin-bottom: 25px;

    &:hover {
        cursor: pointer;
      }

    p {
        display: ${props => props.hide ? 'none' : 'flex'};
        justify-content: center;
        width: 100%;
    }
`;

const P = styled.p`
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;

    color: #52B6FF;
`;

export {
    Container, Figure, Form, Input, Button, P
}