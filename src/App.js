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
				<ConfirmButtonPopup label='Confirm Button 2' color='#AA23AC' direction='left'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='black'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='green' direction='bottom'/>
				<ConfirmButtonPopup label='Confirm Button 2' color='red' textColor='black' direction='right'/>

				<Heading text='Loading'/>
				<Loading1 color='blue'/>
				<Loading2 color='green' rotation='90' origin='middle' smooth='2'/>
				<Loading2 color='red' rotation='0' origin='middle' smooth='3'/>
				<Loading2 color='blue' rotation='-90' origin='left' smooth='1'/>
				<Loading3 color='black'/>

				<Heading text='Inputs'/>
				<Heading text='Modals'/>
				<Heading text='Tables'/>
			</Container>
		</div>
    );
}

export default App;
