// function createTask
function Task(info) {
  this.info = info;
}
let taskLocal = [];
// CREATE
let createTask = () => {
  let info = document.getElementById("newTask").value;
  let task = new Task(info);

  taskLocal.push(task);
  renderTask();
};
let findNumber = (info) => {
  for (let i = 0; i < taskLocal.length; i++) {
    if (taskLocal[i].info === info) {
      return i;
    }
  }
  return -1;
};
// remove
let removeTask = (info) => {
  let index = findNumber(info);
  taskLocal.splice(index, 1);
  renderTask()
};

let renderTask = (data) => {
  data = data || taskLocal;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<li>
               <div>
                  <p>${data[i].info}</p>
                </div>
               <div>
                 <button 
                 onclick="removeTask('${data[i].info}')"
                 class="buttons">
                  <i class="fa-solid fa-trash-can remove"></i>
                  </button>
                 <button class="buttons">
                  <i class="fa-solid fa-circle-check"></i>
                   </button>
                 </div>
</li>`;
  }
  document.getElementById("todo").innerHTML = html;
};

