import React, { Component, lazy, Suspense } from 'react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import Loading from '../../components/Loading'
const News = lazy(()=>import('./News/News'))
const Message = lazy(()=>import('./Message/Message'))

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
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            <Redirect to='/home/news'/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        )
    }
}
