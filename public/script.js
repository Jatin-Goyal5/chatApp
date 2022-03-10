

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
    console.log('hello');
}

