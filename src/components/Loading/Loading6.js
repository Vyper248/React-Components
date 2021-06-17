import React from 'react';
import styled from 'styled-components';

const Loading6 = styled.div`
    display: inline-block;
    margin: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #BBB;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: 40px;
        height: 40px;
        border-top: 5px solid ${props => props.color ? props.color : 'black'};
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-radius: 50%;
        animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

export default Loading6;