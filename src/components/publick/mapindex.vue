<template>
	<div class="mmp">
		<div id="mapindex" class="xzmap"></div>
	</div>
	
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      getunitid: null,
      queryUnit: {
        unitId: null
      },
      maxroom: 19,
      minroom: 14,
      zoom: 16,
      point: [110.574008, 27.906355],
      mp: Object,
      alarms: Object,
      listenerScale: 500,
      alarmsArray: [],
      troubleArray: [],
      routepath: "",
      scale: {
        19: 20,
        18: 50,
        17: 100,
        16: 200,
        15: 400,
        14: 1000,
        13: 2000,
        12: 5000,
        11: 10000,
        10: 20000,
        9: 25000,
        8: 50000,
        7: 100000,
        6: 200000,
        5: 500000,
        4: 1000000,
        3: 2000000
      },
      alarmsize: 500,
      maps: "",

	  aleamAndtroubleInfos: Object,
    };
  },

  methods: {
    getMapToDiv(divId) {
				var MAP_STYLE_SMALL = [{
						featureType: "land",
						elementType: "all",
						stylers: {
							color: "#000000ff",
							hue: "#000000"
						}
					},
					{
						featureType: "highway",
						elementType: "all",
						stylers: {
							lightness: -42,
							saturation: -91
						}
					},
					{
						featureType: "arterial",
						elementType: "geometry",
						stylers: {
							color: "#111111ff",
							lightness: 1
						}
					},
					{
						featureType: "green",
						elementType: "geometry",
						stylers: {
							color: "#1b1b1b"
						}
					},
					{
						featureType: "water",
						elementType: "geometry",
						stylers: {
							color: "#181818"
						}
					},
					{
						featureType: "subway",
						elementType: "geometry.stroke",
						stylers: {
							color: "#181818"
						}
					},
					{
						featureType: "subway",
						elementType: "all",
						stylers: {
							color: "#444444ff",
							visibility: "off"
						}
					},
					{
						featureType: "all",
						elementType: "labels.text.stroke",
						stylers: {
							color: "#313131"
						}
					},
					{
						featureType: "all",
						elementType: "labels.text.fill",
						stylers: {
							color: "#8b8787"
						}
					},
					{
						featureType: "manmade",
						elementType: "geometry",
						stylers: {
							color: "#1b1b1b"
						}
					},
					{
						featureType: "local",
						elementType: "geometry",
						stylers: {
							color: "#1a1a1aff"
						}
					},
					{
						featureType: "subway",
						elementType: "geometry",
						stylers: {
							lightness: -65
						}
					},
					{
						featureType: "railway",
						elementType: "all",
						stylers: {
							lightness: -40
						}
					},
					{
						featureType: "boundary",
						elementType: "geometry",
						stylers: {
							color: "#8b8787",
							weight: "1",
							lightness: -29
						}
					},
					{
						featureType: "building",
						elementType: "all",
						stylers: {
							color: "#111111ff",
							visibility: "on"
						}
					},
					{
						featureType: "poilabel",
						elementType: "all",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "subwaystation",
						elementType: "all",
						stylers: {
							color: "#666666ff"
						}
					},
					{
						featureType: "local",
						elementType: "labels",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "arterial",
						elementType: "labels",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "highway",
						elementType: "all",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "manmade",
						elementType: "all",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "town",
						elementType: "labels",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "district",
						elementType: "labels",
						stylers: {
							visibility: "off"
						}
					},
					{
						featureType: "railway",
						elementType: "geometry",
						stylers: {
							color: "#111111ff"
						}
					}
				];
				var MAP_CENTER_POINT = new BMap.Point(this.point[0], this.point[1]);
				var mapArr = {};
				var map_id = ["right_top_map", "allmap"];
				var map = mapArr[divId];
				if(map != null && map != undefined && map_id.indexOf(divId) > -1) {
					return map;
				}
				map = new BMap.Map(divId, {
					enableMapClick: false
				});
				map.centerAndZoom(MAP_CENTER_POINT, this.zoom); // 初始化地图,设置中心点坐标和地图级别
				map.setMinZoom(this.minroom);
				map.setMaxZoom(this.maxroom);
				map.disableDoubleClickZoom();
				map.enableScrollWheelZoom();
				map.setMapStyle({
					styleJson: MAP_STYLE_SMALL
				});
				map.setCurrentCity("北京");
				mapArr[divId] = map;
				return map;
			},

			getunitlist() {
				this.$fetch("/api/unit/queryUnit")
				.then(response => {
					if(response) {
						var unitlist=response.data.unitList;
						unitlist.forEach(element => {
							var a=element.pointX;
							var b=element.pointY;
							this.mp.addOverlay(
								this.addlandmark(element.name, "1", [a, b])
							);
						});
					}
				})
				.then(err => {
				});
			},

			getbuildlist() {
				this.$fetch("/api/building/selectNode",{unitId:null})
				.then(response => {
					if(response) {
						var buildlist=response.data.list;
						buildlist.forEach(element => {
							var a=element.pointX;
							var b=element.pointY;
							this.mp.addOverlay(
								this.addpeople('', "3", [a,b],element.name)
							);
						});
					}
				})
				.then(err => {
				});
			},

			getunitidbyheater(unitid){
				if(unitid != null && unitid != 0){
					this.queryUnit.unitId = this.unitid;
					this.$fetch("/api/unit/queryById", this.queryUnit)
					.then(response => {
						if(response) {
							if(response.data.unit.pointX != 0 && response.data.unit.pointY != 0) {
								sessionStorage.unitpointX=response.data.unit.pointX;
								sessionStorage.unitpointY=response.data.unit.pointY;
								this.mp.setCenter(new BMap.Point(response.data.unit.pointX, response.data.unit.pointY));
							}
						}
					})
					.then(err => {
					});
				}else{
					this.mp.setCenter(new BMap.Point(108.335801, 22.733686));
				}
			},

			toname(element){
				var a,b,c,d,name;
				a=element.unitName==null ? '' :element.unitName;
				b=element.buildingName==null ? '' :element.buildingName;
				c=element.floorNumber==null ? '' :element.floorNumber+'层';
				d=element.roomNumber==null ? '' :element.roomNumber;
				name=a+' '+b+' '+c+' '+d;
				return name;
			},
			toalarmtype(element){
				var a;
				if(element.eventLevel==0){
					a=3;
				}else if(element.eventLevel==1){
					a=1;
				}else if(element.eventLevel==2){
					a=2;
				}
				return a;
			},

			addlandmark(name, value, p) {
				let that = this;
				function landmark(point, name, value) {
					this._point = point;
					this._name = name;
					this._value = value;
				}
				landmark.prototype = new BMap.Overlay();
				landmark.prototype.initialize = function(map) {
					this._map = map;
					var div = (this._div = document.createElement("div"));
					$(div).addClass("landmark_marker");
					div.style.position = "absolute";

					$(div).append(that.legend_landmark(this._name, this._value));
					map.getPanes().labelPane.appendChild(div);
					return div;
				};
				landmark.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				};
				var marker = new landmark(new BMap.Point(p[0], p[1]), name, value);
				
				return marker;
			},
			addpeople(img, value, p,name) {
				let that = this;
				function people(point, img, value,name) {
					this._point = point;
					this._img = img;
					this._value = value;
					this._name = name;
				}
				people.prototype = new BMap.Overlay();
				people.prototype.initialize = function(map) {
					this._map = map;
					var div = (this._div = document.createElement("div"));
					$(div).addClass("landmark_marker");
					div.style.position = "absolute";

					$(div).append(that.legend_people(this._img, this._value,this._name));
					map.getPanes().labelPane.appendChild(div);
					return div;
				};
				people.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				};
				var marker = new people(new BMap.Point(p[0], p[1]), img, value,name);
				return marker;
			},
			addalarm(img, value, size, p,type) {
				let that = this;
				function alarm(point, img, value, size) {
					this._point = point;
					this._img = img;
					this._value = value;
					this._size = size;
					this._type=type;
				}
				alarm.prototype = new BMap.Overlay();
				alarm.prototype.initialize = function(map) {
					this._map = map;
					var div = (this._div = document.createElement("div"));
					$(div).addClass("landmark_marker");
					div.style.position = "absolute";
					$(div).append(that.legend_alarm(this._img, this._value, this._size,this._type));

					map.getPanes().labelPane.appendChild(div);
					return div;
				};
				alarm.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				};
				var l = size * 0.54;
				var marker = new alarm(new BMap.Point(p[0], p[1]), img, value, l,type);
				var circle = new BMap.Circle(new BMap.Point(p[0], p[1]), 500, {});
				var fillcolor = "#bad616";
				if(value <= 2) {
					fillcolor = "#bad616";
				} else if(value <= 3) {
					fillcolor = "#c69e00";
				} else if(value <= 4) {
					fillcolor = "#ff7800";
				} else {
					fillcolor = "#f13131";
				}

				circle.setStrokeStyle("dashed");
				circle.setFillColor("rgba(0,0,0,0 )");
				circle.setStrokeWeight(1);
				circle.setStrokeColor(fillcolor);
				return [marker, circle];
			},

			// 创建百度地图api 默认markeer
			addMarker(map, point, html) {
				var pt = new BMap.Point(point[0], point[1]);
				var myIcon = new BMap.Icon(html, new BMap.Size(300, 127));
				var marker2 = new BMap.Marker(pt, {
					icon: myIcon
				}); // 创建标注
				map.addOverlay(marker2);
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
			// 创建自定义marker-建筑标志和值
			legend_landmark(name, value) {
				var style;
				if(value <= 1) {
					style = "bg-blue";
				} else if(value <= 2) {
					style = "bg-yellow";
				} else if(value <= 9) {
					style = "bg-orange";
				} else {
					style = "bg-red";
				}

				var html =
					`
					<div   class="legend-landmark font-block" style="top:-88px;left:-20px">
						<span class="landmark-rect ` +
							style +
							`"></span>
						<span class="marker-name">` +
							name +
							`</span><br/>
						<span class="font-block ` +
							style +
							`">` +
							value +
							`</span>
					</div>
				`;
		  		
				return html;
			},
			// value=1 || 2 ->人物头像
			// value=3 建筑
			// value>3 隐患
			// 4 ->损坏
			// 5 ->人为
			// 6 ->非人为
			// 7 ->缺失
			// 8 ->危险品
			legend_people(img, value,name) {
				var style;
				var trian;
				var icon;
				if(value == 1) {
					style = "bg-gray-ccc";
					trian = "people-trianlixian";
				} else if(value == 2) {
					style = "bg-blue";
					trian = "people-trianzaixian";
				} else if(value == 3) {
					style = "bg-orange";
					trian = "people-orange";
					icon='map-build'
				} else if(value == 4) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-sunhuai'
				}else if(value == 5) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-renwei'
				}else if(value == 6) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-feirenwei'
				}else if(value == 7) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-queshi'
				}else if(value == 8) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-weixianpin'
				}else if(value == 9) {
					style = "bg-yellow";
					trian = "people-yellow";
					icon='map-yinhuan'
				}else if(value == 10) {
					style = "bg-red";
					trian = "people-red";
					icon='map-alarm'
				}
				var html =
								`
					<div class="legend-people ` +
								style +
								`" style="top:-60px;left:-25px">
						<div>
							<img src="` +
								img +
								`">
						</div>
						<span class="` +
								trian +
								`"></span>
								<section class="map-tootipbox map-tootipboxpeo"><p class="map-tootip">`+name+`</p></section>
					</div>
					`;
				if(value>2){
					html =
								`
					<div class="legend-people newpeople ` +
								style +
								`" style="top:-35px;left:-15px">
						<div>
							<span class="icon iconfont mapdander ` +
							icon +
							`"></span>
						</div>
						<span class="` +
								trian +
								`"></span>
						<section class="map-tootipbox map-tootipboxdan"><p class="map-tootip">`+name+`</p></section>
					</div>
					
					`;
				}
				return html;
			},
			legend_alarm(img, value, size,type) {
				var style_bg;
				var style_border;
				var style_shadow;
				var style_type;
				if(value == 2) {
					style_bg = "bg-blue";
					style_border = "border-blue";
					style_shadow = "shadow-blue";
				} else if(value == 3) {
					style_bg = "bg-yellow";
					style_border = "border-yellow";
					style_shadow = "shadow-yellow";
				} else if(value == 4) {
					style_bg = "bg-orange";
					style_border = "border-orange";
					style_shadow = "shadow-orange";
				} else {
					style_bg = "bg-red";
					style_border = "border-red";
					style_shadow = "shadow-red";
				}
				if(type==1){
					style_type='map-warning';
				}else if(type==2){
					style_type='map-fire';
				}else if(type==3){
					style_type='map-dangers';
				}
				var pointdiv = size / 2 - size;
				var html =
					`
					<div onmouseover="" class="legend-alarm" style="top:` +
							pointdiv +
							`px;left:` +
							pointdiv +
							`px;width:` +
							size +
							`px;height:` +
							size +
							`px">
						<span class="alarm-ani alarm-item ` +
							style_shadow +
							`"></span>
						<span class="alarm-ani alarm-item1 ` +
							style_shadow +
							`"></span>
						<span class="alarm-ani alarm-item2 ` +
							style_shadow +
							`"></span>
						<span class="alarm-ani alarm-item3 ` +
							style_shadow +
							`"></span>
						<span class="alarm-ani alarm-item4 ` +
							style_shadow +
							`"></span>
						<span class="icon iconfont alarm-min ` +
							style_bg +` `+style_type+
							`">
							</span>
						<span class="alarm-max ` +
							style_border +
							`"></span>
						<div class="map-tootipbox"><p class="map-tootip">`+img+`</p></div>
					</div>
				`;
				return html;
			},
			attribute(){
				// alert("marker的位置是");    
			},
			path_inspection() {
				var linearray = [
					[110.574494, 27.905342],
					[110.572109, 27.905414],
					[110.572028, 27.906698],
					[110.573398, 27.907987],
					[110.574992, 27.906056],
					[110.575001, 27.906248],
					[110.574907, 27.905837]
				];
				this.mp.addOverlay(this.addline(linearray, 1));

				var linearray = [
					[110.574494, 27.905342],
					[110.573744, 27.904256],
					[110.575325, 27.904145],
					[110.575738, 27.904847],
					[110.57528, 27.905226],
					[110.574907, 27.905837]
				];
				this.mp.addOverlay(this.addline(linearray, 2));
			},
    fn() {
      let map = this.getMapToDiv("mapindex");
	  this.aleamAndtroubleInfos = this.aleamAndtroubleInfo[0];
	  this.mp=map;
	  map.clearOverlays();
	  // 全部建筑
	  this.getbuildlist();
		// 全部单位
	  this.getunitlist();
      map.setCenter(
        new BMap.Point(
          this.aleamAndtroubleInfos.pointX,
          this.aleamAndtroubleInfos.pointY
        )
	  );
	  this.alarmsArray = [];
	  this.listenerScale=500;
	  if((typeof this.aleamAndtroubleInfos['countOfAlarm']) != 'undefined'){
			let element = this.aleamAndtroubleInfos;
			var name=this.toname(element);
			var alarmtype=this.toalarmtype(element);
			let alarms = this.addalarm(name, "12", this.listenerScale, [
				element.pointX,
				element.pointY
			],alarmtype);
			this.mp.addOverlay(alarms[0]);
			this.mp.addOverlay(alarms[1]);
			this.alarmsArray.push([alarms[0], element, alarms[1]]);
	  }else{
		  var element=this.aleamAndtroubleInfos;
		  	var a=element.pointX;
			var b=element.pointY;
			var name=this.toname(element)
			var trouble=this.addpeople('', "9", [a,b],name)
			this.mp.addOverlay(trouble);
	  }
	  let that=this;
	  map.addEventListener("zoomend", function(evt) {
			that.listenerScale = that.scale[that.zoom] / that.scale[map.getZoom()] * that.alarmsize;
			for(var i = 0; i < that.alarmsArray.length; i++) {
				map.removeOverlay(that.alarmsArray[i][0]);
				map.removeOverlay(that.alarmsArray[i][2]);
				var name=that.toname(that.alarmsArray[i][1]);
				var alarmtype=that.toalarmtype(that.alarmsArray[i][1]);
				that.alarmsArray[i][0] = that.addalarm(
					name,
					"12",
					that.listenerScale, [that.alarmsArray[i][1].pointX, that.alarmsArray[i][1].pointY],
					alarmtype
				)[0];
				map.addOverlay(that.alarmsArray[i][0]);
				map.addOverlay(that.alarmsArray[i][2]);
			}
		});
      
    }
  },
  computed: mapState(["aleamAndtroubleInfo"]),
  watch: {
    aleamAndtroubleInfo() {
	  this.fn();
    }
  },
  mounted() {
	this.fn();
	
	
  }
};
</script>

<style scoped>
.xzmap {
  width: 100% !important;
  height: 100% !important;
  position: absolute !important;
  background-color: rgb(31, 31, 31) !important;
  /**bottom: 1px;*/
}
</style>
