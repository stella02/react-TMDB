import React from 'react'

//import react router components
import {Link, Route, Switch} from 'react-router-dom'

import MovieList from './MovieList.js'
import MovieDetail from './MovieDetail.js'

// import UI css componets from ant-design
import {
  Layout, Menu,
} from 'antd';


const { Content, Sider } = Layout;

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Layout style={{height: '100%'}}>
		  <Sider width={200} style={{ background: '#fff' }}>
			<Menu
			  mode="inline"
			  defaultSelectedKeys={[window.location.hash.split('/')[2]]}
			  style={{ height: '100%', borderRight: 0 }}
			>
			    <Menu.Item key="theater">
					<Link to='/movie/theater/1'>In Theatres</Link>
				</Menu.Item>
				<Menu.Item key="highRate">
					<Link to='/movie/highRate/1'>Highest Rated</Link>
				</Menu.Item>
				<Menu.Item key="popular">
					<Link to='/movie/popular/1'>Popular</Link>
				</Menu.Item>
				
			</Menu>
		  </Sider>
		  <Layout style={{ padding: '1px ' }}>
			
			<Content style={{
			  background: '#fff', padding: 10, margin: 0, minHeight: 280,
			}}
			>
			{/* three path under /movie share same UI components but showing in different order based on type*/}
				{/* MovieList component can use props.match.params to get the type/page info*/}
				<Switch>
					<Route path='/movie/detail/:id' component={MovieDetail}></Route>
					<Route path='/movie/:type/:page' component={MovieList}></Route>
			  
				</Switch>
			  
			  
			</Content>
		  </Layout>
      </Layout>
    
  }
}