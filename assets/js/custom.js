// $(document).ready(function(){
//     $(".toggle").click(function(){
//         $("body").addClass("menuToggle");
//     });
//     $(".colse").click(function(){
//         $("body").removeClass("menuToggle");
//     });
// });


function ToggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
    
})

$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Lees meer") {
      $(this).text("Lees minder")
    } else {
      $(this).text("Lees meer")
    }
  });

  $('.morelesss-button').click(function() {
    $('.moretextt').slideToggle();
    if ($('.morelesss-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });