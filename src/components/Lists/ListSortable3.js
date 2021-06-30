import { useState, cloneElement } from 'react';
import styled from 'styled-components';
import { TiArrowUnsorted } from 'react-icons/ti';

const StyledComp = styled.div`
    text-align: left;
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 0px;
    display: inline-block;
    width: ${props => props.width};
    margin: 5px;

    & > div > div {
        border-bottom: 1px solid #DDD;
        list-style: none;
        ${props => !props.dragHandle ? 'padding: 5px;' : ''}
        ${props => !props.dragHandle ? 'user-select: none;' : ''}
    }

    & > div > div:last-child {
        border-bottom: none;
    }

    & > div > div:hover {
        ${props => props.dragHandle ? 'cursor: auto;' : 'cursor: pointer;'}
        ${props => !props.dragHandle ? 'background-color: #EEE;' : ''}
    }

    & > h4 {
        margin: 0px;
        border-bottom: 1px solid #DDD;
        padding: 5px;
        text-align: center;
        background-color: #DDD;
    }

    & .handle {
		display: inline-block;
		padding: 4px 6px;
		height: 28px;
		margin-right: 5px;
		border-right: 1px solid #DDD;
        user-select: none;
	}

	& .handle > svg {
		position: relative;
		top: 2px;
	}

	& .handle:hover {
		background-color: #EEE;
		cursor: pointer;
	}
`;

const ListSortable3 = ({children, width='150px', heading='', dragHandle=false, items=[], onChange=()=>{}}) => {
    const [startPos, setStartPos] = useState(-1);
    const [dragEnabled, setDragEnabled] = useState(dragHandle ? false : true);

    const onDragStart = (i) => () => {
        setStartPos(i);
    }

    const onDragEnter = (i) => () => {
        if (dragHandle && !dragEnabled) return;
        let newItems = [...items];
        let movedItem = newItems[startPos];
        newItems.splice(startPos, 1);
        newItems.splice(i, 0, movedItem);
        onChange(newItems);
        setStartPos(i);
    }

    const onDragEnd = () => {
        setDragEnabled(dragHandle ? false : true);
    }

    const onMouseDown = () => {
        setDragEnabled(true);
    }

    const onMouseUp = () => {
        setDragEnabled(dragHandle ? false : true);
    }

    return (
        <StyledComp width={width} dragHandle={dragHandle}>
            { heading.length > 0 ? <h4>{heading}</h4> : null }
            <div>
            { items.map((obj,i) => {
                let value = typeof obj === 'object' ? obj.value : obj;
                return <div key={`list-el-${i}`} draggable={dragEnabled} onMouseUp={onMouseUp} onDragStart={onDragStart(i)} onDragEnter={onDragEnter(i)} onDragEnd={onDragEnd}>
                            { dragHandle ? <span className='handle' onMouseDown={onMouseDown}><TiArrowUnsorted/></span> : null }
                            {value}
                        </div>;
            }) }
            </div>
        </StyledComp>
    );
}

export default ListSortable3;