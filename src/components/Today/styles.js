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
    
        width: 340px;
    }

    h3 {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    
        width: 340px;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;

    width: 340px;
    height: 94px;

    background: #FFFFFF;
    border-radius: 5px;

    margin-top: 28px;
    padding: 13px;

    h2 {
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    p {
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;

        margin-top: 5px;
    }

    span {
        width: 69px;
        height: 69px;

        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }

`;

export {
    Container, Div
}