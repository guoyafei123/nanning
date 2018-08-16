<template>
  <div id="manage_map" class="xzmap"></div>
</template>

<script>
    import{mapState} from "vuex"
    export default {
      data(){
        return{
          maxroom:19,
          minroom:1,
          zoom:16,
          point:[108.363609,22.815612],
          mp:Object
        }
      },

      methods:{
        getMapToDiv(divId) {
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
          var MAP_CENTER_POINT = new BMap.Point(this.point[0],this.point[1]);
          var mmapArr = {};
          var mmap_id = ['right_top_map', 'manage_map'];
          var mmap = mmapArr[divId];
          if(mmap != null && mmap != undefined && mmap_id.indexOf(divId)>-1){
              return mmap;
          }
          mmap = new BMap.Map(divId,{enableMapClick:false});
          mmap.centerAndZoom(MAP_CENTER_POINT, this.zoom);  // 初始化地图,设置中心点坐标和地图级别
          mmap.setMinZoom(this.minroom);
          mmap.setMaxZoom(this.maxroom);
          mmap.disableDoubleClickZoom();
          mmap.enableScrollWheelZoom();
          mmap.setMapStyle({ styleJson: MAP_STYLE_SMALL });
          mmap.setCurrentCity("北京");
          mmapArr[divId] = mmap;
          return mmap;
        },
        addlandmark(name,value,p){
          // console.log(2222222)
          let that=this;
          function landmark(point, name, value){
          this._point = point;
          this._name = name;
          this._value = value;
          }
          landmark.prototype = new BMap.Overlay();
          landmark.prototype.initialize = function(map){
            this._map = map;
            var div = this._div = document.createElement('div');
            $(div).addClass('landmark_marker')
            div.style.position = "absolute";

            $(div).append(that.legend_landmark(this._name, this._value));
            map.getPanes().labelPane.appendChild(div);
            return div;
          }
          landmark.prototype.draw = function(){
            var mmap = this._map;
            var pixel = mmap.pointToOverlayPixel(this._point);
            this._div.style.left = pixel.x - 0 + "px";
            this._div.style.top  = pixel.y - 0 + "px";
          }
          var marker= new landmark(new BMap.Point(p[0],p[1]), name,value);
          return marker;
        },
        addMarker(mmap,point,html){
          var pt = new BMap.Point(point[0],point[1]);
          var myIcon = new BMap.Icon(html, new BMap.Size(300,127));
          var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
          mmap.addOverlay(marker2); 
        },
        // 创建自定义marker-建筑标志和值
        legend_landmark(name, value) {
          // console.log(1111111)
          var style;
          if (value <= 1) {
            style = 'bg-blue';
          } else if (value <= 2) {
            style = 'bg-yellow';
          } else if (value <= 9) {
            style = 'bg-orange';
          } else {
            style = 'bg-red';
          }
          
          var html = `
            <div class="legend-landmark font-block" style="top:-88px;left:-20px">
                <span class="landmark-rect ` + style + `"></span>
                <span class="marker-name">` + name + `</span><br/>
                <span class="font-block ` + style + `">` + value + `</span>
            </div>
          `
        return html;
        }
      },
      
      watch:{
        tableData(){
          if(this.route_path == '/Building_management/maps'){
            this.tableData.forEach(item => {
              console.log(item.pointX);
              console.log(item.pointY);
              this.mp.addOverlay(this.addlandmark(item.name,item.status,[item.pointX,item.pointY]));
            })
          }
        },
        DeviceMap(){
          if(this.route_path == '/Equipment_management/maps'){
            this.DeviceMap.forEach(item => {
              console.log(item.pointX);
              console.log(item.pointY);
              this.mp.addOverlay(this.addlandmark(item.name,item.status,[item.pointX,item.pointY]));
            })
          }
        },
        InspectionMap(){
          if(this.route_path=='/Inspection_plan/maps'){
            
          }
        },
        route_path(){
          this.mp.clearOverlays();
        },
      },
      mounted(){
        var mapStates = this.getMapToDiv('manage_map');
        this.mp = mapStates;
        
        if (typeof module === 'object') {window.jQuery = window.$ = module.exports;};
      },
      computed:mapState([
        'tableData',
        'InspectionMap',
        'route_path',
        'DeviceMap'
      ])
    }
</script>

<style scoped>
</style>



