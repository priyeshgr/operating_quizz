$(document).ready(function() {
	var data=[];
  currentModal = 0;
  var username = "";
  var points = 0;

    $("#openModalBtn").ready(function() {
        $("#openModalBtn").click();
    });
     
    $('#openModal1').find('.getAssignment2').prop('disabled', true);

    $(".q1_3").click(function(){
        points = points + 50;
        console.log("Yes.....");
        console.log(points);
    });

    $(".q2_4").click(function(){
        points = points + 50;
        console.log("Yes.....");
        console.log(points);
    });

  $('.modalDialog').each(function(){
    data.push({
      id: $(this).attr('id'),
      order: $(this).data('modalorder')
    });
  })
    
	$('#openModalBtn').click(function(){
  	currentModal = 0;
    window.location.href = "#" + data[currentModal].id;
    $('#'+data[currentModal].id).find('.getAssignment2').prop('disabled', true);
  })
  
  //prev
  $('.getAssignment2').click(function(){
  	if (currentModal>0) {
    	currentModal--;
      window.location.href = "#" + data[currentModal].id;
    } else {
      
    	window.location.href = '#'
    }
  })
  
  //next
  $('.getAssignment').click(function(){
    console.log("hhhhhhh",currentModal);
    if(currentModal == 2 && points == 0){
        window.location.href = "#" + data[1].id;
        $(".card-header").text("Please answer the questions again")
    } else {
  	if (currentModal<data.length - 1) {
    	currentModal++;
      if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.getAssignment').prop('disabled', true);
      window.location.href = "#" + data[currentModal].id;
    } else {
    	window.location.href = '#'
    }
    }
    $(".user_points").text(points);
  })

  $('.user_submit').click(function(){
    if (currentModal<data.length - 1) {
      currentModal++;
    if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.user_submit').prop('disabled', true);
    window.location.href = "#" + data[currentModal].id;
  } else {
      window.location.href = '#'
  }
})


var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

$(".cert-date").text(date);

  // get username and start the game
  $('.username_btn').click(function(){
    $(".cert_username").text($("#username").val());

  }); 
})