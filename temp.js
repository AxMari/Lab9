var button = document.getElementById('button');
button.addEventListener('click', function() {	
	var Usertemp = parseInt(document.getElementById('userTemp').value);
	var unit = document.getElementById('mySelect').value;	
	var answer = document.getElementById('answer');
		if(!isNaN(Usertemp)){
			if(unit === "C") {
				newTemp = ((Usertemp * 9/5) + 32 + "\xB0F");
			}
			else if(unit === "F") {
				newTemp = ((Usertemp - 32) * (5/9) + "\xB0C");
			}
		}else{
			newTemp = "Err: Not a number";
		}
	answer.innerText = newTemp;	
});








