const addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "title or description required",
    });
    return;
  }

  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "user added to database",
  });
};


// get all todo
const getAllTodo =  async (req , res) => {
    const todos = await Todos.find({})
    res.status(200).json({
        todos: todos
    })
}