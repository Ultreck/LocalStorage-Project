

// The regular expression function
regexfuncFnLn = () => {
    
    fnLnRegex = /[a-zA-Z]{2,}/;
    ctRegex = /^[\d]{11}$/;
    emRegex =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    psRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    adRegex = /[\w-]{6,}/;
    // Validation for first name......
    if (!fnLnRegex.test(fn.value))
    {
            fn.className = "form-control is-invalid border border-3 border-danger";
            fnsn.innerText = "input at least 2 characters";
            fnsn.style.color = "red"
    }
    else 
    {
        fn.className = "form-control is-valid";
        fnsn.innerText = "";
    }
    // Validation for last name......
    if (!fnLnRegex.test(ln.value))
    {
            ln.className = "form-control is-invalid border border-3 border-danger";
            lnsn.innerText = "input at least 2 characters";
            lnsn.style.color = "red"
        }
    else 
    {
        ln.className = "form-control is-valid"
        lnsn.innerText = "";
    }
    // Validation for contact......
    if (!ctRegex.test(ct.value))
    {
            ct.className = "form-control is-invalid border border-3 border-danger";
            ctsn.innerText = "input 11 digits";
            ctsn.style.color = "red"
        }
    else 
    {
        ct.className = "form-control is-valid"
        ctsn.innerText = "";
    }
    // Validation for e-mail......
    if (!emRegex.test(em.value))
    {
        em.className = "form-control is-invalid border border-3 border-danger";
        emsn.innerText = "input valid e-mail format";
        emsn.style.color = "red"
    }
    else 
    {
        em.className = "form-control is-valid"
        emsn.innerText = "";
    }
    // Validation for password......
    if (!psRegex.test(ps.value))
    {
        ps.className = "form-control is-invalid border border-3 border-danger";
        pssn.innerText = "password must contain at least 1 Uppercase, 1 Lowercase, 1 number, special characters and minimum of 8.";
        pssn.style.color = "red"
    }
    else 
    {
        ps.className = "form-control is-valid"
        pssn.innerText = "";
    }
    // Validation for address......
    if (!adRegex.test(ad.value))
    {
        ad.className = "form-control is-invalid border border-3 border-danger";
        adsn.innerText = "input correct address";
        adsn.style.color = "red"
    }
    else 
    {
        ad.className = "form-control is-valid"
        adsn.innerText = "";
    }
    // Validation for gender......
    if (!gn.value) 
    {
        gn.className = "form-control is-invalid border border-3 border-danger";
        gnsn.innerText = "choose your gender";
        gnsn.style.color = "red";
    }
}

// Functions of adding elements to the table or storing datas
let personInfo = [];

const createObject = () => {
    if(!localStorage.Reg)
    {
        personInfo = [];
        
        firstName = fn.value;
        lastName = ln.value;
        contact = ct.value;
        email = em.value;
        password = ps.value;
        address = ad.value;
        gender = gn.value;
        
        personInfo.push(
            {
                "firstName":firstName,
                "lastName":lastName,
                "contact":contact,
                "email":email,
                "password":password,
                "address":address,
                "gender":gender
            });
            
            if (fn.value == "" || ln.value == "" || ct.value == "" || em.value == "" || ps.value == "" || ad.value == "" || gn.value == "")
            {
               regexfuncFnLn();
            }
            else 
            {
               regexfuncFnLn();
            localStorage.setItem("Reg", JSON.stringify(personInfo));
            // console.log(personInfo);
           }
        }
        else
        {
            personInfo = JSON.parse(localStorage.getItem("Reg"));
            
            firstName = fn.value;
            lastName = ln.value;
            contact = ct.value;
            email = em.value;
            password = ps.value;
            address = ad.value;
            gender = gn.value;
            // location.reload();
            
            personInfo.push(
                {
                    "firstName":firstName,
                    "lastName":lastName,
                    "contact":contact,
                    "email":email,
                    "password":password,
                    "address":address,
                    "gender":gender
                }
                )
                if (fn.value == "" || ln.value == "" || ct.value == "" || em.value == "" || ps.value == "" || ad.value == "" || gn.value == "")
                {
                   regexfuncFnLn();
               }
               else 
               {
                localStorage.setItem("Reg", JSON.stringify(personInfo));
                location.href  = "./login.html";
                console.log(personInfo);
               }
            // localStorage.setItem("Reg", JSON.stringify(personInfo));
            // console.log(personInfo);
            // regexfuncFnLn();
        }
    }





// show password function
const showPassword = () => {
    var pss = document.getElementById("ps");
    if(pss.type === "password")
    {
      pss.type = "text";
    }
    else
    {
      pss.type = "password";
    }
  }
