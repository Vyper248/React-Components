import React from 'react';
import styled from 'styled-components';

import getContrastYIQ from '../colorFunction';

const StyledComp = styled.div`
    border: 1px solid ${props => props.color};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor ? props.textColor : 'black'};
    width: ${props => props.width ? props.width : '150px'};
    border-radius: 5px;
    padding: 5px;
    margin: ${props => props.margin ? props.margin : '5px'};
    display: inline-block;

    &:hover {
        cursor: pointer;
        filter: brightness(75%);
    }
`;

const BasicOutlineButton = ({label='', onClick=()=>{}, color='#CCC', backgroundColor='white', textColor, width, margin}) => {
    if (textColor === undefined && color !== '#CCC') textColor = getContrastYIQ(backgroundColor);

    return (
        <StyledComp 
            color={color} 
            backgroundColor={backgroundColor}
            textColor={textColor}
            width={width} 
            margin={margin} 
            onClick={onClick}>{label}</StyledComp>
    );
}

export default BasicOutlineButton;