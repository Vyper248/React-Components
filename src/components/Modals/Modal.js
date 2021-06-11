import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    opacity: ${props => props.open ? 1 : 0.0};
    transition: 0.4s;

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
        transition: 0.4s;
    }

    & > #content {
        position: fixed;
        background-color: #EEE;
        border: 1px solid #AAA;
        border-radius: 5px;
        width: ${props => props.width};
        top: 50%;
        left: 50%;
        transform: ${props => props.open ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'};
        z-index: 11;
        transition: 0.4s;
        box-shadow: 2px 2px 10px #666;
    }

    & section {
        max-height: calc(100vh - 300px);
        overflow: scroll;
        padding: 10px;
    }

    & h4, & h3, & h2, & h1 {
        margin: 0px 0px 0px 0px;
    }

    & header {
        padding: 10px;
        border-bottom: 1px solid #AAA;
    }

    & footer {
        border-top: 1px solid #AAA;
    }
`;  

const Modal = ({children, open, darken=true, width='500px', closeFunc=()=>{}, closeOnClickOutside=false}) => {
    const ref = useRef(null);

    useEffect(() => {
        const onClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                if (open && closeOnClickOutside) closeFunc();
            }
        }

        document.addEventListener('click', onClickOutside);
        return () => {
            document.removeEventListener('click', onClickOutside);
        }

    }, [ref, open]);

    if (open) {
        if (window.scrollY > 0) document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        const scrollY = parseInt(document.body.style.top || '0') * -1;
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.width = '';
        if (scrollY > 0) window.scrollTo(0, scrollY);
    }

    return (
        <StyledComp open={open} width={width}>
            { darken ? <div id='background'></div> : null }
            <div id='content' ref={ref}>{children}</div>
        </StyledComp>
    );
}

export default Modal;