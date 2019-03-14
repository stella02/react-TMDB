import React, { Component} from 'react';
import { Rate } from 'antd';

import styles from '../../css/movie_item.module.scss'

class MovieItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
	  //console.log(this.props)
	  let imgSrc = 'https://image.tmdb.org/t/p/w500/'+this.props.poster_path;
	  
		return <div className={styles.box} onClick={this.goDetail}>
			<img src={imgSrc} className={styles.img} alt=''/>		
			<h4 className={styles.tl}>{this.props.title}</h4>
			<h4 style={{fontWeight: 'bold'}}>{this.props.release_date}</h4>
			<h4>{this.showOverview()}</h4>		
			<Rate disabled defaultValue={this.props.vote_average/2 } />
			
		</div>

 }
 goDetail = () =>{
	 //console.log(this.props);
	 this.props.history.push("/movie/detail/"+this.props.id);
	 
 }
 
 showOverview(){
	 let str = this.props.overview;
	 if (str.length > 30) {
        return (str.substring(0, 30) + "...");
     }
     else {
        return str;
    }
	 
 }
}
 
 export default MovieItem
