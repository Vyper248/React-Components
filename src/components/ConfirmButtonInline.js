import React, { useState } from 'react';
import styled from 'styled-components';

import getContrastYIQ from '../colorFunction';

const StyledComp = styled.div`
    color: ${props => props.textColor ? props.textColor : 'black'};
    width: ${props => props.width ? props.width : '150px'};
    border-radius: 5px;
    margin: ${props => props.margin ? props.margin : '5px'};
    display: inline-block;
    position: relative;
    overflow: hidden;

    & .label {
        transition: 0.3s;
        background-color: ${props => props.color};
        padding: 5px;
    }

    & .label:hover {
        cursor: pointer;
        filter: brightness(75%);
    }

    & .label.hidden {
        transform: translateX(-100%);
        transition: 0.3s;
    }

    & .confirmation.visible {
        transform: translateX(-100%);
        transition: 0.3s;
    }

    & > .confirmation {
        position: absolute;
        top: 0px;
        left: 100%;
        width: 100%;
        height: 100%;
        transition: 0.3s;
    }

    & > .confirmation > div {
        display: inline-block;
        text-align: center;
        padding: 4px;
        height: 100%;
        width: 50%;
        background-color: ${props => props.color};
    }

    & > .confirmation > div:first-child {
        border-right: 1px solid ${props => props.textColor ? props.textColor : 'black'};
    }

    & .confirm:hover, & .cancel:hover {
        cursor: pointer;
        filter: brightness(75%);
    }
`;

const ConfirmButtonInline = ({label='', onClick=()=>{}, color='#CCC', textColor, width, margin}) => {
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
            <div className={`label${confirmOpen ? ' hidden' : ''}`} onClick={showConfirm}>
                <div>{label}</div>
            </div>
            <div className={`confirmation${confirmOpen ? ' visible' : ''}`}>
                <div className='confirm' onClick={onConfirm}>Confirm</div>
                <div className='cancel' onClick={hideConfirm}>Cancel</div>
            </div>
        </StyledComp>
    );
}

export default ConfirmButtonInline;