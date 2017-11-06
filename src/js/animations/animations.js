//This file is a test file for style animations.  I will break this down into compounents and make
//this is minified js file once I get to that point.

//btn class animations

TweenMax.from(".btn", 0.5, {
  opacity:0,
  scale:0,
  ease:Bounce.easeout
});

TweenMax.staggerFrom(".btn", 2, {drawSVG:0}, 0.1);

/* Create a timeline */
  tl = new TimelineMax();

//click events

document.addEventListener("click", function(event){
  let btnClass = 'btn';
  let btnClassPrimary = 'btn-primary';
  let btnClassSecondary = 'btn-secondary';
  let expandCard = 'expandCard';

  if(event.target.classList.contains(btnClassPrimary)) {

    var btnAction = document.getElementsByClassName("btn-primary");
    tl.to(btnAction, 1, {
      paddingRight:60,
      delay:0.5,
      timeScale:0.5,
      ease:Power1.easeIn,
      repeat:1,
      yoyo:true,
      scale:1.1,
      ease:Linear.easeNone,
      onStart:onStart,
      onUpdate:onUpdate,
      onComplete:onComplete
    });

    //TweenMax.set(btnAction, {backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16)});
    //This randomly changes color

    function onStart(){

    }

    function onUpdate(){

    }

    function onComplete(){

    }

  }

  if(event.target.classList.contains(btnClassSecondary)) {

    var btnAction = document.getElementsByClassName("btn-secondary");
    TweenMax.to(btnAction, 1, {
      x:150,
      rotation:360,
      repeat:1,
      yoyo:true,
      ease:Sine.easeOut,
      //ease:SlowMo.ease.config(0.5, 8, true),
      onStart:onStart,
      onUpdate:onUpdate,
      onComplete:onComplete
    });


    function onStart(){

    }

    function onUpdate(){
      var changeColor = document.getElementsByClassName("btn-secondary");
      TweenMax.to(changeColor, 1, {
        backgroundColor: "#649dc5"
      });
    }

    function onComplete(){
      var changeColor = document.getElementsByClassName("btn-secondary");
      TweenMax.to(changeColor, 1, {backgroundColor: "#376a8e"});
    }

  }

  /*var list = document.getElementsByClassName("btn-frameless");
    for (var i = 0; i < list.length; i++) {
    list[i].setAttribute("id", "expandCard" + i);
  }*/

  if(event.target.id == expandCard) {
    var expandHover = document.getElementById("expandCard");
    TweenMax.to(expandHover, 1, {
      scale:1.5,
      ease:Linear.easeNone,
      repeat:1,
      yoyo:true,
      onStart:onStart,
      onUpdate:onUpdate,
      onComplete:onComplete
    });

    //TweenMax.set(btnAction, {backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16)});
    //This randomly changes color

    function onStart(){

    }

    function onUpdate(){

    }

    function onComplete(){

    }

  }

});

document.addEventListener("mouseover", function(event){
  let btnClass = 'btn';
  let btnClassPrimary = 'btn-primary';
  let btnClassSecondary = 'btn-secondary';
  let expandCard = 'expandCard';

    if(event.target.classList.contains(btnClassPrimary)) {

      var btnAction = document.getElementsByClassName("btn-primary");
      TweenMax.to(btnAction, 0.3, {
        scale:1.02,
        ease:Linear.easeNone,
        //repeat:1,
        //yoyo:true,
        onStart:onStart,
        onUpdate:onUpdate,
        onComplete:onComplete
      });

      //test

      //TweenMax.set(btnAction, {backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16)});
      //This randomly changes color

      function onStart(){

      }

      function onUpdate(){

      }

      function onComplete(){

      }

    }

    if(event.target.id == expandCard) {
    var expandHover = document.getElementById("expandCard");
    TweenMax.to(expandHover, 1, {
      scale:1.5,
      ease:Linear.easeNone,
      repeat:1,
      yoyo:true,
      onStart:onStart,
      onUpdate:onUpdate,
      onComplete:onComplete
    });

    //TweenMax.set(btnAction, {backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16)});
    //This randomly changes color

    function onStart(){

    }

    function onUpdate(){

    }

    function onComplete(){

    }

  }

  });

/*
function press(){
  var btn = document.getElementsByClassName("btn");
  TweenMax.to(btn, 1, {paddingRight:30, delay:0.5, timeScale:0.5, opacity:0, ease:Power1.easeIn});
}

function exit(){
  var btn = document.getElementsByClassName("btn");
   TweenMax.to(btn, 1, {paddingRight: "1em", timeScale:0.5, opacity:1});
}

function spin(){
  TweenMax.to(logo, 1, {x:150, rotation:360, width:50, repeat:5, yoyo:true});
}
*/


document.addEventListener("mouseout", function(event){
  let btnClass = 'btn';
  let btnClassPrimary = 'btn-primary';
  let btnClassSecondary = 'btn-secondary';
  let expandCard = 'expandCard';

    if(event.target.classList.contains(btnClassPrimary)) {

      var btnAction = document.getElementsByClassName("btn-primary");
      TweenMax.to(btnAction, 0.15, {
        scale:1,
        ease:Linear.easeNone,
        //repeat:1,
        //yoyo:true,
        onStart:onStart,
        onUpdate:onUpdate,
        onComplete:onComplete
      });

      //TweenMax.set(btnAction, {backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16)});
      //This randomly changes color

      function onStart(){

      }

      function onUpdate(){

      }

      function onComplete(){

      }

    }

  });

