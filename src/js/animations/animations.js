//This file is a test file for style animations.  I will break this down into compounents and make
//this is minified js file once I get to that point.

//btn class animations

document.addEventListener("click", function(event){
  let btnClass = 'btn';
  let btnClassPrimary = 'btn-primary';
  let btnClassSecondary = 'btn-secondary';

  if(event.target.classList.contains(btnClassPrimary)) {

    var btnAction = document.getElementsByClassName("btn-primary");
    TweenMax.to(btnAction, 1, {
      paddingRight:60,
      delay:0.5,
      timeScale:0.5,
      ease:Power1.easeIn,
      repeat:1,
      yoyo:true,
      onStart:onStart,
      onUpdate:onUpdate,
      onComplete:onComplete
    });

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
