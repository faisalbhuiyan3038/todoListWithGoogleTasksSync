import { LightningElement } from 'lwc';

export default class Todo extends LightningElement {
    todoValue=''; 
    todoList=[
        {
            id:1,
            value: 'test'
        }
    ];

    handleChange(event){
        this.todoValue = event.target.value;
    }

    addTodo(event){
        console.log('addTodo', this.todoValue);
        let newTodo = {
            id: this.todoList.length+1,
            value: this.todoValue
        }
        this.todoList = [...this.todoList, newTodo];
    }
}