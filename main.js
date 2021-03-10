var hamburger = $(".fas.fa-bars");
var cross = $(".close");


hamburger.click(function() {
  var ulBurger = $(".hamburger-menu");

  ulBurger.toggleClass("active");
});

cross.click(function() {
  ulBulger.close();
})
