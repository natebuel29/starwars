import React from 'react';

const Scroll= (props)=>{
	return (
		<div style ={{overflowY:'scroll' ,borderTop: '2px solid #FFE81F' ,height:'1000px'}}>
			{props.children}
		</div>
		)
}

export default Scroll;