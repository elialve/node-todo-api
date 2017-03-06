//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Elias', age: 20};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58bc830c475371c8bb58f85b')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58bb5bf94cc7d014647cde78')
    }, {
        $set: {
            name: 'Juan'
        },
        $inc: {
            age: 1 //aumenta edad en 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    db.close();
});