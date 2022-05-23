

const display = document.getElementById("display");

const personData = JSON.parse(localStorage.getItem("Data"));
console.log(personData)


const displayInfo = () => {
      let addperson = "";
      for (p = 0; p < personData.length; p++)
      {
            addperson += "<tr>";
            addperson += "<th>" + (p+1) + "</th><td>" + personData[p].firstName + "</td><td>" +  personData[p].lastName + "</td>";
            addperson += "</tr>";
      }
      display.innerHTML = addperson;
      // console.log(addperson);

}
