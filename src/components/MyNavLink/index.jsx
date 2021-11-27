import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
    render() {
        console.log(this.props)
        const {to} = this.props
        return (
            <NavLink activeClassName='isActive' className='list-group-item' {...this.props}/>
        )
    }
}
