/**
 * 统一获取地图
 */

var MAP_STYLE_SMALL = [
  {
    "featureType": "land",
    "elementType": "all",
    "stylers": {
      "color": "#000000ff",
      "hue": "#000000"
    }
  },
  {
    "featureType": "highway",
    "elementType": "all",
    "stylers": {
      "lightness": -42,
      "saturation": -91
    }
  },
  {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
      "color": "#111111ff",
      "lightness": 1
    }
  },
  {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
      "color": "#1b1b1b"
    }
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
      "color": "#181818"
    }
  },
  {
    "featureType": "subway",
    "elementType": "geometry.stroke",
    "stylers": {
      "color": "#181818"
    }
  },
  {
    "featureType": "subway",
    "elementType": "all",
    "stylers": {
      "color": "#444444ff",
      "visibility": "off"
    }
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": {
      "color": "#313131"
    }
  },
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": {
      "color": "#8b8787"
    }
  },
  {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
      "color": "#1b1b1b"
    }
  },
  {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
      "color": "#1a1a1aff"
    }
  },
  {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
      "lightness": -65
    }
  },
  {
    "featureType": "railway",
    "elementType": "all",
    "stylers": {
      "lightness": -40
    }
  },
  {
    "featureType": "boundary",
    "elementType": "geometry",
    "stylers": {
      "color": "#8b8787",
      "weight": "1",
      "lightness": -29
    }
  },
  {
    "featureType": "building",
    "elementType": "all",
    "stylers": {
      "color": "#111111ff",
      "visibility": "on"
    }
  },
  {
    "featureType": "poilabel",
    "elementType": "all",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "subwaystation",
    "elementType": "all",
    "stylers": {
      "color": "#666666ff"
    }
  },
  {
    "featureType": "local",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "highway",
    "elementType": "all",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "manmade",
    "elementType": "all",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "district",
    "elementType": "labels",
    "stylers": {
      "visibility": "off"
    }
  },
  {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
      "color": "#111111ff"
    }
  }
];
// var MAP_CENTER_POINT = new BMap.Point(108.379257,22.801501);
// var mapArr = {};
// function getMapToDiv(divId) {
//     var map_id = ['right_top_map', 'allmap'];
//     var map = mapArr[divId];
//     if(map != null && map != undefined && map_id.indexOf(divId)>-1){
//         return map;
//     }
//     map = new BMap.Map(divId,{enableMapClick:false});
//     map.centerAndZoom(MAP_CENTER_POINT, 16);  // 初始化地图,设置中心点坐标和地图级别
//     map.setMinZoom(15);
//     map.setMaxZoom(17);
//     map.disableDoubleClickZoom();
//     map.enableScrollWheelZoom();
//     map.setMapStyle({ styleJson: MAP_STYLE_SMALL });
//     map.setCurrentCity("北京");
//     mapArr[divId] = map;
//     return map;
// }

// $(function () {
//     var mp=getMapToDiv('allmap');
//     // addMarker(map,[108.379257,22.801501],"http://lbsyun.baidu.com/jsdemo/img/fox.gif")
//     // 复杂的自定义覆盖物
//     function ComplexCustomOverlay(point, text, mouseoverText){
//       this._point = point;
//       this._text = text;
//       this._overText = mouseoverText;
//     }
//     ComplexCustomOverlay.prototype = new BMap.Overlay();
//     ComplexCustomOverlay.prototype.initialize = function(map){
//       this._map = map;
//       var div = this._div = document.createElement('div');
//       $(div).addClass('mapStyle')
//       div.style.position = "absolute";
//       $(div).append(legend_landmark('实验教学楼1号', '1.7', '0', '0'));
//       mp.getPanes().labelPane.appendChild(div);
//       return div;
//     }
//     ComplexCustomOverlay.prototype.draw = function(){
//       var map = this._map;
//       var pixel = map.pointToOverlayPixel(this._point);
//       this._div.style.left = pixel.x - 10 + "px";
//       this._div.style.top  = pixel.y - 30 + "px";
//     }
//     var txt = "银湖海岸城", mouseoverTxt = txt + " " + parseInt(Math.random() * 1000,10) + "套" ;
        
//     var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(108.379257,22.801501), "银湖海岸城",mouseoverTxt);

//     mp.addOverlay(myCompOverlay);
    
// })

function addMarker(map,point,html){
  var pt = new BMap.Point(point[0],point[1]);
  var myIcon = new BMap.Icon(html, new BMap.Size(300,127));
  var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
  map.addOverlay(marker2); 
}

// legend_landmark('实验教学楼1号', '1.7', '0', '0');
function legend_landmark(name, value, left, top) {
  var style;
  if (value <= 3) {
    style = 'bg-blue';
  } else if (value <= 6) {
    style = 'bg-yellow';
  } else if (value <= 9) {
    style = 'bg-orange';
  } else {
    style = 'bg-red';
  }
  
  var landmark_html = `
  <div class="legend-landmark font-block" style="top:` + top + `px;left:` + left + `px">
      <span class="landmark-rect ` + style + `"></span>
      <span>` + name + `</span><br/>
      <span class="font-block ` + style + `">` + value + `</span>
  </div>
`
return landmark_html
  // $('#legend').append(landmark_html);
}






