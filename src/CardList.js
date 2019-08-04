import React from 'react';
import Card from './Card'

const CardList = ({ data,type })=>{
	data.sort((a,b)=>{
		return (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.episode_id > b.episode_id) ? 1 : -1):-1;
	});	
	
	return(
		<div>
			 {data.map((info,i)=>{
			 	const array = Object.entries(info);
				return <Card key={i} id={i} name={array[0][1]} p1={array[1]} p2={array[2]} 
		 		p3={array[3]} p4={array[4]}/>})} 
		</div>
	);

}

export default CardList;