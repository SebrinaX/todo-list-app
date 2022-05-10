import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    //callback of 'select all'
    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }

    //clear all finished tasks
    handleClearAllDone =()=>{
        this.props.clearAllDone()
    }
    
    render() {
        const {todos} = this.props
        //Already done todos
        const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
        //Total finished todos
        const total = todos.length

        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
                </label>
                <span>
                    <span>Already Done{doneCount}</span>/ All{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear Finished Tasks</button>
            </div>
        )
    }
}