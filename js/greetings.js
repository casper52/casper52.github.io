const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function logout(){
    localStorage.removeItem("username");
    location.reload();
}

function onLoginSubmit(event){
    event.preventDefault(); //기본동작 막아주기
    loginForm.classList.add(HIDDEN_CLASSNAME); //제출하면 화면 display none
    const username = loginInput.value; //username 가져오기
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`; //h1에 username 뿌리기
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click", logout);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
