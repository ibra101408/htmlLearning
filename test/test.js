function kontroll1(){
	var kys1=document.getElementsByName("v1");
	var vastus1=document.getElementById("vastus1");
	
	if(kys1[0].checked){
		vastus1.innerHTML="верно";
		vastus1.style.color="green";
	} else{
		vastus1.innerHTML="неверно";
		vastus1.style.color="red";

	}
	
}
function kontroll2(){
	var kys2=document.getElementsByName("v2");
	var vastus2=document.getElementById("vastus2");
	
	if(kys2[2].checked){
		vastus2.innerHTML="верно";
		vastus2.style.color="green";
	} else{
		vastus2.innerHTML="неверно";
		vastus2.style.color="red";

	}
	
}
function kontroll3(){
	var kys3=document.getElementsByName("v3");
	var vastus3=document.getElementById("vastus3");
	
	if(kys3[1].checked){
		vastus3.innerHTML="верно";
		vastus3.style.color="green";
	} else{
		vastus3.innerHTML="неверно";
		vastus3.style.color="red";

	}
	
}
function kontroll4(){
	var kys4=document.getElementsByName("v4");
	var vastus4=document.getElementById("vastus4");
	
	if(kys4[2].checked){
		vastus4.innerHTML="верно";
		vastus4.style.color="green";
	} else{
		vastus4.innerHTML="неверно";
		vastus4.style.color="red";

	}
	}
	