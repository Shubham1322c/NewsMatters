import React, { Component } from 'react'
import loading from './Assets/loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
