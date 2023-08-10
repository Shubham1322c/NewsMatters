import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, url, author, time} = this.props
    return (
      <div className="container my-4">
            <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">Author : {author}</p>
            <p className="card-text">Time : {time}</p>
            <a href={url} className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
