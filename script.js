let count=0;
function increment(){
	count++;
	document.getElementById('count').innerHTML = count;
	countColor();
}

function decrement(){
	count--;
	document.getElementById('count').innerHTML = count;
	countColor();
}
function countColor(){
	if(count>0){
		document.getElementById('count').style.color = "green";
	}else if(count<0){
		document.getElementById('count').style.color = "red";
	}else{
		document.getElementById('count').style.color = "yellow";
	}
}

document.getElementById('count').innerHTML = count;




