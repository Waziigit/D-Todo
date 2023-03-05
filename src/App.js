import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './listItems'
import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);
class App extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    items : [],
    currentItem: {
      text :'',
      key:''
    }
  }
  this.handleInput = this.handleInput.bind(this);
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdate = this.setUpdate.bind(this);
}

 handleInput(e){
  this.setState({
    currentItem : {
      text: e.target.value,
      key:Date.now()
    }
  })
 }

 addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  
  if(newItem.text !=="")
  {
    const newItems = [...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
 }

 deleteItem(key){
  const filteredItem = this.state.items.filter(item => item.key!==key);
  this.setState({
    items:filteredItem
  })
}

setUpdate(text,key) {
  const items =this.state.items;
  items.map(item => {
    item.text = text;
  })
  this.setState({
    items :items
  })
}

  render(){
    return ( 
      <div className='App'> 
        <header> 
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder='Enter Text'
          onChange={this.handleInput}
          value={this.state.currentItem.text}
          />
          <button type='submit' >Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items} 
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}
      ></ListItems>
      
      </div>
    );
  }
}
export default App;
