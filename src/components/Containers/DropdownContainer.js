import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px 0px;

    & > h1 {
        font-size: 1.5em;
        background-color: lightblue;
        padding: 5px;
        margin-bottom: 0px;
    }

    & > h1:hover {
        cursor: pointer;
    }

    & > div {
        margin: 0px;
        padding: 0px;
        height: ${props => props.open ? props.height+'px' : '0px'};
        ${props => props.instant ? 'height: auto;' : ''}
        ${props => !props.instant ? 'overflow: hidden;' : ''}
        transition: 0.5s;
        ${props => props.border ? 'border: 1px solid lightblue;' : ''}
        border-top: none;
    }

    & > div > div {
        padding: 10px;
        ${props => !props.instant ? 'overflow: hidden;' : ''}
    }
`;

const DropdownContainer = ({heading, open=true, border=true, instant=false, children}) => {
    const [isOpen, setOpen] = useState(open);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            let rect = ref.current.getBoundingClientRect();
            let height = rect.height;
            setHeight(height);
        }
    }, [ref]);

    const getHeight = () => {
        if (ref.current) {
            let rect = ref.current.getBoundingClientRect();
            let height = rect.height;
            return height;
        }
        return 100;
    }

    const onClick = () => {
        let height = getHeight();
        setHeight(height);
        setOpen(!isOpen);
    }

    if (instant && !isOpen) {
        return (
            <StyledComp height={height} open={isOpen} border={border} instant={instant}>
                <h1 onClick={onClick}>{heading}</h1>
            </StyledComp>
        );
    }

    return (
        <StyledComp height={height} open={isOpen} border={border} instant={instant}>
            <h1 onClick={onClick}>{heading}</h1>
            <div>
                <div ref={ref}>{children}</div>
            </div>
        </StyledComp>
    );
}

export default DropdownContainer;