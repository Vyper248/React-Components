import { useState, useEffect, useRef, Fragment } from 'react';
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
        width: ${props => props.width+'px'};
        ${props => props.labelText ? 'border-radius: 0px 5px 5px 0px;' : ''};
        ${props => props.open ? 'border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;' : ''};
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
        z-index: 200;
        ${props => props.open ? 'transition: height 0.3s, opacity 0s' : 'transition: height 0.3s, opacity 0s 0.3s'};
        overflow: ${props => props.overflow};
    }

    & > div#options > div {
        height: 28px;
        border-bottom: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 22px;
        position: relative;
    }

    & > div#options > div:last-child {
        border-bottom: none;
    }

    & > div#options > div.selected:before {
        content: '';
        width: 0px;
        height: 0px;
        display: block;
        position: absolute;
        left: 5px;
        top: calc(50% - 5px);
        border-left: 10px solid blue;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

    & > div#options > div:hover {
        cursor: pointer;
        background-color: #DDD;
    }

    & > div#options > div.groupHeading {
        font-weight: bold;
        background-color: #DDD;
        padding-left: 10px;
    }

    & > div#options > div.groupHeading:hover {
        cursor: default;
    }
`;

const StyledLabel = styled.label`
    border: 1px solid black;
    height: 28px;
    margin: 0px;
    display: inline-flex;
    align-items: center;
    font-size: 1em;
    padding: 0px 10px;
    background-color: rgb(239,239,239);
    position: relative;
    z-index: -1;
    width: ${props => props.labelWidth ? props.labelWidth+'px' : ''};
    ${props => props.labelAlign === 'right' ? 'justify-content: flex-end;' : ''}
    ${props => props.labelAlign === 'center' ? 'justify-content: center;' : ''}
    right: -20px; 
    padding-right: 25px; 
    border-right: none; 
    margin-left: -15px; 
    border-radius: 5px 0px 0px 5px;
`;

const DropdownCustom = ({placeholder='Select an Option', labelText='', labelAlign='right', labelWidth, width=150, value, options=[], onChange}) => {
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(168);
    const [overflow, setOverflow] = useState('hidden');
    const ref = useRef(null);

    useEffect(() => {
        const onClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', onClickOutside);
        return () => {
            document.removeEventListener('click', onClickOutside);
        }

    }, [ref]);
    
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
    height++;

    const onClickDropdown = () => {
        setOpen(!open);

        //auto adjust height based on current screen height and dropdown position
        //will only go off the bottom of the screen if it's too close
        if (ref.current && !open) {
            let rect = ref.current.getBoundingClientRect();
            let screenHeight = window.innerHeight;
            let difference = screenHeight - rect.bottom;
            let maxHeight = difference - 10;
            let minHeight = (28 * 6) + 10;
            if (maxHeight < height) setOverflow('scroll');
            if (maxHeight < minHeight) maxHeight = minHeight;
            if (maxHeight > height) {
                maxHeight = height;
                setOverflow('hidden');
            }
            setMaxHeight(maxHeight);
        }
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
        <div style={{display: 'inline-block'}}>
            { labelText.length > 0 ? <StyledLabel labelWidth={labelWidth} labelAlign={labelAlign}>{labelText}</StyledLabel> : null }
            <StyledComp ref={ref} width={width} open={open} height={maxHeight} overflow={overflow} labelText={labelText}>
                <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
                <div id='options'>
                    {
                        options.map(obj => {
                            return <div key={`option-${obj.value}`} onClick={onClickOption(obj.value)} className={obj.value === value ? 'selected' : ''}>{obj.display}</div>
                        })
                    }
                </div>
            </StyledComp>
        </div>
    );

    if (type === 'basic') return (
        <div style={{display: 'inline-block'}}>
            { labelText.length > 0 ? <StyledLabel labelWidth={labelWidth} labelAlign={labelAlign}>{labelText}</StyledLabel> : null }
            <StyledComp ref={ref} width={width} open={open} height={maxHeight} overflow={overflow} labelText={labelText}>
                <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
                <div id='options'>
                    { options.map(str => <div key={`option-${str}`} onClick={onClickOption(str)} className={str === value ? 'selected' : ''}>{str}</div>) }
                </div>
            </StyledComp>
        </div>
    );

    if (type === 'groups') return (
        <div style={{display: 'inline-block'}}>
            { labelText.length > 0 ? <StyledLabel labelWidth={labelWidth} labelAlign={labelAlign}>{labelText}</StyledLabel> : null }
            <StyledComp ref={ref} width={width} open={open} height={maxHeight} overflow={overflow} labelText={labelText}>
                <div id='dropdown' onClick={onClickDropdown}>{displayText.length > 0 ? displayText : placeholder}</div>
                <div id='options'>
                    { 
                        Object.keys(options).map(groupHeading => {
                            let arr = options[groupHeading];
                            let subtype = 'basic';
                            if (typeof arr[0] === 'object') subtype = 'advanced';
                            
                            if (subtype === 'basic') return <Fragment key={`option-group-${groupHeading}`}>
                                <div className='groupHeading'>{groupHeading}</div>
                                { arr.map(str => <div key={`option-${str}`} onClick={onClickOption(str)} className={str === value ? 'selected' : ''}>{str}</div>)}
                            </Fragment>;

                            if (subtype === 'advanced') return <Fragment key={`option-group-${groupHeading}`}>
                                <div className='groupHeading'>{groupHeading}</div>
                                { arr.map(obj => <div key={`option-${obj.value}`} onClick={onClickOption(obj.value)} className={obj.value === value ? 'selected' : ''}>{obj.display}</div>)}
                            </Fragment>;

                            return null;
                        })
                    }
                </div>
            </StyledComp>
        </div>
    );

    return <div>Dropdown Error: Incorrect format for Dropdown options.</div>;
}

export default DropdownCustom;