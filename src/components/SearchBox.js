import React from 'react';

const SearchBox = ({searchfield,onSearch})=>{
	return(
		<div className='pa2'>
		<input 
		 className='pa3 ba b--yellow bg-lighest yellow'
		 type='search' placeholder='Search..'
		 onChange={onSearch}/>
		 </div>
		);
}

export default SearchBox;