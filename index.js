let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let f_name = document.getElementById("fname");
    let l_name = document.getElementById("lname");
    let email = document.getElementById("email")
    let country = document.getElementById("country")

    if (f_name.value == "" || l_name.value == "" || email.value == "" || country.value == ""){
        alert("Molim ispunite sva polja");
    }else{
        alert("Vaš obrazac je uspješno poslan na proditores_vincula@gmail.com");
        setTimeout(function(){
       window.location.reload();
        }, 100);
    }

    // ovdje odraditi ostatak ako potrebno
})
