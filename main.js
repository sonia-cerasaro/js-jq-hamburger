var hamburger = $(".fas.fa-bars");
var cross = $(".fas.fa-times");
var ulBurger = $(".hamburger-menu");

hamburger.click(function() {
  ulBurger.addClass("active");
});

cross.click(function() {
  ulBurger.removeClass("active");
});

// prova
