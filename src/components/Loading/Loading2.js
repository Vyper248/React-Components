import React from 'react';
import styled from 'styled-components';

let arr = new Array(10).fill(1).map((a,i) => i+1).reverse();

const StyledComp = styled.div`
    display: inline-block;
    margin: 5px;
    transform: rotate(${props => props.rotation+'deg'});

    & > div {
        background-color: ${props => props.color};
        ${props => props.smooth === 2 ? 'border-radius: 5px': null};
        ${props => props.smooth === 3 ? 'border-radius: 50%': null};
        width: 50px;
        height: ${Math.floor((50/arr.length)-1)+'px'};
        margin-bottom: 1px;
        transform-origin: ${props => props.origin};
        animation: anim1 0.8s ease-in infinite alternate;
    }

    ${arr.map((a,i) => `& > div:nth-child(${a}) { animation-delay: -${(1/(arr.length/8))*0.2*(i+1)}s; }`)}

    @keyframes anim1 {
        from {transform: scaleX(1);}
        to {transform: scaleX(0);}
    }
`;

const Loading2 = ({color='black', rotation=90, smooth=2, origin='middle'}) => {
    return (
        <StyledComp color={color} rotation={rotation} smooth={parseInt(smooth)} origin={origin}>
        { arr.map(a => <div key={'loading2-'+a}></div>) }
        </StyledComp>
    );
}

export default Loading2;