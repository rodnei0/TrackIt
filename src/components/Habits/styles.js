import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 98px;
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

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    width: 340px;
`;

export {
    Container, Div
}