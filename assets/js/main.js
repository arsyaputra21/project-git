//Untuk yang ketinggalan

let target = document.querySelector(".todos_lists");
target.innerHTML = "Loading.."

fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            return response.json()
        }).then(todos => {
            let html;
            todos.forEach(todo => {
                html += 
                `
                <div class="card my-4 ${todo.completed?"done":"undone"} " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
               `
            });
            target.innerHTML = html
        })