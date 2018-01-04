const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected..');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a41f00aadcbadd7f37ad444')
    // }, { $set: { completed: false } },
    //     {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });
        // db.collection('Users').findOneAndUpdate({
        //     _id: new ObjectID('5a41f068adcbadd7f37ad476')
        // }, { $set: { name: 'Rishabh1' } },
        //     {
        //         returnOriginal: false
        //     }).then((result) => {
        //         console.log(result);
        //     });


db.close();

});
