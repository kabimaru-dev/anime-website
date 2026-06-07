jQuery(function() {
  const scrlPos = {
    scrl: false,
    fixedPos: 0,
    hide: false,
    lastScrlPos: 250
  };

  window.addEventListener('scroll', () => {
    scrlPos.scrl = true;
  });

  setInterval(function() {
    if (scrlPos.scrl) {
      console.log(scrlPos.lastScrlPos, "=", window.scrollY);

      setInterval(function() {
        if( window.scrollY > scrlPos.lastScrlPos && !scrlPos.hide ) {
          $('.container').css("transform", "translateY(-100%)");

          scrlPos.lastScrlPos = window.scrollY;

          scrlPos.hide = true;
        }
      }, 250);
      
      setInterval(function() {
        if( window.scrollY < scrlPos.lastScrlPos && scrlPos.hide ) {
          $('.container').css("transform", "translateY(0%)");

          scrlPos.lastScrlPos -= window.scrollY;

          scrlPos.hide = false;
        }
        scrlPos.scrl = false;
      }, 250);
    }
  }, 250);
});