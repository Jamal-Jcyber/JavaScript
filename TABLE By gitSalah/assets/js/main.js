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

var count = 1;
function addingNewRows(){
  putinfo();
  check();
	if(count <= 8){
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
  
  }
  else{
  	alert("you reached 8 rows already!");
  }
  deletes();
 }


function deletes(){
	document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('location').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
}
function check(){
  validateFirstNAME();
  validateLastNAME();
  validateBirthday();
  validatePlace();
  validatePhone();
  validateAddress();
}
function putinfo(){
  var x = document.getElementById('fname').value;
  var a = document.getElementById('lname').value;
  var b = document.getElementById('birthday').value;
  var c = document.getElementById('location').value;
  var d = document.getElementById('phone').value;
  var e = document.getElementById('address').value;
      if(x == '' && a == '' && b == '' && c == '' && d == '' && e == ''){
        alert("please put the information");
        deletes();
        document.getElementById('trow').deleteRow(1);
  }
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
    document.getElementById('trow').deleteRow(1);
    return false;
  }else {
    return true;
  }

}



