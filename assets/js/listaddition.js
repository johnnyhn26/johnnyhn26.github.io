function addAlias() {
  var divelement = document.getElementById("aliaslist");
  
  var elements = document.getElementsByClassName("alias");
  var length = elements.length + 1;
  
  var new_input = "<input type='text' class='alias' id='aliasinput" + length + "' placeholder='Alias' name='aliasinput" + length + "' style=\"margin-top:25px;\">";
  
  divelement.insertAdjacentHTML('beforeend', new_input);
}

function removeAlias() {
  var divelement = document.getElementById("aliaslist");
  
  var elements = document.getElementsByClassName("alias");
  var length = elements.length;
  
  if (length > 1) {
	  extra = document.getElementById("aliasinput" + length);
	  extra.remove();
  }
}

function addPin() {
  var divelement = document.getElementById("pinslist");
  
  var elements = document.getElementsByClassName("pins");
  var length = elements.length + 1;
  
  var new_input = "<div id='pinsinput" + length + "' class='pins' style='margin-top:15px;'>";
  
  var department = "<div class='row gtr-uniform'> <div class='col-cust1'> <input type='text' id='departmentinput1' name='departmentinput1' placeholder='Department' required> </div> " + 
					"<div class='col-cust2'> <select name='aliasselect1' id='aliasselect1' placeholder='Select an Alias' required></select> </div> </div>";
  
  var uploadimage = "<div class='row gtr-uniform'> <div class='col-cust1' style='margin-top:15px;'> <p>Upload an image of the <b>pin</b> you would like to use</p> </div>"
					+ "<div class='col-cust2' style='margin-top:15px;'> <input type='file' id='img' name='img' accept='image/*' required> </div> </div>";
  
  var extrastuff = "<div class='row gtr-uniform'><div class='col-cust1' style='margin-top:15px;'><input type='text' id='georadiusinput1' name='georadiusinput1' placeholder='Geopin Radius' required></div>" +
					"<div class='col-cust2' style='margin-top:15px;'><input type='text' id='employeeinput1' name='employeeinput1' placeholder='# of Employee Codes' required></div></div>";
  
  var description = "<input type='text' style='margin-top:20px;' id='shortdescriptioninput1' name='shortdescriptioninput1' placeholder='Short Description of Pin' required></div>"
  
  
  new_input = new_input + department + uploadimage + extrastuff + description;
  
  divelement.insertAdjacentHTML('beforeend', new_input);
}

function removePin() {
  var elements = document.getElementsByClassName("pins");
  var length = elements.length;
  
  if (length > 1) {
	  extra = document.getElementById("pinsinput" + length);
	  extra.remove();
  }
}