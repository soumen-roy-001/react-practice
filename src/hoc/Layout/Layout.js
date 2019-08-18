import React, { Component } from 'react'

import Aux from '../Aux/Aux'
import Toolbar from '../../components/Toolbar/Toolbar'
import Banner from '../../components/Banner/Banner'
import Posts from '../../containers/posts/posts'

class Layout extends Component {
    render (){
        return (
            <Aux>
                <Toolbar />
                <Banner />
                <Posts />
                <div style={{height:'200px', border:'1px solid blue'}}>Footer</div>
            </Aux>        
        )
    }
}

export default Layout