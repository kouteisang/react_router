import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Messgae extends Component {

    state = {
        messageArray:[
            {id:'1', title:'消息1'},
            {id:'2', title:'消息2'},
            {id:'3', title:'消息3'},
        ]
    }

    render() {
        const {messageArray} = this.state
        return (
            <div>
                我是Message🦉
                <ul>
                    {
                        messageArray.map((messageObj)=>{
                            return ( 
                                <li key={messageObj.id}>
                                    <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>title:{messageObj.title}&nbsp;</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Switch>
                    <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
                </Switch>
            </div>
        )
    }
}
