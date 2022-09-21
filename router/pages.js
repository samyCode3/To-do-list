const express = require("express")
const router = express()




//   router.post("/todos/:id/complete", (request, response) => {
//     const id = request.params.id;
//     const findTodoById = (todos, id) => {
//       for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === parseInt(id)) {
//           return i;
//         }
//       }
//       return -1;
//     };
//     fs.readFile("./store/todos.json", "utf-8", (err, data) => {
//       if (err) return response.status(500).json({status : "error", err : "sorry something went wrong"});
//       let todos = JSON.parse(data);
  
//       const todosIndex = findTodoById(todos, id);
//       if (todosIndex === -1) 
//         return response
//           .status(404)
//           .json({status: "error", error: "sorry there is nothing here, try another"});
      
//       todos[todosIndex].complete = true;
//       fs.writeFile("./store/todos.json", JSON.stringify(todos), () => {
//         return response.json({ status: "ok", ok: "Active" });
//       });
//     });
//   });
  
//   router.post("/todos/post", (request, response) => {
  
//   });
  module.exports = router