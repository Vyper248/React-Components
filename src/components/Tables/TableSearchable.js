import { useState } from 'react';
import styled from 'styled-components';

const StyledComp = styled.table`
    border-collapse: collapse;
    width: auto;

    th, td {
        padding: 7px 10px;
        ${props => props.size === 'small' ? 'padding: 4px 7px;' : ''};
        ${props => props.size === 'large' ? 'padding: 10px 15px;' : ''};
        border-right: 1px solid #CCC;
    }

    th:first-child {
        border-top-left-radius: 5px;
    }

    th:last-child {
        border-top-right-radius: 5px;
    }

    th {
        border-bottom: 1px solid black;
        background-color: #DDD;
        min-width: 100px;
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
    position: relative;

    & > h4 {
        align-self: center;
        margin: 5px;
    }

    & > div {
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 4px;
    }

    & > div > input {
        width: 100px;
    }
`;

const TableSearchable = ({tableHeading='', header=[], data=[], size='medium'}) => {
    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredData = data.filter(arr => {
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase().includes(search.toLowerCase())) {
                found = true;
                break;
            }
        }
        return found;
    });

    return (
        <StyledContainer>
            { tableHeading.length > 0 ? <h4>{tableHeading}</h4> : null }
            <div><input placeholder='Search' value={search} onChange={onChangeSearch}/></div>
            <StyledComp size={size}>
                <thead>
                    <tr>
                        { header.map((a,i) => <th key={`thead-${i}-${a}`}>{a}</th>) }
                    </tr>
                </thead>
                <tbody>
                    { filteredData.map((r,i) => <tr key={`tbody-${i}`}>{ r.map((d,i2) => <td key={`tdata-${i2}-${d}`}>{d}</td>) }</tr>) }
                </tbody>
            </StyledComp>
        </StyledContainer>
    );
}

export default TableSearchable;