//define functions here
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
    if (e.which == 71){
      alert('youuuuuuuuuu');
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
      alert("Your form is going to be submitted now.")
  })  
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
// call functions here

});

