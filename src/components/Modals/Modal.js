import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    opacity: ${props => props.open ? 1 : 0.0};
    transition: 0.3s;

    & > div#background {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: ${props => props.open ? 0.3 : 0.0};
        ${props => !props.open ? 'pointer-events: none' : ''};
        z-index: 10;
        transition: 0.3s;
    }

    & > div#content {
        position: fixed;
        background-color: #EEE;
        border: 1px solid #AAA;
        border-radius: 5px;
        width: ${props => props.width};
        top: 50%;
        left: 50%;
        transform: ${props => props.open ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'};
        z-index: 11;
        transition: 0.3s;
        box-shadow: 2px 2px 10px #666;
    }

    & h4, & h3, & h2, & h1 {
        border-bottom: 1px solid #AAA;
        margin: 0px 0px 10px 0px;
        padding: 10px;
    }

    & footer {
        border-top: 1px solid #AAA;
        margin-top: 10px;
    }

    & > #content div {
        margin: 15px;
    }
`;  

const Modal = ({children, open, darken=true, width='500px'}) => {
    return (
        <StyledComp open={open} width={width}>
            { darken ? <div id='background'></div> : null }
            <div id='content'>{children}</div>
        </StyledComp>
    );
}

export default Modal;