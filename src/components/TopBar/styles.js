import styled from "styled-components"

const Header = styled.header`
    display: flex;
    align-items: center;

    height: 70px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const P = styled.p`
    font-family: Playball;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;

    margin-left: 18px;
`;

const Figure = styled.figure`
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    position: absolute;
    right: 18px;
`;

export {
    Header, P, Figure
}
