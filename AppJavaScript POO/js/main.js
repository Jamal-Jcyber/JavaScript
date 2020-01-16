
  class User {
    constructor(firstName, lastName, birthday, place, phone, address){
      this.firstName=firstName;
      this.lastName=lastName;
      this.birthday=birthday;
      this.place=place;
      this.phone=phone;
      this.address=address;
    }
  }


var count = 0;
function addingNewRows(){
  checkFeilds();
  if (count <= 20){
    let row = "<tr>";
    const user = new User(
      document.getElementById('fname').value,
      document.getElementById('lname').value,
      document.getElementById('birthday').value,
      document.getElementById('location').value,
      document.getElementById('phone').value,
      document.getElementById('address').value);

    row += "<td>"+user.firstName+"</td>";
    row += "<td>"+user.lastName+"</td>";
    row += "<td>"+user.birthday+"</td>";
    row += "<td>"+user.place+"</td>";
    row += "<td>"+user.phone+"</td>";
    row += "<td>"+user.address+"</td>";
    row += "</tr>";
    document.getElementById('table').innerHTML += row;
    count++;
    clearFeilds();
  } else {
    alert('You Can\'t  Add more than that 20 row');
  }

}

function clearFeilds() {
  document.getElementById('fname').value ='';
  document.getElementById('lname').value ='';
  document.getElementById('birthday').value ='';
  document.getElementById('location').value ='';
  document.getElementById('phone').value ='';
  document.getElementById('address').value ='';
}


function checkFeilds(){
  validateFirstNAME();
  validateLastNAME();
  validateBirthday();
  validatePlace();
  validatePhone();
  validateAddress();
}

function validateFirstNAME(){
  let inputobject1 = document.getElementById('fname').value;

  if (inputobject1.length == 0){
    prompt('FirstName Is Required', 'fname-error');
    return false;
  }
  return true;
}

function validateLastNAME(){
  let inputobject2 = document.getElementById('lname').value;

  if (inputobject2.length == 0){
    prompt('LastName Is Required', 'lname-error');
    return false;
  }else {
    return  true;
  }

}

function validateBirthday(){
  let inputobject3 = document.getElementById('birthday').value;

  if (inputobject3.length == 0){
    prompt('Birthday Is Required', 'birthday-error');
    return false;
  }else {
    return true;
  }

}

function validatePlace(){
  let inputobject4 = document.getElementById('location').value;

  if (inputobject4.length == 0){
    prompt('place Is Required', 'location-error');
    return false;
  }else{
    return true;
  }

}

function validatePhone(){
  let inputobject5 = document.getElementById('phone').value;

  if (inputobject5.length == 0){
    prompt('Phone Is Required', 'phone-error');
    return false;
  }else {
    return  true;
  }

}

function validateAddress(){
  let inputobject6 = document.getElementById('address').value;

  if (inputobject6.length == 0){
    prompt('Address Is Required', 'address-error');
    document.getElementById('trows').deleteRow(1);
    return false;
  }else {
    return true;
  }

}
