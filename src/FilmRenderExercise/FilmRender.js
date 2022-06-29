import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'

export default class FilmRender extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body />
      </div>
    )
  }
}
