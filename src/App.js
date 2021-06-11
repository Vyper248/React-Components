import { useState } from 'react';
import './App.css';

import Container from './components/Containers/Container';
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
import Dropdown from './components/Inputs/Dropdown';
import DropdownCustom from './components/Inputs/DropdownCustom';

import TableBasic from './components/Tables/TableBasic';
import TableSortable from './components/Tables/TableSortable';
import TableSearchable from './components/Tables/TableSearchable';

import Modal from './components/Modals/Modal';

import TabbedContainer from './components/Containers/TabbedContainer';

function App() {
	const [textInput, setTextInput] = useState('Hello');
	const [numberInput, setNumberInput] = useState(5);
	const [colorInput, setColorInput] = useState('#FF0000');
	const [dateInput, setDateInput] = useState('2021-03-01');
	const [timeInput, setTimeInput] = useState('11:15');
	const [checkboxInput, setCheckboxInput] = useState(true);
	const [radioInput, setRadioInput] = useState('Cat');
	const [dropdownInput, setDropdownInput] = useState('');
	const [modal1Open, setModal1Open] = useState(false);
	const [modal2Open, setModal2Open] = useState(false);
	const [modal3Open, setModal3Open] = useState(false);

	const tableData = [
		['Bob', '1981-12-12', 'Nottingham', 'UK'],
		['Emma', '1989-05-04', 'Sheffield', 'UK'],
		['Emily', '1983-02-08', 'Mansfield', 'UK'],
		['Dan', '1987-07-01', 'London', 'UK'],
		['Phil', '1993-10-27', 'Cambridge', 'UK'],
		['Heather', '1984-05-16', 'Paris', 'France']
	];

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
				<Input type='radio' value={'Cat'} onChange={setRadioInput} name='pet' checked={radioInput === 'Cat'}/>
				<Input type='radio' value={'Dog'} onChange={setRadioInput} name='pet' checked={radioInput === 'Dog'}/>
				<Input type='radio' value={'Other'} onChange={setRadioInput} name='pet' checked={radioInput === 'Other'}/>

				<Heading text='Inputs with Label'/>
				<Input labelText='Text' labelWidth={120} labelAlign='left' type='text' value={textInput} onChange={setTextInput} placeholder='Text Input'/>
				<Input labelText='Password' labelWidth={120} labelAlign='center' type='password' value={textInput} onChange={setTextInput} placeholder='Password Input'/>
				<Input labelText='Number' labelWidth={120} labelAlign='right' type='number' value={numberInput} onChange={setNumberInput} placeholder='Number Input'/>
				<Input labelText='Color' type='color' value={colorInput} onChange={setColorInput}/>
				<Input labelText='Date' type='date' value={dateInput} onChange={setDateInput}/>
				<Input labelText='Time' type='time' value={timeInput} onChange={setTimeInput}/>
				<Input labelText='Checkbox' type='checkbox' value={checkboxInput} onChange={setCheckboxInput}/>

				<Input labelText='Cat' type='radio' value={'Cat'} onChange={setRadioInput} checked={radioInput === 'Cat'}/>
				<Input labelText='Dog' type='radio' value={'Dog'} onChange={setRadioInput} checked={radioInput === 'Dog'}/>
				<Input labelText='Other' type='radio' value={'Other'} onChange={setRadioInput} checked={radioInput === 'Other'}/>

				<Heading text='Dropdowns'/>
				<p>(Check code for differences in how to use options.)</p>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={['Cat', 'Dog', 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={[{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}, {display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={{'Pets': ['Cat', 'Dog'], 'Food': [1, 2]}} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={{'Pets': [{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}], 'Food': [{display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]}} onChange={setDropdownInput}/>
				<Dropdown labelText='Dropdown' placeholder='Please Select' value={dropdownInput} options={{'Pets': [{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}], 'Food': [{display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]}} onChange={setDropdownInput}/>
				<br/>
				<DropdownCustom placeholder='Please Select' value={dropdownInput} options={['Cat', 'Dog', 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]} onChange={setDropdownInput}/>
				<DropdownCustom placeholder='Please Select' value={dropdownInput} options={[{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}, {display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]} onChange={setDropdownInput}/>
				<DropdownCustom placeholder='Please Select' value={dropdownInput} options={{'Pets': ['Cat', 'Dog'], 'Food': [1, 2]}} onChange={setDropdownInput}/>
				<DropdownCustom labelText='Custom Dropdown' placeholder='Please Select' value={dropdownInput} options={{'Pets': [{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}], 'Food': [{display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]}} onChange={setDropdownInput}/>

				<Heading text='Tables'/>
				<TableSortable tableHeading='Sortable Table' header={['Name', 'Date', 'City', 'Country']} data={tableData}/>
				<TableSearchable tableHeading='Searchable Table' header={['Name', 'Date', 'City', 'Country']} data={tableData}/>
				<TableBasic tableHeading='Basic Small Table' size='small' header={['Name', 'Date', 'City', 'Country']} data={tableData}/>
				<TableBasic tableHeading='Basic Medium Table' size='medium' header={['Name', 'Date', 'City', 'Country']} data={tableData}/>
				<TableBasic tableHeading='Basic Large Table' size='large' header={['Name', 'Date', 'City', 'Country']} data={tableData}/>

				<Heading text='Modals'/>
				<BasicButton onClick={() => setModal1Open(true)} label='Open Small'/>
				<BasicButton onClick={() => setModal2Open(true)} label='Open Medium'/>
				<BasicButton onClick={() => setModal3Open(true)} label='Open Large'/>
				
				<Heading text='Containers'/>
				<TabbedContainer>
					<div>
						<h4>Page 1</h4>
						<div>Aliquip et occaecat sit ex reprehenderit aliquip incididunt occaecat in aliqua pariatur aliquip. Minim ad velit id aliquip dolore non incididunt. Veniam aliquip veniam excepteur nostrud aute incididunt anim sint voluptate enim sint.</div>
					</div>
					<div>
						<h4>Page 2</h4>
						<div>Aliquip et occaecat sit ex reprehenderit aliquip incididunt occaecat in aliqua pariatur aliquip. Minim ad velit id aliquip dolore non incididunt. Veniam aliquip veniam excepteur nostrud aute incididunt anim sint voluptate enim sint.</div>
					</div>
					<div>
						<h4>Page 3</h4>
						<div>Aliquip et occaecat sit ex reprehenderit aliquip incididunt occaecat in aliqua pariatur aliquip. Minim ad velit id aliquip dolore non incididunt. Veniam aliquip veniam excepteur nostrud aute incididunt anim sint voluptate enim sint.</div>
					</div>
				</TabbedContainer>


				{/* Modals should be at the end to prevent possible glitches */}
				<Modal open={modal1Open} width='400px' closeFunc={() => setModal1Open(false)} closeOnClickOutside={true}>
					<section>
						<p>Basic small modal with text</p>
						<p>Can click outside to close if property is set</p>
						<div><BasicButton onClick={() => setModal1Open(false)} label='Close'/></div>
					</section>
				</Modal>
				<Modal open={modal2Open} width='600px'>
					<header>
						<h2>Medium Modal</h2>
					</header>
					<section>
						<p>Medium sized modal with header and footer. Can only close using the button</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
					</section>
					<footer><BasicButton onClick={() => setModal2Open(false)} label='Close'/></footer>
				</Modal>
				<Modal open={modal3Open} width='1000px' closeFunc={() => setModal3Open(false)} closeOnClickOutside={true}>
					<header>
						<h2>Large Modal</h2>
					</header>
					<section>
						<p>Larger modal with long content section to show scrolling. </p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
						<p>Cillum qui minim do nostrud dolore enim commodo officia laboris. Eiusmod sint eu sunt commodo ullamco cillum. Ex voluptate incididunt consectetur adipisicing do. Pariatur sint ullamco eu nostrud officia deserunt aliquip occaecat exercitation est et irure deserunt dolor. Cupidatat velit do eu velit sit elit fugiat.</p>
						<p>Ipsum quis mollit excepteur cupidatat aute dolor dolore excepteur excepteur aliqua culpa est reprehenderit. Nostrud mollit Lorem sint aliqua ullamco veniam esse eu. Commodo nisi velit eu anim aliqua do laboris id ut adipisicing.</p>
					</section>
					<footer><BasicButton onClick={() => setModal3Open(false)} label='Close'/></footer>
				</Modal>
			</Container>
			<div style={{marginBottom: '500px'}}></div>
		</div>
    );
}

export default App;
