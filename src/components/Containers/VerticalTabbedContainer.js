import { useState } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    overflow: hidden;
    margin-left: 10px;

    .mainContent {
        position: absolute;
        left: 100px;
        width: 400px;
        margin-top: 50px;
        padding: 10px 30px;

        h4 {
            margin: 0px;
        }
    }

    .tab {
        height: 300px;
        position: absolute;
        color: white;
        transform: translateX(-395px);
        transition: transform 0.5s;

        div:last-child {
            margin-top: 50px;
            padding: 10px 30px;
            width: 400px;
            position: absolute;
            right: 0px;
            overflow: hidden;
        }
    }

    .tabLabel {
        cursor: pointer;
        display: block;
        width: 20px;
        height: 100px;
        position: absolute;
        left: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        writing-mode: vertical-lr;
        text-orientation: sideways;
    }

    .tab1 {
        width: 500px;
        background-color: purple;
        ${props => props.openTab >= 1 ? 'transform: translateX(0px);' : ''};

        .tabLabel {
            background-color: purple;
        }
    }

    .tab2 {
        width: 475px;
        background-color: yellow;
        ${props => props.openTab >= 2 ? 'transform: translateX(0px);' : ''};

        .tabLabel {
            background-color: yellow;
            color: black;
            top: 50px;
        }

        div:last-child {
            color: black;
        }
    }

    .tab3 {
        width: 450px;
        background-color: blue;
        ${props => props.openTab >= 3 ? 'transform: translateX(0px);' : ''};

        .tabLabel {
            background-color: blue;
            top: 100px;
        }
    }

    .tab4 {
        width: 425px;
        background-color: green;
        ${props => props.openTab >= 4 ? 'transform: translateX(0px);' : ''};

        .tabLabel {
            background-color: green;
            top: 150px;
        }
    }

    .tab5 {
        width: 400px;
        background-color: red;
        ${props => props.openTab >= 5 ? 'transform: translateX(0px);' : ''};

        .tabLabel {
            background-color: red;
            color: black;
            top: 200px;
        }

        div:last-child {
            color: black;
        }
    }
`

const VerticalTabbedContainer = () => {
    const [openTab, setOpenTab] = useState(0);

    const onClickTab = (tab) => (e) => {
        if (openTab !== tab) setOpenTab(tab);
        else setOpenTab(0);
    }

    return (
        <StyledComp openTab={openTab}>
            
            <div className='mainContent'>
                <h4>Vertical Tab Container</h4>
                <p>Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.</p>
            </div>
            <div className='tab tab1'>
                <div className='tabLabel' onClick={onClickTab(1)}>Tab 1</div>
                <div>
                    Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.
                </div>
            </div>
            <div className='tab tab2'>
                <div className='tabLabel' onClick={onClickTab(2)}>Tab 2</div>
                <div>
                    Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.
                </div>
            </div>
            <div className='tab tab3'>
                <div className='tabLabel' onClick={onClickTab(3)}>Tab 3</div>
                <div>
                    Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.
                </div>
            </div>
            <div className='tab tab4'>
                <div className='tabLabel' onClick={onClickTab(4)}>Tab 4</div>
                <div>
                    Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.
                </div>
            </div>
            <div className='tab tab5'>
                <div className='tabLabel' onClick={onClickTab(5)}>Tab 5</div>
                <div>
                    Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah. Content Goes Here. Blah Blah Blah.
                </div>
            </div>
        </StyledComp>
    );
}

export default VerticalTabbedContainer;