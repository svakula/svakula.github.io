$(function() {

 $(".header-menu")
   .mouseover(function() {
   $(".sub-list").show(300);
 });
 $(".header-menu")
   .mouseleave(function() {
   $(".sub-list").hide(300);
 });

 $(".ham-menu")
   .mouseover(function() {
   $(".sub-list-ham").show(300);
 });

 $(".ham-menu")
   .mouseleave(function() {
   $(".sub-list-ham").hide(300);
 });

 var counter = 1;
 var images = ['images/_DSC0047.jpg','images/_DSC0013.jpg', 'images/_DSC0083.jpg','images/_DSC0045.jpg', 'images/_DSC0026.jpg','images/_DSC0108.jpg'];
 var image = $(".fader");


 image.css("background-image","url("+images[counter]+")");

 setInterval(function(){
   counter++
 image.fadeOut(100, function(){
   image.css("background-image","url("+images[counter]+")");
   image.fadeIn(700);
 });
 if(counter==images.length){
   counter = 0;
 }
 },5000)



$(".about-header").find("h2").on("mouseenter", function() {
  $(this).addClass("hover-effect");}).on("mouseleave", function() {
    $(this).removeClass("hover-effect");
 });

$(".galleries-header").find("h2").on("mouseenter", function() {
  $(this).addClass("hover-effect");}).on("mouseleave", function() {
    $(this).removeClass("hover-effect");
 });

$(".contact-header").find("h2").on("mouseenter", function() {
    $(this).addClass("hover-effect");}).on("mouseleave", function() {
      $(this).removeClass("hover-effect");
 });

 $(".img").on("mouseenter", function() {
   $(this).addClass("ja");}).on("mouseleave", function() {
     $(this).removeClass("ja");
  });

  // galeria


  var ulSlider = $(".slider");
  var images =['images/_DSC0047.jpg','images/_DSC0013.jpg', 'images/_DSC0083.jpg','images/_DSC0045.jpg', 'images/_DSC0033.jpg', 'images/_DSC0108.jpg'];

  $.each(images, function(){
      $('<img src="' + this + '" />').appendTo(ulSlider);
  });


  // lightbox

  // var sliders = $(".images").find("img");
  // var lightbox = $("#lightbox");
  // var closeButton = $("#close");
  //
  // sliders.on("click", function(event){
  //   let imgUrl = $(event.target).attr('src')
  //   console.log(imgUrl);
  //   // lightbox.toggle(function(){
  //     lightbox.css("visibility", "visible");
  //     lightbox.css("background-image","url("+imgUrl+")");
  //     lightbox.css({'background-size': '100% 100%'});
  //     // });
  //     closeButton.on("click", function() {
  //       lightbox.css("visibility", "hidden");
  //     })
  // });


});
document.addEventListener("DOMContentLoaded", function() {
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
});
