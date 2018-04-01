var hairtype = 1;
	eyestype = 1;
	nosetype = 1;
	mouthtype = 1;
	preview = document.getElementById("preview");
	hair = document.getElementById("hair");
    eyes = document.getElementById("eyes");
    nose = document.getElementById("nose");
    mouth = document.getElementById("mouth");
	
hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

document.getElementById("colorInp").addEventListener("change", function(){
	document.getElementById("preview").style.backgroundColor = this.value;
});

function changeType(type){ 
	if (type == "number"){
		document.getElementById("firstrange").type = "number";
		document.getElementById("secondrange").type = "number";
		document.getElementById("thirdrange").type = "number";
		document.getElementById("fourthrange").type = "number";
	}
	else if (type == "range"){
		document.getElementById("firstrange").type = "range";
		document.getElementById("secondrange").type = "range";
		document.getElementById("thirdrange").type = "range";
		document.getElementById("fourthrange").type = "range";
	}
};
document.getElementById("number").addEventListener("click", function(){   
	changeType("number");
});
document.getElementById("range").addEventListener("click", function(){   
	changeType("range");
});

document.getElementById("firstrange").addEventListener("change", function(){
	document.getElementById("hair").style.width = this.value+"%";
});
document.getElementById("secondrange").addEventListener("change", function(){
	document.getElementById("eyes").style.width = this.value+"%";
});
document.getElementById("thirdrange").addEventListener("change", function(){
	document.getElementById("nose").style.width = this.value+"%";
});
document.getElementById("fourthrange").addEventListener("change", function(){
	document.getElementById("mouth").style.width = this.value+"%";
});
document.getElementById("hair").addEventListener("click", function(){
		hairtype += 1;
		if (hairtype == 4) {
			hairtype = 1;
		}
		document.getElementById("hair").src="img/hair"+hair+".png";
});
document.getElementById("eyes").addEventListener("click", function(){
		eyestype += 1;
		if (eyestype == 4) {
			eyestype = 1;
		}
		document.getElementById("eyes").src="img/eyes"+eyes+".png";
});
document.getElementById("nose").addEventListener("click", function(){
		nosetype += 1;
		if (nosetype == 4) {
			nosetype = 1;
		}
		document.getElementById("nose").src="img/nose"+nose+".png";
});
document.getElementById("mouth").addEventListener("click", function(){
		mouthtype += 1;
		if (mouthtype == 4) {
			mouthtype = 1;
		}
		document.getElementById("mouth").src="img/mouth"+mouth+".png";
});

function createFace(){
	var ndiv = document.createElement("div");
		ndiv.style.backgroundColor = preview.style.backgroundColor;
		ndiv.className = "vancity col-lg-2 col-md-2 col-sm-3 col-xl-1 col-4";
	var hairimg = document.createElement("img");
		hairimg.src = hair.src;
		hairimg.className = "items";
		hairimg.style.width = document.getElementById("hair").style.width;
		hairimg.style.top = hair.style.top;	
	var eyesimg = document.createElement("img");
		eyesimg.src = eyes.src;
		eyesimg.className = "items";
		eyesimg.style.width = eyes.style.width;
		eyesimg.style.top = eyes.style.top;
	var noseimg = document.createElement("img");
		noseimg.src = nose.src;
		noseimg.className = "items";
		noseimg.style.width = nose.style.width;
		noseimg.style.top = nose.style.top;
	var mouthimg = document.createElement("img");
		mouthimg.src = mouth.src;
		mouthimg.className = "items";
		mouthimg.style.width = mouth.style.width;
		mouthimg.style.top = mouth.style.top;
	ndiv.appendChild(hairimg);
	ndiv.appendChild(eyesimg);
	ndiv.appendChild(noseimg);
	ndiv.appendChild(mouthimg);
	document.getElementById("display").appendChild(ndiv);
};
document.getElementById("plus").addEventListener("click", function(){  
	createFace();
});

function randomFace(){
	hairtype = Math.floor(Math.random() * 3) + 1;
	hairtype2 = Math.floor(Math.random() * (70 - 0)) + 0;
	eyestype = Math.floor(Math.random() * 3) + 1;
	eyestype2= Math.floor(Math.random() * (40 - 0)) + 0;
	nosetype = Math.floor(Math.random() * 3) + 1;
	nosetype2= Math.floor(Math.random() * (30 - 0)) + 0;
	mouthtype = Math.floor(Math.random() * 3) + 1;
	mouthtype2= Math.floor(Math.random() * (35 - 0)) + 0;
	hex = Math.floor(Math.random() * 0xFFFFFF);
	document.getElementById("hair").src="img/hair"+hairtype+".png";
	document.getElementById("hair").style.width=hairtype2+"%";
	document.getElementById("eyes").src="img/eyes"+eyestype+".png";
	document.getElementById("eyes").style.width=eyestype2+"%";
	document.getElementById("nose").src="img/nose"+nosetype+".png";
	document.getElementById("nose").style.width=nosetype2+"%";
	document.getElementById("mouth").src="img/mouth"+mouthtype+".png";
	document.getElementById("mouth").style.width=mouthtype2+"%";
	document.getElementById("preview").style.backgroundColor="#" + ("000000" + hex.toString(16)).substr(-6);
	
	document.getElementById("firstrange").value = hairtype2;
	document.getElementById("secondrange").value = eyestype2;
	document.getElementById("thirdrange").value = nosetype2;
	document.getElementById("fourthrange").value = mouthtype2;
};

document.getElementById("random").addEventListener("click", function(){   
	randomFace();
});

document.getElementById("autorandomcreate").addEventListener("click", function(){
	timer = setInterval(function(){
		randomFace();
		createFace();
	}, 500);
});

document.getElementById("stopautocreate").addEventListener("click", function(){
	clearInterval(timer);
		timer = null;
});