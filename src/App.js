import React, { Component } from 'react';
import './App.scss';
// import css module file
import styles from './css/app.module.scss';

// import router components
import {HashRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './components/home/HomeContainer.js';
import Movie from './components/movie/MovieContainer.js';



// import UI components from ant-design
import {
  Layout, Menu,  
} from 'antd';


const {
  Header, Content, Footer, 
} = Layout;




class App extends Component {
  render() {
    return (
	<HashRouter>
      <Layout className="layout" style={{height: '100%'}}>
		<Header>
		  <div className={styles.logo} />
		  <Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={[window.location.hash.split('/')[1]]}
			style={{ lineHeight: '64px' }}
		  >
			<Menu.Item key="home">
				<Link to='/home'>Home</Link>
			</Menu.Item>
			<Menu.Item key="movie">
				<Link to='/movie/theater/1'>Movies</Link>
			</Menu.Item>
			
		  </Menu>
		</Header>
		
		
		<Content style={{ backgroundColor:'#fff', flex: 1 }}>
		 <Switch>
		  
			 <Route path='/home' component={Home}></Route>
			 <Route path='/movie' component={Movie}></Route>
			 
			 <Route path="*" component={Home} ></Route>
		</Switch>
		 
		</Content>
		
		
		<Footer style={{ textAlign: 'center' }}>
		  Ant Design ©2018 Created by Ant UED
		</Footer>		
      </Layout>
	</HashRouter>
    );
  }
}

export default App;
