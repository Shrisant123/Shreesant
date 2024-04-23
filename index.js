let all_blogs=document.querySelectorAll('#blg_item');
let search=document.getElementById('search');


function searchTxt(){
Array.from(all_blogs).map((ele)=>{
	// console.log(ele.innerText);
	console.log(search.value);
	if(ele.innerText.includes(search.value)){
		ele.style.display='block';
	}else{
	ele.style.display='none';
}
})
}

