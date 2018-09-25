//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass( "tasty" );
  })
}

function pressIt(){
  $(document).on('keyup', function(e){
    if (e.keyCode === 71){
      alert('youuuuuuuuuu')
    }
  })
}

function submitIt(){
  $(document).on('submit', function(){
      alert("Your form is going to be submitted now.")
  })  
}