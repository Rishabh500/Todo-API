const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected..');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    // },(err,result)=>{
    //     if(err){
    //         return console.log(err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    db.collection('Users').insertOne({ 
        name: 'Rishabh',
        age: 23,
        localetion: 'bangalore'
    }, (err, result)  => {
        if (err)
            return console.log(err);
        console.log(JSON.stringify(result.ops,undefined,2));
    
    }); 
    
    db.close();
})