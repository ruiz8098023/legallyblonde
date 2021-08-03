// https://codepen.io/g13nn/pen/eHGEF

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".mobile-navbar" ).hide();
$( ".hamburger" ).click(function() {
$( ".mobile-navbar" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".mobile-navbar" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
