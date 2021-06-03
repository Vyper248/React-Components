import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px;
    height: 28px;
    display: inline-flex;
    white-space: nowrap;

    & > label {
        border: 1px solid black;
        height: 100%;
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
        right: -15px; 
        padding-right: 25px; 
        border-right: none; 
        margin-left: -15px; 
        border-radius: 5px 0px 0px 5px;
    }

    & > select {
        border: 1px solid black;
        background-color: white;
        -webkit-appearance:none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAAvklEQVQoFY2QMQqEMBBFv7ERa/EMXkGw11K8QbDXzuN4BHv7QO6ifUgj7v4UAdlVM8Uwf+b9YZJISnlqrfEUZVlinucnBGKaJgghbiHOyLyFKIoCbdvecpyReYvo/Ma2bajrGtbaC58kCdZ1RZ7nl/4/4d5EsO/7nzl7IUtodBexMMagaRrs+06JLMvcNWmaOv2W/C/TMAyD58dxROgSmvxFFMdxoOs6lliWBXEcuzokXRbRoJRyvqqqQvye+QDMDz1D6yuj9wAAAABJRU5ErkJggg==);
        background-position : right center;
        background-repeat: no-repeat;
        height: 100%;
        margin: 0px;
        display: inline-flex;
        align-items: center;
        font-size: 1em;
        padding: 0px 5px;
        border-radius: 5px;
        width: ${props => props.width+'px'};
        ${props => props.labelText ? 'border-radius: 0px 5px 5px 0px;' : ''};
    }

    & > select:hover {
        cursor: pointer;
    }

    & > select:focus {
        outline: none;
    }
`;

const Dropdown = ({placeholder='Select an Option', labelText='', width=150, value, options=[], onChange}) => {
    let type;
    if (Array.isArray(options) && options.length === 0) return <StyledComp width={width}><select></select></StyledComp>;
    if (Array.isArray(options) && typeof options[0] === 'string') type = 'basic';
    if (Array.isArray(options) && typeof options[0] === 'object') type = 'advanced';
    if (typeof options === 'object' && !Array.isArray(options)) type = 'groups';

    const onChangeDropdown = (e) => {
        let value = e.target.value;
        onChange(value);
    }

    if (type === 'basic') return (
        <StyledComp width={width} labelText={labelText && labelText.length > 0}>
            { labelText && labelText.length > 0 ? <label>{labelText}</label> : null }
            <select value={value} onChange={onChangeDropdown}>
                <option hidden value={undefined}>{placeholder}</option>
                { options.map(option => <option key={`dropdown-${option}`} value={option}>{option}</option>) }
            </select>
        </StyledComp>
    );

    if (type === 'advanced') return (
        <StyledComp width={width} labelText={labelText && labelText.length > 0}>
            { labelText && labelText.length > 0 ? <label>{labelText}</label> : null }
            <select value={value} onChange={onChangeDropdown}>
                <option hidden value={undefined}>{placeholder}</option>
                { options.map(option => <option key={`dropdown-${option.value}`} value={option.value}>{option.display}</option>) }
            </select>
        </StyledComp>
    )

    if (type === 'groups') return (
        <StyledComp width={width} labelText={labelText && labelText.length > 0}>
            { labelText && labelText.length > 0 ? <label>{labelText}</label> : null }
            <select value={value} onChange={onChangeDropdown}>
                <option hidden value={undefined}>{placeholder}</option>
                { Object.keys(options).map(key => {
                    let array = options[key];
                    let subtype = 'basic';
                    if (typeof array[0] === 'object') subtype = 'advanced';

                    if (subtype === 'basic') return (
                        <optgroup label={key} key={`dropdown-group-${key}`}>
                            { array.map(option => <option key={`dropdown-${option}`} value={option}>{option}</option>)}
                        </optgroup>
                    );

                    if (subtype === 'advanced') return (
                        <optgroup label={key} key={`dropdown-group-${key}`}>
                            { array.map(option => <option key={`dropdown-${option.value}`} value={option.value}>{option.display}</option>)}
                        </optgroup>
                    );

                    return null;
                }) }
            </select>
        </StyledComp>
    )

    return null;
}

export default Dropdown;