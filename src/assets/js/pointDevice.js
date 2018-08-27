var JPos = {};
(function($){
	$.$getAbsPos = function(p){
		var _x = 0;
		var _y = 0;
		while(p.offsetParent){
				_x += p.offsetLeft;
				_y += p.offsetTop;
				p = p.offsetParent;
        }
		_x += p.offsetLeft;
		_y += p.offsetTop;
		return {x:_x,y:_y};
	};
	
	$.$getMousePos = function(evt){
		var _x,_y;
		evt = evt || window.event;
		if(evt.pageX || evt.pageY){
			_x = evt.pageX;
			_y = evt.pageY;
		}else if(evt.clientX || evt.clientY){
			_x = evt.clientX + document.body.scrollLeft - document.body.clientLeft;
			_y = evt.clientY + document.body.scrollTop - document.body.clientTop;
		}else{
			return $.$getAbsPos(evt.target);	
		}
		return {x:_x,y:_y};
	}
})(JPos);
 
export function vControl(pChoice,event){
    var el = event.currentTarget;
    // console.log($(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[0]);//x轴的缩放比例
    // console.log($(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[3]);//y轴的缩放比例
    var matrixX = $(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[0];
    var matrixY = $(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[3];
    var matrixW = $(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4];
    var matrixH = $(el.offsetParent).css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
    var fjwidth = $('#imgPic').width();
    var fjheight = $('#imgPic').height();
    var left = $('#imgPic').offset().left;
    var offsetParent = $('#imgPic').offsetParent().offset().left;
    var LeftPoint = left - offsetParent ;
    // console.log(left);
    // console.log(offsetParent)
	switch(pChoice){
		case "GETMOUSEPOSINPIC":
            var mPos = JPos.$getMousePos();
            var iPos = JPos.$getAbsPos(el);
            if(matrixW < 0){
                window.leftRate = (mPos.x - iPos.x + Math.abs(matrixW)) / (fjwidth * matrixX) ;
                window.pointLeft = (mPos.x - iPos.x - Math.abs(matrixW)) + LeftPoint  ;
            }else{
                window.leftRate = (mPos.x - iPos.x - Math.abs(matrixW)) / (fjwidth * matrixX) ;
                window.pointLeft = (mPos.x - iPos.x - Math.abs(matrixW))  ;
               
            }
            window.topRate = (mPos.y - iPos.y - matrixH) / (fjheight * matrixY) ;
            window.pointTop =  mPos.y - iPos.y  ;
            console.log(window.pointTop)
			break;
    }
}

//添加报警设备
export function setPoint(type, divid) {
    $('#'+divid).css("top",window.pointTop - 18);
    $('#'+divid).css("left",window.pointLeft - 18);
    $('#'+divid).html('<i class="icon iconfont icon-shuidi-"><i class="icon iconfont '+type+'"></i></i>');
    $('#'+divid).css("position","absolute");
  }
  

//绘制报警设备
export function setPointList(xRate,yRate,type, divid) {
	var fjwidth = $('#imgPic').width();
    var fjheight = $('#imgPic').height();
    var left = $('#imgPic').offset().left;
    var offsetParent = $('#imgPic').offsetParent().offset().left;
    var LeftPoint = left - offsetParent ;
    $('#'+divid).css("top",yRate * fjheight - 18);
    $('#'+divid).css("left",xRate * fjwidth + LeftPoint - 18);
    $('#'+divid).html('<i class="icon iconfont icon-shuidi-"><i class="icon iconfont '+type+'"></i></i>');
    $('#'+divid).css("position","absolute");
  }
  