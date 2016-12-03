"use strict";
const todoItems = [
    { title: 'Learn NodeJS', complete: false },
    { title: 'Develop express app', complete: false }
];
function list() {
    return todoItems;
}
exports.list = list;
function create(todoItem) {
    todoItems.push(todoItem);
}
exports.create = create;
