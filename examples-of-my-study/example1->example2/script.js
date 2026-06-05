jQuery(function(){
  window.addEventListener('scroll', () => {
    if (Math.round(window.scrollY) > 186){
      $('#logo').css("transform","translateY(-100%)");
    } else {
      $('#logo').css("transform","translateY(0%)");
    }
  });
});