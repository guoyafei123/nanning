
// export  function getTopLeftRate(){
//   var topLeftRate = {};
//   var fjtop=$('#imgPic').offset().top;
//   var fjleft=$('#imgPic').offset().left;
//   var fjwidth = $('#imgPic').width();
//   var fjheight = $('#imgPic').height();
//   var msLoc = getMouseCurentTopLeft();
//   var topRate = (msLoc.top - fjtop)/fjheight;
//   var leftRate = (msLoc.left - fjleft)/fjwidth;
//   topLeftRate.topRate = topRate;
//   topLeftRate.leftRate = leftRate;
// 	alert("topRate:" + topRate + ",leftRate:" +  leftRate);
//   return topLeftRate;
// }

// function getMouseCurentTopLeft(event){
//   var topleft = {};
//   event = EventUtil.getEvent(event);
//   var pageX = event.pageX;
//   var pageY = event.pageY;
//   if(pageX==undefined){
//     pageX=event.clientX+document.body.scrollLeft||document.documentElement.scrollLeft;
//   }
//   if(pageY==undefined){
//     pageY = event.clientY+document.body.scrollTop||document.documentElement.scrollTop;
//   }
//   topleft.top = pageY;
//   topleft.left = pageX;
//   return topleft;
// }
// var EventUtil = {
//   addHandler:function(elem,type,handler){
//     if(elem.addEventListener)
//     {
//       elem.addEventListener(type,handler,false);
//     }else if(elem.attachEvent)
//     {
//       elem.attachEvent("on"+type,handler);
//     }else
//     {
//       elem["on"+type]=handler;
//     }
//   },
//   removeHandler:function(elem,type,handler){
//     if(elem.removeEventListener)
//     {
//       elem.removeEventListener(type,handler,false);
//     }else if(elem.detachEvent)
//     {
//       elem.detachEvent("on"+type,handler);
//     }else
//     {
//       elem["on"+type]=null;
//     }
//   },
//   getEvent:function(event){
//     return event?event:window.event;
//   },
//   getTarget:function(event){
//     return event.target||event.srcElement;
//   },
//   preventDefault:function(event){
//     if(event,preventDefault){
//       event.preventDefault();
//     }else{
//       event.returnValue = false;
//     }
//   },
//   stopPropagation:function(event){
//     if(event.stopPropagation){
//       event.stopPropagation();
//     }else{
//       event.cancelBubble=true;
//     }
//   }

// };


//绘制报警设备
export function setPoint(xrate, yrate, type, divid) {
  var piontWidth = $('#' + divid).width() / 16;
  var fjtop = $('#imgPic').offset().top;
  var fjleft = $('#imgPic').offset().left;
  var fjwidth = $('#imgPic').width();
  var fjheight = $('#imgPic').height();
  var pointTop = fjtop + fjheight * yrate - piontWidth * 8 + fjheight / 2.5;
  var pointLeft = fjleft + fjwidth * xrate - piontWidth * 8 - fjwidth;
  $('#'+divid).css("top",pointTop);
  $('#'+divid).css("left",pointLeft);
  $('#'+divid).html('<i class="icon iconfont icon-shuidi-"><i class="icon iconfont '+type+'"></i></i>');
  $('#'+divid).css("position","absolute");
}


