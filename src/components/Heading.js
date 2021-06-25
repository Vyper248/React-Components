import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.h1`
    font-size: 1.5em;
    background-color: lightblue;
    padding: 5px;
`;

const Heading = ({text}) => {
    return (
        <StyledComp>{text}</StyledComp>
    );
}

export default Heading;