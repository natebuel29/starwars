import React from 'react'
import './Buttons.css';
import 'tachyons';

const Buttons = ({onClick})=>{
	return(
	<div className='flex-wrap'>
     			<button id="2" onClick={onClick} className='mh4 mv2'>Films</button>
     			<button id="1" onClick={onClick} className='mh4 mv2'>Planets</button>
     			<button id="5" onClick={onClick} className='mh4 mv2'>Starships</button>
     			<button id="4" onClick={onClick} className='mh4 mv2'>Vehicles</button>
     			<button id="0" onClick={onClick} className='mh4 mv2'>People</button>
     			<button id="3"onClick={onClick} className='mh4 mv2'>Species</button>
     	</div>
     	)
}

export default Buttons;