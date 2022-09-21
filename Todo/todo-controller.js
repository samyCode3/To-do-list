const fs = require("fs")
const postTodo = (request, response) => {
  fs.readFile("./store/todos.json", "utf-8", (err, data) => {
    if (err) {
      return response.status(500).json({ status: "error", error: "sorry something went wrong" });
    }
    const todos = JSON.parse(data);

    const maxId = Math.max.apply(
      Math,
      todos.map((t) => {
        return t.id;
      })
    );
    const { todoname, time, expire, description } = request.body
    if (todoname.length > 0) {
      for (let i = 0; i < todos.length; i++) {
        let todoscale = todos[i]
        if (todoscale.todoname.toLowerCase() === todoname) return response.json({ status: "error", error: "This tasks already existed" })
      }

      todos.push({
        id: maxId + 1,
        complete: false,
        todoname: todoname,
        time: time,
        expire: expire,
        description: description
      });
      fs.writeFile("./store/todos.json", JSON.stringify(todos), () => {
        response.json({ status: "ok", ok: "Your list is added" });
      });

    }

  });

}

const GetTodo = (request, response) => {
  const ShowPending = request.query.showPending;
  fs.readFile("./store/todos.json", "utf-8", (err, data) => {
    if (err) return response.status(500).json({ status: "error", err: "sorry something went wrong" });
    let todos = JSON.parse(data);
    if (ShowPending !== "1") {
      return response.json({ status: todos });
    } else {
      return response.json({
        todos: todos.filter((t) => {
          return (t.complete = false);
        }),
      });
    }
  });
}

const completTask = (request, response) => {
  const id = request.params.id
  const FindTodosById = (todos, id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === parseInt(id)) {
        return i
      }
    }
    return -1
  };
  fs.readFile("./store/todos.json", "utf-8", (err, data) => {
    if (err)
      return response
        .status(500)
        .json({ status: "err", err: "Something went wrong" });
    const todos = JSON.parse(data);
    const GetIdTodos = FindTodosById(todos, id);
    if (GetIdTodos === -1)
      if (err)
        return response
          .status(404)
          .json({ status: "err", err: "Sorry we can't complete this request" });
    todos[GetIdTodos].complete = true;
    fs.writeFile("./store/todos.json", JSON.stringify(todos), () => {
      return response.json({
        status: "ok",
        completed: "Your item is been completed",
      });
    });
  });

}
module.exports = {
  GetTodo,
  postTodo,
  completTask
}

