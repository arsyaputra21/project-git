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
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Title : ${todo.title}</h5>
                        <p class="card-text">Status : ${todo.completed ? "Selesai" : "Belum Selesai"}</p>
                    </div>
                </div>
               `
            });
            target.innerHTML = html
        })