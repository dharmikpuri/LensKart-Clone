let form = document.getElementById("checkout");
// let name = document.getElementById("fsName");
// let lastName = document.getElementById("lsName");
// let email = document.getElementById("mail");
// let address = document.getElementById("add");
// let city = document.getElementById("add");
// let state = document.getElementById("state");
// let country = document.getElementById("country");
// let zipCode = document.getElementById("zip");
// let cardnumber = document.getElementById("cardN");
// let cardholder = document.getElementById("cardH");
// let month = document.getElementById("month");
// let cvv = document.getElementById("cv");

let arr = JSON.parse(localStorage.getItem("payment")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("name");
  let userdata = {
    name: form.fsName.value,
    lastName: form.lsName.value,
    email:form.mail.value,
    address: form.add.value,
    city: form.add.value,
    state: form.state.value,
    country: form.country.value,
    zipCode:form.zip.value
    
  };
  arr.push(userdata);
  localStorage.setItem("payment", JSON.stringify(arr));

  form.reset();
  location.href="../payment page/payment.html"
});

// let paybtn= document.getElementById("paymenttttt")
// paybtn.addEventListener("")
