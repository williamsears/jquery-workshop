// Write your code here!
$(document).ready(function(){
    var $butn1= $('<input/>').attr({ onclick: "change()", type: 'button', name:'btn1', value:'X', id: "id", class: "ok"});
   $('.announcement').append($butn1);
    
    $('.ok').click(function(){
     if (this.value === "X"){
this.value="View the Content"
    $(this).parent().children().hide();
    $(this).show();
    
}
else {
    this.value="X";
    $(this).siblings().show();
}
    })

})