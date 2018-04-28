$(document).ready(function(){

    $('.submit').click(function(e){
        e.preventDefault()
        validateForm()
        requestDemo()   
    });

function requestDemo() {

    var data = JSON.stringify({
        'email': $('#req-email').val(),
        'name': $('#req-name').val(),
        'type': $("input[name='type']").val()
    });
    $.ajax({
      url:"",
      type:"POST",
      data:data,
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data, status){
          $('#signup').modal('hide')
        }
    })
}

function validateForm(){

var nameReg = /^[A-Za-z]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var name = $('#req-email').val()
var email = $('#req-name').val()
var type = $("input[name='type']").val()

var inputVal = new Array(name, email, type)
var inputMessage = new Array("name", "email", "type")

$('.error').hide();
    if(inputVal[0] == ""){
        $('#req-name').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
    } 
    else if(!nameReg.test(names)){
        $('#req-name').after('<span class="error"> Letters only</span>');
    }
    if(inputVal[1] == ""){
        $('#req-email').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
    } 
    else if(!emailReg.test(email)){
        $('#req-email').after('<span class="error"> Please enter a valid email address</span>');
    }
}   

});
