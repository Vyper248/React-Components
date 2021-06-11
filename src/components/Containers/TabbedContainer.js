import { useState } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px;

    & > #content {
        border: 1px solid #DDD;
        padding: 10px;
        ${'' /* border-bottom: none; */}
    }

    & > #tabs {
        text-align: left;
        position: relative;
        top: 1px;
    }

    & > #tabs > div {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #DDD;
        border-right: none;
        background-color: #FFF;
    }

    & > #tabs > div:first-child {
        border-top-left-radius: 5px;
    }

    & > #tabs > div:last-child {
        border-right: 1px solid #DDD;
        border-top-right-radius: 5px;
    }

    & > #tabs > div:hover {
        cursor: pointer;
    }

    & > #tabs > div.selected {
        background-color: #FFF;
        border-bottom: 1px solid white;
    }

    & > #tabs > div:not(.selected) {
        background-color: #EEE;
    }
`;

const TabbedContainer = ({children, startPage=1}) => {
    const [page, setPage] = useState(startPage);
    let pages = children.length;

    const onClickPage = (page) => () => {
        setPage(page);
    }

    return (
        <StyledComp>
            <div id='tabs'>
                { children.map((a,i) => <div key={`pageBtn-${i+1}`} onClick={onClickPage(i+1)} className={page === i+1 ? 'selected' : ''}>Page {i+1}</div>) }
            </div>
            <div id='content'>
                { children[page-1] }
            </div>
        </StyledComp>
    );
}

export default TabbedContainer;