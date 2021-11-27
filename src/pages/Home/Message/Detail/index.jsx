import React, { Component } from 'react'

export default class index extends Component {
    state = {messageArr:[
        {id:'1', content:'我是消息1✉️'},
        {id:'2', content:'我是消息2✉️'},
        {id:'3', content:'我是消息3✉️'}
    ]}

    render() {
        const {id, title} = this.props.match.params
        const {messageArr} = this.state
        console.log(this.props.match.params)
        const findResult = messageArr.find((obj)=>{
            if(obj.id === id){
                return obj
            }
        })
        console.log(findResult)
        return (
            <div>
                我是Detail
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
