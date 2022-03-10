

let chatInput = document.querySelector('.chat-input')
let chatWindow = document.querySelector('.chat-window')

let username = prompt('Enter Your Name ');
function userName() {
    username = prompt('Enter Your Name ');
}
while(!username){
    userName();
}

chatInput.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        let chatDiv = document.createElement('div');
        chatDiv.classList.add('chat');
        chatDiv.classList.add('right');
        chatDiv.textContent = username + ': ' + chatInput.value;
        chatWindow.append(chatDiv);
        socket.emit("chat" , {username , chat:chatInput.value});
        chatInput.value = '';
    }
})


function openMenu() {
    let leftView = document.querySelector('.left-view');
    leftView.classList.toggle('active');
}

function showDialog(){
    window.location = `truecallersdk://truesdk/web_verify?
                               requestNonce=1234567510
                               &partnerKey=IcHDNe44f3346f0c24e97b6bf27c9a4416330
                               &partnerName=p2gchat
                               &lang=English
                               &title=logIn`;

setTimeout(function() {

  if( document.hasFocus() ){
     // Truecaller app not present on the device and you redirect the user 
     // to your alternate verification page
  }else{
     // Truecaller app present on the device and the profile overlay opens
     // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
     // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
  }
}, 2000);
}

