const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected..');

    //    db.collection('Todos').find().toArray().then((docs)=>{
    //        console.log(JSON.stringify(docs));
    //    });

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log(docs);
    // });

    //Using object id

    // db.collection('Todos').find({ _id:new ObjectID('5a41f00aadcbadd7f37ad444') }).toArray().then((docs) => {
    //     console.log(docs);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    });
    db.close();
})