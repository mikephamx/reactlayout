import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class LayoutExcercise extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    )
  }
}
