const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://jatinsardana:jatin2003@cluster0.6xurwqx.mongodb.net"
// );

const todoSchema = mongoose.Schema({
  tittle: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
};

/* 
  display
  tittle
    desciption
      id
*/
// mongodb+srv://jatinsardana:*****@cluster0.6xurwqx.mongodb.net/todos
