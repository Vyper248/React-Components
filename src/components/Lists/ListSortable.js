import { useState, cloneElement } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    text-align: left;
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 0px;
    display: inline-block;
    width: ${props => props.width};
    margin: 5px;

    & > div > * {
        display: block;
        border-bottom: 1px solid #DDD;
        padding: 5px;
        list-style: none;
        user-select: none;
    }

    & > div > *:last-child {
        border-bottom: none;
    }

    & > div > *:hover {
        cursor: pointer;
        background-color: #EEE;
    }

    & > div > *.endPos {
        ${props => props.endPos < props.startPos ? 'border-top: 1px solid blue !important' : 'border-bottom: 1px solid blue !important'};
    }

    & > h4 {
        margin: 0px;
        border-bottom: 1px solid #DDD;
        padding: 5px;
        text-align: center;
        background-color: #DDD;
    }
`;

//Find the child with the 'handle' class and add onMouseDown handler to it.
const recursiveMap = (children, onMouseDown) => {
    return children.map(child => {
        if (child.props && child.props.className === 'handle') return cloneElement(child, {onMouseDown: onMouseDown});
        else if (child.props && typeof child.props.children === 'object') return cloneElement(child, {}, recursiveMap(child.props.children, onMouseDown))
        else return child;
    })
} 

const ListSortable = ({children, width='150px', heading='', dragHandle=false, items=[], onChange=()=>{}}) => {
    const [startPos, setStartPos] = useState(-1);
    const [endPos, setEndPos] = useState(-1);
    const [dragEnabled, setDragEnabled] = useState(dragHandle ? false : true);

    const onDragStart = (i) => () => {
        setStartPos(i);
    }

    const onDragEnter = (i) => () => {
        setEndPos(i);
    }

    const onDragEnd = () => {
        let newItems = [...items];
        let movedItem = newItems[startPos];
        newItems.splice(startPos, 1);
        newItems.splice(endPos, 0, movedItem);
        onChange(newItems);
        setStartPos(-1);
        setEndPos(-1);
        setDragEnabled(dragHandle ? false : true);
    }

    const onMouseDown = () => {
        setDragEnabled(true);
    }

    const onMouseUp = () => {
        setDragEnabled(dragHandle ? false : true);
    }

    if (dragHandle) children = recursiveMap(children, onMouseDown);

    return (
        <StyledComp width={width} startPos={startPos} endPos={endPos}>
            { heading.length > 0 ? <h4>{heading}</h4> : null }
            <div>
            { children.map((el,i) => {
                return <el.type className={i === endPos ? 'endPos' : ''} {...el.props} draggable={dragEnabled} onMouseUp={onMouseUp} onDragStart={onDragStart(i)} onDragEnter={onDragEnter(i)} onDragEnd={onDragEnd}>{el.props.children}</el.type>;
            }) }
            </div>
        </StyledComp>
    );
}

export default ListSortable;