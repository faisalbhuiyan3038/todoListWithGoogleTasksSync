import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    @api todoValue;
    @api todoStatus;
    @api todoId;

    get completeClass(){
        return this.todoStatus ? 'strikeText' : '';
    }

    handleComplete(event){
        this.todoStatus = !this.todoStatus;
        const todoComplete = new CustomEvent('todocompleted', {
            detail: this.todoId
        });
        this.dispatchEvent(todoComplete);
    }

    handleDelete(event){
        const deleteEvent = new CustomEvent('delete', {
            detail: this.todoId
        });
        this.dispatchEvent(deleteEvent);
    }

    handleChange(event){
        this.todoValue = event.target.value;
    }

    handleKeyPress(event){
        if(event.keyCode === 13){
            this.addTodo();
        }
    }
}