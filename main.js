// const tao mot bien countdown đại diện cho  class countdown .
	const countdown= document.querySelector('#countdown');
	const launchDate= new Date ('Dec 22 2019, 00:00:00').getTime();
	const setint = setInterval(function(){
	const now = new Date().getTime();
	const dis = launchDate - now;
	const days=Math.floor(dis/(1000*60*60*24));
	const hours=Math.floor((dis%(1000*60*60*24))/(1000*60*60));
	const mins=Math.floor((dis%(1000*60*60))/(1000*60));
	const secs=Math.floor((dis%(1000*60))/(1000));

	countdown.innerHTML=`
	${days} <span>Days</span>
	${hours}<span>Hours</span>
    ${mins}<span>Mins</span>
    ${secs}<span>Secs</span>
	`;

	if(dis < 0){
		clearInterval(setint);
		countdown.innerHTML = "Khuyến mãi đã hết !!!!";
	}
},1000);

function ibm(){
	var height = parseFloat(document.getElementById('height').value);
	var weight = parseFloat(document.getElementById('weight').value);
	var ibm  =  weight/(height/100*height/100);
	const chiSo= document.querySelector('#chiSo');
	const nhanXet= document.querySelector('#nhanXet');

	if (ibm < 18,5) {
		nhanXet.innerHTML=`<p>Bạn quá gầy</p>`;
	}
	if(ibm >18,5 && ibm <25){
		nhanXet.innerHTML=`<p>Bạn bình thường</p>`;

	}
	if(ibm>25){
		nhanXet.innerHTML=`<p>Bạn bị dính ngải heo =)))</p>`;

	} 
	chiSo.innerHTML=`
	 <span> Chỉ số BMI của bạn :</span>${ibm}
	`;

};

function thongbao(){
	const sdt = document.getElementById("tel").value;
	var phoneno = /^\d{10}$/;
	if(sdt.match(phoneno)){
		return true;
	}else{
		alert("Số điện thoại sai quy định");
		return false;
	}

};