$(document).ready(function(){
	$( ".appointment" ).hide()
	
	});
$(document).ready(function(){

/* Button which shows and hides div with a id of "post-details" */
$( ".toggle-visibility" ).click(function() {
  
  var target_selector = $(this).attr('data-target');
  var $target = $( target_selector );
  
  if ($target.is(':hidden'))
  {
    $target.show( "slow" );
  }
  else
  {
  	$target.hide( "slow" );
  }
  
  console.log($target.is(':visible'));

  
});
  
/* button which creates a new paragraph <p>New row added</p> */


});