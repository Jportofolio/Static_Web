// JavaScript Document

//defining variables


//trigger the button action PREVIOUS
$(document).ready(function(){
						
// OPEN FACEBOOK HERE
$('.faceb').click(function(){
window.open("https://www.Facebook.com/robertgithua");
  });
//FLICKER HERE >>>>>
$('a.face').click(function(){
window.open("http://www.flickr.com/photos/jesus_friends_fellowship");
  });
$('.son').click(function(){
window.open("http://www.jesusfriendsfellowship.com/audio.php");
  });
//OPEN TWITTER HERE
$('a.twitt').click(function(){
window.open("https://www.twitter.com/robertgithua");
  });
//document HOME						   
		$('#slider').cycle({
	     fx: 'scrollLeft',
		 sync: 1,
         delay: -22200
		 
     });
});
	
