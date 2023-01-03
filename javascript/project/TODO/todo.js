// Get the modal
var modal = document.getElementById("toDoModelBoard");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Get the modal
var modalTask = document.getElementById("toDoModelTask");

function closeModel(id) {
  document.getElementById(id).style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modalTask) {
    modalTask.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var taskOBJ = null;

function removeBoard(obj) {
  var board = obj.closest(".board");
  board.remove();
}
function addNewTaskModalButton() {
  addNewTask(taskOBJ);
  // taskOBJ = null;
  modalTask.style.display = "none";
}
function showTaskModal(obj) {
  taskOBJ = obj;
  modalTask.style.display = "block";
}
function showTaskModalOnly() {
  modalTask.style.display = "block";
}
function addNewTask(obj) {
  var markButtone = document.createElement("button");
  markButtone.setAttribute("class", "markAsDone");
  markButtone.innerHTML = "Mark as done";
  markButtone.addEventListener("click", function handleClick(event) {
    console.log("element clicked bttone", event);
    markAsDoneFN(this);
  });

  // markButtone.onclick = function(markButtone){
  //     markAsDoneFN(this)
  // };
  var board = obj.closest(".board");
  var ul = board.children[2];
  var li = document.createElement("li");
  li.appendChild(
    document.createTextNode(document.getElementById("task_name").value)
  );
  li.appendChild(markButtone);
  ul.appendChild(li);
  document.getElementById("task_name").value = "";
  // console.log(board.children[2]);
}

function addNewBoard() {
  closeModel("toDoModelBoard");
  var data = document.getElementById("board_clone").innerHTML;
  var title = document.getElementById("baord_name").value;
  if (title == "") {
    if (confirm("Do you want to add enpty card ?")) {
      data = data.replace("{{baord_title_value}}", title);
      document.getElementsByClassName("contener")[0].innerHTML =
        document.getElementsByClassName("contener")[0].innerHTML + data;
      document.getElementById("baord_name").value = "";
    }
  } else {
    data = data.replace("{{baord_title_value}}", title);
    document.getElementsByClassName("contener")[0].innerHTML =
      document.getElementsByClassName("contener")[0].innerHTML + data;
    document.getElementById("baord_name").value = "";
  }
  document.getElementById("noitem").remove();
}
function markAsDoneFN(obj) {
  if (obj.innerHTML == "Done") {
    obj.innerHTML = "Mark as done";
  } else {
    obj.innerHTML = "Done";
  }
  obj.closest("li").classList.toggle("checked");
}
function showOnlyBoard(obj) {
  document.getElementById("head_task_title").innerHTML = obj.innerHTML;
  obj.closest("div").classList.toggle("onlyOne");
  var baord = document.getElementById("div-1").children;
  for (var i = 0; i < baord.length; i++) {
    if (
      document.getElementById("div-1").children[i].classList.contains("onlyOne")
    ) {
    } else {
      document.getElementById("div-1").children[i].style.display = "none";
    }
  }
  // baord
  // document.getElementById("details-div").innerHTML =obj.closest(".board").innerHTML;
  taskOBJ = obj.closest(".board");
  // document.getElementById("overview").style.display = "none";
  document.getElementById("topheader").style.display = "none";
  // document.getElementById("details").style.display = "block";
  document.getElementById("topheadertwo").style.display = "flex";
  document.getElementsByClassName("contener")[0].style.justifyContent =
    "center";
  // justify-content: space-between;
  // center
}
function backClick() {
  document.getElementById("overview").style.display = "block";
  document.getElementById("topheader").style.display = "flex";
  document.getElementById("topheadertwo").style.display = "none";
  // document.getElementById("details").style.display = "none";

  var baord = document.getElementById("div-1").children;
  for (var i = 0; i < baord.length; i++) {
    if (
      document.getElementById("div-1").children[i].classList.contains("onlyOne")
    ) {
      document.getElementById("div-1").children[i].classList.toggle("onlyOne");
    } else {
      document.getElementById("div-1").children[i].style.display = "block";
    }
  }
  document.getElementsByClassName("contener")[0].style.justifyContent =
    "space-between";
}
