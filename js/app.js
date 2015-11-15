$(function(){
  $(".js-navbar-toggle").on("click", function(e){
    $(".js-navbar").toggleClass("navigation-container--collapsed");
    e.preventDefault();
  });
});
