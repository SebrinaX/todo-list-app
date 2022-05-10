import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse:false} //mark the mouse in and out

    //callback for mouse move in and out
    handleMouse = (flag) =>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }


    //check and uncheck the callback of todo
    handleCheck =(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }

    //callback of a delete
    handleDelete = (id)=>{
        this.props.deleteTodo(id)
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return(
            <li style={{backgroundColor:mouse ? '#ddd' : 'white' }} onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block' : 'none'}}>Delete</button>
            </li>
        )
    }
}