
// Show password function
const showPassword = () => {
  var pss = document.getElementById("psw");
  if(pss.type === "password")
  {
    pss.type = "text";
  }
  else
  {
    pss.type = "password";
  }
}
// alert("Hello World!");
const infoFunc = () => {
      const dataInfo = JSON.parse(localStorage.getItem("Reg"));
      console.log(dataInfo);
      let found = dataInfo.find((val) => val.email == emm.value && val.password == psw.value)
      if(emm.value == "" && psw.value == ""){
        emerror.innerText = "email field is empty please fill it up";
        emerror.style.color = "red";
        emm.className = "form-control border border-3 border-danger is-invalid"
        pswerror.innerText = "password field is empty please fill it up";
        pswerror.style.color = "red";
        psw.className = "form-control border border-3 border-danger is-invalid"
      }
      else if (!found)
      {
        emerror.innerText = "E-mail is not found. please sign up first";
        emerror.style.color = "red";
        pswerror.innerText = "Password is not exist. please sign up first";
        pswerror.style.color = "red";
      }
      else
      {
        localStorage.setItem("currentUserDetails", JSON.stringify(found))
        location.href="./dash.html";
      }
      
      // alert("found")
      // let currentIndex = dataInfo.indexOf(found )
      // localStorage.setItem("regIndex", JSON.stringify(currentIndex))
}


