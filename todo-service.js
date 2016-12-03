"use strict";
const mongodb_1 = require('mongodb');
const connection = mongodb_1.MongoClient.connect('mongodb://localhost:27017/todos');
const todoItems = [
    { title: 'Learn NodeJS', complete: false },
    { title: 'Develop express app', complete: false }
];
function list() {
    return connection.then((db) => {
        return db.collection('todo').find({}).toArray();
    });
}
exports.list = list;
function create(todoItem) {
    return connection.then((db) => {
        return db.collection('todo').insert(todoItem);
    });
}
exports.create = create;
