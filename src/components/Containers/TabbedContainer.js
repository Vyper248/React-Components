import { useState } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    margin: 5px;

    & > #content {
        ${props => props.hideBorders ? 'border-top: 1px solid #DDD' : 'border: 1px solid #DDD'};
        padding: 10px;
    }
`;

const Tab1 = styled.div`
     {
        text-align: left;
        position: relative;
        top: 1px;
    }

    & > div {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #DDD;
        border-right: none;
    }

    & > div:first-child {
        border-top-left-radius: 5px;
    }

    & > div:last-child {
        border-right: 1px solid #DDD;
        border-top-right-radius: 5px;
    }

    & > div:hover {
        cursor: pointer;
    }

    & > div.selected {
        background-color: #FFF;
        border-bottom: 1px solid white;
    }

    & > div:not(.selected) {
        background-color: #EEE;
    }
`;

const Tab2 = styled.div`
    text-align: left;
    position: relative;
    margin-bottom: 1px;

    & > div {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #DDD;
        margin: 1px;
    }

    & > div:hover {
        cursor: pointer;
    }

    & > div.selected {
        background-color: #FFF;
    }

    & > div:not(.selected) {
        background-color: #EEE;
    }
`;

const TabbedContainer = ({children, startPage=1, tabNames=[], hideBorders=false, tabStyle=1}) => {
    const [page, setPage] = useState(startPage);
    let pages = children.length;

    const onClickPage = (page) => () => {
        setPage(page);
    }

    let tabs = [Tab1, Tab2];
    let TabComponent = tabs[tabStyle-1];
    if (tabStyle > tabs.length) TabComponent = tabs[tabs.length-1];
    if (tabStyle < 1) TabComponent = tabs[0];

    return (
        <StyledComp hideBorders={hideBorders}>
            <TabComponent>
                { children.map((a,i) => <div key={`pageBtn-${i+1}`} onClick={onClickPage(i+1)} className={page === i+1 ? 'selected' : ''}>{tabNames[i] || `Tab ${i+1}`}</div>) }
            </TabComponent>
            <div id='content'>
                { children[page-1] }
            </div>
        </StyledComp>
    );
}

export default TabbedContainer;