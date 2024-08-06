const PasswordIn =  document.getElementById('pssin');
isClicked = false;

function ShowPassword(){
    
    if(!isClicked){
        PasswordIn.type = "text"
        isClicked = true;
    }else{
        PasswordIn.type = "password"
        isClicked = false;
    }
}


const nameBox = document.getElementById('nameBox')
const passBox = document.getElementById('passBox')

const HandelLogin = async (event)  =>{
    event.preventDefault();
    const Username = await document.getElementById('Username').value
    const Password = await document.getElementById('pssin').value
    if(!Username || !Password){
        nameBox.innerHTML = "Enter Username"
        Password.innerHTML = "Enter Password"
    }else{
        if(Username == "Admin"){
            if(Password == "Password"){
                window.location.href = '../templates/Home.html'
            }
        }
        alert(`ITs working  Username - ${Username} Password - ${Password}`)
    }
}