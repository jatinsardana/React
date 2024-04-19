const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.post("/todo", async function (req, res) {
  const createPay = req.body;
  const parsedPay = createTodo.safeParse(createPay);
  if (!parsedPay.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
    return;
  }
  // put data into mongoDB
  await todo.create({
    tittle: createPay.tittle,
    description: createPay.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatedPay = req.body;
  const parsedPay = createTodo.safeParse(updatedPay);
  if (!parsedPay.success) {
    res.status(402).json({
      msg: "your inputs are not updated",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg : "todo updated"
  })
});

app.use(express.json());

app.listen(3000);
