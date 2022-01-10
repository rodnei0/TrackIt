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
    
        width: 340px;
    }

    h3 {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    
        width: 340px;
        margin-top: 5px;
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

    &:hover {
        cursor: pointer;
      }

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

        strong {
            color: ${props => props.done ? '#8FC549' : '#666666'};
        }
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 69px;
        height: 69px;

        background: ${props => props.done ? '#8FC549' : '#EBEBEB'};
        border: 1px solid #E7E7E7;
        border-radius: 5px;

        ion-icon {
            font-size: 40px;
            color: #FFFFFF;
            --ionicon-stroke-width: 64px;
        }
    }

`;

export {
    Container, Div
}