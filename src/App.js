import react, { useState } from 'react';
import './App.css';

import Container from './components/Container';
import Header from './components/Header';
import Heading from './components/Heading';

import BasicButton from './components/Buttons/BasicButton';
import BasicOutlineButton from './components/Buttons/BasicOutlineButton';
import AnimatedButton1 from './components/Buttons/AnimatedButton1';
import ConfirmButtonInline from './components/Buttons/ConfirmButtonInline';
import ConfirmButtonPopup from './components/Buttons/ConfirmButtonPopup';

import Loading1 from './components/Loading/Loading1';
import Loading2 from './components/Loading/Loading2';
import Loading3 from './components/Loading/Loading3';
import Loading4 from './components/Loading/Loading4';
import Loading5 from './components/Loading/Loading5';

import Input from './components/Inputs/Input';

function App() {
	const [textInput, setTextInput] = useState('Hello');
	const [numberInput, setNumberInput] = useState(5);
	const [colorInput, setColorInput] = useState('#FF0000');
	const [dateInput, setDateInput] = useState('2021-03-01');
	const [timeInput, setTimeInput] = useState('11:15');
	const [checkboxInput, setCheckboxInput] = useState(true);
	const [radioInput, setRadioInput] = useState('Cat');

    return (
    	<div className='App'>
			<Header/>
			<Container>
				<Heading text='Buttons'/>
				<p>Basic buttons. Text colour automatically changes between black and white depending on background colour, otherwise has can set manually. Can also change width and margin properties.</p>
				<BasicButton label='Basic Button' onClick={()=>{}}/>
				<BasicButton label='Basic Button' color='blue' onClick={()=>{}}/>
				<BasicButton label='Basic Button' color='red' textColor='black' onClick={()=>{}}/>
				<BasicButton label='Basic Button' color='green' onClick={()=>{}}/>
				<BasicButton label='Basic Button' color='#AA23AC' onClick={()=>{}}/>
				<BasicButton label='Basic Button' color='#BBB' onClick={()=>{}}/>
				<br/>
				<BasicOutlineButton label='Outline Button' color='blue' onClick={()=>{}}/>
				<BasicOutlineButton label='Outline Button' color='black' onClick={()=>{}}/>
				<BasicOutlineButton label='Outline Button' color='red' backgroundColor='black' onClick={()=>{}}/>
				<BasicOutlineButton label='Outline Button' color='YellowGreen' onClick={()=>{}}/>
				<br/>
				<AnimatedButton1 label='Animated Button' color='#00F'/>
				<AnimatedButton1 label='Animated Button' color='#F00' textColor='black'/>
				<AnimatedButton1 label='Animated Button' color='#0F0'/>

				<Heading text='Confirmation Buttons'/>
				<ConfirmButtonInline label='Confirm Button 1' color='blue'/>
				<ConfirmButtonInline label='Confirm Button 1' color='red' textColor='black'/>
				<ConfirmButtonInline label='Confirm Button 1' color='black'/>
				<br/>
				<ConfirmButtonPopup label='Confirm Button 2' color='#AA23AC' direction='left'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='black'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='green' direction='bottom'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='red' textColor='black' direction='right'/>

				<Heading text='Loading'/>
				{/* <Loading1 color='blue'/> */}
				{/* <Loading2 color='green' rotation='90' origin='middle' smooth='2'/> */}
				{/* <Loading2 color='red' rotation='0' origin='middle' smooth='3'/> */}
				{/* <Loading2 color='blue' rotation='-90' origin='left' smooth='1'/> */}
				{/* <Loading3 color='black'/> */}
				{/* <Loading5 color='red'/> */}
				{/* <Loading5 color='blue' style={2}/> */}
				{/* <Loading4 color='red'/> */}

				<Heading text='Inputs'/>
				<Input type='text' value={textInput} onChange={setTextInput} placeholder='Text Input'/>
				<Input type='password' value={textInput} onChange={setTextInput} placeholder='Password Input'/>
				<Input type='number' value={numberInput} onChange={setNumberInput} placeholder='Number Input'/>
				<Input type='button' value='Button' onChange={()=>{}}/>
				<Input type='color' value={colorInput} onChange={setColorInput}/>
				<Input type='date' value={dateInput} onChange={setDateInput}/>
				<Input type='time' value={timeInput} onChange={setTimeInput}/>
				<Input type='checkbox' value={checkboxInput} onChange={setCheckboxInput}/>

				<br/>
				<label>Cat</label>
				<Input type='radio' value={'Cat'} onChange={setRadioInput} name='pet' checked={radioInput === 'Cat'}/>
				<label>Dog</label>
				<Input type='radio' value={'Dog'} onChange={setRadioInput} name='pet' checked={radioInput === 'Dog'}/>
				<label>Other</label>
				<Input type='radio' value={'Other'} onChange={setRadioInput} name='pet' checked={radioInput === 'Other'}/>

				<br/>
				<Input label='Text' labelWidth='120px' labelAlign='left' type='text' value={textInput} onChange={setTextInput} placeholder='Text Input'/>
				<Input label='Password' labelWidth='120px' labelAlign='center' type='password' value={textInput} onChange={setTextInput} placeholder='Password Input'/>
				<Input label='Number' labelWidth='120px' labelAlign='right' type='number' value={numberInput} onChange={setNumberInput} placeholder='Number Input'/>
				<Input label='Color' type='color' value={colorInput} onChange={setColorInput}/>
				<Input label='Date' type='date' value={dateInput} onChange={setDateInput}/>
				<Input label='Time' type='time' value={timeInput} onChange={setTimeInput}/>
				<Input label='Checkbox' type='checkbox' value={checkboxInput} onChange={setCheckboxInput}/>

				<Input label='Cat' type='radio' value={'Cat'} onChange={setRadioInput} name='pet2' checked={radioInput === 'Cat'}/>
				<Input label='Dog' type='radio' value={'Dog'} onChange={setRadioInput} name='pet2' checked={radioInput === 'Dog'}/>
				<Input label='Other' type='radio' value={'Other'} onChange={setRadioInput} name='pet2' checked={radioInput === 'Other'}/>

				<Heading text='Modals'/>
				<Heading text='Tables'/>
			</Container>
			<div style={{marginBottom: '500px'}}></div>
		</div>
    );
}

export default App;
