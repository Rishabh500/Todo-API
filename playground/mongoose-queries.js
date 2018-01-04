const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// var id = '6a49ff8e89bff718e874d22c';

// if(!ObjectID.isValid(id)){
//     console.log('Id not found!!');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     text: 'Study'
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findById(id).then((todos)=>{
//     if(!todos){
//         return console.log('Id not found');
//     }
//     console.log('todo',todos);
// }).catch((e)=>{
//     console.log(e);
// });

var id = '5a4bcfacff875e20844fb02c';

if(!ObjectID.isValid(id)){
    console.log('Id Not Found.');
}
User.findById(id).then((id)=>{
    console.log(JSON.stringify(id,undefined,2));
},(e)=>{
    console.log(e);
}).catch((e)=>{
    console.log('Id not found');
});