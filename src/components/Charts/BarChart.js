import styled from 'styled-components';

const StyledComp = styled.div`
    display: grid;
    grid-template-columns: fit-content(50px) auto;

    & #container {
        overflow: scroll;
        text-align: left;
    }

    & #range {
        position: relative;
        top: -8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: ${props => props.height+18+'px'};

        div {
            text-align: right;
            margin-right: 5px;
        }
    }

    & #chart, & #labels {
        width: ${props => props.width ? props.width : '100%'};
        min-width: ${props => `${props.numberItems*30}px`};
        max-width: ${props => props.maxBarWidth ? `${props.numberItems*props.maxBarWidth}px` : ''};
        display: inline-grid;
        grid-template-columns: repeat(${props => props.numberItems}, 1fr);
        grid-gap: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }

    & #chart {
        height: ${props => props.height+'px'};
        border-left: 3px solid black;
        border-bottom: 3px solid black;

        .bar {
            display: inline-block;
            background-color: #DDD;
            width: 100%;
            height: 100%;
            transform-origin: bottom;
            transition: 0.5s transform;
            margin: auto;
        }
    }

    & #labels {
        .label {
            display: inline-flex;
            width: 100%;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            justify-content: flex-end;
            align-items: center;
            margin-top: 5px;
        }
    }

    & #chartContainer {
        position: relative;

        .rangeLine {
            border-bottom: 1px solid black;
            opacity: 0.1;
            width: calc(100% - 3px);
            max-width: ${props => props.width ? props.width : `${props.numberItems*props.maxBarWidth}px`};
            position: absolute;
            top: 50%;
            left: 3px;
            z-index: 2;
        }
    }

`

const BarChart = ({rangeStart, rangeEnd, data, height=300, sameColor, rangeLines=5, ...rest}) => {
    const colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'];
    if (rangeLines > 10) rangeLines = 10;
    if (rangeLines < 1) rangeLines = 1;

    let lowestValue = data.reduce((a,c) => {
        if (c.value < a) return c.value;
        return a;
    }, Infinity);

    let highestValue = data.reduce((a,c) => {
        if (c.value > a) return c.value;
        return a;
    }, 0);

    if (rangeStart === undefined) rangeStart = lowestValue < 100 ? 0 : lowestValue;
    if (rangeEnd === undefined) rangeEnd = highestValue;

    let mappedData = data.map((obj, i) => {
        let newObj = {...obj};
        newObj.height = newObj.value / rangeEnd;
        newObj.color = sameColor === undefined ? colors[i%colors.length] : sameColor;
        newObj.id = i;
        return newObj;
    });

    //create array used for creating range lines and values
    let rangeArr = new Array(rangeLines).fill(1).map((x,i) => Math.round((rangeEnd/rangeLines) * (rangeLines - i)));

    return (
        <StyledComp height={height} numberItems={data.length} {...rest}>
            <div id='range'>
                { rangeArr.map(x => <div>{x}</div>) }
                <div>{rangeStart}</div>
            </div>
            <div id='container'>
                <div id='chartContainer'>
                    { rangeArr.map((x,i) => <div className='rangeLine' style={{top:`${(100/rangeArr.length)*i}%`}}></div>) }
                    <div id='chart'>
                        { mappedData.map(obj => <div title={obj.value} key={`bar-${obj.id}`} className='bar' style={{transform: `scale(1, ${obj.height})`, backgroundColor: obj.color}}/>) }
                    </div>
                </div>
                <div id='labels'>
                    { mappedData.map(obj => <div key={`label-${obj.id}`} className='label'>{obj.label}</div>) }
                </div>
            </div>
        </StyledComp>
    );
}

export default BarChart;