<template>
  <div id="manage_map" class="position-relative">
    <!-- icon -->
                
  <!-- 地图 -->
  <div class="xzmap"></div>
  </div>  
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
        addlandmark(id, value, p) {
          let that = this;
          // let map=this.getMapToDiv('allmap');
          function landmark(marker,  value) {
            marker.addEventListener("click", function () {
              console.info("长富宫");
            });
            this._marker = marker;
            this._point = marker.getPosition();
            this._value = value;
            this._id = id;
          }
          
          landmark.prototype = new BMap.Overlay();
          landmark.prototype.initialize = function(map) {
            this._map = map;
            var div = (this._div = document.createElement("div"));
            $(div).addClass("landmark_marker");
            div.style.position = "absolute";

            $(div).append(that.legend_landmark( this._value, this._id));
            map.getPanes().labelPane.appendChild(div);
            return div;
          };

          
            
          landmark.prototype.draw = function() {
            var map = this._map;
            var pixel = map.pointToOverlayPixel(this._point);
            this._div.style.left = pixel.x - 0 + "px";
            this._div.style.top = pixel.y - 0 + "px";
          };

          
          var marker = new landmark(new BMap.Marker(new BMap.Point(p[0], p[1])),value);
          
          
          
          
          return marker;
        },
        legend_landmark(content, id) {
          var html = `<div id="map${ id }" class="btn" data-toggle="tooltip" data-placement="top" title="${ content }"><i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-jianzhu-xian-"></i></i></div>`;
          return html;
        },
        tableDatas(){
          this.tableData.forEach(item => {
            console.log(item.pointX);
            console.log(item.pointY);
            this.mp.addOverlay(this.addlandmark(item.id,item.name,[item.pointX,item.pointY]));
            $("#map" + item.id).click(()=>{
              $('.build').hide();
              $('.floor').show();
              $('.main_all_content .main_content_table').hide();
              $('.main_all_content .main_content_bottom').hide();
              $('.plan').hide();
              $('.total').hide();
              $('.floor_wrap').show();
              $('.room_wrap').hide();
              $('.floorMap').show();
              $('.map').hide();
              this.$store.commit('buildingId',item.id);
            });
          })
        },
        DeviceMaps(){
          
        }
      },
      
      watch:{
        tableData(){
          this.mp.clearOverlays();
          if(this.route_path == '/Building_management/maps'){
            this.tableDatas()
          }
        },
        DeviceMap(){
          this.mp.clearOverlays();
          if(this.route_path == '/Equipment_management/maps'){
            this.DeviceMaps();
          }
        },
        // InspectionMap(){
        //   if(this.route_path=='/Inspection_plan/maps'){
            
        //   }
        // },
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



