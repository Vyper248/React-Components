import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px;
    height: 28px;
    display: inline-flex;
    white-space: nowrap;

    & > label, & > input {
        border: 1px solid black;
        height: 100%;
        margin: 0px;
        display: inline-flex;
        align-items: center;
        font-size: 1em;
    }

    & > label {
        padding: 0px 10px;
        background-color: rgb(239,239,239);
        position: relative;
        z-index: -1;
        width: ${props => props.labelWidth ? props.labelWidth+'px' : ''};
        ${props => props.labelAlign === 'right' ? 'justify-content: flex-end;' : ''}
        ${props => props.labelAlign === 'center' ? 'justify-content: center;' : ''}
        right: -25px; 
        padding-right: 35px; 
        margin-left: -25px; 
        border-radius: 20px 50px 50px 20px;
    }

    & > input {
        padding: 5px;
        border-radius: 5px;
        width: ${props => props.width+'px'};
        ${props => props.labelText ? 'border-radius: 0px 5px 5px 0px;' : ''};
    }

    & > input:focus {
        outline: none;
        border: 1px solid #66F;
    }

    & > input[type=button]:hover,
    & > input[type=color]:hover {
        cursor: pointer;
        filter: brightness(75%);
    }

    & > input[type=button] {
        justify-content: center;
        background-color: rgb(239,239,239);
        padding: 0px;
    }

    & > input[type=color] {
        padding: 2px 4px;
    }

    & > input[type=checkbox] {
        width: 30px;
    }

    & > input[type=checkbox]:hover,
    & > input[type=radio]:hover {
        cursor: pointer;
    }

    & > input[type=radio] {
        width: 30px;
    }
`;

const Input = ({type='text', value, onChange, width=100, labelText='', labelWidth, labelAlign='right', ...rest}) => {
    if (type === 'date' && width === 100) width = 142; //minimum width

    const changeInput = (e) => {
        if (type === 'number') {
            let number = parseFloat(e.target.value);
            if (isNaN(number)) number = '';
            onChange(number);
        } else if (type === 'checkbox') {
            onChange(e.target.checked);
        } else {
            onChange(e.target.value);
        }
    }

    return (
        <StyledComp width={width} labelText={labelText && labelText.length > 0} labelWidth={labelWidth} labelAlign={labelAlign}>
            { labelText && labelText.length > 0 ? <label>{labelText}</label> : <span></span> }
            <input type={type} value={value} onChange={changeInput} checked={type === 'checkbox' ? !!value : false} {...rest}/>
        </StyledComp>
    );
}

export default Input;