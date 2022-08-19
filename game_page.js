var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

question_turn="player1";
answer_turn="player2";

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : "+player2_name;

function send(){

    get_word= document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("The number is : "+ word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charat1=word.replace(charAt1,"c");
    remove_charat2=remove_charat1.replace(charAt2,"z");
    remove_charat3=remove_charat2.replace(charAt3,"f");

    question_word="<h4 id='word_display'>Square the number : "+ word + "</h4>";
    input_box="<br><input id='input_check_box' type='text'>";
    button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row=question_word + input_box + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

function check(){

    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer == word*word){

        if(answer_turn == "player1"){

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{

            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn : "+player2_name;
    }

    else{

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn : "+player1_name;
    }
    
    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn : "+player2_name;
    }

    else{

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn : "+player1_name;
    }
    
    document.getElementById("output").innerHTML = "";
}

var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_position_x, last_position_y;

color="black";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);

function  mymousedown(e){

    mouseEvent="mousedown"
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;

}

canvas.addEventListener("mouseup",mymouseup);
function  mymouseup(e){

    mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave",mymouseleave);
function  mymouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove);
function  mymousemove(e){

    current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("Last position of X = "+last_position_x+"and last position of y = "+last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
   
    console.log("Current position of X = "+last_position_x+"and current position of y = "+current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

}
last_position_x=current_position_x;
last_position_y=current_position_y;

    
}

var width=screen.width;
    var new_width=width - 50;

    var height=screen.height;
    var new_height=height - 300;

    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";


        canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){

    console.log("my_touchstart");
    last_position_of_tx=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_ty=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){

    console.log("my_touchmove");
    current_position_of_tx=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_ty=e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last_position_of_X="+last_position_of_tx+" , and Y="+last_position_of_ty);
    ctx.moveTo(last_position_of_tx,last_position_of_ty);
    ctx.lineTo(last_position_of_tx,last_position_of_ty);

    console.log("current_position_of_X="+current_position_of_tx+" , and Y="+current_position_of_ty);
    ctx.moveTo(current_position_of_tx,current_position_of_ty);
    ctx.lineTo(current_position_of_tx,current_position_of_ty);
    ctx.stroke();
}





}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


