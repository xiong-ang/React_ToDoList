import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      inputValue: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getToDoItems = this.getToDoItems.bind(this);
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }

  deleteItem(index) {
    //不要直接操作state里面的数据
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  getToDoItems() {
    return this.state.list.map((item, index) => {
      return (
        <ToDoItem
          key={index} 
          content= {item}
          index= {index}
          delete= {this.deleteItem} />
      );
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange}></input>
        <button onClick={this.addItem}>Add</button>
        <ul> {this.getToDoItems()} </ul>
      </div>
    );
  }
}

export default ToDoList;
