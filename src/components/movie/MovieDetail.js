import React, { Component } from 'react';
import { Button, Icon, Spin } from 'antd';

import fetchJSONP from 'fetch-jsonp';

class MovieDetail extends Component{
	constructor (props){
		super(props);
		this.state={
			info: {},
			isloading: true,
		};
		
	}
	
	componentWillMount(){
		let url = "http://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=6124b5a0aa054c78ecca14345f2041e5";
		
		fetchJSONP(url)
		.then(response => response.json())
		.then(data =>{
			this.setState({
				info: data,
				isloading: false
			})
		})
	}
	
	render(){
		
		return<div>
			<Button type="primary" onClick={this.goBack} >
            <Icon type="left" />Back to Movie List
			</Button>
		  
		  {/*<h1>MovieDetail---{this.props.match.params.id}</h1> */}
			  {this.renderInfo()}
				
		</div>
	}
	
	goBack = () =>{
		this.props.history.go(-1);
	}
	renderInfo = () => {
		if(this.state.isloading){
			return <Spin />
		}else {
			return <div>
			      <div style={{ textAlign: 'center' }}>
					<h1 style={{color: '#42f48c', fontSize:'20px'}}>{this.state.info.title}</h1>
		 
					<img src={'https://image.tmdb.org/t/p/w500/'+this.state.info.poster_path} alt=''/>
				  </div>
		
					<p style={{ marginTop: '5px',textIndent: '2em', lineHeight: '30px', fontWeight:'bold',fontSize:'16px' }}>{this.state.info.overview}</p>
				</div>
		}
	}
	
}


export default MovieDetail