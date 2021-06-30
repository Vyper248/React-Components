import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { TiArrowUnsorted } from 'react-icons/ti';

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
import Loading6 from './components/Loading/Loading6';

import Input from './components/Inputs/Input';
import Dropdown from './components/Inputs/Dropdown';
import DropdownCustom from './components/Inputs/DropdownCustom';

import TableBasic from './components/Tables/TableBasic';
import TableSortable from './components/Tables/TableSortable';
import TableSearchable from './components/Tables/TableSearchable';

import Modal from './components/Modals/Modal';

import TabbedContainer from './components/Containers/TabbedContainer';

import List from './components/Lists/List';
import ListSortable from './components/Lists/ListSortable';
import ListSortable2 from './components/Lists/ListSortable2';
import ListSortable3 from './components/Lists/ListSortable3';

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
	const [listData, setListData] = useState([
		{id: 0, value: 'Trifle'},
		{id: 1, value: 'Cake'},
		{id: 4, value: 'Pie'},
		{id: 7, value: 'Tart'},
		{id: 3, value: 'Pudding'},
		{id: 5, value: 'Ice Cream'},
	]);

	const tableData = [
		['Bob', '1981-12-12', 'Nottingham', 'UK'],
		['Emma', '1989-05-04', 'Sheffield', 'UK'],
		['Emily', '1983-02-08', 'Mansfield', 'UK'],
		['Dan', '1987-07-01', 'London', 'UK'],
		['Phil', '1993-10-27', 'Cambridge', 'UK'],
		['Heather', '1984-05-16', 'Paris', 'France']
	];

	const onChangeList = (arr) => {
		setListData(arr);
	}

    return (
    	<div className='App'>
			<Header/>
			<Container>
				<p>Note: The purpose of these components is to provide a template to customise where needed. So not necessarily designed to be used as is.</p>
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

				<Heading text='Loading Indicators'/>
				<Loading1 color='blue'/>
				<Loading6 color='black'/>
				<Loading3 color='black'/>
				<Loading2 color='green' rotation='90' origin='middle' smooth='2'/>
				<Loading2 color='red' rotation='0' origin='middle' smooth='3'/>
				<Loading2 color='blue' rotation='-90' origin='left' smooth='1'/>
				<Loading5 color='red'/>
				<Loading5 color='blue' style={2}/>
				<Loading4 color='red'/>

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
				<p>(Check code for differences in how to use options) These use the default appearance for the dropdown.</p>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={['Cat', 'Dog', 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={[{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}, {display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={{'Pets': ['Cat', 'Dog'], 'Food': [1, 2]}} onChange={setDropdownInput}/>
				<Dropdown placeholder='Please Select' value={dropdownInput} options={{'Pets': [{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}], 'Food': [{display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]}} onChange={setDropdownInput}/>
				<Dropdown labelText='Dropdown' placeholder='Please Select' value={dropdownInput} options={{'Pets': [{display: 'Cat', value: 'Cat'}, {display: 'Dog', value: 'Dog'}], 'Food': [{display: 'Trifle', value: 1}, {display: 'Cake', value: 2}]}} onChange={setDropdownInput}/>
				<p>Custom Dropdown</p>
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
				<TabbedContainer tabNames={['Tab 1', 'Page 2', 'Other']}>
					<div>
						<h4>Custom Tab Names</h4>
						<p>Aliquip et occaecat sit ex reprehenderit aliquip incididunt occaecat in aliqua pariatur aliquip. Minim ad velit id aliquip dolore non incididunt. Veniam aliquip veniam excepteur nostrud aute incididunt anim sint voluptate enim sint.</p>
						<p>Nisi proident ex exercitation reprehenderit magna irure sunt cupidatat ex enim id enim. Irure culpa anim do et consequat id magna occaecat adipisicing anim nisi reprehenderit. Nulla magna cupidatat ex minim velit sit exercitation magna proident. Lorem nisi incididunt dolore ullamco ipsum sit commodo. Officia dolor sit adipisicing aliquip dolore ad.</p>
					</div>
					<div>
						<h4>Page 2</h4>
						<p>Tempor fugiat voluptate eiusmod ex aliquip amet. Anim eu aliqua est id. Laboris adipisicing cillum officia adipisicing nostrud. Nulla cupidatat ad ullamco officia. Do nostrud proident cillum aute. In aliquip eu Lorem commodo consectetur nisi est cillum fugiat excepteur voluptate sit dolor.</p>
						<p>Consectetur do incididunt reprehenderit nulla nisi adipisicing ex veniam laboris. Proident nisi nisi et non elit ad ut veniam occaecat consequat tempor magna qui officia. Exercitation aliqua exercitation dolore adipisicing. Aliquip ut aliqua nisi est nostrud nostrud ea ad aliquip velit velit pariatur ad. Duis adipisicing laborum et exercitation irure nulla.</p>
					</div>
					<div>
						<h4>Other</h4>
						<p>Occaecat cupidatat velit fugiat duis cillum excepteur in. In laboris labore excepteur ex ipsum magna labore qui incididunt. Ipsum aliqua aliqua anim quis deserunt nostrud. Ad laboris irure aute aute.</p>
						<p>Ut anim veniam aute labore consequat minim culpa quis officia nostrud aliquip labore aliquip anim. Exercitation occaecat occaecat nulla tempor. Id nulla Lorem quis irure exercitation consectetur incididunt velit. Eu quis ullamco aliqua duis.</p>
					</div>
				</TabbedContainer>
				<br/>
				<TabbedContainer hideBorders={true}>
					<div>
						<h4>Hidden Borders</h4>
						<p>Aliquip et occaecat sit ex reprehenderit aliquip incididunt occaecat in aliqua pariatur aliquip. Minim ad velit id aliquip dolore non incididunt. Veniam aliquip veniam excepteur nostrud aute incididunt anim sint voluptate enim sint.</p>
						<p>Nisi proident ex exercitation reprehenderit magna irure sunt cupidatat ex enim id enim. Irure culpa anim do et consequat id magna occaecat adipisicing anim nisi reprehenderit. Nulla magna cupidatat ex minim velit sit exercitation magna proident. Lorem nisi incididunt dolore ullamco ipsum sit commodo. Officia dolor sit adipisicing aliquip dolore ad.</p>
					</div>
					<div>
						<h4>Default Tab Names</h4>
						<p>Tempor fugiat voluptate eiusmod ex aliquip amet. Anim eu aliqua est id. Laboris adipisicing cillum officia adipisicing nostrud. Nulla cupidatat ad ullamco officia. Do nostrud proident cillum aute. In aliquip eu Lorem commodo consectetur nisi est cillum fugiat excepteur voluptate sit dolor.</p>
						<p>Consectetur do incididunt reprehenderit nulla nisi adipisicing ex veniam laboris. Proident nisi nisi et non elit ad ut veniam occaecat consequat tempor magna qui officia. Exercitation aliqua exercitation dolore adipisicing. Aliquip ut aliqua nisi est nostrud nostrud ea ad aliquip velit velit pariatur ad. Duis adipisicing laborum et exercitation irure nulla.</p>
					</div>
				</TabbedContainer>
				<br/>
				<TabbedContainer hideBorders={true} tabStyle={2}>
					<div><h4>Different Tab Style - Stuitable For Many Tabs</h4><div>Nisi proident ex exercitation reprehenderit magna irure sunt cupidatat ex enim id enim. Irure culpa anim do et consequat id magna occaecat adipisicing anim nisi reprehenderit. Nulla magna cupidatat ex minim velit sit exercitation magna proident. Lorem nisi incididunt dolore ullamco ipsum sit commodo. Officia dolor sit adipisicing aliquip dolore ad.</div></div>
					<div><div>Tempor fugiat voluptate eiusmod ex aliquip amet. Anim eu aliqua est id. Laboris adipisicing cillum officia adipisicing nostrud. Nulla cupidatat ad ullamco officia. Do nostrud proident cillum aute. In aliquip eu Lorem commodo consectetur nisi est cillum fugiat excepteur voluptate sit dolor.</div></div>
					<div><div>Amet qui dolor pariatur ullamco exercitation aliqua do non aliquip mollit. Dolore ad ex Lorem laborum exercitation nisi id cupidatat eu ad eiusmod magna ut exercitation. Aute dolor dolor nulla nisi tempor aute sunt incididunt. Deserunt enim veniam cillum reprehenderit officia voluptate nulla nulla dolore. Esse reprehenderit adipisicing non fugiat quis ut labore nisi nisi.</div></div>
					<div><div>Veniam officia officia sit irure labore magna aute aliquip ullamco duis incididunt. Duis aute tempor proident nostrud eiusmod pariatur laborum cillum ex consequat. Ullamco cillum magna reprehenderit proident incididunt duis eu dolore ad amet qui.</div></div>
					<div><div>Ad proident nulla Lorem occaecat voluptate velit Lorem proident aute ea proident commodo est. Labore aliquip magna exercitation id do in. Ad ea excepteur amet ex. Ad qui aliqua laboris qui ut elit. Quis elit sunt fugiat minim et tempor culpa velit mollit. Veniam proident minim voluptate magna elit fugiat nostrud magna mollit officia.</div></div>
					<div><div>Aliquip eu adipisicing cupidatat incididunt deserunt cillum. Officia irure ex exercitation qui voluptate reprehenderit et ut pariatur et. Nulla non id ad proident nostrud aliquip sunt. Amet minim do esse et aute id est aute tempor laboris esse est ullamco consequat. Cupidatat officia aliquip proident sit incididunt fugiat sit laboris ipsum.</div></div>
					<div><div>Esse nostrud aliquip ad ex irure officia incididunt. Do laborum veniam nulla ut mollit consectetur quis fugiat est esse. Nulla laborum aute dolor reprehenderit. Occaecat ad enim dolore culpa laboris nisi sit incididunt aliqua. Esse occaecat cillum reprehenderit ad officia in incididunt adipisicing nostrud deserunt consectetur sunt quis.</div></div>
					<div><div>Commodo amet qui mollit quis ex consectetur cillum esse exercitation officia minim mollit deserunt. Exercitation ullamco velit magna nisi deserunt dolore duis enim cillum ullamco aute. Duis aute enim officia aliqua pariatur. Dolore consequat sunt cupidatat qui enim quis exercitation eu exercitation do laboris nulla. Veniam enim pariatur Lorem ullamco cupidatat tempor Lorem officia irure occaecat mollit nisi. Exercitation qui exercitation ipsum consequat quis tempor aliqua velit fugiat qui.</div></div>
					<div><div>Exercitation labore ex consequat consequat et. Duis laborum deserunt aliqua non nostrud dolor eiusmod Lorem. Qui in incididunt deserunt aute. Eiusmod magna voluptate non est eu dolor esse exercitation consectetur nisi nulla non ea adipisicing. In aliqua occaecat officia cillum cillum laborum laborum ea consequat dolore officia. Ea minim laboris aliquip veniam est.</div></div>
					<div><div>Aute velit commodo dolor occaecat voluptate velit nulla cillum sunt ullamco consequat. Laborum duis sit ad duis minim esse consequat excepteur. Excepteur et sit culpa ullamco. Dolore do fugiat qui reprehenderit duis et quis exercitation. Elit nisi eiusmod esse nisi ex eiusmod. Tempor culpa ex ad nulla elit laborum ea deserunt sunt magna cupidatat sunt voluptate commodo.</div></div>
					<div><div>Esse dolore irure ullamco laboris et do ad consequat ex cillum. Laboris consectetur laboris aliquip excepteur eiusmod cillum minim nostrud non quis. Est nulla Lorem nostrud occaecat cupidatat officia dolor mollit. Ullamco officia eiusmod voluptate commodo qui aute Lorem. Ullamco tempor duis velit commodo enim sit elit laborum nisi consectetur veniam Lorem irure. Officia dolor irure ipsum aliqua mollit ut excepteur consectetur do qui est officia pariatur.</div></div>
					<div><div>Excepteur ullamco ipsum voluptate aliqua est proident magna commodo voluptate tempor labore. Aute proident adipisicing reprehenderit consectetur ipsum labore ad. Mollit culpa voluptate deserunt occaecat eu sint aliquip non exercitation elit. Velit irure aute deserunt laboris et aute adipisicing nostrud. Magna dolor et ullamco eiusmod.</div></div>
					<div><div>Dolore mollit veniam ea duis cupidatat. Lorem sunt commodo laboris ut velit veniam ut quis aliquip sunt in id. Nulla minim dolore ullamco cupidatat est adipisicing quis pariatur laborum pariatur veniam adipisicing tempor. Excepteur amet velit proident ea ipsum qui labore mollit.</div></div>
					<div><div>Sint ipsum eiusmod proident occaecat dolore aute. In sit excepteur consequat cillum. Ea sint in elit dolor proident exercitation aliquip in non sint et sunt non deserunt. Sunt culpa minim deserunt ea id sit culpa occaecat esse incididunt velit non magna cupidatat. Nisi tempor culpa cillum duis proident. Consequat quis sit laboris nisi consequat elit velit aute nisi labore dolore sint nulla.</div></div>
					<div><div>Laboris duis nulla dolore officia officia esse aliqua nulla do fugiat. Aliquip irure ea velit est. Aute veniam tempor incididunt esse amet quis ea commodo mollit et ullamco.</div></div>
					<div><div>Voluptate amet aute ea nostrud ullamco elit tempor anim tempor aliquip proident. Duis ullamco et qui velit cillum id dolor occaecat excepteur magna sunt nulla sit. Magna occaecat qui cillum labore reprehenderit magna proident laborum est esse voluptate sunt. In culpa commodo eiusmod ullamco veniam ad minim incididunt ipsum minim proident eu magna.</div></div>
					<div><div>Sit eu aute laborum non enim cupidatat in id ut ut aute. Quis Lorem minim ex in reprehenderit non. Dolore cupidatat consequat ut cupidatat pariatur ea qui non magna cupidatat consectetur mollit. Non aliquip mollit aliqua dolore tempor cupidatat reprehenderit enim ex sunt Lorem irure. Et in tempor dolore irure excepteur eiusmod irure.</div></div>
					<div><div>Consectetur sunt fugiat laborum ut occaecat laborum consectetur irure ullamco. Exercitation anim esse ea est ex excepteur id incididunt ea consectetur cupidatat nulla. Velit nisi consequat dolor est sunt Lorem commodo deserunt nisi dolore excepteur ullamco.</div></div>
					<div><div>Qui labore deserunt enim eiusmod officia. Dolore commodo adipisicing velit amet elit consectetur consequat ipsum nulla dolor amet adipisicing sunt quis. Amet ex do tempor reprehenderit eiusmod exercitation laboris. Velit eu ea dolore aliquip reprehenderit officia anim mollit reprehenderit aliquip voluptate Lorem. Culpa ex consequat est in ea ex sint excepteur ea pariatur proident ipsum minim.</div></div>
					<div><div>Culpa sunt irure aliqua consectetur ex dolor cupidatat adipisicing. Officia Lorem elit deserunt ullamco sint consequat minim aliquip. Sunt esse cupidatat irure non do sit proident elit tempor consectetur amet sint. Proident amet eu velit laborum consequat. Occaecat et culpa ea qui. Do dolore pariatur aute occaecat tempor aliqua velit et sit anim amet et sit quis.</div></div>
					<div><div>In occaecat reprehenderit pariatur mollit proident amet pariatur eiusmod dolore consectetur et. Veniam amet dolor laboris do commodo incididunt quis. Ullamco dolore incididunt adipisicing non nostrud magna magna eiusmod.</div></div>
				</TabbedContainer>

				<Heading text='Lists'/>
				<p>Sortable List 1 shows where the item will insert while dragging without actually re-arranging anything.</p>
				<p>Sortable List 2 will update the list as the item is being dragged. Both versions are shown with the option to add a drag handle, just need to enable and add the 'handle' class to the element.</p>
				<p>Sortable List 3 is visually the same as 2, but just has an option for enabling or disabling the drag handle and only uses the items array to display the list, so no custom formatting, but simpler to use.</p>
				<List heading='Basic List'>
					<li>Trifle</li>
					<li>Cake</li>
					<li>Pie</li>
					<li>Tart</li>
					<li>Pudding</li>
					<li>Ice Cream</li>
				</List>

				<ListSortable heading='Sortable List 1' items={listData} onChange={onChangeList}>
					{ listData.map((obj,i) => <div key={`${i}-${obj.value}`}>{obj.value}</div>)}
				</ListSortable>

				<ListSortable heading='Sortable List 1' items={listData} onChange={onChangeList} dragHandle={true}>
					{ listData.map((obj,i) => <ListItem key={`${i}-${obj.value}`}><span className='handle'><TiArrowUnsorted/></span>{obj.value}</ListItem>)}
				</ListSortable>

				<ListSortable2 heading='Sortable List 2' items={listData} onChange={onChangeList}>
					{ listData.map((obj,i) => <div key={`${i}-${obj.value}`}>{obj.value}</div>)}
				</ListSortable2>

				<ListSortable2 heading='Sortable List 2' items={listData} onChange={onChangeList} dragHandle={true}>
					{ listData.map((obj,i) => <ListItem key={`${i}-${obj.value}`}><span className='handle'><TiArrowUnsorted/></span>{obj.value}</ListItem>)}
				</ListSortable2>

				<ListSortable3 heading='Sortable List 3' items={listData} onChange={onChangeList} dragHandle={true}/>

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

const ListItem = styled.div`
	padding: 0px !important;

	&:hover {
		background-color: white !important;
	}

	& > .handle {
		display: inline-block;
		padding: 4px 6px;
		height: 28px;
		margin-right: 5px;
		border-right: 1px solid #DDD;
	}

	& > .handle > svg {
		position: relative;
		top: 2px;
	}

	& > .handle:hover {
		background-color: #EEE;
		cursor: pointer;
	}
`;

export default App;
