console.log("js working")

const messageBox = document.getElementById('messageBox')
const MainForm = document.getElementById('GetInfo')
const otpForm = document.getElementById('otpForm')
const SignUPForm = document.getElementById('SignUPForm')

const generatedOtp = async () => {
    return 12345 
}
const verifyOtp = async (event) => {
    event.preventDefault();
    const UserOtp = document.getElementById("UserOtp").value;
    if(UserOtp == 12345){
        showForm()
        messageBox.innerHTML = "Create Your Id and Password."
    }else{
        messageBox.innerHTML = "Otp is incorrect"
    }
}

function hideForm(){
    MainForm.style.visibility = 'hidden';
    otpForm.style.visibility = 'visible';
}
function showForm(){
    MainForm.style.visibility = 'hidden';
    otpForm.style.visibility = 'hidden';
    SignUPForm.style.visibility = 'visible';
}

const HandelOTPgen = async (event) =>{
    event.preventDefault()
    const Name  =  await document.getElementById('Name').value;
    const Email  =  await document.getElementById('Email').value;
    if(!Name || !Email){
        messageBox.innerHTML = "Please Fill the form."
    }else{
        try{
            const genOtp = await generatedOtp(Email)
            hideForm()
            messageBox.innerHTML = ` Otp is sent into your email ${Email} `
        }catch(error){
            console.log(`Error : ${error}`)
        }
        
    }
}


const HandelSignup = async (event) => {
    event.preventDefault();
    console.log("its working")
    const Username = await document.getElementById('Username').value;
    const Password = await document.getElementById('Password').value;
    if(!Username || !Password){
        messageBox.innerHTML = "Please Enter Username and Password."
    }else{
        messageBox.innerHTML = `Signup Successfull .  ${Username}  ${Password}`
        window.location.href =  "../templates/Home.html"
    }
}


const PasswordIn =  document.getElementById('Password');
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



