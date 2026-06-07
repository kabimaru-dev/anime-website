jQuery(function(){
  const scrollPos = {
    fixNum: 0,
    scrolled: false
  };

  $(window).scroll(function(event) {
    scrollPos.scrolled = true;
  });

  setInterval(function() {
    if(scrollPos.scrolled){

      if( (window.scrollY > (scrollPos.fixNum + 1000)) && window.scrollY < 1000  ){
        console.log(Math.round(window.scrollY), ">", (scrollPos.fixNum + 1000));
        $("div.container").css("transform","translateY(-100%)");
        scrollPos.fixNum = scrollPos.fixNum + 1000;
      } else if ( window.scrollY < (scrollPos.fixNum + 1000) ) {
        console.log(Math.round(window.scrollY), "<", (scrollPos.fixNum + 1000));
        $("div.container").css("transform","translateY(0%)");
        scrollPos.fixNum = scrollPos.fixNum + 0;
      }
    }
    

    
    // if(scrollPos.scrolled && window.scrollY > 500) {
    //   $("div.container").css("transform","translateY(-100%)");
    // } else if(scrollPos.scrolled && window.scrollY < 500) {
    //   $("div.container").css("transform","translateY(0%)");
    // } 
    
    // if(scrollPos.scrolled && window.scrollY > 1000) {
    //   $("div.container").css("transform","translateY(-100%)");
    // } else if(scrollPos.scrolled && window.scrollY < 1000) {
    //   $("div.container").css("transform","translateY(0%)");
    // }

  }, 2500);

  

  

  // $(window).scroll(function(event) {
	// 	scrollPos.scrolled = true;
  //   $("div.container").css("transform","translateY(0%)");
	// });

	// setInterval(function() {
	// 	if(scrollPos.scrolled) {
  //     console.log('scrolling!!!', scrollPos.fixNum);
  //     scrollPos.scrolled = false;
  //     $("div.container").css("transform","translateY(-100%)");
  //   } else {
  //     // console.log('scrolling!!!', scrollPos.fixNum);
  //     // scrollPos.scrolled = true;
  //     // $("div.container").css("transform","translateY(-100%)");
  //   }
	// }, 1000);



  // $(this).scrollTop(function(event) {
  //   console.log('scrollTop');
  // });

  // window.addEventListener('scroll', func1);

  // async function func1(){
  //   // console.log(scrollPos.fixNum);
    
  //   if(window.scrollY  >  scrollPos.fixNum){
  //     await new Promise(r => setTimeout(r, 3000));
  //     if(scrollPos.scrolled == false && window.scrollY  >  scrollPos.fixNum){
  //       $("div.container").css("transform","translateY(-100%)");
  //     }
  //   } 
    
    
  //   if(window.scrollY  <  scrollPos.fixNum){
  //     await new Promise(r => setTimeout(r, 3000));
  //     if(scrollPos.scrolled == false && window.scrollY  <  scrollPos.fixNum){
  //       $("div.container").css("transform","translateY(0%)");
  //     }
  //   }

  //   // if(scrollPos.scrolled == false && window.scrollY  >  scrollPos.fixNum){
  //   //   $("div.container").css("transform","translateY(-100%)");
  //   //   await new Promise(r => setTimeout(r, 3000));
      
  //   //   scrollPos.scrolled = true;
  //   // } else if(scrollPos.scrolled == true && window.scrollY  <  scrollPos.fixNum){
  //   //   $("div.container").css("transform","translateY(0%)");
  //   //   await new Promise(r => setTimeout(r, 3000));

  //   //   scrollPos.scrolled = false;
  //   // } 
    
    
  //   // if (Math.round(window.scrollY) < scrollPos.fixNum) {
  //   //   $("div.container").css("transform","translateY(0%)");
  //   console.log(Math.round(window.scrollY), "<", scrollPos.fixNum);
  //   //   scrollPos.fixNum -= 100;
  //   // }
  // }
});