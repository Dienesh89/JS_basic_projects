class password{
        upperCase(){
            let ranIndex = Math.floor(Math.random() * 26)
            let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            return upperLetters[ranIndex]
        } 
        lowerCase(){
            let ranIndex = Math.floor(Math.random() * 26)
            let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
            return lowerLetters[ranIndex]
        } 
        numbers(){
            let ranIndex = Math.floor(Math.random() * 10)
            let numbers = "0123456789"
            return numbers[ranIndex]
        }
        symbols(){
            let symbols = "~!@#$%^&*()_+|[]{}<>:"
            let ranIndex = Math.floor(Math.random() * symbols.length)
            return symbols[ranIndex]
        } 
        
}
let p = new password()

const customPassword = (passwordLength,uc,ls,n,symb)=>{
        let pass = "";
        for (let i = 0;i < passwordLength;i++){
                let passNum = Math.floor(Math.random() * 4);
                //console.log(i)
                let ucs = uc;
                let lss = ls;
                let ns = n;
                let symbs = symb;
                
                if ((passNum == 0) && (ucs == true)) {
                         let uc = p.upperCase();
                         pass = pass + uc
                }else if ((passNum == 1) && (lss == true)){
                        let ls = p.lowerCase();
                        pass = pass + ls
                }else if ((passNum == 2) && (ns == true)){
                        let n = p.numbers();
                        pass = pass + n
                }
                else if ((passNum == 3) && (symbs == true)){
                        let s = p.symbols();
                        pass = pass + s
                }
                else if ((passNum == 0) && (ucs == false)) {
                         i--
                }else if ((passNum == 1) && (lss == false)){
                        i--
                }else if ((passNum == 2) && (ns == false)){
                        i--
                }
                else if ((passNum == 3) && (symbs == false)){
                        i--
                }
        }
        return pass
}

let ucGlobal = true
const uc = ()=>{
    let uc = document.getElementsByClassName("ops-check-box")[0];
    uc = uc.classList.toggle("check-uc")
    ucGlobal = uc
    if(uc == false){
    	document.getElementsByClassName("ops-check-box")[0].innerHTML = "";
	}
	else if(uc == true){
    	document.getElementsByClassName("ops-check-box")[0].innerHTML = "✓";
	}
}

let lcGlobal = true
const lc = ()=>{
    let lc = document.getElementsByClassName("ops-check-box")[1];
    lc = lc.classList.toggle("check-lc")
    lcGlobal = lc;
    if(lc == false){
    	document.getElementsByClassName("ops-check-box")[1].innerHTML = "";
	}
	else if(lc == true){
    	document.getElementsByClassName("ops-check-box")[1].innerHTML = "✓";
	}
}

let nGlobal = true
const n = ()=>{
    let n = document.getElementsByClassName("ops-check-box")[2];
    n = n.classList.toggle("check-n")
    nGlobal = n;
    if(n == false){
    	document.getElementsByClassName("ops-check-box")[2].innerHTML = "";
	}
	else if(n == true){
    	document.getElementsByClassName("ops-check-box")[2].innerHTML = "✓";
	}
}

let sGlobal = true
const s = ()=>{
    let s = document.getElementsByClassName("ops-check-box")[3];
    s = s.classList.toggle("check-s")
    sGlobal = s;
    if(s == false){
    	document.getElementsByClassName("ops-check-box")[3].innerHTML = "";
	}
	else if(s == true){
    	document.getElementsByClassName("ops-check-box")[3].innerHTML = "✓";
	}
}

let generate = document.getElementById("generate");
let len = document.getElementById("length");
let Password = "";
generate.addEventListener("click",(e)=>{
    e.preventDefault()
    let lengths = len.value
    
    if ((lengths==0)) {
        lengths = 8
    }
    else if(lengths<0){
        lengths = Math.abs(lengths)
    }
    //alert(lengths)
    password = customPassword(lengths,ucGlobal,lcGlobal,nGlobal,sGlobal);
    document.getElementById("password").innerHTML = password;
})


function CopyMe(TextToCopy) { 
    var TempText = document.createElement("input"); 
    TempText.value = TextToCopy; 
    document.body.appendChild(TempText); 
    TempText.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(TempText); 
    swal({
        icon: 'success',
        title: 'Oops...',
        text: 'Password copied Successfully!',
    })
}
const copyPass = ()=>{
    let Pass = document.getElementById("password").innerHTML;
    if (Pass=="") {
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Generate password first.',
        })
    }else{
        CopyMe(Pass);
    }
}