//cross off specific todos 

$("ul").on("click", "li", function(){ 
    //remember toggleClass is like an on/off swtich, when you activate the Event, the fuction is called upon, when you activate it again it calls off the function, within the class. 
    $(this).toggleClass("completed"); //this was a class we made within the css file .
});


// $("li").click(function(){
//     //if li is gray.
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//     //then we will turn it black.
//         $(this).css({
//            color: "black", 
//            textDecoration: "none",  
//         });
//     }
//     else{      
//     //turn gray. 
//         $(this).css({
//             color: "grey", 
//             textDecoration: "line-through",
//         });
//     }

// });



//click on X to delete todo 

$("ul").on("click", "span", function(event){ //fadeOut the parent class its contained in, which happens to be the <li>
    $(this).parent().fadeOut(500, function(){ //fuction after fadeOut === Remove
        $(this).remove();
    });
    event.stopPropagation(); //stops the li getting tocuhed meaning it only activates the span rather then the <li> it is contained in.    
}); 



$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new todo text from input 
        var inputText = $(this).val(); //get
        $(this).val(""); // clears the input box after enter key has been pressed. 
        //create a new li and add to ul
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + inputText + "</li>");//set
    }
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(); 
})