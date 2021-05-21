import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    display: inline-block;
    margin: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 5px solid ${props => props.color};
    border-left: 5px solid ${props => props.color};
    animation-name: spin;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

const Loading1 = ({color='black'}) => {
    return (
        <StyledComp color={color}></StyledComp>
    );
}

export default Loading1;