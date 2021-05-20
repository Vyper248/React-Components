import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from 'use-click-outside';

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

    & > .confirmation.top {
        bottom: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
    }

    & > .confirmation.bottom {
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
    }

    & > .confirmation.left {
        right: calc(100% + 5px);
        top: 50%;
        transform: translateY(-50%);
    }

    & > .confirmation.right {
        left: calc(100% + 5px);
        top: 50%;
        transform: translateY(-50%);
    }

    & .confirmation::after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background-color: white;
        position: absolute;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
    }

    & .confirmation.top::after {
        bottom: -5px;
        left: 50%;
        transform:  translateX(-50%) rotate(-45deg);
    }

    & .confirmation.bottom::after {
        top: -5px;
        left: 50%;
        transform:  translateX(-50%) rotate(135deg);
    }

    & .confirmation.left::after {
        right: -5px;
        top: 50%;
        transform:  translateY(-50%) rotate(-135deg);
    }

    & .confirmation.right::after {
        left: -5px;
        top: 50%;
        transform:  translateY(-50%) rotate(45deg);
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

const ConfirmButtonPopup = ({label='', onClick=()=>{}, color='#CCC', textColor, width, margin, direction='top'}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const ref = useRef();
    const handleClickOutside = () => {
        if (confirmOpen) setConfirmOpen(false);
    }
    useClickOutside(ref, handleClickOutside);

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
            <div ref={ref} className={`confirmation${confirmOpen ? ' visible' : ''} ${direction}`}>
                <span>Are you sure?</span>
                <div className='confirm' onClick={onConfirm}>Yes</div>
                <div className='cancel' onClick={hideConfirm}>No</div>
            </div>
        </StyledComp>
    );
}

export default ConfirmButtonPopup;