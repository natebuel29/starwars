import React, { Component } from 'react';

import Buttons from '../components/Buttons';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'

class App extends Component{
	constructor(){
		super();
		this.state ={	
			doneLoading:true,
			data:[],
			urls:[ "https://swapi.co/api/people/",
					"https://swapi.co/api/planets/",
					"https://swapi.co/api/films/",
					"https://swapi.co/api/species/",
					"https://swapi.co/api/vehicles/",
					"https://swapi.co/api/starships/"
					],
			searchfield:''
		};

}

componentDidMount(){
	fetch('https://swapi.co/api/')
	.then(response=>response.json())
	.then(data=>{
		this.setState({starwars:data})
	})
}

onClick = (event)=>{
	if(this.state.doneLoading===true){
		let fetchThis = (address)=>{
					this.setState({doneLoading:false});
					fetch(address)
					.then(response=>response.json())
					.then(stwapi=>{
						if(stwapi.previous===null){
							this.setState({data:[]});
						}
						this.setState({data:this.state.data.concat(stwapi.results)})
						if(stwapi.next===null){
							this.setState({doneLoading:true});
						}else{
							fetchThis(stwapi.next);
						}
					})
					}
					let tempArray = this.state.urls
					fetchThis(tempArray[event.target.id]);
					this.setState({type:event.target.id});
				
				}
			}

onSearch= (event)=>{
	this.setState({searchfield:event.target.value});
	}

render(){
	const {data , searchfield} = this.state;
	const filteredData = data.filter(info=>{
		if(typeof info.name !== 'undefined'){
		return info.name.toLowerCase().includes(searchfield.toLowerCase());
		}
		else{
			return info.title.toLowerCase().includes(searchfield.toLowerCase());
		}
	})
	return(
    <div className='tc'>
     	<h1 className="header">Star Wars</h1> 
     	<SearchBox onSearch={this.onSearch} />
     	<Buttons onClick={this.onClick}/>
     	<Scroll>
     	<CardList data={filteredData} />
     	</Scroll>
    </div>    );
}

}


export default App;
