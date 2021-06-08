import { useState } from 'react';
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
        position: relative;
    }

    th:hover {
        cursor: pointer;
        background-color: #AAA;
    }

    & #id${props => props.sortBy}::after {
        content: '';
        display: inline-block;
        position: absolute;
        right: 3px;
        top: calc(50% - 5px);
        width: 0px;
        height: 0px;
        ${props => props.sortOrder > 0 ? 'border-top: 10px solid black' : 'border-bottom: 10px solid black'};
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }

    th:last-child,
    td:last-child {
        border-right: none;
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

const TableSortable = ({tableHeading='', header=[], data=[]}) => {
    const [sortBy, setSortBy] = useState(0);
    const [sortOrder, setSortOrder] = useState(1);

    let sortedData = [...data];
    if (sortBy > -1) {
        sortedData.sort((a,b) => a[sortBy] < b[sortBy] ? -1*sortOrder : 1*sortOrder);
    }

    const onClickHeading = (index) => () => {
        if (sortBy === index) setSortOrder(-sortOrder);
        else setSortOrder(1);

        setSortBy(index);
    }

    return (
        <StyledContainer>
            { tableHeading.length > 0 ? <h4>{tableHeading}</h4> : null }
            <StyledComp sortBy={sortBy} sortOrder={sortOrder}>
                <thead>
                    <tr>
                        { header.map((a,i) => <th id={`id${i}`} key={`thead-${i}-${a}`} onClick={onClickHeading(i)}>{a}</th>) }
                    </tr>
                </thead>
                <tbody>
                    { sortedData.map((r,i) => <tr key={`tbody-${i}`}>{ r.map((d,i2) => <td key={`tdata-${i2}-${d}`}>{d}</td>) }</tr>) }
                </tbody>
            </StyledComp>
        </StyledContainer>
    );
}

export default TableSortable;