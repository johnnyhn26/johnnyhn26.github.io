showPage1 = function()
{
    document.getElementById("content").setAttribute("class", "")
	document.getElementById("backbutton").style.display = "none"
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage2()")
	document.getElementById("nextbutton").setAttribute("form", "page1form")
	
	return false;
}
showPage2 = function()
{
    document.getElementById("content").setAttribute("class", "showPage2")
	document.getElementById("backbutton").style.display = "block"
	document.getElementById("backbutton").setAttribute("onClick", "showPage1()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage3()")
	document.getElementById("nextbutton").setAttribute("form", "page2form")
	
	return false;
}
showPage3 = function()
{
	document.getElementById("content").setAttribute("class", "showPage3")
	document.getElementById("backbutton").setAttribute("onClick", "showPage2()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage4()")
	document.getElementById("nextbutton").setAttribute("form", "page3form")
	
	return false;
}
showPage4 = function()
{
	document.getElementById("content").setAttribute("class", "showPage4")
	document.getElementById("backbutton").setAttribute("onClick", "showPage3()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage5()")
	document.getElementById("nextbutton").setAttribute("form", "page4form")
	
	return false;
}
showPage5 = function()
{
	document.getElementById("content").setAttribute("class", "showPage5")
	document.getElementById("backbutton").setAttribute("onClick", "showPage4()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage6()")
	document.getElementById("nextbutton").setAttribute("form", "page5form")
	
	return false;
}
showPage6 = function()
{
	document.getElementById("content").setAttribute("class", "showPage6")
	document.getElementById("backbutton").setAttribute("onClick", "showPage5()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage7()")
	document.getElementById("nextbutton").style.display = "block"
	document.getElementById("nextbutton").setAttribute("form", "page6form")
	loadAliasSelect();
	
	return false;
}
showPage7 = function()
{
	document.getElementById("content").setAttribute("class", "showPage7")
	document.getElementById("backbutton").setAttribute("onClick", "showPage6()")
	//document.getElementById("nextbutton").setAttribute("onClick", "showPage8()")
	document.getElementById("nextbutton").style.display = "none"
	document.getElementById("nextbutton").setAttribute("form", "page7form")
	
	return false;
}
showPage8 = function()
{
	document.getElementById("content").setAttribute("class", "showPage8")
	document.getElementById("backbutton").setAttribute("onClick", "showPage7()")
	
	submission();
	
	return false;
}

loadAliasSelect = function(nom = "aliasselect1") 
{
	var select = document.getElementById(nom);
	select.innerHTML = '';
	
	var elements = document.getElementsByClassName("alias");
	
	var i;
	for(i = 0; i < elements.length; i++) {
		if (elements[i].value != "") {
			var new_input = "<option value=\"" + elements[i].value + "\">" + elements[i].value + "</option>";
  
			select.insertAdjacentHTML('beforeend', new_input);
		}
	}
}

function submission() {
	$.ajax({
		type: "POST",
		data: {data:$("#page1form").serialize()},
		url: "submit.php",
		success: function(response){
			document.getElementById("majorheader").innerHTML = response;
		}
	});
}
















