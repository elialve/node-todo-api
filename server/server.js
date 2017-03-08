var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {
    mongoose
} = require('./db/mongoose.js');
var {
    Todo
} = require('./models/todo.js');
var {
    User
} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    });
}, (e) => {
    res.status(400).send(e);
});

app.get('/todos/:id', (req, res) => {
  //res.send(req.params);
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {
    app
};








// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
//
// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
// User
// email - require it - trim it - set type - set min length of 1



// var user = new User({
//   email: 'eliasalveal@gmail.com'
// });
//
// user.save().then((doc) => {
//   console.log('User saved',doc);
// }, (e) => {
//   console.log('Unable to save User', e);
// });
