import styled from 'styled-components';

const Loading3 = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid ${props => props.color};
    border-top: 0px;
    border-bottom: 0px;
    margin: 5px;
    position: relative;
    animation: rotate 1s linear infinite;

    &:after {
        content:'';
        display: block;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid ${props => props.color};
        border-left: 0px;
        border-right: 0px;
        margin: auto;
        animation: rotate 0.5s linear infinite reverse;
    }

    &:before {
        content:'';
        display: block;
        position: absolute;
        top: 10px;
        left: 4px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid ${props => props.color};
        border-top: 0px;
        border-bottom: 0px;
        margin: auto;
        animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        
        to {
            transform: rotate(360deg);
        }
    }
`;

export default Loading3;