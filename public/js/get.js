const url = "api/GetTodo";
const  completeTodo = "api/complete/:id";
const tasker = document.getElementById("dev-container");
const tasker2 = document.getElementById("dev-container2");
const btn = document.getElementById("btn");


const fetchIdTodo = async () => {

  const getTodos = await fetch(url)
  let myTodo =  await getTodos.json()
  return myTodo
}
fetchIdTodo()


const ReuseFunction = () => {
  return fetchIdTodo()
}

const get = async (data) => {

  tasker2.style.display = "none"
   data = await ReuseFunction()
   data.status.forEach((data) => {
    const {id, todoname, time, expire, description, complete} = data
    tasker.innerHTML += `
    <div class="talk-task" id="tasker">
    <p> Task : ${todoname} </p>
    <p> Time : ${time} </p>
    <p> Task-expire : ${expire} </p>
    <p> Description : ${description} </p>
    <p> Completed : ${complete} </p>
    <button id="taskHub" onclick = "check()" value="${id}">Finish task </button>
  </div>
    `
  })
  setTimeout(() => {
    return data
  }, 5000)
  
}
get()
function check(){
  console.log("ang")}

// const getTodoCompleted = async () => {
//   const task = document.getElementById("taskHub")

//   const renderComplete = await fetch(completeTodo)
//   console.log(renderComplete)

// }
// getTodoCompleted()
function loading()

{
  setTimeout(() => {
    const me = document.getElementById("me")
    me.innerHTML = "<p> i am loading </p>"
  }, 1000)
  setTimeout(() => {
    const me = document.getElementById("me")
    me.style.display = "none"
  }, 5000)
 
 
}

async function changing() 
{
  
  tasker.style.display = "none"
   const change = document.getElementById("search").value
   if (change === '') 
   {
       return false
   } else 
   {
  
    const pushChange = []
    pushChange.push(change)
    const data = await ReuseFunction()
      data.status.filter(datas => {
       let test = datas.todoname
     
        if(test.includes(pushChange))
        {
          tasker2.style.display = "block"
          tasker2.innerHTML += `
          <div class="talk-task" id="tasker">
          <p> Task : ${datas.todoname} </p>
          <p> Time : ${datas.time} </p>
          <p> Task-expire : ${datas.expire} </p>
          <p> Description : ${datas.description} </p>
          <p> Completed : ${datas.complete} </p>
          <button id="taskHub" onclick = "check()" value="${test.id}">Finish task </button>
        </div>
          `
        } else 
        {
        return false
        }

    })
   

   }
 
}

