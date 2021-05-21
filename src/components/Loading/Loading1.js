import React from 'react';
import styled from 'styled-components';

const Loading1 = styled.div`
    display: inline-block;
    margin: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 5px solid ${props => props.color ? props.color : 'black'};
    border-left: 5px solid ${props => props.color ? props.color : 'black'};
    animation: spin 0.7s linear infinite;

    @keyframes spin {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

export default Loading1;