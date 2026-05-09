 jndocument.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("fullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const datapacket = {
    fullName: fn,
    email: em,
    password: ps,
  };
  console.log(datapacket);
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();
  //    confirm("Are you sure you want to reset the form?")&& window.location.reload();

  if (confirm("are you sure ")) {
    window.location.reload();
  }
});

document.addEventListener("keydown", (event) => {
  let keypress = event.key;
  console.log(keypress);

  keypress === "Enter" && alert("You Pressed Enter Key");
});
