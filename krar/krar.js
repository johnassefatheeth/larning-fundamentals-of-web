	document.getElementsByClassName("kr")[0].addEventListener("click",krarr0);
	document.getElementsByClassName("kr")[1].addEventListener("click",krarr1);
	document.getElementsByClassName("kr")[2].addEventListener("click",krarr2);
	document.getElementsByClassName("kr")[3].addEventListener("click",krarr3);
	document.getElementsByClassName("kr")[4].addEventListener("click",krarr4);
	document.getElementsByClassName("kr")[5].addEventListener("click",krarr5);
	document.addEventListener("keydown",function(event){
		zm(event.key);
	});

function zm(key){
	switch (key){
		case "q":
		krarr0();
		break;
		case "w":
		krarr1();
		break;
		case "t":
		krarr2();
		break;
		case "e":
		krarr3();
		break;
		case "r":
		krarr4();
		break;
		case "y":
		krarr5();
		break;
		
	}
}

function krarr0(){
		var a=new Audio("Good--1.M4A");
		a.play();
		document.getElementsByClassName("kr")[0].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[0].classList.remove("click");		
		},1000)
}
function krarr1(){
		var a=new Audio("Good-2.M4A");
		a.play();
		document.getElementsByClassName("kr")[1].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[1].classList.remove("click");		
		},1000)
}
function krarr2(){
		var a=new Audio("Good-3.M4A");
		a.play();
		document.getElementsByClassName("kr")[2].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[2].classList.remove("click");		
		},1000)
}
function krarr3(){
		var a=new Audio("Good-4.M4A");
		a.play();
		document.getElementsByClassName("kr")[3].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[3].classList.remove("click");		
		},1000)
}
function krarr4(){
		var a=new Audio("An good-1.M4A");
		a.play();
		document.getElementsByClassName("kr")[4].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[4].classList.remove("click");		
		},1000)
}
function krarr5(){
		var a=new Audio("An good-2.M4A");
		a.play();
		document.getElementsByClassName("kr")[5].classList.add("click");
		setTimeout(function(){
		document.getElementsByClassName("kr")[5].classList.remove("click");		
		},1000)
}

