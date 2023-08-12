import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <>
  <Router>

        <Navbar/>
      <div>
        <Routes>
        
        <Route exact path="/"  element={<News pageSize={this.pageSize} key="general" category={"general"} headline={"Top Headline"}/>}/>
        <Route exact path="/sports"  element={<News pageSize={this.pageSize} key="sports" category={"sports"} headline={"Top Sports Headlines"}/>}/>
        <Route exact path="/entertainment"  element={<News pageSize={this.pageSize} key="entertainment" category={"entertainment"} headline={"Top Entertainment Headlines"}/>}/>
        <Route exact path="/business"  element={<News pageSize={this.pageSize} key="business" category={"business"} headline={"Top Business Headlines"}/>}/>
        <Route exact path="/science"  element={<News pageSize={this.pageSize} key="science" category={"science"} headline={"Top Science Headlines"}/>}/>
        <Route exact path="/technology" key="technology" element={<News pageSize={this.pageSize} key="technology" category={"technology"} headline={"Top Technology Headlines"}/>}/>

        </Routes>
      </div>
  </Router>
      </>
    )
  }
}
