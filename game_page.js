player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;


function send(){
    gw=document.getElementById("word").value;
    word=gw.toLowerCase();
    console.log("Word in lowerCase = "+word);
    
    l1=word.charAt(1);
    console.log(l1);
    
    length_divide_2=Math.floor(word.length/2);
    l2=word.charAt(length_divide_2);
    console.log(l2);

    lenght_minus_1=word.length-1;
    l3=word.charAt(lenght_minus_1);
    console.log(l3);

    r1=word.replace(l1,"_");
    r2=r1.replace(l2,"_");
    final_word=r2.replace(l3,"_");
    console.log(final_word);

     qw="<h4 id='word_display'> Q. "+final_word+"</h4>";
     ib="<br> Answer: <input type='text' id='input_check_box'>";
     cb="<br> <br> <button class='btn btn-info' onclick='check()'> Check</button>";
     row=qw+ib+cb;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
}

q_turn="player1";
a_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;

    answer=get_answer.toLowerCase();

    document.getElementById("myAudio").play();

    if(word==answer){
        if(a_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score; 
        }
        
    }
    if(q_turn=="player1"){
        q_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- "+player2_name;

    }
    else{
        q_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- "+player1_name;
    }

    if(a_turn=="player1"){
        a_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;

    }
    else{
        a_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
    }
    document.getElementById("output").innerHTML="";


}