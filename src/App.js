import './App.css';

import Container from './components/Container';
import Header from './components/Header';
import Heading from './components/Heading';
import BasicButton from './components/BasicButton';
import BasicOutlineButton from './components/BasicOutlineButton';
import AnimatedButton1 from './components/AnimatedButton1';
import ConfirmButtonInline from './components/ConfirmButtonInline';
import ConfirmButtonPopup from './components/ConfirmButtonPopup';

function App() {
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
				<ConfirmButtonPopup label='Confirm Button 2' color='#AA23AC'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='black'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='green'/>
				<Heading text='Inputs'/>
				<Heading text='Modals'/>
				<Heading text='Tables'/>
			</Container>
		</div>
    );
}

export default App;
