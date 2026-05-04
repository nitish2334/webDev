function Submit() {
  console.log("Submit Button Clicked");

  const fn = document.getElementById("fullName").value;
  console.log(fn);
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback").value;

  document.getElementById("myData").innerText = fn;
  document.getElementById("fullName").value = "";

  document.getElementById("myData4").innerText = city;
  document.getElementById("city").value = "";

  document.getElementById("myData2").innerText = email;
  document.getElementById("email").value = "";

  document.getElementById("myData3").innerText = password;
  document.getElementById("password").value = "";

  

  document.getElementById("myData5").innerText = feedback;
  document.getElementById("feedback").value = "";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}
