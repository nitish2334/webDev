function addNewTask() {
  const taskToAdd = document.getElementById("newTask").value;

  const LI = document.createElement("li");
  LI.classList.add("my-3");

  const DIV = document.createElement("div");
  DIV.classList.add("d-flex", "align-items-center" );

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = taskToAdd;

  // Edit Button
  const EDITBUTTON = document.createElement("button");
  EDITBUTTON.classList.add(
    "btn",
    "btn-warning",
    "ms-2",
    "d-flex",
    "gap-2",
    "align-items-center",
    "justify-content-center",
    
  );

  const EDITICON = document.createElement("i");
  EDITICON.classList.add("bi", "bi-pencil-square");

  const EDITSPAN = document.createElement("span");
  EDITSPAN.innerText = "Edit";

  EDITBUTTON.appendChild(EDITICON);
  EDITBUTTON.appendChild(EDITSPAN);

  EDITBUTTON.onclick = () => {
    const updatedTask = prompt("Edit Task", SPAN1.innerText);

    if (updatedTask !== null && updatedTask.trim() !== "") {
      SPAN1.innerText = updatedTask;
    }
  };

  // Delate BUTTON

  const BUTTON = document.createElement("button");
  BUTTON.classList.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );
  BUTTON.onclick = () => LI.remove();

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);

  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);

  LI.appendChild(DIV);

  DIV.appendChild(SPAN1);
  DIV.appendChild(EDITBUTTON);
  DIV.appendChild(BUTTON);

  document.getElementById("taskDiv").classList.remove("d-none");

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("newTask").value = "";
}
