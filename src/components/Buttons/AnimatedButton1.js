import React from 'react';
import styled from 'styled-components';

import getContrastYIQ from '../../colorFunction';

const StyledComp = styled.div`
    background-color: ${props => props.color};
    color: ${props => props.textColor ? props.textColor : 'black'};
    width: ${props => props.width ? props.width : '150px'};
    padding: 5px;
    margin: ${props => props.margin ? props.margin : '5px'};
    display: inline-block;
    outline: 1px solid ${props => props.color};
    outline-offset: 0px;
    outline-width: 1px;
    transition: 0.1s;

    &:hover {
        cursor: pointer;
        outline-offset: 3px;
        transition: 0.1s;
    }
`;

const AnimatedButton1 = ({label='', onClick=()=>{}, color='#CCC', textColor, width, margin}) => {
    if (textColor === undefined && color !== '#CCC') textColor = getContrastYIQ(color);

    return (
        <StyledComp 
            color={color} 
            textColor={textColor}
            width={width} 
            margin={margin} 
            onClick={onClick}>{label}</StyledComp>
    );
}

export default AnimatedButton1;