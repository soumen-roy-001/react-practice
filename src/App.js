import React, { Component } from 'react'

import Layout from './hoc/Layout/Layout'
import Aux from './hoc/Aux/Aux'

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux> 
    )
  }
}

export default App;
