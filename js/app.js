var loader =  document.querySelector('.splash');
window.addEventListener("load",function(){
  // $('#home').css({
  //   'background-position-x' : '1400px'
  // });
  loader.classList.add('disappear');
});
var fab = document.getElementById('floating');
fab.addEventListener('click',function(){
  var innnerM = document.getElementById('float-mini');
  innnerM.classList.remove('pulse');
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: false,
      direction: 'top',
      hoverEnabled : false
    });
  });
var d = new Date();
var hour = d.getHours();
var inner;
if(hour<12){
 inner = "Good Morning";
}
else if(hour>12&&hour<14){
  inner = "Good Afternoon";
}
else if(hour>14&&hour<17){
  inner = "Good Afternoon";
}
else if(hour>17&&hour<19){
  inner = "Good Evening";
}
else{
  inner = "Good Evening";
}
document.getElementById('top').innerHTML = inner;
$(window).scroll(function(){
  var value = $(window).scrollTop();
  var topval = 0-value * 1.5;
  $('#home').css({
    'background-position-x' : topval+'px'
  });
});
var swit = document.getElementById('left-check');
var floatEf = document.getElementById('floating');
var otherfloat = document.getElementById('others');
var text1 = document.getElementById('homeText');
var text2 = document.getElementById('eventstexts');
var text3 = document.getElementById('panelText');
var text4 = document.getElementById('testiText');
swit.addEventListener('click',function(){
  var lev = document.getElementById('lev');
  if(swit.checked == true){
    document.getElementById('text-swit').innerHTML="On";
    lev.classList.add("bg-switch");
    floatEf.classList.add('floating-left');
  otherfloat.classList.add('others-fab-item');
  retId(text1);
  retId(text2);
  retId(text3);
  retId(text4);
  }
  else if(swit.checked === false){
    document.getElementById('text-swit').innerHTML="Off";
    lev.classList.remove("bg-switch");
    floatEf.classList.remove('floating-left');
  otherfloat.classList.remove('others-fab-item');
  invretId(text1);
  invretId(text2);
  invretId(text3);
  invretId(text4);
  }
});
function retId(obj){
  obj.classList.add('text-left-fab');
  obj.classList.remove('white-text');
}
function invretId(obj){
  obj.classList.remove('text-left-fab');
  obj.classList.add('white-text');
}
$(document).ready(function(){
  $('.modal').modal();
  $('input#input_text, textarea#textMain').characterCounter();
  $('.sidenav').sidenav();
  $('.carousel').carousel();
  $('.parallax').parallax();
  $('#left-check').prop('checked',false);
  modal.style.visibility  = "visible";
  $('.tooltipped').tooltip();
});
$(window).click(function(){
  modal.classList.add('disappear');
});
var modal =  document.getElementById('myModal');