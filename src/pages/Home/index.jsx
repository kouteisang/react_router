import React, { Component } from 'react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import News from './News/News'
import Message from './Message/Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                我是Home组件🏠
                <hr/>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to='/home/news' activeClassName='isActive'>News</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/message' activeClassName='isActive'>Message</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
