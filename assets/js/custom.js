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

// $('.moreless-button').click(function() {
//     $('.moretext').slideToggle();
//     if ($('.moreless-button').text() == "Lees meer") {
//       $(this).text("Lees minder")
//     } else {
//       $(this).text("Lees meer")
//     }
//   });
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  
  if ($(this).html() == '<i class="fa-solid fa-angle-down"></i>') {
    $(this).html('<i class="fa-solid fa-angle-up"></i>');
  } else {
    $(this).html('<i class="fa-solid fa-angle-down"></i>');
  }
});
  // $('.morelesss-button').click(function() {
  //   $('.moretextt').slideToggle();
  //   if ($('.morelesss-button').text() == "Read more") {
  //     $(this).text("Read less")
  //   } else {
  //     $(this).text("Read more")
  //   }
  // });

  $('.morelesss-button').click(function() {
    var $this = $(this);
    $this.closest('.recommended-text').find('.moretextt').slideToggle(); // Toggle the specific text associated with this button
    if ($this.text() == "lees meer") {
      $this.text("lees minder");
    } else {
      $this.text("lees meer");
    }
  });