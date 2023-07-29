var countAns=1;
var countQuiz=0;
var flag=0;
console.log("ise malakas")
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "Hello, I hope you are well!!"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse;
    if((countAns==2 && (userText=="a") || (userText=="A")) || flag==1){
        botResponse=getBotResponseForQuiz(userText);
    }else if (countAns==2 && (userText=="b") || (userText=="b")){
        botResponse=getBotResponseForQuestions(userText);
    }else if (countAns==2){
        botResponse=" Try again , Press A to take lesson quiz or Press B to ask question for the lessons"
    }else{
    botResponse = getBotResponse(userText);
    }
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        return
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function getBotResponse(input) {

    if(countAns>=1){
        countAns++
        return " Press A to take lesson quiz or Press B to ask question for the lessons"
        
    }
    countAns++
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
} 

function getBotResponseForQuiz(input){
    countAns++;
    flag=1;
    username="cefsta01";
    console.log("apoel")

    var dat = new XMLHttpRequest();
    // Setup our listener to process completed requests
    dat.onreadystatechange = function () {
      // Only run if the request is complete
      if (dat.readyState !== 4) return;
      // Process our return data
      if (dat.status >= 200 && dat.status < 300) {
        const t = JSON.parse(dat.responseText);
        console.log(t)
        console.log("thrilos")

        //  let count = t["username"].length;
        //  console.log(count) 
        // // console.log(t) 
        //  let username= document.getElementById("username").value
        //  let password=document.getElementById("password").value
        //  console.log(password)
        //  let flag=0
        //  for ( i = 0; i < count; i++) {
        //    if((username.localeCompare(t["username"][i])==0 )&& (password.localeCompare(t["password"][i])==0)){
        //      console.log("acces")
        //      flag=1
        //    }
        //  }
        //  if(flag==0){
        //    console.log("acces denied")
        //  }
        
      } else {
        console.log('error', dat);
      }
    };
  
    dat.open('GET', 'getclass.php');
    d={};
    d.username=username;
    dat.send(JSON.stringify(d));

    return "apoel"

}
 function getBotResponseForQuestions(input){
     countAns++;
     return "trilos"

 }
// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
}); 