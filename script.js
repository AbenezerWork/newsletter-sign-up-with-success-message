const main = document.getElementsByClassName("main")[0];
const input = document.getElementsByTagName("input")[0];
const button = document.getElementById("btn");

console.log(input.value);


let regex = new RegExp('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')
console.log(regex.test(input.value));
button.addEventListener('click', ev => {
	if(regex.test(input.value)){
		main.innerHTML =  "<div class = 'container-success'><img id = 'success-icon' src='assets/images/icon-success.svg'/> <h1>Thanks for subscribing!</h1><div id = 'message'><p>A confirmation message has been sent to <span id = 'bold'>"+ input.value + "</span>. Please open it and click the button inside to confirm your subscription.</p></div></div><button id = 'dismiss-btn'>Dismiss message</div>";
		const img = document.getElementById('success-icon');
		const dismissBtn = document.getElementById('dismiss-btn')
		main.style.height = "350px";
		main.style.width = "350px";
		main.style.padding = "40px 70px 70px 70px";
		main.style.flexDirection = "column";
		main.style.justifyContent = "space-between";
		img.style.width = "50px";
		img.style.alignSelf = "left";
		console.log(img);
		console.log(main);
	}else{
		input.style.borderColor = "hsl(4, 100%, 67%)";
		input.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
		input.style.color = "hsl(4, 100%, 67%)";
		const red = document.getElementById('red');
		red.innerText = "Valid email required";
		red.style.alignSelf = "flex-end";
		red.style.color = " hsl(4, 100%, 67%)";
		red.style.paddingLeft = "30%"
	}
})
