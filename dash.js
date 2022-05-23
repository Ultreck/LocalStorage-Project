let getUserDetails= JSON.parse(localStorage.getItem("currentUserDetails"))
// alert("Hello World");
let firstN = getUserDetails.firstName;
let lastN = getUserDetails.lastName;
welc = document.getElementById("hd2");

welc.innerHTML= `You are welcome ${firstN} ${lastN}`;
// let h2 = document.getElementById("h2");
console.log(getUserDetails);
console.log(firstN);

