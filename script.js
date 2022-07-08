document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task");
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
        document.querySelector('#newtask input').value = ""

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            console.log("Delete " + i)
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        var tasks = document.querySelectorAll("#tasks");
        for (var i = 0; i < tasks.length; i++) {
            console.log("tasks " + i)
            tasks[i].onclick = function () {
                alert(this.firstChild.value)
            }
        }
    }

}