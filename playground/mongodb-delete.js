const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected..');

   // deleteMany
// db.collection('Todos').deleteMany({completed: false}).then((result)=>{
//     console.log(result);
// });
   //deleteOne

//    db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//        console.log(result);
//    })
   
   
   //findOneAndDelete

//    db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
//        console.log(result);
//    })

   //db.close();
})