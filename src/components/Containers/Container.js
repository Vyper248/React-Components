import { memo } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0px 10px;
`;

const Container = ({children}) => {
    return (
        <StyledComp>{children}</StyledComp>
    );
}

export default memo(Container);