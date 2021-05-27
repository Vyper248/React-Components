import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    display: inline-block;
    margin: 5px;
    position: relative;

    & > div {
        display: inline-block;
        width:50px;
        height: 50px;
        position: relative;
        animation: beat 1s linear infinite;
    }

    & > div::after,
    & > div::before {
        content: '';
        position: absolute;
        top: 2px;
        width: 25px;
        height: 40px;
        border-radius: 50px 50px 0px 0px;
        background-color: red;
        transform: rotate(45deg);
    }

    & > div::after {
        left: 18px;
        transform: rotate(45deg);
    }

    & > div::before {
        left: 7px;
        transform: rotate(-45deg);
    }

    @keyframes beat {
        0% {transform: scale(1);}
        10% {transform: scale(1.2);}
        30% {transform: scale(1);}
        40% {transform: scale(1.2);}
        60% {transform: scale(1);}
        100% {transform: scale(1);}
    }
`;

const Loading4 = ({color='red'}) => {
    return (
        <StyledComp color={color}>
            <div></div>
        </StyledComp>
    );
}

export default Loading4;