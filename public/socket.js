let onlineList = document.querySelector(".online-list");
socket.emit("userConnected",username);


socket.on("join",function(joinUser){
    let joinedTime = new Date().toLocaleTimeString(); 
    let joinDiv = document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("joined");
    joinDiv.textContent = joinUser.username+ ` joined at ${joinedTime}`;
    chatWindow.append(joinDiv);
    addUserInList(joinUser);
});

socket.on("leave",function(leftUser){
    let leaveTime = new Date().toLocaleTimeString();
    let leaveDiv = document.createElement("div");
    leaveDiv.classList.add("chat");
    leaveDiv.classList.add("leave");
    leaveDiv.textContent = leftUser.username+ ` left at ${leaveTime}`;
    chatWindow.append(leaveDiv);
    deleteUserfromList(leftUser.id);
});

socket.on("message",function(chatObj){
    let leftChat =document.createElement("div");
    leftChat.classList.add("chat");
    leftChat.classList.add("left");
    leftChat.textContent = chatObj.username+": "+chatObj.chat;
    chatWindow.append(leftChat);
    

});

function addUserInList(user){

    //for random image
    var imgSrc =[
        'https://image.flaticon.com/icons/png/128/236/236831.png',
        'https://image.flaticon.com/icons/png/128/2922/2922688.png',
        'https://image.flaticon.com/icons/png/128/560/560216.png',
        'https://image.flaticon.com/icons/png/128/3048/3048122.png',
        'https://image.flaticon.com/icons/png/128/236/236832.png'
    ] 
    let imgSrcIndex = Math.floor(Math.random() * 5);

    let newUser = document.createElement('div');
    newUser.classList.add("user");
    newUser.setAttribute("id",user.id);
    newUser.innerHTML = ` <div class="user-image">
                            <img src ="${imgSrc[imgSrcIndex]}">
                        </div>
                        <div class="user-name">${user.username}</div>`;
    onlineList.append(newUser);

}
function deleteUserfromList(userid){
    document.querySelector(`#${userid}`).remove();
}

socket.on("onlineList",function(userList){
     //for random image
    var imgSrc =[
        'https://image.flaticon.com/icons/png/128/236/236831.png',
        'https://image.flaticon.com/icons/png/128/2922/2922688.png',
        'https://image.flaticon.com/icons/png/128/560/560216.png',
        'https://image.flaticon.com/icons/png/128/3048/3048122.png',
        'https://image.flaticon.com/icons/png/128/236/236832.png'
    ] 
    let imgSrcIndex = Math.floor(Math.random() * 5);
    
    for(let i =0 ; i < userList.length; i++){
        let user = userList[i];
        let newUser = document.createElement('div');
        newUser.classList.add("user");
        newUser.setAttribute("id",user.id);
        newUser.innerHTML = ` <div class="user-image">
                                <img src ="${imgSrc[imgSrcIndex]}">
                            </div>
                            <div class="user-name">${user.username}</div>`;
        onlineList.append(newUser);

    }
});
