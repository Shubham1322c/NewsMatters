import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 8;
  state = {progress: 10}
  apiKey = process.env.REACT_APP_NEWS_API; //Add your apikey in .env.local files
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
  <Router>
      <LoadingBar
        color='#0d6efd'
        shadow={true}
        height={2}
        progress={this.state.progress}
        
      />
        <Navbar/>
      <div>
        <Routes>
        
        <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" category={"general"} headline={"Top Headline"}/>}/>
        <Route exact path="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" category={"sports"} headline={"Top Sports Headlines"}/>}/>
        <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" category={"entertainment"} headline={"Top Entertainment Headlines"}/>}/>
        <Route exact path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" category={"business"} headline={"Top Business Headlines"}/>}/>
        <Route exact path="/science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" category={"science"} headline={"Top Science Headlines"}/>}/>
        <Route exact path="/technology" key="technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" category={"technology"} headline={"Top Technology Headlines"}/>}/>

        </Routes>
      </div>
  </Router>
      </>
    )
  }
}
