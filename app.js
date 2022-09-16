const btn = document.getElementById("Button");
btn.addEventListener("click", function click(e) {
	const textbox = document.getElementById("t1");
	let val = textbox.value;
	console.log(val);
	textbox.value = "";
});
