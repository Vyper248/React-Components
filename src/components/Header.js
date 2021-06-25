import { memo } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    background-color: lightblue;
    padding: 20px;
    font-size: 2em;
    font-weight: bold;
`;

const Header = () => {
    return (
        <StyledComp>React Components</StyledComp>
    );
}

export default memo(Header);