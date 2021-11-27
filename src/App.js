import React, { Component } from 'react'
import { Route,Switch, Redirect, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
                <div>
                    <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                            {/* 原生html中，靠<a>跳转到不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            
                            {/* 在react中靠路由链接切换组件 */}
                          
                            <NavLink className="list-group-item" activeClassName='isActive' to='/about'>About</NavLink>
                            <NavLink className="list-group-item" activeClassName='isActive' to='/home'>Home</NavLink>

                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                            <div className="panel-body">
                            <div>
                                <Switch>
                                    <Route path='/about' component={About}></Route>
                                    <Route path='/home' component={Home}></Route>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
