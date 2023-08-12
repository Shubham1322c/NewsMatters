import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';


export default class News extends Component {
  

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
       
    }

   
      async updateNews(page){
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    

    async componentDidMount(){
     this.updateNews();
    }

    handlePrevious = async () => {
      
      this.setState({
        page: this.state.page - 1,
      })
      this.updateNews();
      
    }
    handleNext = async () => {
      this.setState({
        page: this.state.page + 1,
        
      })
      this.updateNews();
    }
  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>{this.props.headline}</h1>
        {this.state.loading && <Loading/>}
        <div className="row">
        
        {!this.state.loading && this.state.articles.map((element)=>{
       
        return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} time={element.publishedAt===null?"Unknown":element.publishedAt} author={element.author===null?"Unknown":element.author} desc={element.description?element.description.slice(0, 69):""} imageUrl={element.urlToImage===null?"https://images.hindustantimes.com/tech/img/2023/08/07/1600x900/Amazon_1691384235792_1691384236019.jpg":element.urlToImage} url={element.url}/>
        </div> 
      
        }
             
        )} 
        </div>
        <div className="container d-flex justify-content-between">

        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
