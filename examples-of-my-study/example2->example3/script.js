jQuery(function() {
  const scrlPos = {
    scrl: false,
    fixedPos: 0,
    hide: false,
    lastScrlPos: 100
  };

  window.addEventListener('scroll', () => {
    scrlPos.scrl = true;
  });

	setInterval(function() {
		if (scrlPos.scrl) {
			console.log("scrolled!!!");
      

      console.log(scrlPos.lastScrlPos, "+=", window.scrollY*0.6);
      scrlPos.fixedPos += 1;
      if( window.scrollY > scrlPos.lastScrlPos && !scrlPos.hide) {
        $('.container').css("transform", "translateY(-100%)");

        // scrlPos.lastScrlPos += 10;
        scrlPos.lastScrlPos += window.scrollY*0.25;

        scrlPos.hide = true;
      }
      
      if( window.scrollY < scrlPos.lastScrlPos && scrlPos.hide ) {
        $('.container').css("transform", "translateY(0%)");

        scrlPos.lastScrlPos -= window.scrollY*0.5;

        scrlPos.hide = false;
      }
      // if( window.scrollY < scrlPos.lastScrlPos && !scrlPos.hide) {
      //   $('.container').css("transform", "translateY(-100%)");

      //   scrlPos.lastScrlPos = scrlPos.lastScrlPos + window.scrollY;

      //   scrlPos.hide = true;
      // }

      

			scrlPos.scrl = false;
		}
	}, 250);


  // $('.container').css("transform", "translateY(-100%)");
});

























// console.log(window.scrollY, scrlPos.fixedPos, scrlPos.lastScrlPos);
//       scrlPos.fixedPos += 1;
//       if( window.scrollY > scrlPos.lastScrlPos && !scrlPos.hide) {
//         $('.container').css("transform", "translateY(-100%)");

//         scrlPos.lastScrlPos = scrlPos.lastScrlPos * 2;

//         scrlPos.hide = true;
//       }
      
//       if( window.scrollY > scrlPos.lastScrlPos && scrlPos.hide) {
//         $('.container').css("transform", "translateY(0%)");
        

//         scrlPos.hide = false;
//       }

// console.log("scrolled!!!");
      

//       console.log(scrlPos.fixedPos, scrlPos.lastScrlPos);
//       scrlPos.fixedPos += 1;
//       if( window.scrollY > scrlPos.lastScrlPos && scrlPos.fixedPos > 10 && !scrlPos.hide){
//         $('.container').css("transform", "translateY(-100%)");
//         scrlPos.fixedPos = 0;

//         scrlPos.lastScrlPos = scrlPos.lastScrlPos + window.scrollY;

//         scrlPos.hide = true;
//       } else if (window.scrollY < scrlPos.lastScrlPos && scrlPos.fixedPos > 10 && scrlPos.hide) {
//         $('.container').css("transform", "translateY(0%)");
        

//         scrlPos.hide = false;
//       }