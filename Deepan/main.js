(function() {
    'use strict'
    // your code will start here...
    console.log('main.js loaded');
    // ...and end here
    var element = document.getElementById("div2");   
    let width = 0;
    let height=0;
    var ltr;
    var ttb;
    var rtl;
    var btt;
    ltr =  setInterval(toptobootom, 1);

    function toptobootom() {
        height++;
        element.style.top = ""+height+"px";
        if (height == 750) {
            clearInterval(ttb);
            rtl = setInterval(lefttoRight, 1);
        }
    }

    function righttoleft() {
        width--;
        console.log(""+width+"px");
        element.style.left = ""+width+"px";
        if (width == 0) {
            clearInterval(rtl);
            btt = setInterval(bottomtotop, 1);
        }
    }

    function bottomtotop() {
        height--;
        element.style.top = ""+height+"px";
        if (height == 0) {
            clearInterval(btt);        
            
        }
    }
   

    function lefttoRight() {
        width++;
        // console.log(mainelement);
        // console.log(""+width+"px");
        element.style.left = ""+width+"px";
        if (width == 750) {
            clearInterval(ltr);
            ttb = setInterval(toptobootom, 1);
        }
    }

   

   

    function bottomtotop() {
        height--;
        element.style.top = ""+height+"px";
        if (height == 0) {
            clearInterval(btt);        
            
        }
    }
   }())





