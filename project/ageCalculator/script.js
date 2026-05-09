document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById("DOB").value);
    const currentDate = new Date(document.getElementById("currentDate").value);

    const Age = Number(currentDate.split("-")[0]);


















    console.log(dob);
    console.log(currentDate);



    
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById("Myage").textContent = age;
});