function dem(argument) {
	const countdown= document.querySelector('#countdown');
	const launchDate= new Date ('May 5 2020, 00:00:00').getTime();
	const setint = setInterval(function(){
	const now = new Date().getTime();
	const dis = launchDate - now;	
	const days=Math.floor(dis/(1000*60*60*24));
	const hours=Math.floor((dis%(1000*60*60*24))/(1000*60*60));
	const mins=Math.floor((dis%(1000*60*60))/(1000*60));
	const secs=Math.floor((dis%(1000*60))/(1000));

	countdown.innerHTML=`
	${days}<span>Days</span>
	${hours}<span>Hours</span>
    ${mins}<span>Mins</span>
    ${secs}<span>Secs</span>
	`;
	if(dis < 0){
		clearInterval(setint);
		countdown.innerHTML = "Đã hết khuyến mại!";
	}
},1000);

}