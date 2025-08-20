
// shopセレクトボックス
let shopSelect = document.querySelector("#shop_selector");



// itemセレクトボックス
let itemSelect = document.querySelector("#item_selector");






function updateCheckboxValue() {
	var checkbox=document.getElementById("item_status_checkbox");
	var hidden=document.getElementById("hidden");
	hidden.value=checkbox.checked ? "0":"1";
        }

window.onload = () => {
	alert("a");
			var checkbox = document.getElementById("item_status_checkbox");
			var hidden=document.getElementById("hidden");
			hidden.value=checkbox.checked ? "0":"1";
	}
	
