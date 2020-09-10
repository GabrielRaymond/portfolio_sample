//smootscrol
var posY = 0;
var jarak = 8;

function smoothScroll(id){
	var target = document.getElementById(id).offsetTop; //jarak antara atas dan div
	
	var scrollAnimate = setTimeout(function(){
										smoothScroll(id)
									}, 2) //fungsi, waktu
	posY = posY + jarak;
	
	if(posY >= target){
		clearTimeout(scrollAnimate);
		posY = 0;
	}
	else{
		window.scroll(0, posY); //x dan y
	}
	
	return false;
	
}

// fungsi untuk validasi formular

function validasi(form){
	var lolos = true;
	var errorText = '';
	
	for(i=0; i<3; i++){
		if(form[i].value.trim().length <= 0){
			
			switch(i){
				case 0: errorText = 'Nama'; break;
				case 1: errorText = 'Email'; break;
				case 2: errorText = 'Message'; break;
				default:
			}
			
			if(form[i].nextElementSibling.className != 'error'){
				form[i].style.borderColor = 'red';
				form[i].insertAdjacentHTML('afterend', "<div class='error'>"+ errorText +" tidak boleh kosong </div>");
			}
			lolos = false;
		}
		else{
			if(form[i].nextElementSibling.className == 'error'){
				form[i].style.borderColor = 'black';
				form[i].nextElementSibling.remove();
			}
		}
	}
	
	return lolos;
}
