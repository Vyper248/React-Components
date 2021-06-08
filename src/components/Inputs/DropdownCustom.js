import { useState, Fragment } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    position: relative;
    display: inline-block;
    height: 28px;
    margin: 5px;

    & > div#dropdown {
        background-color: white;
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
        padding: 0px 25px 0px 5px;
        border-radius: 5px;
        ${props => props.open ? 'border-radius: 5px 5px 0px 0px' : 'border-radius: 5px'};
        width: ${props => props.width+'px'};
        ${props => props.labelText ? 'border-radius: 0px 5px 5px 0px;' : ''};
        text-overflow: ellipsis;
        ${props => props.open ? 'transition: border-radius 0s' : 'transition: border-radius 0s 0.3s'};
        ${props => props.open ? 'border: 1px solid blue' : 'border: 1px solid black'};
        border-bottom: 1px solid black;
    }

    & > div#dropdown::after {
        content: '';
        position: absolute;
        right: 8px;
        top: calc(50% - 5px);
        border-top: 10px solid black;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }

    & > div#dropdown:hover {
        cursor: pointer;
    }

    & > div#options {
        position: absolute;
        background-color: #EEE;
        ${props => props.open ? 'border: 1px solid blue' : 'border: 1px solid black'};
        border-top: none;
        width: 100%;
        left: 0px;
        top: 100%;
        opacity: ${props => props.open ? '1' : '0'};
        height: ${props => props.open ? props.height+'px' : '0px'};
        z-index: 20;
        ${props => props.open ? 'transition: height 0.3s, opacity 0s' : 'transition: height 0.3s, opacity 0s 0.3s'};
        overflow: hidden;
    }

    & > div#options > div {
        height: 28px;
        border-bottom: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > div#options > div:hover {
        cursor: pointer;
        background-color: #DDD;
    }

    & > div#options > div.groupHeading {
        font-weight: bold;
        background-color: #DDD;
    }

    & > div#options > div.groupHeading:hover {
        cursor: default;
    }
`;

const DropdownCustom = ({placeholder='Select an Option', labelText='', width=150, value, options=[], onChange}) => {
    const [open, setOpen] = useState(false);
    
    let type;
    if (Array.isArray(options) && options.length === 0) return <StyledComp width={width}></StyledComp>;
    if (Array.isArray(options) && typeof options[0] === 'string') type = 'basic';
    if (Array.isArray(options) && typeof options[0] === 'object') type = 'advanced';
    if (typeof options === 'object' && !Array.isArray(options)) type = 'groups';

    let height = 0;
    if (type === 'basic' || type === 'advanced') height = options.length * 28;
    if (type === 'groups') {
        Object.keys(options).forEach(key => {
            height += 28;
            let arr = options[key];
            height += arr.length * 28;
        });
    }

    const onClickDropdown = () => {
        setOpen(!open);
    }

    const onClickOption = (value) => () => {
        onChange(value);
        setOpen(false);
    }

    let displayText = '';
    if (value) {
        if (type === 'basic') displayText = value;
        else if (type === 'advanced') {
            let optionObj = options.find(obj => obj.value === value);
            if (optionObj) displayText = optionObj.display;
        } else if (type === 'groups') {
            Object.values(options).forEach(arr => {
                let subtype = 'basic';
                if (typeof arr[0] === 'object') subtype = 'advanced';
                if (subtype === 'basic') {
                    let optionValue = arr.find(obj => obj === value);
                    if (optionValue) displayText = optionValue;
                } 
                else {
                    let optionObj = arr.find(obj => obj.value === value);
                    if (optionObj) displayText = optionObj.display;
                }
            });
        }
    }

    displayText = String(displayText);

    if (type === 'advanced') return (
        <StyledComp width={width} open={open} height={height}>
            <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
            <div id='options'>
                {
                    options.map(obj => {
                        return <div onClick={onClickOption(obj.value)}>{obj.display}</div>
                    })
                }
            </div>
        </StyledComp>
    );

    if (type === 'basic') return (
        <StyledComp width={width} open={open} height={height}>
            <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
            <div id='options'>
                { options.map(obj => <div onClick={onClickOption(obj)}>{obj}</div>) }
            </div>
        </StyledComp>
    );

    if (type === 'groups') return (
        <StyledComp width={width} open={open} height={height}>
            <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
            <div id='options'>
                { 
                    Object.keys(options).map(groupHeading => {
                        let arr = options[groupHeading];
                        let subtype = 'basic';
                        if (typeof arr[0] === 'object') subtype = 'advanced';
                        
                        if (subtype === 'basic') return <Fragment>
                            <div className='groupHeading'>{groupHeading}</div>
                            { arr.map(value => <div onClick={onClickOption(value)}>{value}</div>)}
                        </Fragment>;

                        if (subtype === 'advanced') return <Fragment>
                            <div className='groupHeading'>{groupHeading}</div>
                            { arr.map(obj => <div onClick={onClickOption(obj.value)}>{obj.display}</div>)}
                        </Fragment>;
                    })
                }
            </div>
        </StyledComp>
    );

    return <div>Dropdown Error: Incorrect format for Dropdown options.</div>;
}

export default DropdownCustom;