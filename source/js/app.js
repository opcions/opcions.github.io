$(function(){
  $(".js-navbar-toggle").on("click", function(e){
    $(".js-navbar").toggleClass("navigation-container--collapsed");
    e.preventDefault();
  });

  $(document).foundation();
});

function currTime() {
    var d = new Date();
    return d.toLocaleTimeString();
}

function adHolder(size, color) {
  color = typeof color !== 'undefined' ? color : 'ff0';
  var source = 'http://placehold.it/' + size + '/' + color + '/000&text=' + size + '+' + currTime();
  return '<p class="ad_info">publicidad</p><img src="' + source + '">';
}

function adHolderRectangle(size, color) {
  color = typeof color !== 'undefined' ? color : 'ff0';
  var source = 'http://placehold.it/' + size + '/' + color + '/000&text=' + size + '+' + currTime();
  return '<p class="ad_info">publicidad</p><img src="' + source + '">';
}
