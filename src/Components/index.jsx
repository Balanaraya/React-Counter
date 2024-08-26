/*
import {Component} from 'react'

class Welcome extends Component{
   
    render(){
        const {name}=this.props
        return <h1>Hello {name}</h1>
    }
}

export default Welcome */

import {Component} from 'react'

import './index.css'
class Counter extends Component{
    state={count:0}
    onIncrement=()=>{
        this.setState(preState=>{
            return{count: preState.count+1}
        })
        console.log("Increment +1")

    }

    onDecrement=()=>{
        console.log("Decrement -1")
        this.setState(preState=>{
            return{count: preState.count-1}
        })
        
    }
   

    render(){
        const {count}=this.state
        return(
            <div className="container">
                <h1 className="heading">Counter</h1>
                    <p className="count">{count}</p>
                    <div>
                        <button className="button" onClick={this.onIncrement}>Increase</button>
                        <button className="button" onClick={this.onDecrement}>Decrease </button>
                    </div>
              
            </div>
        )
    }
}
export default Counter