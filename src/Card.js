import React from 'react';
import './Card.css';

const Card = ({name,p1,p2,p3,p4})=>{

	const capitilize = (string)=>{	
		if(typeof string ==='string'){
			return string.charAt(0).toUpperCase() +string.slice(1)
		}
		else 
			return string.toString();
		}

		return(
			<div className='cardBorder tc mw6 dib br3 pa3 ma2 grow bw2 shadow-5'>
				<div className="">
					<h2>{name}</h2>
					<p>{capitilize(p1[0]).replace(/_/g,' ')}: {capitilize(p1[1])}</p>
					<p>{capitilize(p2[0]).replace(/_/g,' ')}: {capitilize(p2[1])}</p>
					<p>{capitilize(p3[0]).replace(/_/g,' ')}: {capitilize(p3[1])}</p>
					<p>{capitilize(p4[0]).replace(/_/g,' ')}: {capitilize(p4[1])}</p>
				</div>
			</div>
		)
	}

export default Card;