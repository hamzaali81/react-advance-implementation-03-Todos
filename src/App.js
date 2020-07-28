import React, { Component } from 'react';
 
class App extends Component {
constructor(){
  super();

  this.state={
    todos: [],
    text:'',
    currentIndex: null
  }
  this.add=this.add.bind(this)
   this.updateText=this.updateText.bind(this);
  //  this.edit=this.edit.bind(this);
  }


updateText(e){
this.setState({text: e.target.value})
}

edit(index){
const {todos}=this.state;

// todos[index]=text 
this.setState({
  text: todos[index],
  currentIndex: index
})
}

delete(){
  
}

add(){
const { text, todos} = this.state;
// this.state.todos.push(text);
todos.push(text);
console.log('hey', this.state.todos);
  this.setState({todos,text: ' '})
}

renderTodos(){
  const {todos}=this.state;
  return (
    <ol>
      {todos.map((item, index)=> 
        <li key={index}>
        {item}
        <button onClick={this.edit.bind(this,index)}>Edit</button>
        <button onClick={this.delete.bind(this,index)}>Delete</button>
        </li>
        )}
    </ol>
  )
}

render() { 
    const {currentIndex}=this.state;
    return (
      <div>
<input 
type="text" placeholder="Something Place" 
onChange={this.updateText}
  value={this.state.text}
/>
{

currentIndex ==null ? <button onClick={this.add}>Add</button>
 : 
<button onClick={()=>{}}>Update</button> 
}
      {currentIndex != null && <p>You are editing item # {currentIndex +1} currently!</p>}
      {this.renderTodos()}
      </div>
    );
  }
}
 
export default App;