import React from 'react'



const aboutImg = require('../../images/about3.jpeg');
const divStyle = {
  width: '100%',
  height: '50%',
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: 'cover' ,
 
  
   
  
};
const pStyle = {
	margin: '4px',
	fontSize: '18px',
	color: '#37ad69',
	textIndent: '2em',
	padding : '20px',
	
}


export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
			<div style={divStyle}>
			  <h1 style={{color:'#2faf65', fontSize:'50px', textAlign:'center'}}>Let's talk about TMDb</h1>
			  <p style={pStyle}>The Movie Database (TMDb) is a community built movie and TV database. 
			  Every piece of data has been added by our amazing community dating back to 2008.
			  TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. 
			  Put simply, we live and breathe community and that's precisely what makes us different.</p>
				  <ol style={pStyle}>
					<li>
Every year since 2008, the number of contributions to our database has increased. With over 200,000 developers and companies using our platform, TMDb has become a premiere source for metadata.</li>
					<li>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day
					</li>
					<li>
					We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDb is used in over 180 countries.
					</li>
					<li>
						TMDB Links : &nbsp; <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">API</a>
						&nbsp;&nbsp;<a href="https://www.themoviedb.org/discuss" target="_blank">Forums</a>				
						<br />					
						<br />					
								
					</li>
					
				  </ol>
				   
				  
				  
				 
		    </div>
			
		</div>
			 
  }
}