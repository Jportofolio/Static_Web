// JavaScript Document
$(document).ready(function(){
						   
		/*********this is the Slider Loading*****/				   
$('#slider img').load(function(){
									   
						if (this.complete || this.readyState === 4){
							
							
						  $('#slider .slide').css("visibility","visible")
						                     .fadein("normal");
						   $('slider .loader').css("visibility","hidden");
							
							}
						 else {
							 
							 $('#slider .slide').css("visibility","hidden");
							 }
						
									   });				   
						   
						   });