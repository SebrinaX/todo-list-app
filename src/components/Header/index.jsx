import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    //required the type and necessary of the received props
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    //Recall event of the KeyCode
    handleKeyUp = (event) =>{
        //解构赋值获取keyCode, target
        const {keyCode, target} = event
        //判断是否是回车按键
        if(keyCode !== 13) return
        //添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('The input cannot be empty!')
            return
        }
        //准备好一个todo对象
        const todoObj = {id:nanoid(), name:target.value, done:false}
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        //清空输入
        target.value = '';
    }

    render() {
        return(
            <div className="todo-header">
                <input onKeyUp= {this.handleKeyUp} type="text" placeholder="please enter your task, and press Enter."/>
            </div>    
        )
    }
}