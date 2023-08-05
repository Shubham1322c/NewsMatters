import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
    ];
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=74effee455074cacbc4056d7471b1743";
      let  data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles});
    }
  render() {
    return (
      <div className='container my-4'>
        <h1>Top Headlines</h1>
        
        <div className="row">
        
        {this.state.articles.map((element)=>{
          if(element.urlToImage !== null ){
        return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""}  desc={element.description?element.description.slice(0, 69):""} imageUrl={element.urlToImage} url={element.url}/>
        </div> 
      }
          return "";
             
        })} 
        </div>


      </div>
    )
  }
}
