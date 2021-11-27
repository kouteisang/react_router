import React, { Component, lazy, Suspense } from 'react'
import { Route,Switch, Redirect, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Loading from './components/Loading'

const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))

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
                                <Suspense fallback={<Loading/>}>
                                    <Switch>
                                        <Route path='/about' component={About}></Route>
                                        <Route path='/home' component={Home}></Route>
                                        <Redirect to='/about'/>
                                    </Switch>
                                </Suspense>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
