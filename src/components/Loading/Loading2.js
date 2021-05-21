import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    display: inline-block;
    margin: 5px;
    transform: rotate(${props => props.rotation+'deg'});

    & > div {
        background-color: ${props => props.color};
        ${props => props.smooth === 2 ? 'border-radius: 5px': null};
        ${props => props.smooth === 3 ? 'border-radius: 50%': null};
        width: 60px;
        height: 5px;
        margin-bottom: 1px;
        transform-origin: ${props => props.origin};
        animation: anim1 0.8s ease-in infinite alternate;
    }

    & > div:nth-child(8) { animation-delay: -0.2s; }
    & > div:nth-child(7) { animation-delay: -0.4s; }
    & > div:nth-child(6) { animation-delay: -0.6s; }
    & > div:nth-child(5) { animation-delay: -0.8s; }
    & > div:nth-child(4) { animation-delay: -1s; }
    & > div:nth-child(3) { animation-delay: -1.2s; }
    & > div:nth-child(2) { animation-delay: -1.4s; }
    & > div:nth-child(1) { animation-delay: -1.6s; }

    @keyframes anim1 {
        from {transform: scaleX(1);}
        to {transform: scaleX(0);}
    }
`;

const Loading2 = ({color='black', rotation=90, smooth=2, origin='middle'}) => {
    return (
        <StyledComp color={color} rotation={rotation} smooth={parseInt(smooth)} origin={origin}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledComp>
    );
}

export default Loading2;