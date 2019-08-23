
// // console.log("はじめてのジャバスクリプト");


// // console.log(23+5);
// // console.log(2000-1800);
// // console.log("18+5");

// // var name="Shotaro Nishiki";
// // console.log("私は"+name+"です");

// // var point=90;

// // if(point >= 80){
    
// // console.log("素晴らしいおめでとう");
// // }else{
     
// // console.log("もっとがんばれ");
  
// // }

// // var random=Math.floor(Math.random()*5);
// // console.log(random);


// // var h1=document.querySelector("h1");



// // if(random==1){
    
// //     console.log("大吉",random);
// //     h1.innerHTML='大吉';
// // }else if(random==2||random==3||random==4){
         
// //     console.log("吉",random);
// //     h1.innerHTML='吉';

      
// // }else{
// //         console.log("凶",random); 
// //         h1.innerHTML='凶';
// //     }


// // $("h1").html("Jquery");

// // $("h1").on("click", function(){
// //     // h1をクリックしたら実行
// //     // $("h1").html("変更された");
// //     // $("h1").css("color","red");
// //     // $("h1").css("background-color","blue");
// //     $("p").fadeOut(1000);
// //     $("p").fadeIn(1000);
// //     $("p").append("<p>追加されたタグ</p>");
    
// // });
    
// // $("#ex").hide().fadeIn(4000);
// // $("#ex").on("click", function(){
// //     // h1をクリックしたら実行
// //     $("#ex").append("<p>かきくけこ</p>").css("background-color","white");
// //     $("#ex").append("<p>あいうえお</p>").css("background-color","black");
// //     $("#ex").append("<p>さしすせそ</p>").css("background-color","black").css("color","white");
// //     $("#ex p:odd").css("background-color","white").css("color","black");
    


// // });


// // $(document).ready(function(){
// //     // 偶数行の色を設定
// //     $('table#stripe-table tr:even').css('background-color', 'white');
// //     // 奇数行の色を設定
// //     $('table#stripe-table tr:odd').css('background-color', 'black');
// //   });


// $("#id1").hide().fadeIn(4000);
// $("#id1").on("click", function(){
//     // h1をクリックしたら実行
//     $("#id1").append("<p>かきくけこ</p>").css("background-color","white");
//     $("#id1").append("<p>あいうえお</p>").css("background-color","black");
//     $("#id1").append("<p>さしすせそ</p>").css("background-color","black").css("color","white");
//     $("#id1 p:odd").css("background-color","white").css("color","black");

// });


// $("#submit").css('background-color','gray');
// $("#submit").css('pointer-events','none');



// $("#submit").on("click", function(){
//     // h1をクリックしたら実行
//     $("#id1").append("<p>かきくけこ</p>").css("background-color","white");
//     $("#id1").append("<p>あいうえお</p>").css("background-color","black");
//     $("#id1").append("<p>さしすせそ</p>").css("background-color","black").css("color","white");
//     $("#id1 p:odd").css("background-color","white").css("color","black");

// });





// 全項目に文字が入っているか、問い合わせ内容10文字はいっているか
$(function(){
    if ($("#form1").val().length == 0||$("#form2").val().length == 0||$("#form3").val().length == 0) {
    $("#submit").prop("disabled", true);
    $("#submit").css('background-color','gray')
    }
    $("#form3").on("keydown keyup keypress change", function() {
    if ($("#form3").val().length < 10) {
    $("#submit").prop("disabled", true);
    $("#submit").css('background-color','gray')
    }   
    else {
    $("#submit").prop("disabled", false);
    $("#submit").css('background-color','green')
    }
    });
    });


