import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import DataContext from './components/contextAPI/DataContext';
import Header from './components/Header';
import routes from './components/Route';

// import DataProvider from './sass/Layout/DataProvider'
// import Data from './sass/Layout/Data'



export class App extends Component {
  static contextType = DataContext

  // showRoute = (routes)=>{
  //   let result = null
  //   if(routes.length > 0){
  //     result = routes.map((route, index)=>{
  //       return (
  //         <Route 
  //           key={index}
  //           path={route.path}
  //           component={route.main} 
  //           exact={route.exact} />
  //       )
  //   })
  //   } 
  //   return result
  // }
  
  render() {
    const {showRoute} = this.context

    return (
        <Router>
            <Header/>
            <section>
                <Switch>
                  {showRoute(routes)}
                  {/* <Route path="/" component={Home} exact/>
                  <Route path="/product" component={Product} exact/>
                  <Route path="/product/:id" component={Detail} />
                  <Route path="/contact" component={Contact}/>
                  <Route path="/about" component={About}/>
                  <Route component={NotFound}/> */}
                </Switch>
            </section>  
        </Router>
    )
  }

  
}

export default App

