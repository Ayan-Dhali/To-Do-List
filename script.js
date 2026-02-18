let input = document.querySelector(".text");
let add = document.querySelector(".add");
let shts = document.querySelector(".shts");

function addTask() {
  const task = input.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }
  const li = document.createElement("li");
  li.classList.add("tm");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit">Edit</span>
    <span class="delete">Delete</span>
  `;
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });
  shts.appendChild(li);
  input.value = "";
  const delt=li.querySelector(".delete");
  delt.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});
const edit=li.querySelector(".edit");
const tp=li.querySelector("label span");
edit.addEventListener("click",()=>{
  const newtask=prompt("Edit your task:",tp.innerText);
  if (newtask!== null && newtask.trim()!==""){
    tp.innerText=newtask.trim();
  }
});
}

add.addEventListener("click", addTask);