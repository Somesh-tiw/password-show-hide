const password=document.getElementById('password')
const icon=document.getElementById('icon')
console.log(password)
console.log(icon)
 const Hidepassword=()=>{
   if(password.type=="password"){
    password.type="text"
    icon.className="fa-solid fa-eye"
   }
   else{
    password.type="password"
    icon.className="fa-solid fa-eye-slash"
   }
 }
 icon.addEventListener("click",Hidepassword)