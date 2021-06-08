import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.table`
    border-collapse: collapse;
    width: auto;

    th, td {
        padding: 5px 10px;
        border-right: 1px solid black;
    }

    th:first-child {
        border-top-left-radius: 5px;
    }

    th:last-child {
        border-top-right-radius: 5px;
    }

    th {
        border-bottom: 2px solid black;
        background-color: #CCC;
        min-width: 100px;
    }

    th:last-child,
    td:last-child {
        border-right: none;
    }

    tr {
        border-bottom: 1px solid black;
    }

    tr:last-child {
        border-bottom: none;
    }

    tr:nth-child(2n) td {
        background-color: #EEE;
    }
`;

const StyledContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px;

    & > h4 {
        align-self: center;
        margin: 5px;
    }
`;

const Table1 = ({tableHeading='', header=[], data=[]}) => {
    return (
        <StyledContainer>
            { tableHeading.length > 0 ? <h4>{tableHeading}</h4> : null }
            <StyledComp>
                <thead>
                    <tr>
                        { header.map((a,i) => <th key={`thead-${i}-${a}`}>{a}</th>) }
                    </tr>
                </thead>
                <tbody>
                    { data.map((r,i) => <tr key={`tbody-${i}`}>{ r.map((d,i2) => <td key={`tdata-${i2}-${d}`}>{d}</td>) }</tr>) }
                </tbody>
            </StyledComp>
        </StyledContainer>
    );
}

export default Table1;