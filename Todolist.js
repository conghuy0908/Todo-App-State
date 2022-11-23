import React, {Component} from 'react';

class Todo extends Component {
    constructor (props ){
        super(props);
        this.state={
            list : [],
            item: ''
        }
    };
    handleChange = ( event ) => {
        this.setState({item:event.target.value})
    }
    handleAddItem = () =>{
        const Todolist = this.state.list
        if(!this.props.item){
            Todolist.push(this.state.item)
            return(
                this.setState(this.state.list)
            )
        
        }
        console.log(Todolist);
    }
    render(){
        return(
            <div className='container'>
            <h2>Todo List</h2>
            <input type="text" value={this.state.item} onChange={this.handleChange} />
            <button type='submit' onClick={this.handleAddItem}>Add</button>
            {this.state.list.map((todo,index) => (<li key={index}>{todo}</li>))}
            </div>
        )
    }
}

export default Todo;