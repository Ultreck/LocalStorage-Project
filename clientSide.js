

let personData = [];

function check()
 {
      const fn = document.getElementById("firstname");
      const ln = document.getElementById("lastname");
      const ct = document.getElementById("contact");
      const ad = document.getElementById("address");
      const gn = document.getElementById("gender");
      const em = document.getElementById("email");
      firstName = fn.value;
      lastName = ln.value;
      contact = ct.value;
      address = ad.value;
      gender = gn.value;
      email = em.value;

      personData.push({
            "First Name": firstName,
            "last Name": lastName,
            "Contact": contact,
            "E-mail": email,
            "Address": address,
            "Gender": gender
      });
      localStorage.setItem("Data", ff);
      let ff = JSON.stringify(personData);
    
}
console.log(personData)