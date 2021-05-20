import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`

`;

const LoadingOverlay = ({children}]) => {
    return (
        <StyledComp>{children}</StyledComp>
    );
}

export default LoadingOverlay;