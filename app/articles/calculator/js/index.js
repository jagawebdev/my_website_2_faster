/*global $*/

$(document).ready(function() {
    
    var number = "";
    var newnumber = "";
    var operator = "";
    var display = $(".calculation");
    var totaldiv = $(".answer").text("0");
  
    $(".keys button").not(".equals").click(function() {
        var value = $(this).val();
        display.append(value);
        number += $(this).text();
    });
    
    $(".operator").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
    });
    
    $("#clearall").click(function(){
        display.text("");
        totaldiv.text("0");
        number = "";
        newnumber = "";
    });
    
    $(".equals").click(function(){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		}
		display.text("");
		totaldiv.text(number);
		number = "";
		newnumber = "";
    });
});