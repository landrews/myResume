$(document).ready(function() {
    var year = new Date();
    $("#copyrightYear").html('<p>&copy;' + year.getFullYear() + ' | Built and maintained with &hearts; by <a href="https://github.com/landrews" target="_blank">@landrews</a>.</p>');

    $(".owl-carousel").owlCarousel();

    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
});
