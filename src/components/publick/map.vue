<template>
	<div id="allmap" class="xzmap"></div>
</template>

<script>
	import Vue from 'vue'
	import ElementUI from 'element-ui';
	Vue.use(ElementUI);

	import { mapState } from "vuex";
	export default {
		data() {
			return {
				getunitid: null,
				queryUnit: {
					unitId: null
				},
				maxroom: 19,
				minroom: 1,
				zoom: 16,
				point: [108.335801,22.733686],
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
				alarmMinicon:[]
			};
		},
		computed: mapState([
			"queryUnitBuildList",
			"queryInspectionLineList",
			"indexToAlarmTroubel",
			"route_path",
			"unitid",
			"toMapPatterns",
			"toMapPatternsDanger"
		]),
		watch: {
			toMapPatterns(){
				this.mp.clearOverlays();
				// 全部建筑
				this.getbuildlist();
				// 全部单位
				this.getunitlist();
				this.path_callpolice(this.toMapPatterns[0]);
			},
			toMapPatternsDanger(){
				this.mp.clearOverlays();
				// 全部建筑
				this.getbuildlist();
				// 全部单位
				this.getunitlist();
				this.path_danger(this.toMapPatternsDanger[0]);
			},
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
				});
			},
			
			// type:
			// =1 正常请求画图
			// =2 只请求报警和火情
			// =3 确认报警
			// =4 关闭火情
			// 实时报警
			indexToAlarmTroubel() {
				let type = this.indexToAlarmTroubel[1];
				if(type == 1) {
					for(var i = 0; i < this.alarmsArray.length; i++) {
						this.mp.removeOverlay(this.alarmsArray[i][0]);
						this.mp.removeOverlay(this.alarmsArray[i][2]);
					}
					this.alarmsArray = [];
					this.indexToAlarmTroubel[0].alarms.forEach(element => {
						var name=this.toname(element);
						var alarmtype=this.toalarmtype(element);
						let alarms = this.addalarm(name, "12", this.listenerScale, [
							element.pointX,
							element.pointY
						],alarmtype);
						this.mp.addOverlay(alarms[0]);
						this.mp.addOverlay(alarms[1]);
						this.alarmsArray.push([alarms[0], element, alarms[1]]);

						var alarmMin=
						this.addpeople('', "66", [
							element.pointX,
							element.pointY
						],name)
						this.mp.addOverlay(alarmMin);
						this.alarmMinicon.push(alarmMin)
					});

					this.indexToAlarmTroubel[0].troubles.forEach(element => {
						var a=element.pointX;
						var b=element.pointY;
						var name=this.toname(element)
						var trouble=this.addpeople('', "9", [a,b],name)
						this.mp.addOverlay(trouble);
						this.troubleArray.push(trouble);
					});


				} else if(type == 2) {
					let element = this.indexToAlarmTroubel[0].alarms[0];
					var name=this.toname(element);
					var alarmtype=this.toalarmtype(element);
					let alarms = this.addalarm(name, "12", this.listenerScale, [
						element.pointX,
						element.pointY
					],alarmtype);
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

					for(var i = 0; i < this.alarmMinicon.length; i++) {
						this.mp.removeOverlay(this.alarmsArray[i]);
					}
					this.alarmMinicon=[];

					this.indexToAlarmTroubel[0].alarms.forEach(element => {
						var name=this.toname(element);
						var alarmtype=this.toalarmtype(element);
						let alarms = this.addalarm(name, "12", this.listenerScale, [
							element.pointX,
							element.pointY
						],alarmtype);
						this.mp.addOverlay(alarms[0]);
						this.mp.addOverlay(alarms[1]);
						this.alarmsArray.push([alarms[0], element, alarms[1]]);

						var alarmMin=
						this.addpeople('', "66", [
							element.pointX,
							element.pointY
						],name)
						this.mp.addOverlay(alarmMin);
						this.alarmMinicon.push(alarmMin)
					});
				} else if(type == 9) {
					let element = this.indexToAlarmTroubel[0].troubles[0];
					var a=element.pointX;
					var b=element.pointY;
					var trouble=this.addpeople('', "9", [a,b],element.dangerName)
					this.mp.addOverlay(trouble);
					this.troubleArray.push(trouble);
					this.mp.setCenter(new BMap.Point(element.pointX, element.pointY));
				} else if(type == 10) {
					for(var i = 0; i < this.troubleArray.length; i++) {
						this.mp.removeOverlay(this.troubleArray[i]);
						this.mp.removeOverlay(this.troubleArray[i]);
					}
					this.troubleArray = [];
					this.indexToAlarmTroubel[0].troubles.forEach(element => {
						var a=element.pointX;
						var b=element.pointY;
						var name=this.toname(element)
						var trouble=this.addpeople('', "9", [a,b],name)
						this.mp.addOverlay(trouble);
						this.troubleArray.push(trouble);
					});
					// 666为不加载任何元素
				} else if(type == 666) {

				}
			},

			route_path() {
				this.routepath = this.route_path;
				this.mp.clearOverlays();
				// 全部建筑
				this.getbuildlist();
				// 全部单位
				this.getunitlist();
				if(this.routepath == "/idnex") {
				} else if(this.routepath == "/inspection") {
					this.path_inspection();
				} else if(this.routepath == "/buliding") {
					this.path_buliding();
				}
				else if(this.routepath == "/callpolice") {
					this.path_callpolice(1);
				}
				else if(this.routepath == "/danger") {
					this.path_danger(1);
				}
				else if(this.routepath == "/information") {
					this.path_information();
				}
				
			},

			unitid() {
				this.getunitidbyheater(this.unitid);
			},
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
					$('[data-toggle="tooltip"]').tooltip()
					$('[data-toggle="tooltip"]').css("white-space","nowrap");
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
			// 9 ->隐患统一图标
			// 10 ->报警统一图标
			// 11 ->设备统一图标
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
					style = "bg-blue";
					trian = "people-trianzaixian";
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
				}else if(value == 11) {
					style = "bg-blue";
					trian = "people-trianzaixian";
					icon='map-device'
				}
				var html =
								`
					<div data-toggle="tooltip" data-placement="top" title="`+name+`" class="legend-people ` +
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
				if(value>2){
					html =
								`
						<div data-toggle="tooltip" data-placement="top" title="`+name+`" class="legend-people newpeople ` +
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
						</div>
					`;
				}

				if(value==66){
					html =
								`
						<div data-toggle="tooltip" data-placement="top" title="`+name+`" class="legend-people newpeople newpeoplealarm" style="top:-15px;left:-15px">
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
						
						<span class="alarm-max ` +
							style_border +
							`"></span>
						<span class="icon iconfont alarm-min ` +
						style_bg +` `+style_type+
						`">
						</span>
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
			path_buliding() {
				
			},
			path_callpolice(type){
				if(type==1){
					this.$fetch("/api/alarm/getAlarmList")
					.then(response => {
						if(response) {
							var total=response.data.pager.totalRow
							this.$fetch("/api/alarm/getAlarmList",{'currentPage':1,'pageSize':total})
							.then(response => {
								if(response) {
									var getList=response.data.pager.result;
									getList.forEach(element => {
										var a=element.pointX;
										var b=element.pointY;
										var name=this.toname(element)
										this.mp.addOverlay(
											this.addpeople('', "10", [a,b],name)
										);
										
									});
								}
							})
						}
					})
				}else if(type==2){
					this.$fetch("/api/alarm/queryALarmHeatMap?count=1000")
					.then(response =>{
						if(response){
						let points = response.data.points;
						let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":50});
						this.mp.addOverlay(heatmapOverlay);
						heatmapOverlay.setDataSet({data:points,max:100});
						heatmapOverlay.show();
						function setGradient(){
							var gradient = {};
							var colors = document.querySelectorAll("input[type='color']");
							colors = [].slice.call(colors,0);
							colors.forEach(function(ele){
							gradient[ele.getAttribute("data-key")] = ele.value;
							});
							heatmapOverlay.setOptions({"gradient":gradient});
						}
						}
					})
				}
			},
			path_danger(type){
				if(type==1){
					this.$fetch("/api/trouble/troubleList")
					.then(response => {
						if(response) {
							var total=response.data.pager.totalRow
							this.$fetch("/api/trouble/troubleList",{'currentPage':1,'pageSize':total})
							.then(response => {
								if(response) {
									var getList=response.data.pager.result;
									getList.forEach(element => {
										var a=element.pointX;
										var b=element.pointY;
										var name=this.toname(element)
										this.mp.addOverlay(
											this.addpeople('', "5", [a,b],name)
										);
									});
								}
							})
						}
					})
				}else if(type==2){
					this.$fetch("/api/trouble/queryTroubleHeatMap?count=1000")
					.then(response =>{
						if(response){
						let points = response.data.points;
						let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":50});
						this.mp.addOverlay(heatmapOverlay);
						heatmapOverlay.setDataSet({data:points,max:100});
						heatmapOverlay.show();
						function setGradient(){
							var gradient = {};
							var colors = document.querySelectorAll("input[type='color']");
							colors = [].slice.call(colors,0);
							colors.forEach(function(ele){
							gradient[ele.getAttribute("data-key")] = ele.value;
							});
							heatmapOverlay.setOptions({"gradient":gradient});
						}
						}
					})
				}
				
			},
			path_information(){
				this.$fetch("/api/device/deviceList")
				.then(response => {
					if(response) {
						var total=response.data.pager.totalRow
						this.$fetch("/api/device/deviceList",{'currentPage':1,'pageSize':total})
						.then(response => {
							if(response) {
								var getList=response.data.pager.result;
								getList.forEach(element => {
									var a=element.pointX;
									var b=element.pointY;
									var name=this.toname(element)
									this.mp.addOverlay(
										this.addpeople('', "11", [a,b],name)
									);
								});
							}
						})
					}
				})
			},
			showInfo(e){
				// alert(e.point.lng + ", " + e.point.lat);
			}
		},
		mounted() {
			var map = this.getMapToDiv("allmap");
			this.mp = map;
			var that = this;
			// 获取单位id定位地图
			this.getunitidbyheater(this.unitid);
			// 全部建筑
			this.getbuildlist();
			// 全部单位
			this.getunitlist();
			
			if(sessionStorage.unitpointX !=undefined){
				this.mp.setCenter(new BMap.Point(sessionStorage.unitpointX, sessionStorage.unitpointY));
			}

			map.addEventListener("zoomend", function(evt) {
				that.listenerScale =
					that.scale[that.zoom] / that.scale[map.getZoom()] * that.alarmsize;
				if(that.routepath == "/index") {
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
	}
</style>
