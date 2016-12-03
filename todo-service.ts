import { TodoItem } from './todo';

const todoItems = [
    { title: 'Learn NodeJS', complete: false },
    { title: 'Develop express app', complete: false }
]

export function list(): Array<TodoItem> {
    return todoItems;
}

export function create(todoItem){
    todoItems.push(todoItem);
}