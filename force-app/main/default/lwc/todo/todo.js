import { LightningElement } from 'lwc';

export default class Todo extends LightningElement {
    todoValue=''; 
    todoList=[];

    idCounter = 0;

    get hasTodoListItems(){
        return this.todoList.length > 0;
    }

    handleChange(event){
        this.todoValue = event.target.value;
    }

    handleClear(event){
        this.todoList = [];
    }

    addTodo(event){
        if(this.todoValue === ''){
            alert("You must write something to add something!");
            return;
        }
        this.idCounter++;
        let newTodo = {
            id: this.idCounter+1,
            value: this.todoValue
        }
        this.todoList = [...this.todoList, newTodo];
        this.todoValue = '';
    }

    deleteHandler(event){
        console.log('deleteHandler', event.detail);
        this.todoList = this.todoList.filter(todo => todo.id !== event.detail);
    }

    connectedCallback(){
        this.idCounter = this.todoList.length;
    }
}