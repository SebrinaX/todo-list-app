//创建“外壳”组件App
import React, {Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

//create and reveal App components
export default class App extends Component {

    //初始化状态
    state = {todos:[
        {id:'001', name:'Study HTML', done:true},
        {id:'002', name:'Reading', done:false},
        {id:'003', name:'Cleanning', done:false},
    ]}

    //addTodo 用于添加一个todo,接收的参数是todo对象
    addTodo = (todoObj) =>{
        //获取原todos
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }

    //updateTodo used for change a todo object
    updateTodo = (id,done)=>{
       //get todos in the state
       const  {todos} = this.state
       //match and update the data
       const newTodos = todos.map((todoObj)=>{
           if(todoObj.id === id) return {...todoObj,done}
           else return todoObj
       })
       this.setState({todos:newTodos})
    }

    //deleteTodo for delete a todo object
    deleteTodo = (id)=>{
        //get the original todos
        const{todos} = this.state
        //delete the pointed todo object
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        }) 
        //update the state
        this.setState({todos:newTodos})
    }

    //checkAllTodo used for select all tasks
    checkAllTodo = (done)=>{
        //get original todos
        const {todos} = this.state
        //modified data
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        //update states
        this.setState({todos:newTodos})
    }

    //clearAllDone used for clear all finished tasks
    clearAllDone =()=>{
        //get original todos
        const {todos} = this.state
        //filter date
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        }) 
        //update states
        this.setState({todos:newTodos})
    }
    
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>           
            </div>
        )
    }
}