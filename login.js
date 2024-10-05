


let btn = document.getElementById("btn")

btn.addEventListener("click" , function login(e){
    e.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let mgs = document.getElementById('message')

if (email == "thomas@gmail.com" && password == "thomas123") {

    console.log("email et password correct");
    
    mgs.innerHTML = "email et password correct"
    mgs.style.color = '#00FF00'
      
} else {
    console.log("email et password n'est pas correct");
    mgs.innerHTML = "email et password n'est pas correct"
    mgs.style.color = '#ff0000'
}




}
) 





