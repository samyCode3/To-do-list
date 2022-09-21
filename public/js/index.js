const form = document.getElementById("form");
const err = document.getElementById("err");
const success = document.getElementById("success");
console.log(success)
const errText = document.getElementById("err-text");
const TodoPost = "api/postTodo";

form.addEventListener("submit", () => {
  const ExecuteTodo = () => {
    const UserValue = {
      todoname: todoname.value,
      time: time.value,
      expire: expire.value,
      description: description.value,
    };
    const PostTodo = {
      method: "POST",
      body: JSON.stringify(UserValue),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(TodoPost, PostTodo).then((res) => {
      res.json().then((data) => {
        let TodoPost = data;
        if (TodoPost.status === "error") {
          setTimeout(() => {
            err.style.display = "none"
          }, 5000)
          success.style.display = "none"
          err.setAttribute("style", "display: block");
          errText.innerHTML = `
                        ${TodoPost.error}                  
                    `;
        } else 
        {
          if(TodoPost.status == "ok")
          setTimeout(() => {
            success.style.display = "none"
          }, 5000)
          err.style.display = "none"
          success.setAttribute("style", "display: block");
          errText.innerHTML = `
                        ${TodoPost.ok}                  
                    `;
        }
      });
    });
  };
  ExecuteTodo()
});
