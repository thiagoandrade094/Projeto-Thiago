/*Codigo para uso do JQuery*/
		$(document).ready(function(){

			//fazem os documentos terem a função de subir ou descer
		  $("#flip").click(function(){
		    //$("#panel").slideDown("slow");
		    //$("#panel").slideDown("");
		    //descer
		    $("#panel").slideDown("fast");

		  });
		

		$("#flip2").click(function(){
		    //$("#panel").slideDown("slow");
		    //$("#panel").slideDown("");
		    //subir
		    $("#panel").slideUp(1000);

		  });

		//função que faz a mesma coisa dos dois anteriories

		$("#flip3").click(function(){
		    $("#panel").slideToggle("slow");

		  });

		////////////////////////////  Fade Out  /////////////////////////////////////////



  $("#b1").click(function(){
    $(".quadrado").fadeOut();
    $(".quadrado").fadeOut("slow");
    $(".quadrado").fadeOut(3000);
  });

$("#b2").click(function(){
    $(".quadrado").fadeIn();
    $(".quadrado").fadeIn("slow");
    $(".quadrado").fadeIn(3000);
  });



	////////////////////////////////////////// Append /////////////////////////////////////////////////	




  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });

  $("#b3").click(function(){
    $("b").remove();
  });

  $("#b4").click(function(){
    $("li").remove();
  });




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

	});	

