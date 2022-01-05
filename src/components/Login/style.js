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

const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 5px;

    font-size: 18px;
    line-height: 25px;
    color: #DBDBDB;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 6px;
`;

const Button = styled.button`
    width: 303px;
    height: 45px;

    background: #52B6FF;
    border: 0;
    border-radius: 4.63636px;

    margin-bottom: 25px;
`;

const P = styled.p`
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;

    color: #52B6FF;
`;

export {
    Container, Figure, Input, Button, P
}