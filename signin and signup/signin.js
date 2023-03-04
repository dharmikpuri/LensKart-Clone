const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

let Signinform=document.getElementById("signinform");
let Signupform=document.getElementById("signupform");
let totalusers=JSON.parse(localStorage.getItem("user-Data"))||[];
Signupform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let user={
        username:Signupform.upusername.value,
        userpassword:Signupform.upuserpass.value
    }  
    totalusers.push(user);
    localStorage.setItem("user-Data",JSON.stringify(totalusers));
   swal("REGISTRATION SUCCESSFULL","","success")
})

Signinform.addEventListener("submit",(e)=>{
    e.preventDefault();
    
      let name=Signinform.inusername.value;
      let password=Signinform.inuserpass.value;
    //   console.log(name,password)
      let flag=false;
  for(let el of totalusers){
    if(name==="admin" && password==="admin"){
        flag="admin"
        break;
    } 
    else{
     if(el.username===name && el.userpassword=== password){
       swal("LOGIN SUFCCESSFULL","","success")
        flag=true;
        break;
    } 
}
  }
  if(flag=="admin"){
    swal("WELCOME ADMIN","","success")
    setTimeout(() => {
        location.href = "../Admin Dashboard/admin.html";
        
    }, 2000);
  }
  else{
  if(!flag){
       swal("PLZ FILL CORRECT DETAILS","","warning")
  }
  else{
      setTimeout(() => {
        location.href = "../index.html";
        
    }, 2000);
  }
}
})





