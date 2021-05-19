import React, { useState } from 'react';
import styled from 'styled-components';

import getContrastYIQ from '../colorFunction';

const StyledComp = styled.div`
    background-color: ${props => props.color};
    color: ${props => props.textColor ? props.textColor : 'black'};
    width: ${props => props.width ? props.width : '150px'};
    border-radius: 5px;
    margin: ${props => props.margin ? props.margin : '5px'};
    display: inline-block;
    position: relative;

    & .label {
        transition: 0.3s;
        padding: 5px;
    }

    & .label:hover {
        cursor: pointer;
        filter: brightness(75%);
    }

    & .confirmation.visible {
        opacity: 1;
        pointer-events: all;
        transition: 0.3s;
    }

    & > .confirmation {
        position: absolute;
        bottom: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        transition: 0.3s;
        opacity: 0;
        pointer-events: none;
        color: black;
        background-color: white;
    }

    & .confirmation::after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
        background-color: white;
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform:  translateX(-50%) rotate(-45deg);
    }

    & > .confirmation span {
        margin-bottom: 5px;
    }

    & > .confirmation > div {
        display: inline-block;
        padding: 4px;
        width: 50px;
        background-color: ${props => props.color};
        color: ${props => props.textColor ? props.textColor : 'black'};
        border-radius: 5px;
        margin-top: 5px;
    }

    & > .confirmation > div:first-of-type {
        margin-right: 5px;
    }

    & .confirm:hover, & .cancel:hover {
        cursor: pointer;
        filter: brightness(75%);
    }
`;

const ConfirmButtonPopup = ({label='', onClick=()=>{}, color='#CCC', textColor, width, margin}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    if (textColor === undefined && color !== '#CCC') textColor = getContrastYIQ(color);

    const showConfirm = () => {
        setConfirmOpen(true);
    }

    const hideConfirm = () => {
        setConfirmOpen(false);
    }

    const onConfirm = () => {
        setConfirmOpen(false);
        onClick();
    }

    return (
        <StyledComp 
            color={color} 
            textColor={textColor}
            width={width} 
            margin={margin}>
            <div className='label' onClick={showConfirm}>
                <div>{label}</div>
            </div>
            <div className={`confirmation${confirmOpen ? ' visible' : ''}`}>
                <span>Are you sure?</span>
                <div className='confirm' onClick={onConfirm}>Yes</div>
                <div className='cancel' onClick={hideConfirm}>No</div>
            </div>
        </StyledComp>
    );
}

export default ConfirmButtonPopup;