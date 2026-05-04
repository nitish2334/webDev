function submit()
{
    console.log("submit button clicked");


    const fn = document.getElementById("fullname").value
    console.log(fn);
    const em = document.getElementById("email").value
    console.log(em);



    document.getElementById("my data").innerText = fn;
    document.getElementById("my data").value = "";
      document.getElementById("my email").innerText=em;

    document.getElementById("my email").value = "";





      document.getElementById("datacard").classList.add("divshow");

    document.getElementById("datacard").classList.remove("divhide");

}
    