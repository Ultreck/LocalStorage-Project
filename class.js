let personData = [];

var edit;
const checkPush = () =>
{
      if(!localStorage.Data){
            personData = []
            
            firstName = fn.value;
            lastName = ln.value;
            contact = ct.value;
            address = ad.value;
            gender = gn.value;
            email = em.value;
            personData.push(
                  {
                        "FirstName": firstName,
                        "lastName": lastName,
                        "Contact": contact,
                        "Email": email,
                        "Address": address,
                        "Gender": gender
                  });
                  localStorage.setItem("Data", JSON.stringify(personData));
                  objectIteration();
                  console.log(personData);
            }
            else{
                  personData = JSON.parse(localStorage.getItem("Data"));
                  firstName = fn.value;
                  lastName = ln.value;
                  contact = ct.value;
                  address = ad.value;
                  gender = gn.value;
                  email = em.value;
                  personData.push(
            {
            "FirstName": firstName,
            "lastName": lastName,
            "Contact": contact,
            "Email": email,
            "Address": address,
            "Gender": gender
      });
      localStorage.setItem("Data", JSON.stringify(personData));
      objectIteration();
      updateData();
      console.log(personData);
      location.reload();
}
}


const  objectIteration = () => 
{
      let storageData = JSON.parse(localStorage.getItem("Data"));
      
      result = "";
      for (p = 0; p < storageData.length; p++)
      {
            result += "<tr>"
            result += "<td>" + (p+1) + "</td><td>" + storageData[p].FirstName + "</td><td>" + storageData[p].lastName + "</td><td>" + storageData[p].Contact + "</td><td>" + storageData[p].Email + "</td><td>" + storageData[p].Address + "</td><td>" + storageData[p].Gender + "</td>" + `<td id="deleteIcon" onclick="deleteFunc(${p})"><ion-icon name="trash" class="bg-danger rounded text-white btn" data-bs-toggle="modal" data-bs-target="#delete"></ion-icon></td> <td onclick="editData(${p})" ><ion-icon name="create" class="bg-primary rounded text-white btn" data-bs-toggle="modal" data-bs-target="#edit"></ion-icon></td>`;
            result += "</tr>"
      }
       document.getElementById("display").innerHTML = result;
      console.log(result);
}



const deleteFunc = (index) => {
      let storageData = JSON.parse(localStorage.getItem("Data"));
      if (confirm(`Are you sure you want to delete ${storageData[index].FirstName} ${storageData[index].lastName}'s data?`))
            {
                  storageData.splice(index, 1);
                  localStorage.setItem("Data", JSON.stringify(storageData))
                  location.reload()   
            }
            else 
            {alert(`Delete cancelled`)}
            
      }
      
      const editData = (p) => {
            let storageData = JSON.parse(localStorage.getItem("Data"));
            edit =p;
            fn2.value = storageData[p].FirstName;
            ln2.value = storageData[p].lastName;
            ct2.value = storageData[p].Contact;
            em2.value = storageData[p].Email;
            ad2.value = storageData[p].Address;
            gn2.value = storageData[p].Gender;
      }
      
const updateData = () => {
      let storageData = JSON.parse(localStorage.getItem("Data"));
      storageData.splice(edit, 1, {
            "FirstName":  fn2.value,
            "lastName":   ln2.value,
            "Contact": ct2.value,
            "Email":  em2.value,
            "Address":   ad2.value,
            "Gender":  gn2.value
      })
      localStorage.setItem("Data", JSON.stringify(storageData))
      location.reload() 
}
