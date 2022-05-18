function storeUserInfo(){
    let userInfo = {
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    };
   localStorage.setItem("userInfo" , JSON.stringify(userInfo));  
   window.location.href = "https://azadehjafariii.github.io/AzadehJafari/";
   document.getElementById(userInfo).innerHtml = alert(`Welcome ${username}, your password is ${password}`);
}


