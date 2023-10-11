let hours = document.querySelector(".hour h1");
let minutes = document.querySelector(".minute h1");
let seconds = document.querySelector(".second h1");
let ampm = document.querySelector("#ampm h2");

// This will be 12hour format function
const clockHalfHr = ()=>{
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    
    // ampm
    if(hrs>12){
    	ampm.innerHTML = "P.M";
	   }
	   else{
	       ampm.innerHTML = "A.M"
	   }
    // hours
    if(hrs>12){
    	   hrs = hrs-12
	   }
   	if(hrs<10){
		     hrs = "0" + hrs
   	}
   	//mins
   	if(mins<10){
   	    mins = "0" + mins;
   	}
    //secs
    if(secs<10){
   	    secs = "0" + secs;
   	}
   	
    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    
}

// This will be 24hour format function
const clockFullHr = ()=>{
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    
    // ampm
    if(hrs>12){
    	ampm.innerHTML = "P.M";
	   }
	   else{
	       ampm.innerHTML = "A.M"
	   }
    // hours
   	if(hrs<10){
		     hrs = "0" + hrs
   	}
   	//mins
   	if(mins<10){
   	    mins = "0" + mins;
   	}
    //secs
    if(secs<10){
   	    secs = "0" + secs;
   	}
   	
    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    
}

let format12 = setInterval(clockHalfHr,1000)
let format24 = setInterval(clockFullHr,1000)
clearInterval(format24)
//console.log(clear24)
const format = ()=>{
    let btn = document.getElementById("format");
    let class1 = btn.classList.toggle("format")
    /*alert("func run")
    alert(class1)*/
    if (class1 == false) {
        clearInterval(format12);
        format24 = setInterval(clockFullHr,1000);
        swal("Perfect!","Time format changed Successfully!", "success");
    }
    //console.log(formatt)
    if(class1 == true) {
        clearInterval(format24);
        format12 = setInterval(clockHalfHr,1000);
        swal("Perfect!","Time format changed Successfully!", "success");
    }
}
