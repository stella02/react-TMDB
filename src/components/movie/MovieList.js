import React, { Component } from 'react';

import fetchJSONP from 'fetch-jsonp'; // import fetchJSONP to overcome crossdomain isssue
import { Spin, Alert,Pagination} from 'antd';

import MovieItem from './MovieItem.js'

const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=6124b5a0aa054c78ecca14345f2041e5&primary_release_year=2019';

class MovieList extends Component{
	constructor (props){
		super(props);
		this.state={
			movies:[],
			nowPage: parseInt(props.match.params.page)||1,
			pageSize: 20 ,// movies to show per page
			total: 0 ,// total number of movies get from TMDB. The MAX_VALUE is 200
			isloading: true,
			sortType: props.match.params.type,
			
		};
		
	}
	componentWillMount(){
		/* setTimeout( ()=>{
			this.setState({
				isloading: false
			})
		}, 2000) */
		
		this.loadMovieListByTypeAndPage();
		
		
		
	}
	
	render(){
		 /*console.log(this.props.match.params.type) */
		
		return<div>
		   {this.renderList()}
		</div>
	}
	
	//fetch movies from TMDB sorted by type and page
	loadMovieListByTypeAndPage(){
		
		var subURL 
		if(this.state.sortType ==='theater'){
			subURL= '&primary_release_date.gte=2019-02-15&primary_release_date.lte=2019-03-11';
		}
		if (this.state.sortType  ==='highRate'){
			subURL = '&sort_by=vote_average.desc';
		}
		subURL += '&page='+this.state.nowPage;
		
		if (this.state.sortType  ==='popular'){
			subURL = '&sort_by=popularity.desc';
		}
		
		
				
		var url = baseURL+subURL;

		console.log(url)
		/* fetch(url)
		.then(response => response.json() )
		.then(data =>{
			console.log(data)
		}) */
		
		fetchJSONP(url)
		.then(response => response.json() )
		.then(data =>{
			//console.log(data.results);
			this.setState({
				isloading: false,
				movies: data.results,
				total : data.total_results,
			})
			//console.log(this.state)
		})
		
		 
		/* //for the test purpose, copy the movies to corresponding json file under /test_data 
		const data = require('../test_data/'+this.state.sortType+'.json')
		setTimeout(() =>{
			this.setState({
				isloading: false,
				movies: data.results,
				total : data.total_results,
			})
		}, 1000) */
	}
	
	componentWillReceiveProps(nextProps){
		 
		 this.setState({
			 isloading: false,
			 nowPage: parseInt(nextProps.match.params.page)||1,
			 sortType: nextProps.match.params.type,			 
			 
		 }, function(){
			 this.loadMovieListByTypeAndPage();
		 })
		 
		
	}
	
	// render sorted movie results got from TMDB
	renderList(){
		 if(this.state.isloading){
			 return <div>
				<Spin tip="Loading...">
					<Alert
					  message="Loading Movies from TMDB"
					  description="waiting for the updates"
					  type="info"
					/>
			    </Spin>
			 </div>
				
		 }else{
			 let total_cap = this.state.total <= 200? this.state.total:200;
			 return <div>
				 <div style={{display: 'flex', flexWrap:'wrap'}}>
				 {this.state.movies.map((item) =>{
					 {/* do not show the result whose img src: poster_path is null*/}
					 if(item.poster_path && item.overview){
						 return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
					 }
					 
				 })}
				</div>
				 <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={total_cap} onChange={this.pageChanged} />
			</div>
		 }
	}
	
	// this function got called when page number in the antd <Pagination> changed
	pageChanged =(page)=>{
		/* //not recommend to manipulate BOM to jump to the new page
		window.location.href='#/movie/'+this.state.sortType+'/'+page; */
		// using react-router-dom to jump to the new page
		this.props.history.push('/movie/'+this.state.sortType+'/'+page);
	
	}
}


export default MovieList