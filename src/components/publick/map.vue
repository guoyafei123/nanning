<template>
	<div id="allmap" class="xzmap"></div>
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
				alarmsize: 500
			};
		},
		computed: mapState([
			"queryUnitBuildList",
			"queryInspectionLineList",
			"indexToAlarmTroubel",
			"route_path",
			"unitid"
		]),
		watch: {
			// 所有巡检单位
			queryUnitBuildList() {
				this.queryUnitBuildList.unitBuildList.forEach(element => {
					this.mp.addOverlay(
						this.addlandmark(element.name, element.status, [
							element.pointX,
							element.pointY
						])
					);
				});
			},

			// 正在巡检的路线
			queryInspectionLineList() {
				this.queryInspectionLineList.inspectionLineList.forEach(element => {
					if(element.inspectionNodeUserList != 0) {
						let array = [];
						element.inspectionNodeUserList.forEach(item => {
							if(
								item.xRate != null ||
								item.xRate != "" ||
								item.xRate != 0 ||
								item.xRate != 1
							) {
								this.mp.addOverlay(
									this.addlandmark(item.buildingName, item.status, [
										item.xRate,
										item.yRate
									])
								);
								array.push([item.xRate, item.yRate]);
								this.mp.addOverlay(this.addline(array));
							}
						});
					}
					// this.mp.addOverlay(this.addlandmark(element.name,element.status,[element.pointX,element.pointY]))
					console.log(element.buildingName);
				});
			},

			// type:
			// =1 正常请求画图
			// =2 只请求报警和火情
			// =3 确认报警
			// =4 关闭火情
			// 实时报警
			indexToAlarmTroubel() {
				// this.alarmsArray=[];
				// this.path_index();
				// if(this.routepath=='/idnex' || this.routepath=='/callpolice'){
				console.log(this.indexToAlarmTroubel[1]);
				let type = this.indexToAlarmTroubel[1];
				if(type == 1) {
					this.alarmsArray = [];
					this.indexToAlarmTroubel[0].alarms.forEach(element => {
						let alarms = this.addalarm("银湖海岸城1", "12", this.listenerScale, [
							element.pointX,
							element.pointY
						]);
						this.mp.addOverlay(alarms[0]);
						this.mp.addOverlay(alarms[1]);
						this.alarmsArray.push([alarms[0], element, alarms[1]]);
					});
				} else if(type == 2) {
					let element = this.indexToAlarmTroubel[0].alarms[0];
					let alarms = this.addalarm("银湖海岸城1", "12", this.listenerScale, [
						element.pointX,
						element.pointY
					]);
					this.mp.addOverlay(alarms[0]);
					this.mp.addOverlay(alarms[1]);
					this.alarmsArray.push([alarms[0], element, alarms[1]]);
					this.mp.setCenter(new BMap.Point(element.pointX, element.pointY));
				} else if(type == 3) {
					let element = this.indexToAlarmTroubel[0].alarms[0];
					this.mp.setCenter(new BMap.Point(element.pointX, element.pointY));
				} else if(type == 20) {
					let element = this.indexToAlarmTroubel[0].alarms[0];
					this.mp.setCenter(new BMap.Point(element.pointX, element.pointY));
				} else if(type == 4) {
					for(var i = 0; i < this.alarmsArray.length; i++) {
						this.mp.removeOverlay(this.alarmsArray[i][0]);
						this.mp.removeOverlay(this.alarmsArray[i][2]);
					}
					this.alarmsArray = [];
					this.indexToAlarmTroubel[0].alarms.forEach(element => {
						let alarms = this.addalarm("银湖海岸城1", "12", this.listenerScale, [
							element.pointX,
							element.pointY
						]);
						this.mp.addOverlay(alarms[0]);
						this.mp.addOverlay(alarms[1]);
						this.alarmsArray.push([alarms[0], element, alarms[1]]);
					});
				} else if(type == 9) {
					let element = this.indexToAlarmTroubel[0].troubles[0];
					let alarms = this.addalarm("银湖海岸城1", "5", this.listenerScale, [
						element.pointX,
						element.pointY
					]);
					this.mp.addOverlay(alarms[0]);
					this.mp.addOverlay(alarms[1]);
					this.troubleArray.push([alarms[0], element, alarms[1]]);
					this.mp.setCenter(new BMap.Point(element.pointX, element.pointY));
				} else if(type == 10) {
					for(var i = 0; i < this.troubleArray.length; i++) {
						this.mp.removeOverlay(this.troubleArray[i][0]);
						this.mp.removeOverlay(this.troubleArray[i][2]);
					}
					this.troubleArray = [];
					this.indexToAlarmTroubel[0].alarms.forEach(element => {
						let alarms = this.addalarm("银湖海岸城1", "6", this.listenerScale, [
							element.pointX,
							element.pointY
						]);
						this.mp.addOverlay(alarms[0]);
						this.mp.addOverlay(alarms[1]);
						this.troubleArray.push([alarms[0], element, alarms[1]]);
					});
					// 666为不加载任何元素
				} else if(type == 666) {

				}
			},

			route_path() {
				this.routepath = this.route_path;
				this.mp.clearOverlays();
				this.path_index();
				if(this.routepath == "/idnex") {
					// this.path_index();
				} else if(this.routepath == "/inspection") {
					this.path_inspection();
				} else if(this.routepath == "/buliding") {
					// this.path_buliding();
				}
			},

			unitid() {
				// console.log(this.queryAlarmData_parmar.unitId)
				// http://api.nanninglq.51play.com/unit/queryById?unitId=4
				// this.getunitid=this.unitid;
				this.queryUnit.unitId = this.unitid;
				this.$fetch("api/unit/queryById", this.queryUnit)
					.then(response => {
						if(response) {
							if(response.data.unit.pointX != 0 && response.data.unit.pointY != 0) {
								this.mp.setCenter(new BMap.Point(response.data.unit.pointX, response.data.unit.pointY));
							}
						}
					})
					.then(err => {
						console.log(err);
					});
			}
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

			addlandmark(name, value, p) {
				let that = this;
				// let map=this.getMapToDiv('allmap');
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
			addpeople(img, value, p) {
				let that = this;
				// let map=this.getMapToDiv('allmap');
				function people(point, img, value) {
					this._point = point;
					this._img = img;
					this._value = value;
				}
				people.prototype = new BMap.Overlay();
				people.prototype.initialize = function(map) {
					this._map = map;
					var div = (this._div = document.createElement("div"));
					$(div).addClass("landmark_marker");
					div.style.position = "absolute";

					$(div).append(that.legend_people(this._img, this._value));
					map.getPanes().labelPane.appendChild(div);
					return div;
				};
				people.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				};
				var marker = new people(new BMap.Point(p[0], p[1]), img, value);
				return marker;
			},
			addalarm(img, value, size, p) {
				let that = this;

				// let map=this.getMapToDiv('allmap');
				function alarm(point, img, value, size) {
					this._point = point;
					this._img = img;
					this._value = value;
					this._size = size;
				}
				alarm.prototype = new BMap.Overlay();
				alarm.prototype.initialize = function(map) {
					this._map = map;
					var div = (this._div = document.createElement("div"));
					$(div).addClass("landmark_marker");
					div.style.position = "absolute";
					$(div).append(that.legend_alarm(this._img, this._value, this._size));

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
				var marker = new alarm(new BMap.Point(p[0], p[1]), img, value, l);
				var circle = new BMap.Circle(new BMap.Point(p[0], p[1]), 500, {});
				var fillcolor = "#bad616";
				if(value <= 3) {
					fillcolor = "#bad616";
				} else if(value <= 6) {
					fillcolor = "#c69e00";
				} else if(value <= 9) {
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
			legend_people(img, value) {
				var style;
				var trian;
				if(value <= 1) {
					style = "bg-gray-ccc";
					trian = "people-trianlixian";
				} else if(value <= 2) {
					style = "bg-blue";
					trian = "people-trianzaixian";
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
          </div>
          `;
				return html;
			},
			legend_alarm(img, value, size) {
				var style_bg;
				var style_border;
				var style_shadow;
				if(value <= 3) {
					style_bg = "bg-blue";
					style_border = "border-blue";
					style_shadow = "shadow-blue";
				} else if(value <= 6) {
					style_bg = "bg-yellow";
					style_border = "border-yellow";
					style_shadow = "shadow-yellow";
				} else if(value <= 9) {
					style_bg = "bg-orange";
					style_border = "border-orange";
					style_shadow = "shadow-orange";
				} else {
					style_bg = "bg-red";
					style_border = "border-red";
					style_shadow = "shadow-red";
				}
				var pointdiv = size / 2 - size;
				var html =
					`
            <div class="legend-alarm" style="top:` +
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
                <span class="alarm-min ` +
					style_bg +
					`"></span>
                <span class="alarm-max ` +
					style_border +
					`"></span>
            </div>
          `;
				return html;
			},
			attribute(){
				alert("marker的位置是");    
			},
			path_index() {
				var  markers=this.addlandmark("红花园工业园1号楼", "3", [110.574494, 27.905342])
				this.mp.addOverlay(
					markers
				);
				markers.addEventListener("click",function(){
					alert(1);
				});

				this.mp.addOverlay(
					this.addlandmark("红花园工业园2号楼", "3", [110.574907, 27.905837])
				);
				this.mp.addOverlay(
					this.addlandmark("五里排", "1", [110.56976, 27.909667])
				);
				this.mp.addOverlay(
					this.addlandmark("林翠山公园", "1", [110.584321, 27.910753])
				);
				this.mp.addOverlay(
					this.addlandmark("蒋家冲", "1", [110.568709, 27.900633])
				);
				this.mp.addOverlay(
					this.addlandmark("溆水外滩", "1", [110.58734, 27.90199])
				);
				this.mp.addOverlay(
					this.addlandmark("罗家湾", "1", [110.579686, 27.91179])
				);
				this.mp.addOverlay(
					this.addlandmark("三坝塘", "1", [110.571494, 27.913881])
				);
				this.mp.addOverlay(
					this.addlandmark("红花园村", "1", [110.562726, 27.897616])
				);
			},
			path_inspection() {
				// this.mp.addOverlay(this.addlandmark("红花园工业园B区",'3',[110.573398,27.904424]))
				// this.mp.addOverlay(this.addlandmark("红花园工业园A区",'6',[110.57205,27.905429]))
				// this.mp.addOverlay(this.addlandmark("红花园工业园C区",'9',[110.575571,27.904967]))
				// this.mp.addOverlay(this.addlandmark("红花园工业园D区",'12',[110.575158,27.906978]))
				// this.mp.addOverlay(this.addlandmark("红花园工业园E区",'12',[110.572948,27.908334]))
				// this.mp.addOverlay(this.addlandmark("红花园工业园物业部",'1',[110.571565,27.907441]))

				this.mp.addOverlay(
					this.addlandmark("红花园工业园1号楼", "3", [110.574494, 27.905342])
				);
				this.mp.addOverlay(
					this.addlandmark("红花园工业园2号楼", "3", [110.574907, 27.905837])
				);
				this.mp.addOverlay(
					this.addlandmark("五里排", "1", [110.56976, 27.909667])
				);
				this.mp.addOverlay(
					this.addlandmark("林翠山公园", "1", [110.584321, 27.910753])
				);
				this.mp.addOverlay(
					this.addlandmark("蒋家冲", "1", [110.568709, 27.900633])
				);
				this.mp.addOverlay(
					this.addlandmark("溆水外滩", "1", [110.58734, 27.90199])
				);
				this.mp.addOverlay(
					this.addlandmark("罗家湾", "1", [110.579686, 27.91179])
				);
				this.mp.addOverlay(
					this.addlandmark("三坝塘", "1", [110.571494, 27.913881])
				);
				this.mp.addOverlay(
					this.addlandmark("红花园村", "1", [110.562726, 27.897616])
				);

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

				// var linearray = [
				//   [110.574494,27.905342],
				//   [110.573614,27.904871],
				//   [110.572751,27.905845],
				//   [110.573582,27.906471],
				//   [110.57431,27.906276],
				//   [110.574907,27.905837]
				// ];
				// this.mp.addOverlay(this.addline(linearray,20));

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
			path_buliding() {
				this.mp.addOverlay(
					this.addlandmark("红花园工业园1号楼", "3", [110.574494, 27.905342])
				);
				this.mp.addOverlay(
					this.addlandmark("红花园工业园2号楼", "6", [110.574907, 27.905837])
				);
				this.mp.addOverlay(
					this.addlandmark("五里排", "1", [110.56976, 27.909667])
				);
				this.mp.addOverlay(
					this.addlandmark("林翠山公园", "1", [110.584321, 27.910753])
				);
				this.mp.addOverlay(
					this.addlandmark("蒋家冲", "1", [110.568709, 27.900633])
				);
				this.mp.addOverlay(
					this.addlandmark("溆水外滩", "1", [110.58734, 27.90199])
				);
				this.mp.addOverlay(
					this.addlandmark("罗家湾", "1", [110.579686, 27.91179])
				);
				this.mp.addOverlay(
					this.addlandmark("三坝塘", "1", [110.571494, 27.913881])
				);
				this.mp.addOverlay(
					this.addlandmark("红花园村", "1", [110.562726, 27.897616])
				);
			}
		},
		mounted() {
			var map = this.getMapToDiv("allmap");
			this.mp = map;
			var that = this;
			// var
			this.path_index();

			map.addEventListener("zoomend", function(evt) {
				that.listenerScale =
					that.scale[that.zoom] / that.scale[map.getZoom()] * that.alarmsize;
				// alert(that.routepath)
				console.log(that.alarmsArray);
				if(that.routepath == "/index") {
					for(var i = 0; i < that.alarmsArray.length; i++) {
						map.removeOverlay(that.alarmsArray[i][0]);
						map.removeOverlay(that.alarmsArray[i][2]);
						that.alarmsArray[i][0] = that.addalarm(
							"银湖海岸城1",
							"12",
							that.listenerScale, [that.alarmsArray[i][1].pointX, that.alarmsArray[i][1].pointY]
						)[0];
						// console.log(newalarm);
						map.addOverlay(that.alarmsArray[i][0]);
						map.addOverlay(that.alarmsArray[i][2]);
					}

					for(var i = 0; i < that.troubleArray.length; i++) {
						map.removeOverlay(that.troubleArray[i][0]);
						map.removeOverlay(that.troubleArray[i][2]);
						that.troubleArray[i][0] = that.addalarm(
							"银湖海岸城1",
							"5",
							that.listenerScale, [that.troubleArray[i][1].pointX, that.troubleArray[i][1].pointY]
						)[0];
						// console.log(newalarm);
						map.addOverlay(that.troubleArray[i][0]);
						map.addOverlay(that.troubleArray[i][2]);
					}
				}
			});
			if(typeof module === "object") {
				window.jQuery = window.$ = module.exports;
			}
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