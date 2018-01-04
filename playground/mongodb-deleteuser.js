const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected..');

   // deleteMany

//    db.collection('Users').deleteMany({name:'Rahul'});    
   //deleteOne

// db.collection('Users').deleteOne({age:23}).then((result)=>{
//     console.log(result);
// });
// db.close();   
   
   //findOneAndDelete

   db.collection('Users').findOneAndDelete({_id : new ObjectID("5a41f068adcbadd7f37ad476")}).then((result)=>{
       console.log(result);
   });

   db.close();
})