var nme = document.getElementById("nme");

if ($(window).width() < 500 || ($(window).width() > 800 & $(window).width() < 950)) {
   nme.width = "300";
} else if ($(window).width() > 600 && $(window).width() < 800) {
  nme.width = "500";
}

$(window).resize(function() {
  if ($(window).width() < 500 || ($(window).width() > 800 & $(window).width() < 950)) {
     nme.width = "300";
  } else if ($(window).width() > 600 && $(window).width() < 800) {
    nme.width = "500";
  }
  else {
    nme.width = "430";
  }
});
