import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews(page) {
    this.props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    // Inside the render() function
// console.log("Articles length:", this.state.articles.length);
// console.log("Total results:", this.state.totalResults);
// console.log("Has more:", this.state.articles.length < this.state.totalResults);

    return (
      <>
        <h1 className="text-center my-4">{this.props.headline}</h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults - 8}
          loader={<Loading />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      time={
                        element.publishedAt === null
                          ? "Unknown"
                          : element.publishedAt
                      }
                      author={
                        element.author === null ? "Unknown" : element.author
                      }
                      desc={
                        element.description
                          ? element.description.slice(0, 69)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage === null
                          ? "https://images.hindustantimes.com/tech/img/2023/08/07/1600x900/Amazon_1691384235792_1691384236019.jpg"
                          : element.urlToImage
                      }
                      url={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    );
  }
}
