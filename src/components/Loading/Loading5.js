import React from 'react';
import styled from 'styled-components';

let arr = new Array(30).fill(1).map((a,i) => i+1);

const StyledComp = styled.div`
    display: inline-block;
    margin: 5px;
    position: relative;
    width: 50px;
    height: 50px;
    
    & div {
        width: 2px;
        height: 25px;
        display: inline-block;
        position: absolute;
        bottom: 50%;
        left: 50%;
        border-radius: 2px;
        background-color: ${props => props.color};
        transform-origin: bottom;
        animation: anim 1s linear 0s infinite alternate;
    }

    ${props => arr.map(a => `& div:nth-child(${a}) {
        transform: rotate(${a*(360/arr.length)}deg);
        animation-delay: ${a*-(1/3)}s;
        ${props.style === 1 ? `animation-delay: ${a*-(1/3)}s;` : `animation-delay: ${a*-(Math.random(1))}s;`}
    }`)}

    @keyframes anim {
        from {height: 50%}
        to {height: 0%}
    }
`;

const Loading5 = ({color='black', style=1}) => {
    return (
        <StyledComp color={color} style={style}>
            { arr.map(a => <div key={'loading5-'+a}></div>) }
        </StyledComp>
    );
}

export default Loading5;