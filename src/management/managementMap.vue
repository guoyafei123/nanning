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
          mp:Object,
          deviceListInner:[],
          deviceListOutside:[],
          inspectionNodes:[],
          innerTrouble:[],
          outsideTrouble:[],
          iconByType:{
                    1:'icon-ranqiganying-mian-',
                    2:'icon-ganyanqi-',
                    3:'icon-wengan-',
                    4:'icon-hongwaiyanhuoganying-',
                    5:'icon-shuiyaganying-',
                    6:'icon-shineixiaohuoshuan-',
                    7:'icon-tuxiangxianshijiance-',
                    8:'icon-xiaofangshuanbaojinganniu-',
                    9:'icon-shengguangbaojingqi-',
                    10:'icon-xiaofangshuanbaojinganniu-',
                    11:'icon-xiaofangbeng-',
                    12:'icon-xiaofangyingjiguangbo-',
                    13:'icon-miehuoqi-mian-',
                    14:'icon-linpentou-',
                    15:'icon-qitimiehuoxitong-',
                    16:'icon-anquanchukou-',
                    17:'icon-xiaofangche-',
                    18:'icon-anquanchukou-',
                    19:'icon-shexiangtou-',
                    20:'icon-shuidai-',
                    21:'icon-dixiaxiaofangshuan-',
                    22:'icon-xiaofangbeng-',
                    23:'icon-xiaofangbeng-',
                    24:'icon-xiaofangbeng-',
                    25:'icon-xiaofangbeng-',
                    26:'icon-dixiaxiaofangshuan-',
                    27:'icon-xiaofangbeng-',
                    28:'icon-xiaofangbeng-',
                    29:'icon-yeweiji-',
                    30:'icon-xiaofangbeng-',
                    31:'icon-xiaofangbeng-',
                    32:'icon-miehuoqi-mian-',
                    33:'icon-miehuoqi-mian-',
                    34:'icon-shoudongbaojinganniu-',
                    35:'icon-down',
                    36:'icon-flag-checkered',
                    37:'icon-jianzhu-xian-'
                }
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
          var mmap = mmapArr[divId];
          if(mmap != null && mmap != undefined){
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
        addlandmark(id, value, p,type) {
          let that = this;
          // let map=this.getMapToDiv('allmap');
          function landmark(marker,  value) {
            this._marker = marker;
            this._point = marker.getPosition();
            this._value = value;
            this._id = id;
            this._type = type ;
          }
          
          landmark.prototype = new BMap.Overlay();
          landmark.prototype.initialize = function(map) {
            this._map = map;
            var div = (this._div = document.createElement("div"));
            $(div).addClass("landmark_marker");
            div.style.position = "absolute";

            $(div).append(that.legend_landmark( this._value, this._id,this._type));
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
        legend_landmark(content, id,type) {
          var html = `<div id="map${ id }" style="position:absolute;top:-35px;left:-15px;" data-toggle="tooltip" data-placement="top" title="${ content }"><i class="icon iconfont icon-shuidi-"><i class="icon iconfont ${ this.iconByType[type] }"></i></i></div>`;
          return html;
        },
        addlandmarker(id, value, p) {
          let that = this;
          // let map=this.getMapToDiv('allmap');
          function landmark(marker,value) {
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

            $(div).append(that.legend_landmarker( this._value, this._id));
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
        legend_landmarker(content,id) {
          if(content.innerCount){
            var html = `<div id="map${ id }" style="position:absolute;top:-35px;left:-15px;" data-toggle="tooltip" data-placement="top" title="${ content.buildingName }${ content.innerCount }个设备"><i class="icon iconfont icon-shuidi-"><span>${ content.innerCount }</span></i></div>`;
          }else if(content.count){
            var html = `<div id="map${ id }" style="position:absolute;top:-35px;left:-15px;" data-toggle="tooltip" data-placement="top" title="${ content.buildingName }${ content.count }个设备"><i class="icon iconfont icon-shuidi-"><span>${ content.count }</span></i></div>`;
          }
            
          return html;
        },
        //设备marker点
        addlandmarkerType(id, value, p,type) {
          let that = this;
          // let map=this.getMapToDiv('allmap');
          function landmark(marker,value) {
            this._marker = marker;
            this._point = marker.getPosition();
            this._value = value;
            this._id = id;
            this._type = type ;
          }
          
          landmark.prototype = new BMap.Overlay();
          landmark.prototype.initialize = function(map) {
            this._map = map;
            var div = (this._div = document.createElement("div"));
            $(div).addClass("landmark_marker");
            div.style.position = "absolute";

            $(div).append(that.legend_landmarkerType( this._id , this._value, this._type));
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
        legend_landmarkerType(id,content,type) {
          var html = `<div id="map${ id }" style="position:absolute;top:-35px;left:-15px;" data-toggle="tooltip" data-placement="top" title="${ content }"><i class="icon iconfont icon-shuidi-"><i class="icon iconfont ${ this.iconByType[type] }"></i></i></div>`;
          
          return html;
        },
        addlandmarkDanger(id, value, p) {
          let that = this;
          // let map=this.getMapToDiv('allmap');
          function landmark(marker,value) {
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

            $(div).append(that.legend_landmarkDanger( this._value, this._id));
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
        legend_landmarkDanger(content,id) {
          
          var html = `<div id="map${ id }" style="position:absolute;top:-35px;left:-15px;" data-toggle="tooltip" data-placement="top" title="${ content.name }"><i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-weixianpin-xian-"></i></i></div>`;
          
          return html;
        },
        addline(array, type) {
          var pois = [];
          for(var i = 0; i < array.length; i++) {
            pois.push(new BMap.Point(array[i][0], array[i][1]));
          }
          var fillcolor = "";
          if(type == 1) {
            fillcolor = "#bad616";
          } else if(type == 2) {
            fillcolor = "#c69e00";
          } else if(type == 3) {
            fillcolor = "#ff7800";
          } else {
            fillcolor = "#ccc";
          }
          var polyline = new BMap.Polyline(pois, {
            enableEditing: false, //是否启用线编辑，默认为false
            enableClicking: true, //是否响应点击事件，默认为true
            // icons:[icons],
            strokeWeight: "2", //折线的宽度，以像素为单位
            strokeOpacity: 1, //折线的透明度，取值范围0 - 1
            strokeColor: fillcolor //折线颜色
          });
          return polyline;
        },
        tableDatas(){
          this.tableData.forEach(item => {
            //console.log(item.pointX);
            //console.log(item.pointY);
            this.mp.addOverlay(this.addlandmark(item.id,item.name,[item.pointX,item.pointY],37));
            this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
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
          this.$fetch("/api/device/queryDeviceOfBuildingByGroup",{
            unitId:this.Unit
          }).then(res=>{
            console.log(res.data.deviceListInner);
            this.deviceListInner = res.data.deviceListInner ;
            this.deviceListInner.forEach(item=>{
              this.mp.addOverlay(this.addlandmarker(item.buildingId,item,[item.pointX,item.pointY]));
              this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
              $(document).on('click', "#map"+item.buildingId,()=>{
                $('.floorMap').show();
                $('.map').hide();
                // console.log(item.buildingId)
                this.$emit('childByValue', item)
              });
            })
            this.deviceListOutside = res.data.deviceListOutside ;
            console.log(this.deviceListOutside);
            this.deviceListOutside.forEach(item=>{
              this.mp.addOverlay(this.addlandmarkerType(item.id,item.name,[item.pointX,item.pointY],item.deviceTypeId));
              // this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
              $(document).on('click', "#map"+item.id,()=>{
                $('.plan').show();        
                $('.total').hide();
                $('.mapTable').hide();
                $('.floorMap').hide();
                $('.map').show();
                this.$store.commit('deviceId',item.id);
              });
            })
          })
        },
        Danger(){
          this.$fetch("/api/trouble/queryUnsolvedTroubleByGroup",{
            unitId:this.dangerUnit,
            type:5
          }).then(res=>{
            console.log(res.data.innerTrouble);
            this.innerTrouble = res.data.innerTrouble ;
            this.innerTrouble.forEach(item=>{
              this.mp.addOverlay(this.addlandmarker(item.buildingId,item,[item.pointX,item.pointY]));
              this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
              $(document).on('click', "#map"+item.buildingId,()=>{
                $('.floorMap').show();
                $('.map').hide();
                this.$emit('childByValue', item)
              });
            })
            this.outsideTrouble = res.data.outsideTrouble ;
            console.log(this.outsideTrouble);
            this.outsideTrouble.forEach(item=>{
              this.mp.addOverlay(this.addlandmarkerType(item.id,item.name,[item.pointX,item.pointY],item.deviceTypeId));
              $(document).on('click', "#map"+item.id,()=>{
                $('.plan').show();        
                $('.total').hide();
                $('.mapTable').hide();
                $('.floorMap').hide();
                $('.map').show();
                this.$store.commit('dangerId',item.id);
              });
            })
          })
        },
        inspection(){
          // console.log(this.inspectionId)
          this.$fetch("/api/admin/inspection/queryInspectionNodeByPlanId",{
            planId:this.inspectionId
          }).then(res=>{
            console.log(res.data.inspectionPlan.inspectionNodes);
            this.inspectionNodes = res.data.inspectionPlan.inspectionNodes ;
            var linearray = [];

            this.inspectionNodes.forEach(item=>{
              linearray.push([item.pointX,item.pointY]);
              // this.mp.addOverlay(this.addlandmarker(item.id,item,[item.pointX,item.pointY]));
              if(item.buildingId == 0 && item.buildingId == '0'){
                this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
                // console.log(item.sorting)
                if(item.sorting == 0){
                  this.mp.addOverlay(this.addlandmarkerType(item.id,item.deviceName,[item.pointX,item.pointY],35));
                }else if(item.sorting == this.inspectionNodes.length-1){
                  this.mp.addOverlay(this.addlandmarkerType(item.id,item.deviceName,[item.pointX,item.pointY],36));
                }else{
                  this.mp.addOverlay(this.addlandmarkerType(item.id,item.deviceName,[item.pointX,item.pointY],item.deviceTypeId));
                }
              }else{ 
                 console.log(this.inspectionNodes.length-1)
                this.mp.setCenter(new BMap.Point(item.pointX, item.pointY));
                if(item.sorting == 0){
                  this.mp.addOverlay(this.addlandmark(item.id,item.buildingName,[item.pointX,item.pointY],35));
                }else if(item.sorting >= this.inspectionNodes.length-1){
                  this.mp.addOverlay(this.addlandmark(item.id,item.buildingName,[item.pointX,item.pointY],36));
                }else{
                  this.mp.addOverlay(this.addlandmark(item.id,item.buildingName,[item.pointX,item.pointY],37));
                }
              }
            })
            // console.log(linearray)
				    this.mp.addOverlay(this.addline(linearray, 1));
          })
        },
        showInfo(e){
          this.mp.clearOverlays();
          // alert(e.point.lng + ", " + e.point.lat);
          this.$store.commit('buildPoint',[e.point.lng,e.point.lat])
          this.mp.addOverlay(this.addlandmark('','',[e.point.lng,e.point.lat]));
        },
        showInfoDevice(e){
          this.mp.clearOverlays();
          // alert(e.point.lng + ", " + e.point.lat);
          this.$store.commit('buildPoint',[e.point.lng,e.point.lat]);
          this.mp.addOverlay(this.addlandmarkerType('','',[e.point.lng,e.point.lat],this.DeviceList));
        },
        showInfoDanger(e){
          this.mp.clearOverlays();
          // alert(e.point.lng + ", " + e.point.lat);
          this.$store.commit('buildPoint',[e.point.lng,e.point.lat]);
          this.mp.addOverlay(this.addlandmarkDanger('','',[e.point.lng,e.point.lat]));
        },
      },
      
      watch:{
        tableData(){
          this.mp.clearOverlays();
          if(this.$route.path == '/Building_management/maps'){
            this.tableDatas();
          }
        },
        Unit(){
          this.mp.clearOverlays();
          if(this.$route.path == '/Equipment_management/maps'){
            this.DeviceMaps();
          }
        },
        dangerUnit(){
          this.mp.clearOverlays();
          if(this.$route.path == '/Dangerous_goods_management/maps'){
            this.Danger();
          }
        },
        inspectionId(){
          this.mp.clearOverlays();
          if(this.$route.path == '/Inspection_plan/maps'){
            this.inspection();
          }
        },
        currentPageDevice(){
          this.mp.clearOverlays();
          if(this.$route.path == '/Equipment_management/maps'){
            this.DeviceMaps();
          }
        }
      },
      mounted(){
        var mapStates = this.getMapToDiv('manage_map');
        this.mp = mapStates;
	      if(this.$route.path == '/Building_management/list'){
          this.mp.addEventListener("click", this.showInfo);
        }
        if(this.$route.path == '/Unit_management/list'){
          this.mp.addEventListener("click", this.showInfo);
        }
        if(this.$route.path == '/Equipment_management/list'){
          this.mp.addEventListener("click", this.showInfoDevice);
        }
        if(this.$route.path == '/Dangerous_goods_management/list'){
          this.mp.addEventListener("click", this.showInfoDanger);
        }
        if(this.$route.path == '/Equipment_management/maps'){
          this.mp.clearOverlays();
          this.DeviceMaps();
        }
        if(this.$route.path == '/Dangerous_goods_management/maps'){
          this.mp.clearOverlays();
          this.Danger();
        }
        if(this.$route.path == '/Inspection_plan/maps'){
          this.mp.clearOverlays();
          this.inspection();
        }
        this.$store.commit('iconByType',this.iconByType)
        if (typeof module === 'object') {window.jQuery = window.$ = module.exports;};
      },
      computed:mapState([
        'tableData',
        'InspectionMap',
        'buildPoint',
        'Unit',
        'DeviceList',
        'inspectionId',
        'dangerUnit',
        'currentPageDevice'
      ])
    }
</script>

<style scoped>
</style>



