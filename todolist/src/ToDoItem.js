import React from 'react';

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        this.props.delete(this.props.index);
    }

    render() {
        const { content } = this.props; //ES6结构赋值
        return (
            <li onClick={this.delete}> {content} </li>
        );
    }
}

export default ToDoItem;
