// const tao mot bien countdown đại diện cho thằng class countdown ý.
const countdown= document.querySelector('#countdown');

//tạo ra 1 biến launchDate lưu ngày đếm 
const launchDate= new Date ('Dec 1 2019, 00:00:00').getTime();
//tạo ra 1 biến để bắt đầu đếm
// setInterval có sẵn , nó sẽ chạy thằng function trong nó , theo thời gian đc hẹn ( cái 1000 kia nghĩa là 1000ms =1 s) cứ sau 1 s thì nó chạy lại thằng function 1 lần
// thằng function này khai bảo kiểu clousure nghĩa là ko tạo riêng function ra mà tạo trong luôn thằng kia
// hiểu ko nghĩa là 1 s thì nó sẽ chạy lại cái function 1 lần thì nó update thời gian mới
// 
const setint = setInterval(function(){
	//tạo ra biến now set cho nó = thời gian hiện tại
	const now = new Date().getTime();
	//tạo ra biến khoảng cách lấy thằng lưu ngày đếm ở dòng 5 trừ đi thagnwf hiện tại
	const dis = launchDate - now;
	
	//tạo ra các biến ngày , giờ , phút thôi 
	//Math.floor là function làm tròn xuống. kiểu 1,8 hay 1,5 1,9 thì đều về 1 hết =))
	// thì công thức tính ngày còn lại đấy =)) ko giỏi toán nên chịu =)) ko biết giải thích :v
	const days=Math.floor(dis/(1000*60*60*24));
	const hours=Math.floor((dis%(1000*60*60*24))/(1000*60*60));
	const mins=Math.floor((dis%(1000*60*60))/(1000*60));
	const secs=Math.floor((dis%(1000*60))/(1000));

	//tính xog thằng thời gian r thì bây giờ nó sẽ đặt lại cho thằng class countdown 
	//innerHTML nghĩa là nó sẽ nhét các thẻ span vs biến dáy, hours , mín,secs. vào trong thằng class countdown
	//thằng countdown khai báo ở trên đầu đấy 
	// countdown nghĩa là chọn thằng class countdown ở đầu r nhé
	//innerHTML nghĩa là bh mình nhét các thẻ HTML vào trong nó
	//nếu h t thay đổi span thành h1 thì thằng in ra sẽ là h1
	countdown.innerHTML=`
	${days} <span>Days</span>
	${hours}<span>Hours</span>
    ${mins}<span>Mins</span>
    ${secs}<span>Secs</span>
	`;
	//nếu mà cái khoảng cách bằng = 0 nghĩa là hết khuyế mãi r
	// thấy thằng day thành h1 ko 
	// thì cứ sau 1000ms thì nó thay đổi nó nhét thằng mới vào 
	//thì nó phải tính lại các biến ok ok ??? rồi, đoạn đó chỉ để nhét biến vào thẻ html thôi chứ hở 
	// uk nó sẽ nhét biến days và thẻ h1 span abcxyz j đấy vào trong thằng có class countdown 
	//nếu h c tạo 1 thằng khác cũng tên class countdown thì nó sẽ cũng có như thế =)) thấy tên class countdown có các thẻ chưa
	//trong html mình có viết nó đ
	//như nào tiếp theo???
	// làm tiếp hay giải thích code tiếp =))
	//giải thích xong r còn :)))
	// làm foooter thôi =)) 
	// nộp bài thì nhớ xóa đoạn này đi ko ô giáo đọc đc thì chết =))
	//sợ gì =))))
	//vào home đi
// vừa nãy bảo cho script xuống mà ok đc roài ô làm nốt css cho chữ nó bớt củ chuổi
	if(dis < 0){
		clearInterval(setint);
		countdown.innerHTML = "Khuyến mãi đã hết !!!!";
	}
},1000);

// day co phai code t dau e them linh tinh r =)))
// ko cần function j chạy thẳng luôn
//cái script này phải để cuổi trang mới chạy tại nó load xog hết html xog nó chạy script thì bắt đầu thêm các thẻ span này vào 
//c hiểu đoạn này k t giảng cho
//giảng đi

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
	//phan nay hiẻu k , có có hiểu sao nhờ tui làm =))) ơ bảo làm cùng chứ đâu phải t mờ tịt =))
	// hôm sau cho nàng tự làm nhé :((())) đi đây bye bye :* ok
	const ten = document.getElementById("name").value;
	if(ten == ""){
		alert("Cần điển tên !!!! ");
		return false;
	}
	const sdt = document.getElementById("tel").value;
	var phoneno = /^\d{10}$/;
	if(sdt.match(phoneno)){
		return true;
	}else{
		alert("Số điện thoại sai quy định");
		return false;
	}

};