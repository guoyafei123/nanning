/**
 * 统一获取地图
 */
var MAP_CENTER_POINT = new BMap.Point(108.379257,22.801501);
var mapArr = {};
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

function getMapToDiv(divId) {
    var map_id = ['right_top_map', 'allmap'];
    var map = mapArr[divId];
    if(map != null && map != undefined && map_id.indexOf(divId)>-1){
        return map;
    }
    map = new BMap.Map(divId,{enableMapClick:false});
    map.centerAndZoom(MAP_CENTER_POINT, 16);  // 初始化地图,设置中心点坐标和地图级别
    map.setMinZoom(15);
    map.setMaxZoom(17);
    map.disableDoubleClickZoom();
    map.enableScrollWheelZoom();
    map.setMapStyle({ styleJson: MAP_STYLE_SMALL });
    map.setCurrentCity("北京");
    mapArr[divId] = map;
    return map;
}

$(function () {
    getMapToDiv('allmap');
})


