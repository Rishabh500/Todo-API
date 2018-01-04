const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {User} =  require('./../server/models/user');

Todo.findByIdAndRemove('5a49ff8e89bff718e874d22c').then((todo)=>{
    console.log(todo);
});

//Todo.findOneAndRemove()
